/**
 * AI model tiers — ranked by approximate capability level
 */

export const aiModels = [
  {
    id: 'gpt2',
    name: 'GPT-2',
    scoreRange: [0, 15],
    emoji: '🤖',
    color: '#6b7280',
    reaction: { en: 'Oops... you\'re basically a', zh: 'Oops...我竟然只是' },
    description: {
      en: 'You\'re like an early AI — you know the basics, but there\'s a whole universe to explore!',
      zh: '目前大概在AI的"婴儿期"，基础知识有一些，但宝藏还多着呢！'
    },
    funFact: {
      en: 'GPT-2 (2019) could write decent text but often went off the rails.',
      zh: 'GPT-2是2019年的产物，写东西还行，但经常自己聊着聊着就跑偏了'
    }
  },
  {
    id: 'gpt3',
    name: 'GPT-3',
    scoreRange: [16, 30],
    emoji: '🧠',
    color: '#3b82f6',
    reaction: { en: 'Not bad — you match', zh: '嗯...我的水平大概是' },
    description: {
      en: 'Solid foundation! You\'ve got a good grasp of common knowledge, like GPT-3 when it first blew minds.',
      zh: '底子不错！常识储备在线，相当于GPT-3刚出来惊艳全场的水平'
    },
    funFact: {
      en: 'GPT-3 (2020) had 175B parameters and could write essays, code, and poetry.',
      zh: 'GPT-3有1750亿参数，当年它能写作文、写代码、还能写诗，直接封神'
    }
  },
  {
    id: 'gpt35',
    name: 'GPT-3.5',
    scoreRange: [31, 45],
    emoji: '⚡',
    color: '#10b981',
    reaction: { en: 'Hey, you\'re at', zh: '还不错嘛，解锁了' },
    description: {
      en: 'You\'re ChatGPT-level! Quick, versatile, and can handle most everyday knowledge questions.',
      zh: '恭喜解锁ChatGPT段位！反应快、啥都能聊，日常知识基本难不倒你'
    },
    funFact: {
      en: 'GPT-3.5 powered the original ChatGPT that took the world by storm in late 2022.',
      zh: 'GPT-3.5就是2022年底爆火的ChatGPT背后那个模型，两个月破亿用户'
    }
  },
  {
    id: 'gpt4',
    name: 'GPT-4',
    scoreRange: [46, 60],
    emoji: '🔬',
    color: '#8b5cf6',
    reaction: { en: 'Impressive — you rival', zh: '我的智力水平竟然堪比' },
    description: {
      en: 'Impressive! You have deep, cross-domain knowledge. GPT-4 level means you can handle complex reasoning.',
      zh: '跨领域知识扎实，复杂推理也能hold住，妥妥的GPT-4选手'
    },
    funFact: {
      en: 'GPT-4 (2023) could pass the bar exam and score in the top percentiles on standardized tests.',
      zh: 'GPT-4能通过美国律师资格考试，标准化考试秒杀90%考生'
    }
  },
  {
    id: 'claude-sonnet',
    name: 'Claude Sonnet',
    scoreRange: [61, 72],
    emoji: '🎭',
    color: '#d97706',
    reaction: { en: 'Nice! My thinking style is close to', zh: '有点小骄傲，我的思维风格接近' },
    description: {
      en: 'You think like Claude Sonnet — sharp, nuanced, with great attention to detail and a warm touch.',
      zh: '思维有温度！像Claude Sonnet一样——细腻、有洞察力，AI界的"文艺青年"'
    },
    funFact: {
      en: 'Claude is known for being especially thoughtful, careful about safety, and surprisingly "human" in tone.',
      zh: 'Claude最大的特点就是说话特别有人味儿，是公认最像真人聊天的AI'
    }
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    scoreRange: [73, 80],
    emoji: '💎',
    color: '#4285f4',
    reaction: { en: 'Wow — you know a bit about everything, like', zh: '哇，各种都懂一点，我约等于' },
    description: {
      en: 'You\'re Gemini Pro level — broad knowledge across many domains with strong multimodal understanding.',
      zh: '知识面真的广！各个领域都能接住，就像Gemini——谷歌家的"六边形战士"'
    },
    funFact: {
      en: 'Gemini is Google\'s most capable AI family, designed to be natively multimodal.',
      zh: 'Gemini是谷歌的王牌AI，天生就能同时处理文字、图片、代码、视频'
    }
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek-R1',
    scoreRange: [81, 88],
    emoji: '🔮',
    color: '#ef4444',
    reaction: { en: 'Incredible — your brain rivals', zh: '理科大佬本佬，我堪比' },
    description: {
      en: 'DeepSeek-R1 level! You excel at deep reasoning, especially in math and logic. A true analytical mind.',
      zh: '理科大佬无疑了。深度推理拉满，数学逻辑尤其能打——DeepSeek-R1同款大脑'
    },
    funFact: {
      en: 'DeepSeek-R1 shocked the AI world with its open-source reasoning capabilities rivaling top models.',
      zh: 'DeepSeek-R1用开源硬刚闭源大厂，推理能力直接对标GPT-o1，震惊整个AI圈'
    }
  },
  {
    id: 'claude-opus',
    name: 'Claude Opus',
    scoreRange: [89, 95],
    emoji: '👑',
    color: '#a855f7',
    reaction: { en: 'Unreal — you\'re at the level of', zh: '离谱了...我竟然堪比' },
    description: {
      en: 'You\'re Claude Opus level — the pinnacle of nuanced thinking, deep reasoning, and encyclopedic knowledge!',
      zh: '知识储备真的离谱。深度推理+百科全书+细腻表达=Claude Opus，顶级中的顶级'
    },
    funFact: {
      en: 'Claude Opus is Anthropic\'s most powerful model, known for exceptional reasoning and thoughtful responses.',
      zh: 'Claude Opus是Anthropic的旗舰模型，以"会思考、有深度、像真人"著称'
    }
  },
  {
    id: 'gpt5',
    name: 'GPT-5',
    scoreRange: [96, 100],
    emoji: '🚀',
    color: '#00f0ff',
    reaction: { en: 'No way — you\'re basically', zh: '啊？？我竟然是' },
    description: {
      en: 'You\'ve reached GPT-5 level — you\'re essentially a walking AI! Are you sure you\'re human?',
      zh: '确定不是AI来卧底的？？这个分数已经超越了绝大多数大模型，你就是行走的GPT-5'
    },
    funFact: {
      en: 'GPT-5 represents the bleeding edge of AI capability. Scoring this high means you\'re truly exceptional!',
      zh: 'GPT-5代表AI最前沿的能力。能拿到这个分，要么你是天才，要么你是AI假扮的'
    }
  }
]

