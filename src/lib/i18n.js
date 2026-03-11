import { ref } from 'vue'

const translations = {
  en: {
    'app.title': 'AI Brain Match',
    'app.subtitle': 'Which AI matches YOUR brain?',
    'app.description': '20 random questions across 7 categories. Each attempt is different — find out if you\'re a GPT-2 or a Claude Opus!',
    'app.start': 'Start the Test',
    'app.startSub': '~3 min · 20 questions · always random',
    'quiz.question': 'Question',
    'quiz.of': 'of',
    'quiz.next': 'Next',
    'quiz.skip': 'Skip',
    'quiz.correct': 'Correct!',
    'quiz.wrong': 'Not quite!',
    'result.title': 'Your AI Brain Match',
    'result.youAre': 'Your knowledge level ≈',
    'result.score': 'Score',
    'result.breakdown': 'Category Breakdown',
    'result.style': 'Your Thinking Style',
    'result.share': 'Share Result',
    'result.shareInvite': 'Challenge a Friend',
    'result.retry': 'New Random Quiz',
    'result.retryHint': 'Different questions every time!',
    'result.retryExcuse': 'Not my domain... try different topics!',
    'result.copied': 'Copied to clipboard!',
    'result.attempt': 'Attempt',
    'result.best': 'Personal Best',
    'result.correct': 'correct',
    'result.newBest': 'New Best!',
    'result.funFact': 'Fun fact',
    'cat.science': 'Science',
    'cat.history': 'History',
    'cat.logic': 'Logic',
    'cat.coding': 'Coding',
    'cat.language': 'Language',
    'cat.general': 'General',
    'cat.creativity': 'Creativity',
    'footer.day': 'Day 3 of 100',
    'cta.friends': 'Think you\'re smarter than your friends? Send them this:',
  },
  zh: {
    'app.title': '测测你是哪款AI',
    'app.subtitle': '你的知识量，约等于哪个大模型？',
    'app.description': '7大领域随机出20题，每次都不一样。GPT-2还是Claude Opus？测了才知道',
    'app.start': '开始挑战',
    'app.startSub': '约3分钟 · 20题 · 每次随机不重复',
    'quiz.question': '第',
    'quiz.of': '题 / 共',
    'quiz.next': '下一题',
    'quiz.skip': '跳过',
    'quiz.correct': '漂亮！',
    'quiz.wrong': '翻车了',
    'result.title': '查看你的AI段位',
    'result.youAre': '你的知识量 ≈',
    'result.score': '综合得分',
    'result.breakdown': '能力雷达图',
    'result.style': '你的AI人格',
    'result.share': '晒一晒',
    'result.shareInvite': '拉好友来battle',
    'result.retry': '再来一局',
    'result.retryHint': '每次题都不一样，放心冲',
    'result.retryExcuse': '这题不公平！换一批来',
    'result.copied': '已复制，快去发给朋友吧',
    'result.attempt': '第',
    'result.best': '历史最高',
    'result.correct': '答对',
    'result.newBest': '破纪录了！',
    'result.funFact': '冷知识',
    'cat.science': '科学',
    'cat.history': '人文',
    'cat.logic': '逻辑',
    'cat.coding': '编程',
    'cat.language': '语言',
    'cat.general': '百科',
    'cat.creativity': '脑洞',
    'footer.day': '100天开源挑战 · Day 3',
    'cta.friends': '不服？转给朋友试试：',
  }
}

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null
const browserLang = typeof navigator !== 'undefined' && navigator.language.startsWith('zh') ? 'zh' : 'en'
export const locale = ref(stored || browserLang)

export function t(key) {
  return translations[locale.value]?.[key] || translations.en[key] || key
}

export function setLocale(lang) {
  locale.value = lang
  localStorage.setItem('locale', lang)
  document.documentElement.lang = lang
}

export function toggleLocale() {
  setLocale(locale.value === 'en' ? 'zh' : 'en')
}
