/**
 * Specialized deep-dive quizzes
 * Each specialization has its own question bank + fine-tuned model tiers
 */

export const specializations = [
  {
    id: 'math-physics',
    icon: '🔬',
    color: '#00f0ff',
    name: { en: 'Math & Physics', zh: '数理基础' },
    subtitle: { en: 'Deep math + physics reasoning', zh: '数学推理 + 物理直觉' },
    models: [
      { name: 'Calculator App', scoreRange: [0, 20], emoji: '🔢', reaction: { en: 'You\'re basically a', zh: '你大概是个' } },
      { name: 'Wolfram Alpha', scoreRange: [21, 45], emoji: '📐', reaction: { en: 'You rival', zh: '你的水平约等于' } },
      { name: 'GPT-4 Math', scoreRange: [46, 65], emoji: '🧮', reaction: { en: 'Impressive — you match', zh: '不错嘛，堪比' } },
      { name: 'DeepSeek-R1', scoreRange: [66, 85], emoji: '🔮', reaction: { en: 'You rival', zh: '你竟然堪比' } },
      { name: 'Minerva (Google)', scoreRange: [86, 100], emoji: '👑', reaction: { en: 'Unreal — you\'re at', zh: '离谱了，你就是' } }
    ]
  },
  {
    id: 'bio-medical',
    icon: '🧬',
    color: '#39ff14',
    name: { en: 'Bio & Medical', zh: '生物医学' },
    subtitle: { en: 'Biology, genetics, medicine', zh: '生物 + 遗传学 + 医学' },
    models: [
      { name: 'WebMD Bot', scoreRange: [0, 20], emoji: '🩹', reaction: { en: 'You\'re basically', zh: '你大概是' } },
      { name: 'GPT-3.5 Bio', scoreRange: [21, 45], emoji: '🔬', reaction: { en: 'You match', zh: '你约等于' } },
      { name: 'GPT-4 Medical', scoreRange: [46, 65], emoji: '🏥', reaction: { en: 'Nice — you rival', zh: '不赖，堪比' } },
      { name: 'Med-PaLM 2', scoreRange: [66, 85], emoji: '🧪', reaction: { en: 'Wow — you\'re at', zh: '厉害了，你达到了' } },
      { name: 'AlphaFold-level', scoreRange: [86, 100], emoji: '🧬', reaction: { en: 'Insane — you\'re basically', zh: '逆天了，你简直是' } }
    ]
  },
  {
    id: 'chinese-culture',
    icon: '🏯',
    color: '#ef4444',
    name: { en: 'Chinese Culture', zh: '中国传统文化' },
    subtitle: { en: 'Poetry, history, philosophy', zh: '诗词 + 历史 + 哲学' },
    models: [
      { name: 'Google Translate', scoreRange: [0, 20], emoji: '📱', reaction: { en: 'You\'re like', zh: '你大概是' } },
      { name: 'GPT-4 Chinese', scoreRange: [21, 45], emoji: '📖', reaction: { en: 'You match', zh: '你约等于' } },
      { name: 'Ernie Bot', scoreRange: [46, 65], emoji: '🐉', reaction: { en: 'You rival', zh: '你堪比' } },
      { name: 'Doubao (豆包)', scoreRange: [66, 85], emoji: '🏮', reaction: { en: 'Impressive — you\'re at', zh: '你竟然达到了' } },
      { name: 'Chinese Scholar AI', scoreRange: [86, 100], emoji: '🎓', reaction: { en: 'Unbelievable — you ARE', zh: '离谱...你就是活的' } }
    ]
  },
  {
    id: 'advanced-coding',
    icon: '💻',
    color: '#a855f7',
    name: { en: 'Advanced Coding', zh: '编程深度' },
    subtitle: { en: 'Algorithms, systems, AI/ML', zh: '算法 + 系统设计 + AI/ML' },
    models: [
      { name: 'StackOverflow Copy', scoreRange: [0, 20], emoji: '📋', reaction: { en: 'You\'re basically', zh: '你大概是' } },
      { name: 'GitHub Copilot', scoreRange: [21, 45], emoji: '🤖', reaction: { en: 'You match', zh: '你约等于' } },
      { name: 'GPT-4 Coder', scoreRange: [46, 65], emoji: '⚡', reaction: { en: 'You rival', zh: '你堪比' } },
      { name: 'Claude Opus Coder', scoreRange: [66, 85], emoji: '🎭', reaction: { en: 'Wow — you\'re at', zh: '你竟然达到了' } },
      { name: 'Devin-level', scoreRange: [86, 100], emoji: '👑', reaction: { en: 'Unreal — you\'re basically', zh: '逆天了...你简直是' } }
    ]
  },
  {
    id: 'world-history',
    icon: '🌍',
    color: '#f59e0b',
    name: { en: 'World History', zh: '世界历史' },
    subtitle: { en: 'Wars, empires, revolutions', zh: '战争 + 帝国 + 革命' },
    models: [
      { name: 'Wikipedia Random', scoreRange: [0, 20], emoji: '📰', reaction: { en: 'You\'re like', zh: '你大概是' } },
      { name: 'GPT-3.5 History', scoreRange: [21, 45], emoji: '📚', reaction: { en: 'You match', zh: '你约等于' } },
      { name: 'GPT-4 Scholar', scoreRange: [46, 65], emoji: '🎓', reaction: { en: 'You rival', zh: '你堪比' } },
      { name: 'Claude Historian', scoreRange: [66, 85], emoji: '🏛️', reaction: { en: 'Impressive — you\'re at', zh: '你竟然达到了' } },
      { name: 'Omniscient AI', scoreRange: [86, 100], emoji: '👑', reaction: { en: 'Unreal — you ARE', zh: '离谱...你简直是' } }
    ]
  },
  {
    id: 'art-literature',
    icon: '🎨',
    color: '#ff2d7b',
    name: { en: 'Art & Literature', zh: '艺术文学' },
    subtitle: { en: 'Painting, music, novels', zh: '绘画 + 音乐 + 文学' },
    models: [
      { name: 'Emoji Art Bot', scoreRange: [0, 20], emoji: '🖍️', reaction: { en: 'You\'re basically', zh: '你大概是' } },
      { name: 'DALL-E Prompt', scoreRange: [21, 45], emoji: '🎭', reaction: { en: 'You match', zh: '你约等于' } },
      { name: 'Claude Creative', scoreRange: [46, 65], emoji: '✨', reaction: { en: 'You rival', zh: '你堪比' } },
      { name: 'GPT-4 Art Critic', scoreRange: [66, 85], emoji: '🏆', reaction: { en: 'Wow — you\'re at', zh: '你竟然达到了' } },
      { name: 'Renaissance AI', scoreRange: [86, 100], emoji: '👑', reaction: { en: 'Unreal — you ARE', zh: '离谱...你简直是' } }
    ]
  }
]

