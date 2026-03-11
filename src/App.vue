<template>
  <!-- Animated background -->
  <div class="bg-grid" />
  <div class="bg-orb bg-orb-1" />
  <div class="bg-orb bg-orb-2" />
  <div class="bg-orb bg-orb-3" />

  <Analytics />
  <div class="relative z-10 max-w-3xl mx-auto">
    <LangToggle />

    <Transition name="page" mode="out-in">
      <StartPage
        v-if="page === 'start'"
        key="start"
        :attempt="attempt"
        :bestScore="bestScore"
        @start="startQuiz"
        @deepDive="goDeepDive"
      />
      <SpecialSelectPage
        v-else-if="page === 'special-select'"
        key="special-select"
        @select="startSpecialQuiz"
        @back="goHome"
      />
      <QuizPage
        v-else-if="page === 'quiz'"
        key="quiz"
        :questions="quizQuestions"
        @complete="showResult"
        @quit="goHome"
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
      <QuizPage
        v-else-if="page === 'special-quiz'"
        key="special-quiz"
        :questions="quizQuestions"
        @complete="showSpecialResult"
        @quit="goHome"
      />
      <SpecialResultPage
        v-else-if="page === 'special-result'"
        key="special-result"
        :answers="answers"
        :specId="currentSpecId"
        @retrySpecial="retrySpecial"
        @pickOther="goDeepDive"
        @backToMain="goHome"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Analytics } from '@vercel/analytics/vue'
import LangToggle from './components/LangToggle.vue'
import StartPage from './components/StartPage.vue'
import QuizPage from './components/QuizPage.vue'
import ResultPage from './components/ResultPage.vue'
import SpecialSelectPage from './components/SpecialSelectPage.vue'
import SpecialResultPage from './components/SpecialResultPage.vue'
import { prepareQuiz } from './data/questions.js'
import { prepareSpecialQuiz } from './data/specializations.js'

const page = ref('start')
const quizQuestions = ref([])
const answers = ref([])
const attempt = ref(0)
const lastQuestionIds = ref([])
const currentSpecId = ref('')

// Safe localStorage access (incognito mode)
let storedBest = 0
try { storedBest = parseInt(localStorage.getItem('bestScore') || '0') } catch {}
const bestScore = ref(storedBest)

// Check URL for shared result on load
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const sharedScore = params.get('score')
  const sharedModel = params.get('model')
  if (sharedScore && sharedModel) {
    // Show a "challenge" banner on start page — the URL is just for context
    // The user will see the start page with the challenger's info
  }
})

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
    try { localStorage.setItem('bestScore', String(score)) } catch {}
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

function goHome() {
  page.value = 'start'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function goDeepDive() {
  page.value = 'special-select'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function startSpecialQuiz(specId) {
  currentSpecId.value = specId
  quizQuestions.value = prepareSpecialQuiz(specId, 15)
  answers.value = []
  page.value = 'special-quiz'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function showSpecialResult(ans) {
  answers.value = ans
  page.value = 'special-result'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function retrySpecial() {
  startSpecialQuiz(currentSpecId.value)
}
</script>
