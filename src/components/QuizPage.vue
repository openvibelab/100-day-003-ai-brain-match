<template>
  <div class="min-h-dvh flex flex-col items-center justify-center px-5 py-8">

    <!-- Top bar -->
    <div class="w-full max-w-xl mb-8">
      <div class="flex justify-between items-center mb-3">
        <!-- Left: quit + question counter -->
        <div class="flex items-center gap-3">
          <button @click="confirmQuit"
                  class="w-7 h-7 rounded-lg flex items-center justify-center
                         text-white/20 hover:text-white/50 hover:bg-white/[0.04]
                         transition-all cursor-pointer text-sm"
                  aria-label="Quit quiz">
            &times;
          </button>
          <span class="text-white/30 text-sm font-mono tabular-nums">
            {{ String(current + 1).padStart(2, '0') }}
            <span class="text-white/10">/</span>
            {{ String(questions.length).padStart(2, '0') }}
          </span>
          <!-- Streak badge -->
          <Transition name="streak">
            <span v-if="streak >= 3"
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                         text-[10px] font-bold bg-neon-orange/15 text-neon-orange
                         animate-bounce-in">
              🔥 {{ streak }}
            </span>
          </Transition>
        </div>

        <!-- Right: difficulty + category -->
        <div class="flex items-center gap-2.5">
          <span class="flex gap-[3px]">
            <span
              v-for="i in 5" :key="i"
              class="w-[5px] h-[5px] rounded-full transition-all duration-300"
              :class="i <= questions[current].difficulty
                ? 'bg-neon-cyan shadow-[0_0_4px_rgba(0,240,255,0.6)]'
                : 'bg-white/8'"
            />
          </span>
          <span class="px-2.5 py-[3px] rounded-md text-[10px] font-semibold tracking-wide"
                :style="{ background: catColor + '10', color: catColor }">
            {{ t('cat.' + questions[current].category) }}
          </span>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="w-full h-[3px] rounded-full bg-white/[0.04] overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-700 ease-out"
          :style="{
            width: ((current + 1) / questions.length * 100) + '%',
            background: `linear-gradient(90deg, ${catColor}80, ${catColor})`
          }"
        />
      </div>

      <!-- Mini score -->
      <div class="flex justify-between items-center mt-2 text-[10px] text-white/20">
        <span>{{ correctCount }}/{{ current + (answered !== null ? 1 : 0) }} {{ locale === 'zh' ? '答对' : 'correct' }}</span>
        <span class="flex gap-[2px]">
          <span v-for="(a, i) in miniDots" :key="i"
                class="w-[4px] h-[4px] rounded-full transition-all"
                :class="{
                  'bg-neon-green/60': a === 'correct',
                  'bg-neon-pink/60': a === 'wrong',
                  'bg-white/10': a === 'skip',
                  'bg-white/5': a === 'pending'
                }" />
        </span>
      </div>
    </div>

    <!-- Feedback toast -->
    <Transition name="toast">
      <div v-if="feedbackVisible" class="mb-5 animate-bounce-in">
        <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold"
              :class="lastCorrect
                ? 'bg-neon-green/10 text-neon-green/90 border border-neon-green/20'
                : 'bg-neon-pink/10 text-neon-pink/90 border border-neon-pink/20'">
          {{ lastCorrect ? '✓ ' + t('quiz.correct') : '✗ ' + t('quiz.wrong') }}
        </span>
      </div>
    </Transition>

    <!-- Question card -->
    <Transition name="card" mode="out-in">
      <div :key="current"
           class="w-full max-w-xl glass-card rounded-2xl p-7 md:p-9"
           :class="flashClass">

        <h2 class="text-lg md:text-xl font-bold mb-8 leading-[1.7] text-white/85">
          {{ questions[current].text[locale] }}
        </h2>

        <div class="space-y-2.5">
          <button
            v-for="(option, idx) in questions[current].options[locale]"
            :key="idx"
            @click="selectAnswer(idx)"
            :disabled="answered !== null"
            class="option-btn w-full text-left px-4 py-3.5 rounded-xl border
                   transition-all duration-300 cursor-pointer
                   disabled:cursor-default group"
            :class="getOptionClass(idx)"
          >
            <span class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-lg border-[1.5px] flex items-center justify-center
                          text-[11px] font-bold shrink-0 transition-all duration-300"
                    :class="getCircleClass(idx)">
                {{ ['A','B','C','D'][idx] }}
              </span>
              <span class="text-sm leading-relaxed">{{ option }}</span>
            </span>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Bottom actions -->
    <div class="mt-7 flex items-center gap-3 min-h-[48px]">
      <Transition name="toast">
        <button
          v-if="answered !== null"
          @click="nextQuestion"
          class="px-10 py-2.5 rounded-xl font-semibold text-sm
                 border transition-all duration-300 cursor-pointer
                 active:scale-95"
          :class="current < questions.length - 1
            ? 'bg-white/[0.04] border-white/10 hover:border-white/25 text-white/70 hover:text-white'
            : 'bg-neon-cyan/10 border-neon-cyan/30 hover:border-neon-cyan/60 text-neon-cyan'"
        >
          {{ current < questions.length - 1 ? t('quiz.next') + ' →' : '🎉 ' + t('result.title') }}
        </button>
      </Transition>
      <button
        v-if="answered === null"
        @click="skipQuestion"
        class="px-5 py-2.5 rounded-xl text-[11px] text-white/20 border border-white/[0.04]
               hover:border-white/10 hover:text-white/30 transition-all cursor-pointer"
      >
        {{ t('quiz.skip') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { t, locale } from '../lib/i18n.js'

const props = defineProps({ questions: Array })
const emit = defineEmits(['complete', 'quit'])

const current = ref(0)
const answered = ref(null)
const answers = ref([])
const feedbackVisible = ref(false)
const lastCorrect = ref(false)
const flashClass = ref('')
const streak = ref(0)

const catColors = {
  science: '#00f0ff', history: '#a855f7', logic: '#39ff14',
  coding: '#ffe01b', language: '#ff2d7b', general: '#3b82f6', creativity: '#f59e0b'
}

const catColor = computed(() => catColors[props.questions[current.value]?.category] || '#00f0ff')
const correctCount = computed(() => answers.value.filter(a => a.correct).length)

// Mini progress dots
const miniDots = computed(() => {
  return props.questions.map((_, i) => {
    if (i >= answers.value.length) return 'pending'
    const a = answers.value[i]
    if (a.selectedIndex === -1) return 'skip'
    return a.correct ? 'correct' : 'wrong'
  })
})

function selectAnswer(idx) {
  if (answered.value !== null) return
  answered.value = idx

  const q = props.questions[current.value]
  const correct = idx === q.correctIndex
  lastCorrect.value = correct

  if (correct) {
    streak.value++
  } else {
    streak.value = 0
  }

  answers.value.push({
    questionId: q.id, selectedIndex: idx, correct,
    difficulty: q.difficulty, category: q.category
  })

  flashClass.value = correct ? 'flash-correct' : 'flash-wrong'
  feedbackVisible.value = true
  setTimeout(() => { feedbackVisible.value = false; flashClass.value = '' }, 1000)
}

function skipQuestion() {
  const q = props.questions[current.value]
  streak.value = 0
  answers.value.push({
    questionId: q.id, selectedIndex: -1, correct: false,
    difficulty: q.difficulty, category: q.category
  })
  goNext()
}

function nextQuestion() { goNext() }

function goNext() {
  if (current.value < props.questions.length - 1) {
    current.value++
    answered.value = null
  } else {
    emit('complete', answers.value)
  }
}

function getOptionClass(idx) {
  if (answered.value === null) {
    return 'border-white/[0.06] hover:border-white/15 hover:bg-white/[0.02]'
  }
  const q = props.questions[current.value]
  if (idx === q.correctIndex)
    return 'border-neon-green/40 bg-neon-green/[0.06]'
  if (idx === answered.value)
    return 'border-neon-pink/40 bg-neon-pink/[0.06]'
  return 'border-white/[0.03] opacity-30'
}

function confirmQuit() {
  const msg = locale.value === 'zh' ? '确定要退出吗？当前进度不会保存' : 'Quit? Your progress won\'t be saved.'
  if (confirm(msg)) emit('quit')
}

function getCircleClass(idx) {
  if (answered.value === null)
    return 'border-white/15 text-white/30 group-hover:border-white/25 group-hover:text-white/50'
  const q = props.questions[current.value]
  if (idx === q.correctIndex)
    return 'border-neon-green/60 text-neon-green bg-neon-green/10'
  if (idx === answered.value)
    return 'border-neon-pink/60 text-neon-pink bg-neon-pink/10'
  return 'border-white/5 text-white/15'
}
</script>

<style scoped>
.card-enter-active { animation: card-in 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
.card-leave-active { animation: card-out 0.2s ease-in; }
@keyframes card-in {
  from { opacity: 0; transform: translateX(30px) scale(0.98); }
  to { opacity: 1; transform: translateX(0) scale(1); }
}
@keyframes card-out {
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-20px); }
}

.toast-enter-active { animation: toast-in 0.3s cubic-bezier(0.22, 1, 0.36, 1); }
.toast-leave-active { transition: all 0.2s ease-in; opacity: 0; transform: translateY(-5px); }
@keyframes toast-in {
  from { opacity: 0; transform: translateY(-8px) scale(0.9); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.streak-enter-active { animation: bounce-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.streak-leave-active { transition: all 0.2s ease-in; opacity: 0; transform: scale(0.8); }
@keyframes bounce-in {
  0% { opacity: 0; transform: scale(0); }
  60% { transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
}
</style>
