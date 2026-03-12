<template>
  <div class="min-h-dvh flex flex-col items-center px-5 py-12">
    <div class="w-full max-w-lg lg:max-w-xl">

      <!-- ===== HERO: Matched model ===== -->
      <div class="text-center mb-12 animate-float-in">
        <!-- Specialty badge -->
        <div class="inline-flex items-center gap-1.5 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-semibold mb-5"
             :style="{ background: spec.color + '0c', color: spec.color, border: '2px solid ' + spec.color + '20' }">
          {{ spec.icon }} {{ spec.name[locale] }}
        </div>

        <div class="relative inline-flex items-center justify-center mb-5">
          <span class="relative text-7xl lg:text-8xl select-none">{{ matchedModel.emoji }}</span>
        </div>

        <p class="text-sm lg:text-base text-ink-secondary mb-3">
          {{ matchedModel.reaction[locale] }}
        </p>
        <h1 class="heading-text text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
            :style="{ color: spec.color }">
          {{ matchedModel.name }}
        </h1>
      </div>

      <!-- ===== SCORE CARD ===== -->
      <div class="quiz-card rounded-xl p-6 lg:p-8 mb-4 animate-float-in-1">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] lg:text-xs uppercase tracking-[0.15em] text-ink-muted">{{ t('result.score') }}</span>
          <span class="text-[10px] px-2.5 py-1 rounded-full font-semibold"
                :style="{ background: spec.color + '0c', color: spec.color }">
            {{ spec.name[locale] }}
          </span>
        </div>

        <!-- Big score -->
        <div class="text-center py-6">
          <span class="heading-text text-7xl lg:text-8xl tabular-nums animate-score"
                :style="{ color: spec.color }">
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
                   background: spec.color
                 }" />
          </div>
          <div class="absolute top-[-3px] w-3 h-3 rounded-full border-2 border-card transition-all duration-[1500ms]"
               :style="{ left: `calc(${totalScore}% - 6px)`, background: spec.color }" />
        </div>

        <!-- Model tier strip -->
        <div class="flex rounded-lg overflow-hidden h-7 mb-4">
          <div v-for="model in spec.models" :key="model.name"
               class="flex items-center justify-center transition-all duration-500 text-[9px]"
               :style="{
                 flex: model.scoreRange[1] - model.scoreRange[0],
                 background: model.name === matchedModel.name ? spec.color + '12' : 'rgba(42,33,24,0.03)',
                 borderRight: '1px solid rgba(42,33,24,0.06)'
               }">
            <span :style="{ opacity: model.name === matchedModel.name ? 1 : 0.3 }">
              {{ model.emoji }}
            </span>
          </div>
        </div>

        <!-- Stats -->
        <div class="flex justify-center gap-5 text-[11px] lg:text-xs text-ink-muted">
          <span class="tabular-nums">{{ correctCount }}/{{ answers.length }} {{ t('result.correct') }}</span>
        </div>
      </div>

      <!-- ===== DIFFICULTY BREAKDOWN ===== -->
      <div class="quiz-card rounded-xl p-6 lg:p-8 mb-4 animate-float-in-2">
        <h3 class="text-[10px] lg:text-xs uppercase tracking-[0.15em] text-ink-muted mb-5 text-center">
          {{ t('special.diffBreakdown') }}
        </h3>
        <div class="space-y-2.5">
          <div v-for="d in difficultyBreakdown" :key="d.level" class="flex items-center gap-2.5">
            <span class="text-[10px] lg:text-xs text-ink-muted w-20 shrink-0 truncate">
              {{ d.label }}
            </span>
            <div class="flex-1 h-[6px] rounded-full bg-border overflow-hidden">
              <div class="h-full rounded-full transition-all duration-1000"
                   :style="{ width: d.pct + '%', background: spec.color }" />
            </div>
            <span class="text-[10px] text-ink-muted w-12 text-right tabular-nums">
              {{ d.correct }}/{{ d.total }}
            </span>
          </div>
        </div>
      </div>

      <!-- ===== DEPTH INSIGHT ===== -->
      <div class="quiz-card rounded-xl p-5 lg:p-7 mb-4 animate-float-in-3">
        <div class="flex items-start gap-3">
          <span class="text-xl lg:text-2xl shrink-0 mt-0.5">{{ insightEmoji }}</span>
          <div>
            <div class="text-xs lg:text-sm font-bold text-ink mb-1">{{ locale === 'zh' ? '深度洞察' : 'Depth Insight' }}</div>
            <p class="text-[11px] lg:text-xs text-ink-secondary leading-relaxed">{{ insightText }}</p>
          </div>
        </div>
      </div>

      <!-- ===== SHARE ===== -->
      <div class="quiz-card rounded-xl p-6 lg:p-8 mb-4 animate-float-in-4">
        <p class="text-xs lg:text-sm text-ink-secondary text-center mb-4">
          {{ locale === 'zh'
            ? `${spec.name.zh}专项我是${matchedModel.name}级，不服来战！`
            : `I'm ${matchedModel.name} level in ${spec.name.en}. Beat that!` }}
        </p>
        <button @click="shareResult"
                class="w-full px-4 py-3.5 lg:py-4 rounded-xl text-xs lg:text-sm font-semibold
                       bg-sand border-2 border-border hover:border-ink-muted
                       transition-all duration-300 cursor-pointer active:scale-[0.97]
                       text-ink-secondary">
          📋 {{ t('result.share') }}
        </button>
        <Transition name="toast">
          <p v-if="showCopied" class="text-center text-[11px] text-pop-green mt-3">
            ✓ {{ t('result.copied') }}
          </p>
        </Transition>
      </div>

      <!-- ===== ACTIONS ===== -->
      <div class="space-y-2.5 mb-8 animate-float-in-4">
        <button @click="$emit('retrySpecial')"
                class="w-full px-5 py-4 lg:py-5 rounded-xl text-sm lg:text-base text-center
                       quiz-card hover:border-pop-blue/30
                       transition-all duration-300 cursor-pointer active:scale-[0.98]">
          <span class="text-ink font-semibold">🎲 {{ t('special.retry') }}</span>
          <span class="block text-[10px] text-ink-muted mt-1">{{ t('special.retryHint') }}</span>
        </button>
        <button @click="$emit('pickOther')"
                class="w-full px-5 py-3.5 lg:py-4 rounded-xl text-sm lg:text-base text-center
                       quiz-card hover:border-pop-purple/30
                       transition-all duration-300 cursor-pointer active:scale-[0.98]">
          <span class="text-pop-purple font-semibold">🧩 {{ t('special.pickOther') }}</span>
        </button>
        <button @click="$emit('backToMain')"
                class="w-full px-5 py-3 lg:py-3.5 rounded-xl text-xs lg:text-sm text-center
                       text-ink-muted hover:text-ink-secondary
                       transition-all duration-300 cursor-pointer">
          &larr; {{ t('special.backToMain') }}
        </button>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { t, locale } from '../lib/i18n.js'
