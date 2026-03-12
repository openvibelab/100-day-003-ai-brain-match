<template>
  <div class="min-h-dvh flex flex-col items-center px-5 py-12">
    <div class="w-full max-w-lg lg:max-w-xl">

      <!-- ===== HERO: Matched model ===== -->
      <div class="text-center mb-12 animate-float-in">
        <div class="relative inline-flex items-center justify-center mb-5">
          <span class="relative text-7xl lg:text-8xl select-none">{{ matchedModel.emoji }}</span>
        </div>

        <p class="text-sm lg:text-base text-ink-secondary mb-3">
          {{ matchedModel.reaction[locale] }}
        </p>
        <h1 class="heading-text text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
            :style="{ color: matchedModel.color }">
          {{ matchedModel.name }}
        </h1>
        <p class="text-sm lg:text-base text-ink-secondary leading-relaxed max-w-xs lg:max-w-sm mx-auto">
          {{ matchedModel.description[locale] }}
        </p>
      </div>

      <!-- ===== SCORE CARD ===== -->
      <div class="quiz-card rounded-xl p-6 lg:p-8 mb-4 animate-float-in-1">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] lg:text-xs uppercase tracking-[0.15em] text-ink-muted">{{ t('result.score') }}</span>
          <span v-if="isNewBest"
                class="text-[10px] px-2.5 py-1 rounded-full bg-pop-yellow/10 text-pop-yellow font-semibold animate-pop-in">
            &#9733; {{ t('result.newBest') }}
          </span>
        </div>

        <!-- Big score -->
        <div class="text-center py-6">
          <span class="heading-text text-7xl lg:text-8xl tabular-nums animate-score"
                :style="{ color: matchedModel.color }">
            {{ animatedScore }}
          </span>
          <span class="text-lg lg:text-xl text-ink-muted ml-0.5">/100</span>
        </div>

        <!-- Progress bar -->
        <div class="relative mb-5">
          <div class="w-full h-[6px] rounded-full bg-border overflow-hidden">
            <div class="h-full rounded-full progress-fill"
                 :style="{
                   width: totalScore + '%',
                   background: matchedModel.color
                 }" />
          </div>
          <div class="absolute top-[-3px] w-3 h-3 rounded-full border-2 border-card transition-all duration-[1500ms]"
               :style="{ left: `calc(${totalScore}% - 6px)`, background: matchedModel.color }" />
        </div>

        <!-- Model tier strip -->
        <div class="flex rounded-lg overflow-hidden h-7 mb-4">
          <div v-for="model in aiModels" :key="model.id"
               class="flex items-center justify-center transition-all duration-500 text-[9px]"
               :style="{
                 flex: model.scoreRange[1] - model.scoreRange[0],
                 background: model.id === matchedModel.id ? model.color + '15' : 'rgba(42,33,24,0.03)',
                 borderRight: '1px solid rgba(42,33,24,0.06)'
               }">
            <span :style="{ opacity: model.id === matchedModel.id ? 1 : 0.3 }">
              {{ model.emoji }}
            </span>
          </div>
        </div>

        <!-- Stats -->
        <div class="flex justify-center gap-5 text-[11px] lg:text-xs text-ink-muted">
          <span class="tabular-nums">{{ t('result.attempt') }} #{{ attempt }}</span>
          <span class="text-border">|</span>
          <span class="tabular-nums">{{ correctCount }}/{{ answers.length }} {{ t('result.correct') }}</span>
          <template v-if="bestScore > 0">
            <span class="text-border">|</span>
            <span class="tabular-nums">{{ t('result.best') }}: {{ bestScore }}</span>
          </template>
        </div>
      </div>

      <!-- ===== SHARE ===== -->
      <div class="quiz-card rounded-xl p-6 lg:p-8 mb-4 animate-float-in-2">
        <p class="text-xs lg:text-sm text-ink-secondary text-center mb-4">
          {{ locale === 'zh'
            ? `我居然是${matchedModel.name}！你敢来比吗 → 转发给最聪明的那个朋友`
            : `I matched ${matchedModel.name}! Think you can beat me?` }}
        </p>
        <div class="flex gap-2.5">
          <button @click="generateShareCard"
                  class="flex-1 px-4 py-3.5 lg:py-4 rounded-xl text-xs lg:text-sm font-semibold
                         bg-pop-blue/5 border-2 border-pop-blue/20 hover:border-pop-blue/40
                         transition-all duration-300 cursor-pointer active:scale-[0.97]
                         text-pop-blue">
            🖼️ {{ t('result.shareCard') }}
          </button>
          <button @click="shareResult"
                  class="flex-1 px-4 py-3.5 lg:py-4 rounded-xl text-xs lg:text-sm font-semibold
                         bg-sand border-2 border-border hover:border-ink-muted
                         transition-all duration-300 cursor-pointer active:scale-[0.97]
                         text-ink-secondary">
            📋 {{ t('result.share') }}
          </button>
        </div>
        <Transition name="toast">
          <p v-if="showCopied" class="text-center text-[11px] text-pop-green mt-3">
            ✓ {{ copiedMsg }}
          </p>
        </Transition>
      </div>

      <!-- ===== RADAR CHART ===== -->
      <div class="quiz-card rounded-xl p-6 lg:p-8 mb-4 animate-float-in-3">
        <h3 class="text-[10px] lg:text-xs uppercase tracking-[0.15em] text-ink-muted mb-5 text-center">
          {{ t('result.breakdown') }}
        </h3>
        <RadarChart
          :categories="radarCategories"
          :scores="normalizedCatScores"
          :labels="radarLabels"
          :accentColor="matchedModel.color"
        />
        <!-- Category pills -->
        <div class="flex flex-wrap justify-center gap-1.5 mt-5">
          <span v-for="cat in radarCategories" :key="cat"
                class="px-2 py-0.5 rounded-md text-[11px] font-semibold tabular-nums"
                :style="{ background: catColors[cat] + '0c', color: catColors[cat] }">
            {{ t('cat.' + cat) }} {{ Math.round((normalizedCatScores[cat] || 0) * 100) }}%
          </span>
        </div>
      </div>

      <!-- ===== THINKING STYLE ===== -->
      <div class="quiz-card rounded-xl p-6 lg:p-8 mb-4 animate-float-in-4">
        <h3 class="text-[10px] lg:text-xs uppercase tracking-[0.15em] text-ink-muted mb-5 text-center">
          {{ t('result.style') }}
        </h3>

        <!-- Primary style -->
        <div class="flex items-center gap-4 mb-6 p-4 rounded-xl"
             :style="{ background: thinkingStyle.color + '08', border: '2px solid ' + thinkingStyle.color + '18' }">
          <span class="text-3xl lg:text-4xl shrink-0">{{ thinkingStyle.icon }}</span>
          <div>
            <div class="heading-text text-sm lg:text-base" :style="{ color: thinkingStyle.color }">
              {{ thinkingStyle.name[locale] }}
            </div>
            <div class="text-[11px] lg:text-xs text-ink-secondary leading-relaxed mt-1">
              {{ thinkingStyle.description[locale] }}
            </div>
          </div>
        </div>

        <!-- Style bars -->
        <div class="space-y-2.5">
          <div v-for="style in allStyles" :key="style.id" class="flex items-center gap-2.5">
            <span class="text-sm w-5 text-center">{{ style.icon }}</span>
            <span class="text-[10px] text-ink-muted w-14 shrink-0 truncate">{{ style.name[locale] }}</span>
            <div class="flex-1 h-[6px] rounded-full bg-border overflow-hidden">
              <div class="h-full rounded-full transition-all duration-1000"
                   :style="{ width: style.pct + '%', background: style.color }" />
            </div>
            <span class="text-[10px] text-ink-muted w-7 text-right tabular-nums">{{ style.pct }}%</span>
          </div>
        </div>
      </div>

      <!-- ===== RETRY OPTIONS ===== -->
      <div class="space-y-2.5 mb-8 animate-float-in-5">
        <button @click="$emit('retry')"
                class="w-full px-5 py-4 lg:py-5 rounded-xl text-sm lg:text-base text-center
                       quiz-card hover:border-pop-blue/30
                       transition-all duration-300 cursor-pointer active:scale-[0.98]">
          <span class="text-ink font-semibold">🎲 {{ t('result.retry') }}</span>
          <span class="block text-[10px] text-ink-muted mt-1">{{ t('result.retryHint') }}</span>
        </button>
        <button @click="$emit('retryDifferent')"
                class="w-full px-5 py-3.5 lg:py-4 rounded-xl text-sm lg:text-base text-center
                       quiz-card hover:border-pop-orange/30
                       transition-all duration-300 cursor-pointer active:scale-[0.98]">
          <span class="text-pop-orange font-semibold">😤 {{ t('result.retryExcuse') }}</span>
        </button>
      </div>

      <!-- Fun fact -->
      <div class="text-center mb-12 px-4">
        <p class="text-[11px] text-ink-muted italic leading-relaxed">
          💡 {{ t('result.funFact') }}: {{ matchedModel.funFact[locale] }}
        </p>
      </div>

      <!-- Footer -->
      <div class="text-center text-[11px] text-ink-muted pb-8 tracking-wider">
        {{ t('footer.day') }}
        <span class="mx-1.5 text-border">/</span>
        <a href="https://github.com/openvibelab" target="_blank"
           class="text-pop-blue/60 hover:text-pop-blue transition-colors duration-300">
          OpenVibeLab
        </a>
      </div>
    </div>

    <!-- Hidden share card template (for html2canvas) -->
    <div ref="shareCardRef" class="share-card" v-show="renderingCard"
         style="position: fixed; left: -9999px; top: 0; width: 540px; height: 540px;">
      <div style="width: 540px; height: 540px; background: linear-gradient(135deg, #fefaf5 0%, #f5ede0 100%);
                  display: flex; flex-direction: column; align-items: center; justify-content: center;
                  font-family: 'Space Grotesk', system-ui, sans-serif; color: #2a2118; padding: 40px; box-sizing: border-box;">
        <div style="font-size: 64px; margin-bottom: 12px;">{{ matchedModel.emoji }}</div>
        <div style="font-size: 14px; color: #8a7e6f; margin-bottom: 8px;">
          {{ matchedModel.reaction[locale] }}
        </div>
        <div :style="{ fontSize: '36px', fontWeight: 900, color: matchedModel.color, marginBottom: '16px' }">
          {{ matchedModel.name }}
        </div>
        <div style="font-size: 56px; font-weight: 900; margin-bottom: 4px;">
          <span :style="{ color: matchedModel.color }">{{ totalScore }}</span>
          <span style="font-size: 20px; color: #b5a998;">/100</span>
        </div>
        <div style="font-size: 12px; color: #8a7e6f; margin-top: 8px;">
          {{ thinkingStyle.icon }} {{ thinkingStyle.name[locale] }}
          · {{ correctCount }}/{{ answers.length }} {{ locale === 'zh' ? '答对' : 'correct' }}
        </div>
        <div style="margin-top: auto; display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 20px;">🧠</span>
          <span style="font-size: 13px; color: #8a7e6f; letter-spacing: 1px;">
            brain.openvibelab.com
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { t, locale } from '../lib/i18n.js'
import { aiModels, getModelByScore, getThinkingStyle, thinkingStyles } from '../data/aiModels.js'
import { categories as allCategories } from '../data/questions.js'
import RadarChart from './RadarChart.vue'

