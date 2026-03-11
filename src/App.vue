<template>
  <!-- Animated background -->
  <div class="bg-grid" />
  <div class="bg-orb bg-orb-1" />
  <div class="bg-orb bg-orb-2" />
  <div class="bg-orb bg-orb-3" />

  <div class="relative z-10">
    <LangToggle />

    <Transition name="page" mode="out-in">
      <StartPage
        v-if="page === 'start'"
        key="start"
        :attempt="attempt"
        :bestScore="bestScore"
        @start="startQuiz"
      />
      <QuizPage
        v-else-if="page === 'quiz'"
        key="quiz"
        :questions="quizQuestions"
        @complete="showResult"
      />
      <ResultPage
        v-else-if="page === 'result'"
        key="result"
        :answers="answers"
        :attempt="attempt"
        :bestScore="bestScore"
        :lastQuestionIds="lastQuestionIds"
        @retry="retryNew"
        @retryDifferent="retryDifferent"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LangToggle from './components/LangToggle.vue'
import StartPage from './components/StartPage.vue'
import QuizPage from './components/QuizPage.vue'
import ResultPage from './components/ResultPage.vue'
import { prepareQuiz } from './data/questions.js'

const page = ref('start')
const quizQuestions = ref([])
const answers = ref([])
const attempt = ref(0)
const bestScore = ref(parseInt(localStorage.getItem('bestScore') || '0'))
const lastQuestionIds = ref([])

function startQuiz(excludeIds = []) {
  quizQuestions.value = prepareQuiz(20, excludeIds)
  answers.value = []
  page.value = 'quiz'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function showResult(ans) {
  answers.value = ans
  attempt.value++
  lastQuestionIds.value = quizQuestions.value.map(q => q.id)

  let earned = 0, maxPossible = 0
  for (const a of ans) {
    const pts = a.difficulty * 2
    maxPossible += pts
    if (a.correct) earned += pts
  }
  const score = Math.round((earned / maxPossible) * 100)
  if (score > bestScore.value) {
    bestScore.value = score
    localStorage.setItem('bestScore', String(score))
  }

  page.value = 'result'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function retryNew() {
  startQuiz()
}

function retryDifferent() {
  startQuiz(lastQuestionIds.value)
}
</script>
