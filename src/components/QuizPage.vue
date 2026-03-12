<template>
  <div class="min-h-dvh flex flex-col items-center justify-center px-5 py-8">

    <!-- Top bar -->
    <div class="w-full max-w-xl lg:max-w-2xl mb-8">
      <div class="flex justify-between items-center mb-3">
        <!-- Left: quit + question counter -->
        <div class="flex items-center gap-3">
          <button @click="confirmQuit"
                  class="w-7 h-7 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center
                         text-ink-muted hover:text-ink hover:bg-sand
                         transition-all cursor-pointer text-sm lg:text-base"
                  aria-label="Quit quiz">
            &times;
          </button>
          <span class="text-ink-secondary text-sm lg:text-base font-mono tabular-nums">
            {{ String(current + 1).padStart(2, '0') }}
            <span class="text-ink-muted">/</span>
            {{ String(questions.length).padStart(2, '0') }}
          </span>
          <!-- Streak badge -->
          <Transition name="streak">
            <span v-if="streak >= 3"
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                         text-[10px] font-bold bg-pop-orange/10 text-pop-orange
                         animate-pop-in">
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
                ? 'bg-pop-blue'
                : 'bg-border'"
            />
          </span>
          <span class="px-2.5 py-[3px] lg:px-3 lg:py-1 rounded-md text-[10px] lg:text-xs font-semibold tracking-wide"
                :style="{ background: catColor + '0c', color: catColor }">
            {{ t('cat.' + questions[current].category) }}
          </span>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="w-full h-[5px] rounded-full bg-border overflow-hidden">
        <div
          class="h-full rounded-full progress-fill"
          :style="{
            width: ((current + 1) / questions.length * 100) + '%',
            background: catColor
          }"
        />
      </div>

      <!-- Mini score -->
      <div class="flex justify-between items-center mt-2 text-[10px] lg:text-xs text-ink-muted">
        <span>{{ correctCount }}/{{ answeredCount }} {{ locale === 'zh' ? '答对' : 'correct' }}</span>
        <span class="flex gap-[2px]">
          <span v-for="(a, i) in miniDots" :key="i"
                @click="a === 'skip' && jumpToQuestion(i)"
                class="w-[5px] h-[5px] rounded-full transition-all"
                :class="{
                  'bg-pop-green': a === 'correct',
                  'bg-pop-red': a === 'wrong',
                  'bg-pop-orange cursor-pointer hover:bg-pop-orange/80 scale-125': a === 'skip',
                  'bg-border': a === 'pending'
                }" />
        </span>
      </div>
    </div>

    <!-- Feedback toast -->
    <Transition name="toast">
      <div v-if="feedbackVisible" class="mb-5 animate-pop-in">
        <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold"
              :class="lastCorrect
                ? 'bg-pop-green/10 text-pop-green border-2 border-pop-green/20'
                : 'bg-pop-red/10 text-pop-red border-2 border-pop-red/20'">
          {{ lastCorrect ? '✓ ' + t('quiz.correct') : '✗ ' + t('quiz.wrong') }}
        </span>
      </div>
    </Transition>

    <!-- Question card -->
    <Transition name="card" mode="out-in">
      <div :key="current"
           class="w-full max-w-xl lg:max-w-2xl quiz-card rounded-xl p-7 md:p-9 lg:p-11"
           :class="flashClass">

        <h2 class="heading-text text-lg md:text-xl lg:text-2xl mb-8 leading-[1.7]">
          {{ questions[current].text[locale] }}
        </h2>

        <div class="space-y-2.5">
          <button
            v-for="(option, idx) in questions[current].options[locale]"
            :key="idx"
            @click="selectAnswer(idx)"
            :disabled="answered !== null"
            class="option-btn w-full text-left px-4 py-4 lg:px-5 lg:py-4 rounded-xl border-2
                   cursor-pointer disabled:cursor-default group"
            :class="getOptionClass(idx)"
          >
            <span class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-lg border-2 flex items-center justify-center
                          text-[11px] font-bold shrink-0 transition-all duration-300"
                    :class="getCircleClass(idx)">
                {{ ['A','B','C','D'][idx] }}
              </span>
              <span class="text-sm lg:text-base leading-relaxed">{{ option }}</span>
            </span>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Bottom actions -->
    <div class="mt-7 flex items-center gap-3 min-h-[48px]">
      <!-- Go back to skipped -->
      <button
        v-if="hasSkipped && answered === null"
        @click="goBackToSkipped"
        class="px-5 py-3 rounded-xl text-xs text-pop-orange border-2 border-pop-orange/20
               hover:border-pop-orange/40 hover:text-pop-orange
               transition-all cursor-pointer min-h-[44px]"
      >
        ← {{ locale === 'zh' ? '回到跳过的题' : 'Back to skipped' }}
      </button>
      <Transition name="toast">
        <button
          v-if="answered !== null"
          @click="nextQuestion"
          class="px-10 py-2.5 lg:px-12 lg:py-3 rounded-xl font-semibold text-sm lg:text-base
                 border-2 transition-all duration-300 cursor-pointer
                 active:scale-95"
          :class="nextLabel.isFinish
            ? 'bg-pop-blue text-white border-pop-blue hover:bg-pop-blue/90'
            : 'bg-pop-blue/5 border-pop-blue/25 hover:border-pop-blue/50 text-pop-blue'"
        >
          {{ nextLabel.text }}
        </button>
      </Transition>
      <button
        v-if="answered === null"
        @click="skipQuestion"
        class="px-5 py-3 rounded-xl text-xs text-ink-muted border-2 border-border
               hover:border-ink-muted hover:text-ink-secondary transition-all cursor-pointer min-h-[44px]"
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
const answerMap = ref({})
const feedbackVisible = ref(false)
const lastCorrect = ref(false)
const flashClass = ref('')
const streak = ref(0)