/**
 * Specialized questions per topic
 */
export const specialQuestions = {
  'math-physics': [
    {
      id: 's-mp-1', difficulty: 1,
      text: { en: 'What is the derivative of x²?', zh: 'x²的导数是什么？' },
      options: { en: ['2x', 'x', '2x²', 'x³'], zh: ['2x', 'x', '2x²', 'x³'] },
      correctIndex: 0
    },
    {
      id: 's-mp-2', difficulty: 2,
      text: { en: 'What is the integral of 1/x?', zh: '1/x的不定积分是什么？' },
      options: { en: ['ln|x| + C', '1/x² + C', 'x + C', '-1/x² + C'], zh: ['ln|x| + C', '1/x² + C', 'x + C', '-1/x² + C'] },
      correctIndex: 0
    },
    {
      id: 's-mp-3', difficulty: 3,
      text: { en: 'What is Euler\'s identity?', zh: '欧拉恒等式是什么？' },
      options: {
        en: ['e^(iπ) + 1 = 0', 'e^(iπ) = 1', 'e^π = -1', 'e^i = π'],
        zh: ['e^(iπ) + 1 = 0', 'e^(iπ) = 1', 'e^π = -1', 'e^i = π']
      },
      correctIndex: 0
    },
    {
      id: 's-mp-4', difficulty: 2,
      text: { en: 'F = ma is which law of Newton?', zh: 'F = ma 是牛顿第几定律？' },
      options: { en: ['Second', 'First', 'Third', 'Fourth'], zh: ['第二定律', '第一定律', '第三定律', '第四定律'] },
      correctIndex: 0
    },
    {
      id: 's-mp-5', difficulty: 3,
      text: { en: 'What is the Schrödinger equation primarily used for?', zh: '薛定谔方程主要用于什么？' },
      options: {
        en: ['Describing quantum state evolution', 'Calculating gravity', 'Predicting weather', 'Modeling fluid dynamics'],
        zh: ['描述量子态的演化', '计算引力', '天气预测', '流体动力学建模']
      },
      correctIndex: 0
    },
    {
      id: 's-mp-6', difficulty: 4,
      text: { en: 'What is the eigenvalue problem in linear algebra?', zh: '线性代数中特征值问题是什么？' },
      options: {
        en: ['Finding λ where Av = λv', 'Solving Ax = b', 'Computing determinants', 'Row reduction'],
        zh: ['找到满足Av = λv的λ', '求解Ax = b', '计算行列式', '行化简']
      },
      correctIndex: 0
    },
    {
      id: 's-mp-7', difficulty: 5,
      text: { en: 'What does the Fourier Transform decompose a function into?', zh: '傅里叶变换将函数分解为什么？' },
      options: {
        en: ['Sum of sinusoidal waves at different frequencies', 'Taylor series polynomials', 'Matrix eigenvalues', 'Differential equations'],
        zh: ['不同频率的正弦波之和', '泰勒级数多项式', '矩阵特征值', '微分方程']
      },
      correctIndex: 0
    },
    {
      id: 's-mp-8', difficulty: 3,
      text: { en: 'What is the speed of sound in air (approx)?', zh: '声音在空气中的速度大约是多少？' },
      options: {
        en: ['343 m/s', '1000 m/s', '100 m/s', '3000 m/s'],
        zh: ['343 米/秒', '1000 米/秒', '100 米/秒', '3000 米/秒']
      },
      correctIndex: 0
    },
    {
      id: 's-mp-9', difficulty: 4,
      text: { en: 'What is the divergence theorem (Gauss\'s theorem)?', zh: '散度定理（高斯定理）说的是什么？' },
      options: {
        en: ['Volume integral of divergence = surface flux integral', 'Every field has zero curl', 'Energy is conserved in closed systems', 'All vectors can be decomposed into 3 components'],
        zh: ['散度的体积分 = 曲面通量积分', '所有场的旋度为零', '封闭系统能量守恒', '所有向量可分解为3个分量']
      },
      correctIndex: 0
    },
    {
      id: 's-mp-10', difficulty: 5,
      text: { en: 'What is the Riemann Hypothesis about?', zh: '黎曼猜想讨论的是什么？' },
      options: {
        en: ['Non-trivial zeros of zeta function all have real part 1/2', 'There are infinitely many primes', 'Pi is irrational', 'Every even number is the sum of two primes'],
        zh: ['ζ函数非平凡零点的实部都是1/2', '素数有无穷多', 'π是无理数', '每个偶数都是两个素数之和']
      },
      correctIndex: 0
    },
    {
      id: 's-mp-11', difficulty: 1,
      text: { en: 'What is the Pythagorean theorem?', zh: '勾股定理的公式是什么？' },
      options: { en: ['a² + b² = c²', 'a + b = c', 'a² = b² + c²', 'a × b = c²'], zh: ['a² + b² = c²', 'a + b = c', 'a² = b² + c²', 'a × b = c²'] },
      correctIndex: 0
    },
    {
      id: 's-mp-12', difficulty: 4,
      text: { en: 'What is special about e (Euler\'s number)?', zh: '自然常数e有什么特殊之处？' },
      options: {
        en: ['Its derivative equals itself: d/dx(eˣ) = eˣ', 'It equals exactly 3', 'It is rational', 'It was discovered by Newton'],
        zh: ['它的导数等于自身：d/dx(eˣ) = eˣ', '它恰好等于3', '它是有理数', '它由牛顿发现']
      },
      correctIndex: 0
    },
    {
      id: 's-mp-13', difficulty: 5,
      text: { en: 'In general relativity, what causes gravity?', zh: '在广义相对论中，引力的本质是什么？' },
      options: {
        en: ['Curvature of spacetime caused by mass/energy', 'Exchange of gravitons', 'Electromagnetic attraction', 'Dark matter interaction'],
        zh: ['质量/能量导致的时空弯曲', '引力子的交换', '电磁吸引', '暗物质的相互作用']
      },
      correctIndex: 0
    },
    {
      id: 's-mp-14', difficulty: 2,
      text: { en: 'What is the value of π (pi) to 2 decimal places?', zh: 'π精确到小数点后两位是多少？' },
      options: { en: ['3.14', '3.41', '3.12', '3.16'], zh: ['3.14', '3.41', '3.12', '3.16'] },
      correctIndex: 0
    },
    {
      id: 's-mp-15', difficulty: 3,
      text: { en: 'What is the law of conservation of energy?', zh: '能量守恒定律说的是什么？' },
      options: {
        en: ['Energy cannot be created or destroyed, only transformed', 'Energy always increases', 'Energy only exists as heat', 'Energy is always conserved as motion'],
        zh: ['能量不能被创造或消灭，只能转化', '能量总是增加', '能量只以热的形式存在', '能量总是以运动的形式守恒']
      },
      correctIndex: 0
    }
  ],

  'bio-medical': [
    {
      id: 's-bm-1', difficulty: 1,
      text: { en: 'What is DNA?', zh: 'DNA是什么？' },
      options: {
        en: ['Deoxyribonucleic acid — carries genetic information', 'A type of protein', 'A vitamin', 'A type of cell'],
        zh: ['脱氧核糖核酸——携带遗传信息', '一种蛋白质', '一种维生素', '一种细胞']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-2', difficulty: 2,
      text: { en: 'What are mitochondria often called?', zh: '线粒体常被称为什么？' },
      options: {
        en: ['The powerhouse of the cell', 'The brain of the cell', 'The wall of the cell', 'The skeleton of the cell'],
        zh: ['细胞的发电站', '细胞的大脑', '细胞的围墙', '细胞的骨架']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-3', difficulty: 3,
      text: { en: 'What is the central dogma of molecular biology?', zh: '分子生物学的中心法则是什么？' },
      options: {
        en: ['DNA → RNA → Protein', 'Protein → RNA → DNA', 'RNA → DNA → Protein', 'DNA → Protein → RNA'],
        zh: ['DNA → RNA → 蛋白质', '蛋白质 → RNA → DNA', 'RNA → DNA → 蛋白质', 'DNA → 蛋白质 → RNA']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-4', difficulty: 4,
      text: { en: 'What does CRISPR-Cas9 do in gene editing?', zh: 'CRISPR-Cas9在基因编辑中的作用是什么？' },
      options: {
        en: ['Acts as molecular scissors to cut DNA at specific locations', 'Creates new chromosomes', 'Destroys all viruses', 'Increases cell division speed'],
        zh: ['作为分子剪刀在特定位置切割DNA', '创造新的染色体', '消灭所有病毒', '加速细胞分裂']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-5', difficulty: 5,
      text: { en: 'What is apoptosis?', zh: '什么是细胞凋亡（apoptosis）？' },
      options: {
        en: ['Programmed cell death', 'Cell division', 'Cell mutation', 'Cell migration'],
        zh: ['程序性细胞死亡', '细胞分裂', '细胞突变', '细胞迁移']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-6', difficulty: 2,
      text: { en: 'How many chromosomes do humans normally have?', zh: '正常人有多少条染色体？' },
      options: { en: ['46', '23', '48', '44'], zh: ['46条', '23条', '48条', '44条'] },
      correctIndex: 0
    },
    {
      id: 's-bm-7', difficulty: 3,
      text: { en: 'What is an mRNA vaccine?', zh: 'mRNA疫苗的原理是什么？' },
      options: {
        en: ['Instructs cells to produce a protein that triggers immune response', 'Injects weakened virus directly', 'Uses antibiotics to fight virus', 'Modifies DNA permanently'],
        zh: ['指导细胞产生蛋白质来触发免疫反应', '直接注射减毒病毒', '用抗生素对抗病毒', '永久修改DNA']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-8', difficulty: 4,
      text: { en: 'What is the function of telomeres?', zh: '端粒的功能是什么？' },
      options: {
        en: ['Protect chromosome ends from degradation during replication', 'Encode essential proteins', 'Produce energy', 'Fight infections'],
        zh: ['保护染色体末端在复制中不被降解', '编码必需蛋白质', '产生能量', '对抗感染']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-9', difficulty: 5,
      text: { en: 'What is epigenetics?', zh: '表观遗传学研究的是什么？' },
      options: {
        en: ['Heritable changes in gene expression without altering DNA sequence', 'Study of epidemics', 'A branch of geology', 'The study of enzymes'],
        zh: ['不改变DNA序列的可遗传基因表达变化', '流行病研究', '地质学的一个分支', '酶的研究']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-10', difficulty: 1,
      text: { en: 'What organ pumps blood through the body?', zh: '哪个器官负责将血液泵向全身？' },
      options: { en: ['Heart', 'Liver', 'Brain', 'Kidneys'], zh: ['心脏', '肝脏', '大脑', '肾脏'] },
      correctIndex: 0
    },
    {
      id: 's-bm-11', difficulty: 3,
      text: { en: 'What is the difference between bacteria and viruses?', zh: '细菌和病毒有什么区别？' },
      options: {
        en: ['Bacteria are living cells; viruses need a host to replicate', 'They are the same thing', 'Viruses are larger than bacteria', 'Bacteria cannot cause disease'],
        zh: ['细菌是活细胞；病毒需要宿主才能复制', '它们是同一种东西', '病毒比细菌大', '细菌不能致病']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-12', difficulty: 4,
      text: { en: 'What is the blood-brain barrier?', zh: '血脑屏障是什么？' },
      options: {
        en: ['A selective membrane protecting the brain from harmful substances in blood', 'A bone protecting the brain', 'The skull', 'A type of neuron'],
        zh: ['一层选择性膜，保护大脑免受血液中有害物质的侵害', '保护大脑的骨头', '颅骨', '一种神经元']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-13', difficulty: 5,
      text: { en: 'What is a prion?', zh: '朊病毒（prion）是什么？' },
      options: {
        en: ['A misfolded protein that can cause disease by converting normal proteins', 'A type of bacteria', 'A small virus', 'A genetic mutation'],
        zh: ['一种错误折叠的蛋白质，能将正常蛋白质转化为致病形式', '一种细菌', '一种小型病毒', '一种基因突变']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-14', difficulty: 2,
      text: { en: 'What is photosynthesis?', zh: '光合作用是什么？' },
      options: {
        en: ['Plants converting sunlight, CO2, and water into glucose and O2', 'Animals digesting food', 'Rocks breaking down', 'Clouds forming rain'],
        zh: ['植物将阳光、CO2和水转化为葡萄糖和O2', '动物消化食物', '岩石风化', '云形成雨']
      },
      correctIndex: 0
    },
    {
      id: 's-bm-15', difficulty: 3,
      text: { en: 'What type of immunity does a vaccine provide?', zh: '疫苗提供的是哪种免疫？' },
      options: {
        en: ['Active acquired immunity', 'Passive immunity', 'Innate immunity', 'No immunity'],
        zh: ['主动获得性免疫', '被动免疫', '先天免疫', '不产生免疫']
      },
      correctIndex: 0
    }
  ],

  'chinese-culture': [
    {
      id: 's-cc-1', difficulty: 1,
      text: { en: 'Which is NOT one of China\'s Four Great Inventions?', zh: '以下哪个不是中国的四大发明？' },
      options: {
        en: ['Silk weaving', 'Papermaking', 'Gunpowder', 'Compass'],
        zh: ['丝绸纺织', '造纸术', '火药', '指南针']
      },
      correctIndex: 0
    },
    {
      id: 's-cc-2', difficulty: 2,
      text: { en: '"To be is to be perceived" is from which philosopher? But "知之为知之" is from...', zh: '"知之为知之，不知为不知"出自谁？' },
      options: { en: ['Confucius', 'Laozi', 'Zhuangzi', 'Mencius'], zh: ['孔子', '老子', '庄子', '孟子'] },
      correctIndex: 0
    },
    {
      id: 's-cc-3', difficulty: 3,
      text: { en: 'Which dynasty is considered China\'s golden age of poetry?', zh: '哪个朝代被认为是中国诗歌的黄金时代？' },
      options: { en: ['Tang Dynasty', 'Song Dynasty', 'Han Dynasty', 'Ming Dynasty'], zh: ['唐朝', '宋朝', '汉朝', '明朝'] },
      correctIndex: 0
    },
    {
      id: 's-cc-4', difficulty: 2,
      text: { en: '"道可道，非常道" is the opening of which text?', zh: '"道可道，非常道"出自哪部经典？' },
      options: { en: ['Tao Te Ching', 'Analerta', 'Art of War', 'I Ching'], zh: ['《道德经》', '《论语》', '《孙子兵法》', '《易经》'] },
      correctIndex: 0
    },
    {
      id: 's-cc-5', difficulty: 4,
      text: { en: 'Which poet wrote "静夜思" (Quiet Night Thought)?', zh: '《静夜思》的作者是谁？' },
      options: { en: ['Li Bai', 'Du Fu', 'Wang Wei', 'Bai Juyi'], zh: ['李白', '杜甫', '王维', '白居易'] },
      correctIndex: 0
    },
    {
      id: 's-cc-6', difficulty: 3,
      text: { en: 'What are the Five Elements (五行) in Chinese philosophy?', zh: '中国哲学中的"五行"是什么？' },
      options: {
        en: ['Metal, Wood, Water, Fire, Earth', 'Earth, Wind, Fire, Water, Air', 'Gold, Silver, Bronze, Iron, Steel', 'Sun, Moon, Star, Cloud, Rain'],
        zh: ['金、木、水、火、土', '土、风、火、水、气', '金、银、铜、铁、钢', '日、月、星、云、雨']
      },
      correctIndex: 0
    },
    {
      id: 's-cc-7', difficulty: 5,
      text: { en: 'In "红楼梦", what is the name of the main female lead?', zh: '《红楼梦》的女主角是谁？' },
      options: { en: ['Lin Daiyu', 'Wang Xifeng', 'Xue Baochai', 'Jia Yuanchun'], zh: ['林黛玉', '王熙凤', '薛宝钗', '贾元春'] },
      correctIndex: 0
    },
    {
      id: 's-cc-8', difficulty: 4,
      text: { en: 'What is the significance of the number 9 in Chinese culture?', zh: '数字"9"在中国文化中有什么特殊含义？' },
      options: {
        en: ['Associated with the emperor and longevity (久/nine homophone)', 'It is unlucky', 'It represents death', 'No special meaning'],
        zh: ['与皇帝和长久相关（九与久谐音）', '它是不吉利的', '它代表死亡', '没有特殊含义']
      },
      correctIndex: 0
    },
    {
      id: 's-cc-9', difficulty: 3,
      text: { en: 'What is Chinese calligraphy\'s "Four Treasures of the Study"?', zh: '"文房四宝"指的是什么？' },
      options: {
        en: ['Brush, ink, paper, inkstone', 'Book, pen, desk, lamp', 'Scroll, seal, fan, vase', 'Silk, jade, gold, bronze'],
        zh: ['笔、墨、纸、砚', '书、笔、桌、灯', '卷轴、印章、扇子、花瓶', '丝绸、玉、金、铜']
      },
      correctIndex: 0
    },
    {
      id: 's-cc-10', difficulty: 5,
      text: { en: 'What is "格物致知" about?', zh: '"格物致知"的含义是什么？' },
      options: {
        en: ['Investigating things to acquire knowledge (Neo-Confucian epistemology)', 'Physical exercise for wisdom', 'Meditation for enlightenment', 'Government reform theory'],
        zh: ['通过研究事物来获得知识（理学认识论）', '通过体育锻炼获得智慧', '通过冥想获得开悟', '政府改革理论']
      },
      correctIndex: 0
    },
    {
      id: 's-cc-11', difficulty: 1,
      text: { en: 'Which animal is the first in the Chinese zodiac?', zh: '十二生肖中排第一的是什么动物？' },
      options: { en: ['Rat', 'Dragon', 'Tiger', 'Ox'], zh: ['鼠', '龙', '虎', '牛'] },
      correctIndex: 0
    },
    {
      id: 's-cc-12', difficulty: 4,
      text: { en: 'What is the core concept of "中庸" (Doctrine of the Mean)?', zh: '"中庸"的核心思想是什么？' },
      options: {
        en: ['Maintaining harmony through moderation and balance', 'Always choosing the extreme position', 'Being average in everything', 'Obedience to authority'],
        zh: ['通过适度和平衡来保持和谐', '总是选择极端立场', '事事求平庸', '服从权威']
      },
      correctIndex: 0
    },
    {
      id: 's-cc-13', difficulty: 2,
      text: { en: 'Which festival involves eating mooncakes?', zh: '哪个节日要吃月饼？' },
      options: { en: ['Mid-Autumn Festival', 'Spring Festival', 'Dragon Boat Festival', 'Lantern Festival'], zh: ['中秋节', '春节', '端午节', '元宵节'] },
      correctIndex: 0
    },
    {
      id: 's-cc-14', difficulty: 5,
      text: { en: 'What is "天人合一" in Chinese philosophy?', zh: '"天人合一"的哲学含义是什么？' },
      options: {
        en: ['Unity of heaven and humanity — humans should live in harmony with nature', 'Humans should conquer nature', 'Heaven controls all human affairs', 'Humans and gods are the same'],
        zh: ['人与自然和谐统一——人应与自然共生', '人应该征服自然', '上天控制人间一切', '人和神是一样的']
      },
      correctIndex: 0
    },
    {
      id: 's-cc-15', difficulty: 3,
      text: { en: 'Who unified China for the first time?', zh: '谁第一次统一了中国？' },
      options: { en: ['Qin Shi Huang', 'Emperor Wu of Han', 'Genghis Khan', 'Emperor Taizong of Tang'], zh: ['秦始皇', '汉武帝', '成吉思汗', '唐太宗'] },
      correctIndex: 0
    }
  ],

  'advanced-coding': [
    {
      id: 's-ac-1', difficulty: 2,
      text: { en: 'What is the time complexity of quicksort on average?', zh: '快速排序的平均时间复杂度是多少？' },
      options: { en: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'], zh: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'] },
      correctIndex: 0
    },
    {
      id: 's-ac-2', difficulty: 3,
      text: { en: 'What is a "race condition" in concurrent programming?', zh: '并发编程中的"竞态条件"是什么？' },
      options: {
        en: ['When outcome depends on unpredictable timing of multiple threads', 'When a program runs too fast', 'A type of sorting algorithm', 'When two programs compete for memory'],
        zh: ['当结果取决于多线程不可预测的时序', '程序运行太快', '一种排序算法', '两个程序争夺内存']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-3', difficulty: 4,
      text: { en: 'What is the CAP theorem about?', zh: 'CAP定理讨论的是什么？' },
      options: {
        en: ['A distributed system can only guarantee 2 of: Consistency, Availability, Partition tolerance', 'CPU, Architecture, Performance optimization', 'Cache invalidation strategies', 'Container orchestration principles'],
        zh: ['分布式系统只能同时满足一致性、可用性、分区容错性中的两个', 'CPU、架构、性能优化', '缓存失效策略', '容器编排原则']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-4', difficulty: 5,
      text: { en: 'What is the difference between TCP and UDP?', zh: 'TCP和UDP的区别是什么？' },
      options: {
        en: ['TCP is reliable/ordered; UDP is fast/unordered', 'They are identical protocols', 'UDP is more reliable than TCP', 'TCP is only for web browsing'],
        zh: ['TCP可靠有序；UDP快速无序', '它们是相同的协议', 'UDP比TCP更可靠', 'TCP只用于网页浏览']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-5', difficulty: 3,
      text: { en: 'What is dynamic programming?', zh: '动态规划是什么？' },
      options: {
        en: ['Solving problems by breaking them into overlapping subproblems and caching results', 'Writing code that changes at runtime', 'A type of web framework', 'Programming while exercising'],
        zh: ['将问题分解为重叠子问题并缓存结果来求解', '编写运行时可变的代码', '一种Web框架', '边运动边编程']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-6', difficulty: 4,
      text: { en: 'What is a "deadlock" in operating systems?', zh: '操作系统中的"死锁"是什么？' },
      options: {
        en: ['Two+ processes waiting for each other\'s resources indefinitely', 'A crashed program', 'A type of virus', 'When disk is full'],
        zh: ['两个或多个进程无限期地互相等待对方的资源', '程序崩溃', '一种病毒', '磁盘满了']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-7', difficulty: 5,
      text: { en: 'What is the Transformer\'s self-attention complexity for sequence length n?', zh: 'Transformer自注意力机制对于序列长度n的复杂度是多少？' },
      options: { en: ['O(n²)', 'O(n)', 'O(n log n)', 'O(1)'], zh: ['O(n²)', 'O(n)', 'O(n log n)', 'O(1)'] },
      correctIndex: 0
    },
    {
      id: 's-ac-8', difficulty: 2,
      text: { en: 'What does "git" primarily help with?', zh: '"git"主要用于什么？' },
      options: {
        en: ['Version control / tracking code changes', 'Writing code faster', 'Compiling programs', 'Designing UI'],
        zh: ['版本控制/追踪代码变更', '更快地编写代码', '编译程序', '设计UI']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-9', difficulty: 3,
      text: { en: 'What is a hash table\'s average lookup time complexity?', zh: '哈希表的平均查找时间复杂度是多少？' },
      options: { en: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], zh: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'] },
      correctIndex: 0
    },
    {
      id: 's-ac-10', difficulty: 4,
      text: { en: 'What is "gradient descent" in machine learning?', zh: '机器学习中的"梯度下降"是什么？' },
      options: {
        en: ['Optimization algorithm that iteratively adjusts parameters to minimize loss', 'A way to sort data', 'Drawing graphs', 'Decreasing image resolution'],
        zh: ['迭代调整参数以最小化损失的优化算法', '一种数据排序方式', '画图', '降低图片分辨率']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-11', difficulty: 5,
      text: { en: 'What problem does "eventual consistency" solve in distributed systems?', zh: '分布式系统中"最终一致性"解决的是什么问题？' },
      options: {
        en: ['Allows high availability by relaxing immediate consistency requirements', 'Makes data always immediately consistent', 'Prevents data loss', 'Speeds up single-node queries'],
        zh: ['通过放宽即时一致性要求来实现高可用', '让数据总是立即一致', '防止数据丢失', '加速单节点查询']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-12', difficulty: 1,
      text: { en: 'What is a variable in programming?', zh: '编程中的"变量"是什么？' },
      options: {
        en: ['A named container that stores a value', 'A type of computer', 'A programming language', 'A fixed constant'],
        zh: ['一个存储值的命名容器', '一种电脑', '一种编程语言', '一个固定常量']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-13', difficulty: 3,
      text: { en: 'What is Docker used for?', zh: 'Docker的用途是什么？' },
      options: {
        en: ['Containerizing applications for consistent deployment', 'Writing code', 'Managing databases only', 'Designing websites'],
        zh: ['将应用容器化以实现一致的部署', '编写代码', '仅管理数据库', '设计网站']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-14', difficulty: 4,
      text: { en: 'What is "backpropagation" in neural networks?', zh: '神经网络中的"反向传播"是什么？' },
      options: {
        en: ['Algorithm to compute gradients of the loss w.r.t. each weight using chain rule', 'Running the network backwards', 'A type of network topology', 'Sending data back to the user'],
        zh: ['用链式法则计算损失函数对每个权重的梯度的算法', '反向运行网络', '一种网络拓扑', '将数据发回给用户']
      },
      correctIndex: 0
    },
    {
      id: 's-ac-15', difficulty: 2,
      text: { en: 'What does SQL stand for?', zh: 'SQL的全称是什么？' },
      options: {
        en: ['Structured Query Language', 'Simple Question Language', 'System Query Logic', 'Standard Quick Language'],
        zh: ['结构化查询语言', '简单问题语言', '系统查询逻辑', '标准快速语言']
      },
      correctIndex: 0
    }
  ],

  'world-history': [
    {
      id: 's-wh-1', difficulty: 1,
      text: { en: 'Which war ended in 1945?', zh: '哪场战争在1945年结束？' },
      options: { en: ['World War II', 'World War I', 'Korean War', 'Vietnam War'], zh: ['第二次世界大战', '第一次世界大战', '朝鲜战争', '越南战争'] },
      correctIndex: 0
    },
    {
      id: 's-wh-2', difficulty: 2,
      text: { en: 'The French Revolution began in which year?', zh: '法国大革命开始于哪一年？' },
      options: { en: ['1789', '1776', '1804', '1815'], zh: ['1789年', '1776年', '1804年', '1815年'] },
      correctIndex: 0
    },
    {
      id: 's-wh-3', difficulty: 3,
      text: { en: 'Who was the first Emperor of Rome?', zh: '谁是罗马的第一位皇帝？' },
      options: { en: ['Augustus', 'Julius Caesar', 'Nero', 'Constantine'], zh: ['奥古斯都', '尤利乌斯·凯撒', '尼禄', '君士坦丁'] },
      correctIndex: 0
    },
    {
      id: 's-wh-4', difficulty: 4,
      text: { en: 'What was the primary cause of the fall of Constantinople in 1453?', zh: '1453年君士坦丁堡陷落的主要原因是什么？' },
      options: {
        en: ['Ottoman siege with advanced cannons', 'Internal civil war', 'Natural disaster', 'Economic collapse alone'],
        zh: ['奥斯曼帝国的火炮攻城', '内部内战', '自然灾害', '仅经济崩溃']
      },
      correctIndex: 0
    },
    {
      id: 's-wh-5', difficulty: 5,
      text: { en: 'What was the "Mandate of Heaven" in Chinese political philosophy?', zh: '"天命"在中国政治哲学中意味着什么？' },
      options: {
        en: ['Divine legitimacy granted to just rulers, withdrawn from tyrants', 'All emperors are gods', 'The emperor controls the weather', 'Heaven doesn\'t exist in Chinese philosophy'],
        zh: ['上天赋予正义统治者的合法性，暴君则会失去', '所有皇帝都是神', '皇帝能控制天气', '中国哲学中不存在"天"的概念']
      },
      correctIndex: 0
    },
    {
      id: 's-wh-6', difficulty: 2,
      text: { en: 'Who discovered the Americas in 1492?', zh: '谁在1492年发现了美洲？' },
      options: { en: ['Christopher Columbus', 'Marco Polo', 'Vasco da Gama', 'Ferdinand Magellan'], zh: ['哥伦布', '马可·波罗', '达伽马', '麦哲伦'] },
      correctIndex: 0
    },
    {
      id: 's-wh-7', difficulty: 3,
      text: { en: 'What was the Industrial Revolution primarily powered by?', zh: '工业革命主要靠什么驱动？' },
      options: {
        en: ['Steam engine and coal', 'Solar energy', 'Nuclear power', 'Wind power'],
        zh: ['蒸汽机和煤炭', '太阳能', '核能', '风力']
      },
      correctIndex: 0
    },
    {
      id: 's-wh-8', difficulty: 4,
      text: { en: 'What was the significance of the Treaty of Westphalia (1648)?', zh: '威斯特伐利亚和约（1648年）的历史意义是什么？' },
      options: {
        en: ['Established the modern concept of nation-state sovereignty', 'Ended World War I', 'Created the United Nations', 'Abolished slavery worldwide'],
        zh: ['确立了现代民族国家主权的概念', '结束了第一次世界大战', '创建了联合国', '在全世界废除了奴隶制']
      },
      correctIndex: 0
    },
    {
      id: 's-wh-9', difficulty: 5,
      text: { en: 'What triggered the chain of events leading to World War I?', zh: '什么事件引发了第一次世界大战？' },
      options: {
        en: ['Assassination of Archduke Franz Ferdinand + alliance system', 'Germany invaded France directly', 'Russian Revolution', 'The sinking of the Lusitania'],
        zh: ['弗朗茨·斐迪南大公遇刺 + 同盟体系', '德国直接入侵法国', '俄国革命', '卢西塔尼亚号沉没']
      },
      correctIndex: 0
    },
    {
      id: 's-wh-10', difficulty: 1,
      text: { en: 'Which civilization built the Colosseum?', zh: '哪个文明建造了罗马斗兽场？' },
      options: { en: ['Roman', 'Greek', 'Egyptian', 'Persian'], zh: ['罗马', '希腊', '埃及', '波斯'] },
      correctIndex: 0
    },
    {
      id: 's-wh-11', difficulty: 3,
      text: { en: 'What was the Cold War primarily between?', zh: '冷战主要是哪两方之间的对抗？' },
      options: {
        en: ['USA and Soviet Union', 'USA and China', 'UK and France', 'Germany and Japan'],
        zh: ['美国和苏联', '美国和中国', '英国和法国', '德国和日本']
      },
      correctIndex: 0
    },
    {
      id: 's-wh-12', difficulty: 4,
      text: { en: 'What was the significance of the Magna Carta (1215)?', zh: '《大宪章》（1215年）的意义是什么？' },
      options: {
        en: ['Limited the power of the English king, foundation of constitutional law', 'Declared England a republic', 'Established the Church of England', 'Started the Crusades'],
        zh: ['限制了英国国王的权力，是宪法法律的基础', '宣布英国为共和国', '建立了英国国教', '发起了十字军东征']
      },
      correctIndex: 0
    },
    {
      id: 's-wh-13', difficulty: 2,
      text: { en: 'The ancient Olympic Games originated in which country?', zh: '古代奥运会起源于哪个国家？' },
      options: { en: ['Greece', 'Rome', 'Egypt', 'China'], zh: ['希腊', '罗马', '埃及', '中国'] },
      correctIndex: 0
    },
    {
      id: 's-wh-14', difficulty: 5,
      text: { en: 'What was the "Scramble for Africa"?', zh: '"瓜分非洲"（Scramble for Africa）是什么？' },
      options: {
        en: ['European colonization/division of Africa in the late 19th century', 'African countries competing for resources', 'A marathon race across Africa', 'African unification movement'],
        zh: ['19世纪末欧洲列强对非洲的殖民瓜分', '非洲国家之间争夺资源', '穿越非洲的马拉松', '非洲统一运动']
      },
      correctIndex: 0
    },
    {
      id: 's-wh-15', difficulty: 3,
      text: { en: 'Who wrote "The Communist Manifesto"?', zh: '《共产党宣言》的作者是谁？' },
      options: { en: ['Marx and Engels', 'Lenin', 'Mao Zedong', 'Stalin'], zh: ['马克思和恩格斯', '列宁', '毛泽东', '斯大林'] },
      correctIndex: 0
    }
  ],

  'art-literature': [
    {
      id: 's-al-1', difficulty: 1,
      text: { en: 'Who wrote "Romeo and Juliet"?', zh: '《罗密欧与朱丽叶》的作者是谁？' },
      options: { en: ['Shakespeare', 'Dickens', 'Austen', 'Tolstoy'], zh: ['莎士比亚', '狄更斯', '奥斯汀', '托尔斯泰'] },
      correctIndex: 0
    },
    {
      id: 's-al-2', difficulty: 2,
      text: { en: 'Which art movement is Salvador Dalí associated with?', zh: '达利属于哪个艺术流派？' },
      options: { en: ['Surrealism', 'Impressionism', 'Cubism', 'Realism'], zh: ['超现实主义', '印象派', '立体主义', '现实主义'] },
      correctIndex: 0
    },
    {
      id: 's-al-3', difficulty: 3,
      text: { en: 'What is the "golden ratio" in art and design?', zh: '艺术设计中的"黄金比例"是什么？' },
      options: {
        en: ['Approximately 1.618:1 — found in nature and aesthetically pleasing compositions', 'Exactly 2:1', 'A type of paint', 'A color theory'],
        zh: ['约1.618:1——存在于自然界中，能产生美感', '恰好2:1', '一种颜料', '一种色彩理论']
      },
      correctIndex: 0
    },
    {
      id: 's-al-4', difficulty: 4,
      text: { en: 'Which novel begins with "It was the best of times, it was the worst of times"?', zh: '"这是最好的时代，这是最坏的时代"出自哪部小说？' },
      options: {
        en: ['A Tale of Two Cities', 'Great Expectations', 'Oliver Twist', '1984'],
        zh: ['《双城记》', '《远大前程》', '《雾都孤儿》', '《1984》']
      },
      correctIndex: 0
    },
    {
      id: 's-al-5', difficulty: 5,
      text: { en: 'What is "chiaroscuro" in painting?', zh: '绘画中的"明暗对照法"(chiaroscuro)是什么？' },
      options: {
        en: ['Use of strong contrasts between light and dark to create depth', 'A type of Italian pasta', 'A music composition style', 'A type of ceramic glaze'],
        zh: ['利用强烈的明暗对比来创造深度和立体感', '一种意大利面', '一种音乐作曲风格', '一种陶瓷釉']
      },
      correctIndex: 0
    },
    {
      id: 's-al-6', difficulty: 2,
      text: { en: 'Who composed "Für Elise"?', zh: '《致爱丽丝》是谁作曲的？' },
      options: { en: ['Beethoven', 'Mozart', 'Bach', 'Chopin'], zh: ['贝多芬', '莫扎特', '巴赫', '肖邦'] },
      correctIndex: 0
    },
    {
      id: 's-al-7', difficulty: 3,
      text: { en: 'What is "stream of consciousness" in literature?', zh: '文学中的"意识流"是什么？' },
      options: {
        en: ['A narrative mode that depicts the continuous flow of a character\'s thoughts', 'A type of river poetry', 'Writing only about water', 'A genre of science fiction'],
        zh: ['一种描绘人物思想连续流动的叙事方式', '一种关于河流的诗歌', '只写关于水的内容', '一种科幻小说类型']
      },
      correctIndex: 0
    },
    {
      id: 's-al-8', difficulty: 4,
      text: { en: 'Which painting style did Monet pioneer?', zh: '莫奈是哪种画派的先驱？' },
      options: { en: ['Impressionism', 'Expressionism', 'Abstract', 'Baroque'], zh: ['印象派', '表现主义', '抽象派', '巴洛克'] },
      correctIndex: 0
    },
    {
      id: 's-al-9', difficulty: 5,
      text: { en: 'What is the significance of Marcel Duchamp\'s "Fountain" (1917)?', zh: '杜尚的《泉》（1917年）在艺术史上的意义是什么？' },
      options: {
        en: ['Challenged the definition of art — a urinal as "readymade" art', 'It was the most expensive painting', 'It introduced a new painting technique', 'It depicted a beautiful fountain'],
        zh: ['挑战了艺术的定义——一个小便池作为"现成品"艺术', '它是最贵的画', '引入了一种新绘画技法', '它描绘了一个美丽的喷泉']
      },
      correctIndex: 0
    },
    {
      id: 's-al-10', difficulty: 1,
      text: { en: 'What is a haiku?', zh: '俳句是什么？' },
      options: {
        en: ['A Japanese poem with 5-7-5 syllable structure', 'A Chinese martial art', 'A type of dance', 'A Korean folk song'],
        zh: ['一种5-7-5音节结构的日本短诗', '一种中国武术', '一种舞蹈', '一种韩国民歌']
      },
      correctIndex: 0
    },
    {
      id: 's-al-11', difficulty: 3,
      text: { en: 'Who wrote "One Hundred Years of Solitude"?', zh: '《百年孤独》的作者是谁？' },
      options: { en: ['Gabriel García Márquez', 'Pablo Neruda', 'Jorge Luis Borges', 'Isabel Allende'], zh: ['加西亚·马尔克斯', '巴勃罗·聂鲁达', '博尔赫斯', '伊莎贝尔·阿连德'] },
      correctIndex: 0
    },
    {
      id: 's-al-12', difficulty: 4,
      text: { en: 'What artistic technique is "trompe-l\'oeil"?', zh: '"欺眼法"(trompe-l\'oeil)是什么艺术技法？' },
      options: {
        en: ['Optical illusion painting that makes 2D look 3D', 'A type of sculpture', 'Underwater painting', 'Music notation system'],
        zh: ['让二维画面看起来像三维的视觉错觉绘画', '一种雕塑', '水下绘画', '音乐记谱法']
      },
      correctIndex: 0
    },
    {
      id: 's-al-13', difficulty: 2,
      text: { en: 'Which instrument has 88 keys?', zh: '哪种乐器有88个键？' },
      options: { en: ['Piano', 'Guitar', 'Violin', 'Harp'], zh: ['钢琴', '吉他', '小提琴', '竖琴'] },
      correctIndex: 0
    },
    {
      id: 's-al-14', difficulty: 5,
      text: { en: 'What is "magical realism" in literature?', zh: '文学中的"魔幻现实主义"是什么？' },
      options: {
        en: ['A genre where supernatural elements are presented as normal in a realistic setting', 'Fantasy novels about wizards', 'Science fiction about magic technology', 'Horror stories with ghosts'],
        zh: ['在现实背景下将超自然元素呈现为平常事物的文学类型', '关于巫师的奇幻小说', '关于魔法科技的科幻', '有鬼的恐怖故事']
      },
      correctIndex: 0
    },
    {
      id: 's-al-15', difficulty: 3,
      text: { en: 'What makes "The Starry Night" by Van Gogh distinctive?', zh: '梵高的《星夜》有什么独特之处？' },
      options: {
        en: ['Swirling, expressive brushstrokes depicting an emotional night sky', 'Photorealistic precision', 'Use of only black and white', 'It was painted by AI'],
        zh: ['用旋转的、富有表现力的笔触描绘充满情感的夜空', '照片般的精确度', '只用了黑白两色', '是AI画的']
      },
      correctIndex: 0
    }
  ]
}

/**
 * Fisher-Yates shuffle
 */
function fisherYates(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Prepare a specialized quiz
 */
export function prepareSpecialQuiz(specId, count = 15) {
  const pool = specialQuestions[specId] || []
  const selected = fisherYates(pool).slice(0, count)

  return selected.map(q => {
    const indices = q.options.en.map((_, i) => i)
    const shuffledIndices = fisherYates(indices)
    const newCorrectIndex = shuffledIndices.indexOf(q.correctIndex)

    return {
      ...q,
      category: specId,
      options: {
        en: shuffledIndices.map(i => q.options.en[i]),
        zh: shuffledIndices.map(i => q.options.zh[i])
      },
      correctIndex: newCorrectIndex
    }
  })
}

/**
 * Get the matched model for a specialization by score
 */
export function getSpecialModelByScore(specId, score) {
  const spec = specializations.find(s => s.id === specId)
  if (!spec) return null
  return spec.models.find(m => score >= m.scoreRange[0] && score <= m.scoreRange[1])
    || spec.models[spec.models.length - 1]
}