const props = defineProps({
  answers: Array,
  attempt: { type: Number, default: 1 },
  bestScore: { type: Number, default: 0 },
  lastQuestionIds: { type: Array, default: () => [] }
})

defineEmits(['retry', 'retryDifferent'])
const showCopied = ref(false)
const copiedMsg = ref('')
const animatedScore = ref(0)
const shareCardRef = ref(null)
const renderingCard = ref(false)

const catColors = {
  science: '#3a7bd5', history: '#7c5cbf', logic: '#4aaf51',
  coding: '#e08a3a', language: '#e8413c', general: '#3a7bd5', creativity: '#f5c542'
}

const totalScore = computed(() => {
  if (!props.answers.length) return 0
  let earned = 0, max = 0
  for (const a of props.answers) {
    const pts = a.difficulty * 2
    max += pts
    if (a.correct) earned += pts
  }
  return Math.round((earned / max) * 100)
})

const correctCount = computed(() => props.answers.filter(a => a.correct).length)
const isNewBest = computed(() => totalScore.value >= props.bestScore && props.attempt > 0)
const matchedModel = computed(() => getModelByScore(totalScore.value))

const categoryScores = computed(() => {
  const scores = {}, totals = {}
  for (const a of props.answers) {
    if (!scores[a.category]) { scores[a.category] = 0; totals[a.category] = 0 }
    totals[a.category]++
    if (a.correct) scores[a.category]++
  }
  const pct = {}
  for (const cat of Object.keys(totals)) {
    pct[cat] = totals[cat] > 0 ? scores[cat] / totals[cat] : 0
  }
  return pct
})

