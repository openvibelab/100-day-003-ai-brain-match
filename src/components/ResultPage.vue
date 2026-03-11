<template>
  <div class="min-h-dvh flex flex-col items-center px-5 py-12">
    <div class="w-full max-w-lg">

      <!-- ===== HERO: Matched model ===== -->
      <div class="text-center mb-12 animate-float-in">
        <!-- Emoji with color glow -->
        <div class="relative inline-flex items-center justify-center mb-5">
          <div class="absolute w-24 h-24 rounded-full blur-3xl opacity-25"
               :style="{ background: matchedModel.color }" />
          <span class="relative text-7xl select-none">{{ matchedModel.emoji }}</span>
        </div>

        <p class="text-sm text-white/40 mb-3">
          {{ matchedModel.reaction[locale] }}
        </p>
        <h1 class="text-4xl md:text-5xl font-black mb-4 leading-tight"
            :style="{ color: matchedModel.color }">
          {{ matchedModel.name }}
        </h1>
        <p class="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">
          {{ matchedModel.description[locale] }}
        </p>
      </div>

      <!-- ===== SCORE CARD ===== -->
      <div class="glass-card rounded-2xl p-6 mb-4 animate-float-in-1">
        <!-- Header -->
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] uppercase tracking-[0.15em] text-white/25">{{ t('result.score') }}</span>
          <span v-if="isNewBest"
                class="text-[10px] px-2.5 py-1 rounded-full bg-neon-yellow/10 text-neon-yellow/80 font-semibold animate-bounce-in">
            &#9733; {{ t('result.newBest') }}
          </span>
        </div>

        <!-- Big score -->
        <div class="text-center py-6">
          <span class="text-7xl font-black tabular-nums animate-score"
                :style="{ color: matchedModel.color }">
            {{ animatedScore }}
          </span>
          <span class="text-lg text-white/15 ml-0.5">/100</span>
        </div>

        <!-- Progress bar -->
        <div class="relative mb-5">
          <div class="w-full h-[6px] rounded-full bg-white/[0.04] overflow-hidden">
            <div class="h-full rounded-full transition-all duration-[1500ms] ease-out"
                 :style="{
                   width: totalScore + '%',
                   background: `linear-gradient(90deg, ${matchedModel.color}60, ${matchedModel.color})`
                 }" />
          </div>
          <div class="absolute top-[-3px] w-3 h-3 rounded-full border-2 border-dark-bg transition-all duration-[1500ms]"
               :style="{ left: `calc(${totalScore}% - 6px)`, background: matchedModel.color }" />
        </div>

        <!-- Model tier strip -->
        <div class="flex rounded-lg overflow-hidden h-7 mb-4">
          <div v-for="model in aiModels" :key="model.id"
               class="flex items-center justify-center transition-all duration-500 text-[9px]"
               :style="{
                 flex: model.scoreRange[1] - model.scoreRange[0],
                 background: model.id === matchedModel.id ? model.color + '20' : 'rgba(255,255,255,0.02)',
                 borderRight: '1px solid rgba(255,255,255,0.04)'
               }">
            <span :style="{ opacity: model.id === matchedModel.id ? 1 : 0.3 }">
              {{ model.emoji }}
            </span>
          </div>
        </div>

        <!-- Stats -->
        <div class="flex justify-center gap-5 text-[11px] text-white/25">
          <span class="tabular-nums">{{ t('result.attempt') }} #{{ attempt }}</span>
          <span class="text-white/8">|</span>
          <span class="tabular-nums">{{ correctCount }}/{{ answers.length }} {{ t('result.correct') }}</span>
          <template v-if="bestScore > 0">
            <span class="text-white/8">|</span>
            <span class="tabular-nums">{{ t('result.best') }}: {{ bestScore }}</span>
          </template>
        </div>
      </div>

      <!-- ===== SHARE (moved up!) ===== -->
      <div class="glass-card rounded-2xl p-6 mb-4 animate-float-in-2">
        <p class="text-xs text-white/30 text-center mb-4">
          {{ locale === 'zh'
            ? `我居然是${matchedModel.name}！你敢来比吗 → 转发给最聪明的那个朋友`
            : `I matched ${matchedModel.name}! Think you can beat me?` }}
        </p>
        <div class="flex gap-2.5">
          <button @click="generateShareCard"
                  class="flex-1 px-4 py-3.5 rounded-xl text-xs font-semibold
                         bg-gradient-to-r from-neon-cyan/[0.06] to-neon-purple/[0.06]
                         border border-neon-cyan/20 hover:border-neon-cyan/40
                         transition-all duration-300 cursor-pointer active:scale-[0.97]
                         text-white/60 hover:text-white/80">
            🖼️ {{ t('result.shareCard') }}
          </button>
          <button @click="shareResult"
                  class="flex-1 px-4 py-3.5 rounded-xl text-xs font-semibold
                         bg-white/[0.03] border border-white/[0.06]
                         hover:border-white/15
                         transition-all duration-300 cursor-pointer active:scale-[0.97]
                         text-white/50 hover:text-white/70">
            📋 {{ t('result.share') }}
          </button>
        </div>
        <Transition name="toast">
          <p v-if="showCopied" class="text-center text-[11px] text-neon-green/70 mt-3">
            ✓ {{ copiedMsg }}
          </p>
        </Transition>
      </div>

      <!-- ===== RADAR CHART ===== -->
      <div class="glass-card rounded-2xl p-6 mb-4 animate-float-in-3">
        <h3 class="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-5 text-center">
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
                class="px-2 py-0.5 rounded-md text-[9px] font-semibold tabular-nums"
                :style="{ background: catColors[cat] + '10', color: catColors[cat] + 'bb' }">
            {{ t('cat.' + cat) }} {{ Math.round((normalizedCatScores[cat] || 0) * 100) }}%
          </span>
        </div>
      </div>

      <!-- ===== THINKING STYLE ===== -->
      <div class="glass-card rounded-2xl p-6 mb-4 animate-float-in-4">
        <h3 class="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-5 text-center">
          {{ t('result.style') }}
        </h3>

        <!-- Primary style -->
        <div class="flex items-center gap-4 mb-6 p-4 rounded-xl"
             :style="{ background: thinkingStyle.color + '06', border: '1px solid ' + thinkingStyle.color + '15' }">
          <span class="text-3xl shrink-0">{{ thinkingStyle.icon }}</span>
          <div>
            <div class="font-bold text-sm" :style="{ color: thinkingStyle.color }">
              {{ thinkingStyle.name[locale] }}
            </div>
            <div class="text-[11px] text-white/30 leading-relaxed mt-1">
              {{ thinkingStyle.description[locale] }}
            </div>
          </div>
        </div>

        <!-- Style bars -->
        <div class="space-y-2.5">
          <div v-for="style in allStyles" :key="style.id" class="flex items-center gap-2.5">
            <span class="text-sm w-5 text-center">{{ style.icon }}</span>
            <span class="text-[10px] text-white/25 w-14 shrink-0 truncate">{{ style.name[locale] }}</span>
            <div class="flex-1 h-[5px] rounded-full bg-white/[0.04] overflow-hidden">
              <div class="h-full rounded-full transition-all duration-1000"
                   :style="{ width: style.pct + '%', background: style.color + '90' }" />
            </div>
            <span class="text-[10px] text-white/20 w-7 text-right tabular-nums">{{ style.pct }}%</span>
          </div>
        </div>
      </div>

      <!-- ===== RETRY OPTIONS ===== -->
      <div class="space-y-2.5 mb-8 animate-float-in-5">
        <button @click="$emit('retry')"
                class="w-full px-5 py-4 rounded-xl text-sm text-center
                       glass-card hover:border-neon-cyan/20
                       transition-all duration-300 cursor-pointer active:scale-[0.98]">
          <span class="text-white/70 font-semibold">🎲 {{ t('result.retry') }}</span>
          <span class="block text-[10px] text-white/20 mt-1">{{ t('result.retryHint') }}</span>
        </button>
        <button @click="$emit('retryDifferent')"
                class="w-full px-5 py-3.5 rounded-xl text-sm text-center
                       glass-card hover:border-neon-orange/20
                       transition-all duration-300 cursor-pointer active:scale-[0.98]">
          <span class="text-neon-orange/60 font-semibold">😤 {{ t('result.retryExcuse') }}</span>
        </button>
      </div>

      <!-- Fun fact -->
      <div class="text-center mb-12 px-4">
        <p class="text-[11px] text-white/15 italic leading-relaxed">
          💡 {{ t('result.funFact') }}: {{ matchedModel.funFact[locale] }}
        </p>
      </div>

      <!-- Footer -->
      <div class="text-center text-[11px] text-white/15 pb-8 tracking-wider">
        {{ t('footer.day') }}
        <span class="mx-1.5 text-white/8">/</span>
        <a href="https://github.com/openvibelab" target="_blank"
           class="text-neon-cyan/25 hover:text-neon-cyan/60 transition-colors duration-300">
          OpenVibeLab
        </a>
      </div>
    </div>

    <!-- Hidden share card template (for html2canvas) -->
    <div ref="shareCardRef" class="share-card" v-show="renderingCard"
         style="position: fixed; left: -9999px; top: 0; width: 540px; height: 540px;">
      <div style="width: 540px; height: 540px; background: linear-gradient(135deg, #05051a 0%, #0c0c2e 50%, #14082e 100%);
                  display: flex; flex-direction: column; align-items: center; justify-content: center;
                  font-family: Inter, system-ui, sans-serif; color: white; padding: 40px; box-sizing: border-box;">
        <div style="font-size: 64px; margin-bottom: 12px;">{{ matchedModel.emoji }}</div>
        <div style="font-size: 14px; color: rgba(255,255,255,0.4); margin-bottom: 8px;">
          {{ matchedModel.reaction[locale] }}
        </div>
        <div :style="{ fontSize: '36px', fontWeight: 900, color: matchedModel.color, marginBottom: '16px' }">
          {{ matchedModel.name }}
        </div>
        <div style="font-size: 56px; font-weight: 900; margin-bottom: 4px;">
          <span :style="{ color: matchedModel.color }">{{ totalScore }}</span>
          <span style="font-size: 20px; color: rgba(255,255,255,0.2);">/100</span>
        </div>
        <div style="font-size: 12px; color: rgba(255,255,255,0.25); margin-top: 8px;">
          {{ thinkingStyle.icon }} {{ thinkingStyle.name[locale] }}
          · {{ correctCount }}/{{ answers.length }} {{ locale === 'zh' ? '答对' : 'correct' }}
        </div>
        <div style="margin-top: auto; display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 20px;">🧠</span>
          <span style="font-size: 13px; color: rgba(255,255,255,0.3); letter-spacing: 1px;">
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
  science: '#00f0ff', history: '#a855f7', logic: '#39ff14',
  coding: '#ffe01b', language: '#ff2d7b', general: '#3b82f6', creativity: '#f59e0b'
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
  await new Promise(r => setTimeout(r, 100)) // let DOM render

  try {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(shareCardRef.value, {
      scale: 2,
      backgroundColor: '#05051a',
      logging: false,
      useCORS: true
    })

    canvas.toBlob(async (blob) => {
      if (!blob) return

      // Try native share first (mobile)
      if (navigator.share && navigator.canShare) {
        const file = new File([blob], 'ai-brain-match.png', { type: 'image/png' })
        try {
          await navigator.share({ files: [file], title: 'AI Brain Match' })
          return
        } catch {}
      }

      // Fallback: download
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `ai-brain-match-${matchedModel.value.name.replace(/\s+/g, '-')}.png`
      a.click()
      URL.revokeObjectURL(url)
      showToast(locale.value === 'zh' ? '图片已保存，去小红书发吧！' : 'Image saved! Share it!')
    }, 'image/png')
  } catch {
    // Fallback to text share
    shareResult()
  } finally {
    renderingCard.value = false
  }
}

onMounted(() => {
  // Animated counter
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

  // Confetti
  import('canvas-confetti').then(({ default: confetti }) => {
    confetti({
      particleCount: 60, spread: 55, startVelocity: 30,
      origin: { y: 0.35 },
      colors: [matchedModel.value.color, '#00f0ff', '#a855f7'],
      gravity: 1.2
    })
  }).catch(() => {})
})
</script>

<style scoped>
.toast-enter-active { animation: fade-up 0.3s ease-out; }
.toast-leave-active { transition: all 0.2s ease-in; opacity: 0; }
@keyframes fade-up { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
</style>