export function getModelByScore(score) {
  return aiModels.find(m => score >= m.scoreRange[0] && score <= m.scoreRange[1])
    || aiModels[aiModels.length - 1]
}

/**
 * Thinking styles based on category performance
 */
export const thinkingStyles = [
  {
    id: 'claude',
    name: { en: 'Claude Style', zh: 'Claude 型人格' },
    icon: '🎭',
    color: '#d97706',
    description: {
      en: 'Warm, nuanced, human-like reasoning. You excel at language and empathy.',
      zh: '有温度、有共情力，说话像真人。语言和创意是你的主场'
    },
    check: (scores) => (scores.language || 0) + (scores.creativity || 0)
  },
  {
    id: 'deepseek',
    name: { en: 'DeepSeek Style', zh: 'DeepSeek 型人格' },
    icon: '🔮',
    color: '#ef4444',
    description: {
      en: 'Rigorous logic, strong mathematical reasoning. You think like a theorem prover.',
      zh: '逻辑怪+理科脑，推理链条严丝合缝。遇到数学题两眼放光的那种'
    },
    check: (scores) => (scores.logic || 0) + (scores.coding || 0)
  },
  {
    id: 'gemini',
    name: { en: 'Gemini Style', zh: 'Gemini 型人格' },
    icon: '💎',
    color: '#4285f4',
    description: {
      en: 'Broad knowledge across many domains. You know a little about everything!',
      zh: '啥都知道一点，聊啥都能接住。朋友圈里的"万事通"说的就是你'
    },
    check: (scores) => (scores.general || 0) + (scores.history || 0) + (scores.science || 0) * 0.5
  },
  {
    id: 'gpt',
    name: { en: 'GPT Style', zh: 'GPT 型人格' },
    icon: '🤖',
    color: '#10b981',
    description: {
      en: 'Well-rounded and balanced. You\'re an encyclopedic all-rounder.',
      zh: '六边形战士，没有明显短板。什么题都能做，稳得一批'
    },
    check: (scores) => {
      const vals = Object.values(scores)
      if (vals.length === 0) return 0
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length
      const variance = vals.reduce((sum, v) => sum + (v - avg) ** 2, 0) / vals.length
      return avg * 2 - Math.sqrt(variance) * 3
    }
  }
]

export function getThinkingStyle(categoryScores) {
  let best = thinkingStyles[0]
  let bestScore = -Infinity
  for (const style of thinkingStyles) {
    const score = style.check(categoryScores)
    if (score > bestScore) {
      bestScore = score
      best = style
    }
  }
  return best
}