const radarCategories = computed(() => allCategories.filter(c => props.answers.some(a => a.category === c)))
const normalizedCatScores = computed(() => categoryScores.value)
const radarLabels = computed(() => radarCategories.value.map(c => t('cat.' + c)))
const thinkingStyle = computed(() => getThinkingStyle(categoryScores.value))

const allStyles = computed(() => {
  const scores = thinkingStyles.map(s => ({ ...s, raw: s.check(categoryScores.value) }))
  const maxScore = Math.max(...scores.map(s => s.raw), 0.01)
  return scores.map(s => ({ ...s, pct: Math.round(Math.max(0, s.raw / maxScore) * 100) }))
})

function showToast(msg) {
  copiedMsg.value = msg
  showCopied.value = true
  setTimeout(() => showCopied.value = false, 2500)
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
  showToast(t('result.copied'))
}

function shareResult() {
  const m = matchedModel.value, s = thinkingStyle.value
  const text = locale.value === 'zh'
    ? `🧠 ${m.reaction.zh}${m.name}！\nAI人格：${s.name.zh} ${s.icon}\n得分 ${totalScore.value}/100\n\n你是GPT-2还是Claude Opus？测了才知道 👉 brain.openvibelab.com\n\n#测测你是哪款AI #AI测试 #大模型 #知识测验`
    : `🧠 AI Brain Match: ${m.reaction.en} ${m.name}!\nThinking style: ${s.name.en} ${s.icon}\nScore: ${totalScore.value}/100\n\nWhich AI are YOU? 👉 brain.openvibelab.com`
  copyText(text)
}