import { specializations, getSpecialModelByScore } from '../data/specializations.js'

const props = defineProps({
  answers: Array,
  specId: String
})

defineEmits(['retrySpecial', 'pickOther', 'backToMain'])
const showCopied = ref(false)
const animatedScore = ref(0)

const spec = computed(() => specializations.find(s => s.id === props.specId))

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
const matchedModel = computed(() => getSpecialModelByScore(props.specId, totalScore.value))

const difficultyBreakdown = computed(() => {
  const levels = [
    { level: 1, label: locale.value === 'zh' ? '入门' : 'Easy' },
    { level: 2, label: locale.value === 'zh' ? '基础' : 'Basic' },
    { level: 3, label: locale.value === 'zh' ? '进阶' : 'Medium' },
    { level: 4, label: locale.value === 'zh' ? '困难' : 'Hard' },
    { level: 5, label: locale.value === 'zh' ? '地狱' : 'Expert' }
  ]
  return levels.map(l => {
    const qs = props.answers.filter(a => a.difficulty === l.level)
    const correct = qs.filter(a => a.correct).length
    return {
      ...l,
      total: qs.length,
      correct,
      pct: qs.length > 0 ? Math.round((correct / qs.length) * 100) : 0
    }
  }).filter(l => l.total > 0)
})

