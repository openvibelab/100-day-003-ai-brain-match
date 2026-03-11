<template>
  <div class="min-h-dvh flex flex-col items-center px-5 py-12">
    <div class="w-full max-w-lg">

      <!-- ===== HERO: Matched model ===== -->
      <div class="text-center mb-12 animate-float-in">
        <!-- Specialty badge -->
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold mb-5"
             :style="{ background: spec.color + '10', color: spec.color + 'cc', border: '1px solid ' + spec.color + '20' }">
          {{ spec.icon }} {{ spec.name[locale] }}
        </div>

        <!-- Emoji with color glow -->
        <div class="relative inline-flex items-center justify-center mb-5">
          <div class="absolute w-24 h-24 rounded-full blur-3xl opacity-25"
               :style="{ background: spec.color }" />
          <span class="relative text-7xl select-none">{{ matchedModel.emoji }}</span>
        </div>

        <p class="text-sm text-white/40 mb-3">
          {{ matchedModel.reaction[locale] }}
        </p>
        <h1 class="text-4xl md:text-5xl font-black mb-4 leading-tight"
            :style="{ color: spec.color }">
          {{ matchedModel.name }}
        </h1>
      </div>

      <!-- ===== SCORE CARD ===== -->
      <div class="glass-card rounded-2xl p-6 mb-4 animate-float-in-1">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] uppercase tracking-[0.15em] text-white/25">{{ t('result.score') }}</span>
          <span class="text-[10px] px-2.5 py-1 rounded-full font-semibold"
                :style="{ background: spec.color + '10', color: spec.color + '90' }">
            {{ spec.name[locale] }}
          </span>
        </div>

        <!-- Big score -->
        <div class="text-center py-6">
          <span class="text-7xl font-black tabular-nums animate-score"
                :style="{ color: spec.color }">
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
                   background: `linear-gradient(90deg, ${spec.color}60, ${spec.color})`
                 }" />
          </div>
          <div class="absolute top-[-3px] w-3 h-3 rounded-full border-2 border-dark-bg transition-all duration-[1500ms]"
               :style="{ left: `calc(${totalScore}% - 6px)`, background: spec.color }" />
        </div>

        <!-- Model tier strip -->
        <div class="flex rounded-lg overflow-hidden h-7 mb-4">
          <div v-for="model in spec.models" :key="model.name"
               class="flex items-center justify-center transition-all duration-500 text-[9px]"
               :style="{
                 flex: model.scoreRange[1] - model.scoreRange[0],
                 background: model.name === matchedModel.name ? spec.color + '20' : 'rgba(255,255,255,0.02)',
                 borderRight: '1px solid rgba(255,255,255,0.04)'
               }">
            <span :style="{ opacity: model.name === matchedModel.name ? 1 : 0.3 }">
              {{ model.emoji }}
            </span>
          </div>
        </div>

        <!-- Stats -->
        <div class="flex justify-center gap-5 text-[11px] text-white/25">
          <span class="tabular-nums">{{ correctCount }}/{{ answers.length }} {{ t('result.correct') }}</span>
        </div>
      </div>

      <!-- ===== DIFFICULTY BREAKDOWN ===== -->
      <div class="glass-card rounded-2xl p-6 mb-4 animate-float-in-2">
        <h3 class="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-5 text-center">
          {{ t('special.diffBreakdown') }}
        </h3>
        <div class="space-y-2.5">
          <div v-for="d in difficultyBreakdown" :key="d.level" class="flex items-center gap-2.5">
            <span class="text-[10px] text-white/25 w-20 shrink-0 truncate">
              {{ d.label }}
            </span>
            <div class="flex-1 h-[5px] rounded-full bg-white/[0.04] overflow-hidden">
              <div class="h-full rounded-full transition-all duration-1000"
                   :style="{ width: d.pct + '%', background: spec.color + '90' }" />
            </div>
            <span class="text-[10px] text-white/20 w-12 text-right tabular-nums">
              {{ d.correct }}/{{ d.total }}
            </span>
          </div>
        </div>
      </div>

      <!-- ===== SHARE ===== -->
      <div class="glass-card rounded-2xl p-6 mb-4 animate-float-in-3">
        <p class="text-xs text-white/25 text-center mb-4">{{ t('cta.friends') }}</p>
        <button @click="shareResult"
                class="w-full px-4 py-3 rounded-xl text-xs font-semibold
                       bg-white/[0.03] border border-white/[0.06]
                       hover:border-white/15 hover:bg-white/[0.04]
                       transition-all duration-300 cursor-pointer active:scale-[0.97]
                       text-white/50 hover:text-white/70">
          📋 {{ t('result.share') }}
        </button>
        <Transition name="toast">
          <p v-if="showCopied" class="text-center text-[11px] text-neon-green/70 mt-3">
            ✓ {{ t('result.copied') }}
          </p>
        </Transition>
      </div>

      <!-- ===== ACTIONS ===== -->
      <div class="space-y-2.5 mb-8 animate-float-in-4">
        <button @click="$emit('retrySpecial')"
                class="w-full px-5 py-4 rounded-xl text-sm text-center
                       glass-card hover:border-neon-cyan/20
                       transition-all duration-300 cursor-pointer active:scale-[0.98]">
          <span class="text-white/70 font-semibold">🎲 {{ t('special.retry') }}</span>
          <span class="block text-[10px] text-white/20 mt-1">{{ t('special.retryHint') }}</span>
        </button>
        <button @click="$emit('pickOther')"
                class="w-full px-5 py-3.5 rounded-xl text-sm text-center
                       glass-card hover:border-neon-purple/20
                       transition-all duration-300 cursor-pointer active:scale-[0.98]">
          <span class="text-neon-purple/60 font-semibold">🧩 {{ t('special.pickOther') }}</span>
        </button>
        <button @click="$emit('backToMain')"
                class="w-full px-5 py-3 rounded-xl text-xs text-center
                       text-white/25 hover:text-white/50
                       transition-all duration-300 cursor-pointer">
          &larr; {{ t('special.backToMain') }}
        </button>
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
    ? `🧠 刚做了"${s.name.zh}"深度测试，我居然是 ${m.name} 级别！\n得分 ${totalScore.value}/100\n\n来挑战你擅长的领域 👉 brain.openvibelab.com`
    : `🧠 Took the "${s.name.en}" deep dive — I matched ${m.name}!\nScore: ${totalScore.value}/100\n\nTest YOUR specialty 👉 brain.openvibelab.com`
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
      colors: [spec.value.color, '#00f0ff', '#a855f7'],
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