const catColors = {
  science: '#3a7bd5', history: '#7c5cbf', logic: '#4aaf51',
  coding: '#e08a3a', language: '#e8413c', general: '#3a7bd5', creativity: '#f5c542'
}

const catColor = computed(() => catColors[props.questions[current.value]?.category] || '#3a7bd5')

const answeredCount = computed(() => Object.keys(answerMap.value).length)
const correctCount = computed(() => Object.values(answerMap.value).filter(a => a.correct).length)
const skippedIndices = computed(() => {
  return Object.entries(answerMap.value)
    .filter(([, a]) => a.selectedIndex === -1)
    .map(([i]) => Number(i))
})
const hasSkipped = computed(() => skippedIndices.value.length > 0)
const allDone = computed(() => answeredCount.value >= props.questions.length)

const miniDots = computed(() => {
  return props.questions.map((_, i) => {
    const a = answerMap.value[i]
    if (!a) return 'pending'
    if (a.selectedIndex === -1) return 'skip'
    return a.correct ? 'correct' : 'wrong'
  })
})

const nextLabel = computed(() => {
  const nextUnanswered = findNextUnanswered(current.value)
  if (nextUnanswered === -1) {
    if (skippedIndices.value.length > 0) {
      return { text: locale.value === 'zh' ? '回答跳过的题 →' : 'Answer skipped →', isFinish: false }
    }
    return { text: '🎉 ' + t('result.title'), isFinish: true }
  }
  return { text: t('quiz.next') + ' →', isFinish: false }
})

function findNextUnanswered(fromIndex) {
  for (let i = fromIndex + 1; i < props.questions.length; i++) {
    if (!answerMap.value[i] || answerMap.value[i].selectedIndex === -1) return i
  }
  for (let i = 0; i <= fromIndex; i++) {
    if (!answerMap.value[i] || answerMap.value[i].selectedIndex === -1) return i
  }
  return -1
}

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

  answerMap.value[current.value] = {
    questionId: q.id, selectedIndex: idx, correct,
    difficulty: q.difficulty, category: q.category
  }

  flashClass.value = correct ? 'flash-correct' : 'flash-wrong'
  feedbackVisible.value = true
  setTimeout(() => { feedbackVisible.value = false; flashClass.value = '' }, 1600)
}

function skipQuestion() {
  const q = props.questions[current.value]
  streak.value = 0
  answerMap.value[current.value] = {
    questionId: q.id, selectedIndex: -1, correct: false,
    difficulty: q.difficulty, category: q.category
  }
  goNext()
}

function nextQuestion() { goNext() }

function goNext() {
  const next = findNextUnanswered(current.value)
  if (next === -1) {
    const finalAnswers = props.questions.map((_, i) => answerMap.value[i])
    emit('complete', finalAnswers)
  } else {
    current.value = next
    answered.value = null
  }
}

function jumpToQuestion(idx) {
  if (answerMap.value[idx]?.selectedIndex === -1) {
    current.value = idx
    answered.value = null
    delete answerMap.value[idx]
  }
}

function goBackToSkipped() {
  const skipped = skippedIndices.value.sort((a, b) => a - b)
  const before = skipped.filter(i => i < current.value)
  const target = before.length > 0 ? before[before.length - 1] : skipped[0]
  if (target !== undefined) {
    current.value = target
    answered.value = null
    delete answerMap.value[target]
  }
}

function getOptionClass(idx) {
  if (answered.value === null) {
    return 'border-border hover:border-pop-blue/40 hover:bg-sand/50'
  }
  const q = props.questions[current.value]
  if (idx === q.correctIndex)
    return 'border-pop-green/50 bg-pop-green/5'
  if (idx === answered.value)
    return 'border-pop-red/50 bg-pop-red/5'
  return 'border-border/50 opacity-30'
}

function confirmQuit() {
  const msg = locale.value === 'zh' ? '确定要退出吗？当前进度不会保存' : 'Quit? Your progress won\'t be saved.'
  if (confirm(msg)) emit('quit')
}

function getCircleClass(idx) {
  if (answered.value === null)
    return 'border-border text-ink-secondary group-hover:border-pop-blue/50 group-hover:text-pop-blue'
  const q = props.questions[current.value]
  if (idx === q.correctIndex)
    return 'border-pop-green text-pop-green bg-pop-green/10'
  if (idx === answered.value)
    return 'border-pop-red text-pop-red bg-pop-red/10'
  return 'border-border/30 text-ink-muted/30'
}
</script>

<style scoped>
.card-enter-active { animation: card-in 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.card-leave-active { animation: card-out 0.2s ease-out; }
@keyframes card-in {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes card-out {
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-20px); }
}

.toast-enter-active { animation: toast-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.toast-leave-active { transition: all 0.2s ease-out; opacity: 0; transform: translateY(-5px); }
@keyframes toast-in {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.streak-enter-active { animation: pop-in 0.35s cubic-bezier(0.16, 1, 0.3, 1); }
.streak-leave-active { transition: all 0.2s ease-out; opacity: 0; transform: scale(0.8); }
@keyframes pop-in {
  0% { opacity: 0; transform: scale(0.6); }
  100% { opacity: 1; transform: scale(1); }
}
</style>