const insightEmoji = computed(() => {
  const bd = difficultyBreakdown.value
  const easy = bd.filter(d => d.level <= 2)
  const hard = bd.filter(d => d.level >= 4)
  const easyPct = easy.length ? easy.reduce((s, d) => s + d.pct, 0) / easy.length : 0
  const hardPct = hard.length ? hard.reduce((s, d) => s + d.pct, 0) / hard.length : 0
  if (hardPct > easyPct) return '🔥'
  if (easyPct >= 80 && hardPct < 30) return '📚'
  if (totalScore.value >= 80) return '👑'
  return '💡'
})

const insightText = computed(() => {
  const bd = difficultyBreakdown.value
  const easy = bd.filter(d => d.level <= 2)
  const hard = bd.filter(d => d.level >= 4)
  const easyPct = easy.length ? easy.reduce((s, d) => s + d.pct, 0) / easy.length : 0
  const hardPct = hard.length ? hard.reduce((s, d) => s + d.pct, 0) / hard.length : 0
  const isZh = locale.value === 'zh'

  if (hardPct > easyPct) {
    return isZh
      ? '你越难越兴奋？！难题答对率竟然比简单题还高，属于\"反向型选手\"——专治各种不服'
      : 'You thrive on challenge! Your hard question accuracy is higher than easy ones — a true expert pattern.'
  }
  if (easyPct >= 80 && hardPct < 30) {
    return isZh
      ? '基础扎实但进阶壁垒还需突破。简单题稳如老狗，难题就有点慌了——多刷几轮再来！'
      : 'Strong fundamentals, but the advanced stuff needs work. You ace the basics — now push into expert territory!'
  }
  if (totalScore.value >= 80) {
    return isZh
      ? '各难度全面碾压，不愧是fine-tuned专家。这个领域你可以出去教别人了'
      : 'Crushing it across all difficulty levels. You\'re a domain expert — go teach someone!'
  }
  if (totalScore.value >= 50) {
    return isZh
      ? '中等水平，有潜力！知道得不少但还有盲区。再刷一轮看看能不能突破'
      : 'Decent knowledge with room to grow. You know the field but haven\'t mastered the hard stuff yet.'
  }
  return isZh
    ? '这个领域是你的新大陆！别灰心，很多题是真的难——换个自己更擅长的方向试试？'
    : 'This field is new territory for you! Don\'t worry, many questions are genuinely hard — try a specialty you\'re more confident in?'
})

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
  showCopied.value = true
  setTimeout(() => showCopied.value = false, 2500)
}

function shareResult() {
  const m = matchedModel.value, s = spec.value
  const text = locale.value === 'zh'
    ? `🧠 ${s.name.zh}专项深度测试，${m.reaction.zh}${m.name}！\n得分 ${totalScore.value}/100\n\n来挑战你最擅长的领域 👉 brain.openvibelab.com\n\n#AI测试 #${s.name.zh} #测测你是哪款AI #知识测验`
    : `🧠 ${s.name.en} deep dive: ${m.reaction.en} ${m.name}!\nScore: ${totalScore.value}/100\n\nTest YOUR specialty 👉 brain.openvibelab.com`
  copyText(text)
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
      colors: [spec.value.color, '#3a7bd5', '#7c5cbf', '#f5c542'],
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