async function generateShareCard() {
  renderingCard.value = true
  await new Promise(r => setTimeout(r, 100))

  try {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(shareCardRef.value, {
      scale: 2,
      backgroundColor: '#fefaf5',
      logging: false,
      useCORS: true
    })

    canvas.toBlob(async (blob) => {
      if (!blob) return

      if (navigator.share && navigator.canShare) {
        const file = new File([blob], 'ai-brain-match.png', { type: 'image/png' })
        try {
          await navigator.share({ files: [file], title: 'AI Brain Match' })
          return
        } catch {}
      }

      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `ai-brain-match-${matchedModel.value.name.replace(/\s+/g, '-')}.png`
      a.click()
      URL.revokeObjectURL(url)
      showToast(locale.value === 'zh' ? '图片已保存，去小红书发吧！' : 'Image saved! Share it!')
    }, 'image/png')
  } catch {
    shareResult()
  } finally {
    renderingCard.value = false
  }
}

onMounted(() => {
  const target = totalScore.value
  const duration = 1400
  const start = performance.now()
  function tick(now) {
    const p = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 4)
    animatedScore.value = Math.round(eased * target)
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)

  import('canvas-confetti').then(({ default: confetti }) => {
    confetti({
      particleCount: 60, spread: 55, startVelocity: 30,
      origin: { y: 0.35 },
      colors: [matchedModel.value.color, '#3a7bd5', '#7c5cbf', '#f5c542'],
      gravity: 1.2
    })
  }).catch(() => {})
})
</script>

<style scoped>
.toast-enter-active { animation: fade-up 0.3s ease-out; }
.toast-leave-active { transition: all 0.2s ease-out; opacity: 0; }
@keyframes fade-up { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
</style>
