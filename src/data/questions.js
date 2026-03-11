/**
 * Question bank for AI Brain Match — 50+ bilingual questions
 * Each question: id, category, difficulty (1-5), text, options, correctIndex
 */

export const categories = [
  'science', 'history', 'logic', 'coding', 'language', 'general', 'creativity'
]

export const questions = [
  // ============================================================
  // SCIENCE (科学) — 8 questions
  // ============================================================
  {
    id: 1, category: 'science', difficulty: 1,
    text: { en: 'What is the chemical formula for water?', zh: '水的化学分子式是什么？' },
    options: { en: ['H2O', 'CO2', 'NaCl', 'O2'], zh: ['H2O', 'CO2', 'NaCl', 'O2'] },
    correctIndex: 0
  },
  {
    id: 2, category: 'science', difficulty: 2,
    text: { en: 'What particle is responsible for carrying electromagnetic force?', zh: '哪种粒子负责传递电磁力？' },
    options: { en: ['Photon', 'Gluon', 'W boson', 'Graviton'], zh: ['光子', '胶子', 'W玻色子', '引力子'] },
    correctIndex: 0
  },
  {
    id: 3, category: 'science', difficulty: 4,
    text: { en: 'In quantum mechanics, what does the Heisenberg Uncertainty Principle state?', zh: '量子力学中，海森堡不确定性原理说的是什么？' },
    options: {
      en: ['You cannot simultaneously know exact position and momentum', 'Energy is always conserved in quantum systems', 'Electrons orbit the nucleus in fixed paths', 'Light is always a particle'],
      zh: ['不能同时精确知道位置和动量', '量子系统中能量始终守恒', '电子在固定轨道上绕原子核运动', '光始终是粒子']
    },
    correctIndex: 0
  },
  {
    id: 4, category: 'science', difficulty: 5,
    text: { en: 'What is CRISPR-Cas9 primarily used for?', zh: 'CRISPR-Cas9主要用于什么？' },
    options: { en: ['Gene editing', 'Protein synthesis', 'Drug delivery', 'Brain imaging'], zh: ['基因编辑', '蛋白质合成', '药物递送', '脑成像'] },
    correctIndex: 0
  },
  {
    id: 5, category: 'science', difficulty: 3,
    text: { en: 'What causes the seasons on Earth?', zh: '地球上四季变化的原因是什么？' },
    options: {
      en: ['Tilt of Earth\'s axis', 'Distance from the Sun', 'Speed of Earth\'s rotation', 'Moon\'s gravitational pull'],
      zh: ['地轴倾斜', '与太阳的距离', '地球自转速度', '月球引力']
    },
    correctIndex: 0
  },
  {
    id: 6, category: 'science', difficulty: 3,
    text: { en: 'What is the speed of light in a vacuum (approximately)?', zh: '光在真空中的速度大约是多少？' },
    options: {
      en: ['300,000 km/s', '150,000 km/s', '1,000,000 km/s', '30,000 km/s'],
      zh: ['30万公里/秒', '15万公里/秒', '100万公里/秒', '3万公里/秒']
    },
    correctIndex: 0
  },
  {
    id: 7, category: 'science', difficulty: 4,
    text: { en: 'What is dark matter?', zh: '暗物质是什么？' },
    options: {
      en: ['Matter that doesn\'t interact with light but has gravitational effects', 'Anti-matter from black holes', 'Extremely dense visible matter', 'A theoretical particle that has been disproven'],
      zh: ['不与光相互作用但有引力效应的物质', '来自黑洞的反物质', '极度致密的可见物质', '已被否定的理论粒子']
    },
    correctIndex: 0
  },
  {
    id: 8, category: 'science', difficulty: 2,
    text: { en: 'What gas do plants primarily absorb from the atmosphere?', zh: '植物主要从大气中吸收什么气体？' },
    options: { en: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], zh: ['二氧化碳', '氧气', '氮气', '氢气'] },
    correctIndex: 0
  },

  // ============================================================
  // HISTORY & CULTURE (历史与文化) — 8 questions
  // ============================================================
  {
    id: 9, category: 'history', difficulty: 1,
    text: { en: 'Which ancient civilization built the Great Pyramids?', zh: '哪个古代文明建造了大金字塔？' },
    options: { en: ['Egyptian', 'Roman', 'Greek', 'Mayan'], zh: ['埃及', '罗马', '希腊', '玛雅'] },
    correctIndex: 0
  },
  {
    id: 10, category: 'history', difficulty: 2,
    text: { en: 'The Silk Road primarily connected which two regions?', zh: '丝绸之路主要连接了哪两个地区？' },
    options: {
      en: ['China and the Mediterranean', 'India and Africa', 'Japan and Europe', 'Egypt and Persia'],
      zh: ['中国和地中海地区', '印度和非洲', '日本和欧洲', '埃及和波斯']
    },
    correctIndex: 0
  },
  {
    id: 11, category: 'history', difficulty: 3,
    text: { en: 'Which dynasty invented movable type printing?', zh: '哪个朝代发明了活字印刷术？' },
    options: { en: ['Song Dynasty', 'Tang Dynasty', 'Ming Dynasty', 'Han Dynasty'], zh: ['宋朝', '唐朝', '明朝', '汉朝'] },
    correctIndex: 0
  },
  {
    id: 12, category: 'history', difficulty: 4,
    text: { en: 'The Turing Test was proposed in which year?', zh: '图灵测试是哪一年提出的？' },
    options: { en: ['1950', '1936', '1969', '1984'], zh: ['1950年', '1936年', '1969年', '1984年'] },
    correctIndex: 0
  },
  {
    id: 13, category: 'history', difficulty: 2,
    text: { en: 'Who painted the Mona Lisa?', zh: '谁画了蒙娜丽莎？' },
    options: { en: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Rembrandt'], zh: ['达芬奇', '米开朗基罗', '拉斐尔', '伦勃朗'] },
    correctIndex: 0
  },
  {
    id: 14, category: 'history', difficulty: 3,
    text: { en: 'What year did the Berlin Wall fall?', zh: '柏林墙是哪一年倒塌的？' },
    options: { en: ['1989', '1991', '1985', '1993'], zh: ['1989年', '1991年', '1985年', '1993年'] },
    correctIndex: 0
  },
  {
    id: 15, category: 'history', difficulty: 5,
    text: { en: 'The Rosetta Stone helped decode which writing system?', zh: '罗塞塔石碑帮助破解了哪种文字系统？' },
    options: {
      en: ['Egyptian hieroglyphs', 'Sumerian cuneiform', 'Linear A', 'Indus script'],
      zh: ['埃及象形文字', '苏美尔楔形文字', '线形文字A', '印度河文字']
    },
    correctIndex: 0
  },
  {
    id: 16, category: 'history', difficulty: 4,
    text: { en: 'Which philosopher said "I think, therefore I am"?', zh: '"我思故我在"是哪位哲学家说的？' },
    options: { en: ['Descartes', 'Aristotle', 'Kant', 'Nietzsche'], zh: ['笛卡尔', '亚里士多德', '康德', '尼采'] },
    correctIndex: 0
  },

  // ============================================================
  // LOGIC & MATH (逻辑与数学) — 8 questions
  // ============================================================
  {
    id: 17, category: 'logic', difficulty: 1,
    text: { en: 'What is 15% of 200?', zh: '200的15%是多少？' },
    options: { en: ['30', '25', '35', '20'], zh: ['30', '25', '35', '20'] },
    correctIndex: 0
  },
  {
    id: 18, category: 'logic', difficulty: 3,
    text: { en: 'If all Bloops are Razzles, and all Razzles are Lazzles, which must be true?', zh: '如果所有的布普都是拉泽，所有的拉泽都是拉兹，那么哪个一定成立？' },
    options: {
      en: ['All Bloops are Lazzles', 'All Lazzles are Bloops', 'Some Lazzles are not Razzles', 'No Bloops are Lazzles'],
      zh: ['所有布普都是拉兹', '所有拉兹都是布普', '某些拉兹不是拉泽', '没有布普是拉兹']
    },
    correctIndex: 0
  },
  {
    id: 19, category: 'logic', difficulty: 4,
    text: { en: 'What is the sum of the first 100 positive integers?', zh: '前100个正整数的和是多少？' },
    options: { en: ['5050', '5000', '4950', '5100'], zh: ['5050', '5000', '4950', '5100'] },
    correctIndex: 0
  },
  {
    id: 20, category: 'logic', difficulty: 5,
    text: { en: 'In the Monty Hall problem, should you switch doors?', zh: '在蒙提·霍尔问题中，你应该换门吗？' },
    options: {
      en: ['Yes, switching gives 2/3 chance', 'No, it\'s always 50/50', 'It doesn\'t matter', 'Yes, switching gives 3/4 chance'],
      zh: ['应该换，换门有2/3概率赢', '不用换，始终是50/50', '换不换一样', '应该换，有3/4概率赢']
    },
    correctIndex: 0
  },
  {
    id: 21, category: 'logic', difficulty: 2,
    text: { en: 'A bat and ball cost $1.10 total. The bat costs $1 more than the ball. How much is the ball?', zh: '球棒和球总共1.10美元。球棒比球贵1美元。球多少钱？' },
    options: { en: ['$0.05', '$0.10', '$0.15', '$0.01'], zh: ['0.05美元', '0.10美元', '0.15美元', '0.01美元'] },
    correctIndex: 0
  },
  {
    id: 22, category: 'logic', difficulty: 3,
    text: { en: 'What is the next number: 1, 1, 2, 3, 5, 8, ?', zh: '下一个数是什么：1, 1, 2, 3, 5, 8, ？' },
    options: { en: ['13', '11', '10', '15'], zh: ['13', '11', '10', '15'] },
    correctIndex: 0
  },
  {
    id: 23, category: 'logic', difficulty: 4,
    text: { en: 'How many times can you subtract 5 from 25?', zh: '25能减去几次5？' },
    options: {
      en: ['Once (then it\'s 20, not 25)', 'Five times', 'Infinite times', 'Zero times'],
      zh: ['一次（之后就是20不是25了）', '五次', '无限次', '零次']
    },
    correctIndex: 0
  },
  {
    id: 24, category: 'logic', difficulty: 5,
    text: { en: 'What is the probability of getting at least one head in 3 coin flips?', zh: '抛3次硬币至少出现一次正面的概率是多少？' },
    options: { en: ['7/8', '3/4', '1/2', '5/8'], zh: ['7/8', '3/4', '1/2', '5/8'] },
    correctIndex: 0
  },

  // ============================================================
  // CODING & TECH (编程与科技) — 8 questions
  // ============================================================
  {
    id: 25, category: 'coding', difficulty: 1,
    text: { en: 'What does HTML stand for?', zh: 'HTML的全称是什么？' },
    options: {
      en: ['HyperText Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language'],
      zh: ['超文本标记语言', '高科技现代语言', '超级传输标记语言', '家用工具标记语言']
    },
    correctIndex: 0
  },
  {
    id: 26, category: 'coding', difficulty: 3,
    text: { en: 'What is the time complexity of binary search?', zh: '二分查找的时间复杂度是多少？' },
    options: { en: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'], zh: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'] },
    correctIndex: 0
  },
  {
    id: 27, category: 'coding', difficulty: 4,
    text: { en: 'What does the "attention mechanism" in neural networks primarily help with?', zh: '神经网络中的"注意力机制"主要帮助解决什么？' },
    options: {
      en: ['Weighing the importance of different input parts', 'Reducing parameters', 'Increasing training speed', 'Preventing overfitting'],
      zh: ['衡量输入不同部分的重要性', '减少参数数量', '提高训练速度', '防止过拟合']
    },
    correctIndex: 0
  },
  {
    id: 28, category: 'coding', difficulty: 5,
    text: { en: 'What is the key innovation of the Transformer architecture?', zh: 'Transformer架构的核心创新是什么？' },
    options: {
      en: ['Self-attention mechanism replacing recurrence', 'Convolutional layers for text', 'Deeper networks', 'RLHF'],
      zh: ['用自注意力机制取代循环结构', '用卷积层处理文本', '更深的网络', '基于人类反馈的强化学习']
    },
    correctIndex: 0
  },
  {
    id: 29, category: 'coding', difficulty: 2,
    text: { en: 'What does "API" stand for?', zh: '"API"的全称是什么？' },
    options: {
      en: ['Application Programming Interface', 'Advanced Program Integration', 'Automated Processing Input', 'Application Process Integration'],
      zh: ['应用程序编程接口', '高级程序集成', '自动处理输入', '应用进程集成']
    },
    correctIndex: 0
  },
  {
    id: 30, category: 'coding', difficulty: 3,
    text: { en: 'What is a "closure" in programming?', zh: '编程中的"闭包"是什么？' },
    options: {
      en: ['A function that captures variables from its outer scope', 'A way to close a program', 'A type of loop', 'A design pattern for databases'],
      zh: ['一个能捕获外部作用域变量的函数', '一种关闭程序的方式', '一种循环类型', '一种数据库设计模式']
    },
    correctIndex: 0
  },
  {
    id: 31, category: 'coding', difficulty: 4,
    text: { en: 'What is the difference between stack and heap memory?', zh: '栈内存和堆内存有什么区别？' },
    options: {
      en: ['Stack is LIFO for local vars, heap is for dynamic allocation', 'They are the same thing', 'Stack is slower than heap', 'Heap is only for strings'],
      zh: ['栈是后进先出用于局部变量，堆用于动态分配', '它们是同一个东西', '栈比堆慢', '堆只用于存储字符串']
    },
    correctIndex: 0
  },
  {
    id: 32, category: 'coding', difficulty: 2,
    text: { en: 'Which language is most commonly used for web page interactivity?', zh: '哪种语言最常用于网页交互？' },
    options: { en: ['JavaScript', 'Python', 'C++', 'Java'], zh: ['JavaScript', 'Python', 'C++', 'Java'] },
    correctIndex: 0
  },

  // ============================================================
  // LANGUAGE & WRITING (语言与写作) — 7 questions
  // ============================================================
  {
    id: 33, category: 'language', difficulty: 2,
    text: { en: 'Which literary device is used in "The wind whispered through the trees"?', zh: '"风在树间低语"使用了什么修辞手法？' },
    options: { en: ['Personification', 'Metaphor', 'Simile', 'Hyperbole'], zh: ['拟人', '隐喻', '明喻', '夸张'] },
    correctIndex: 0
  },
  {
    id: 34, category: 'language', difficulty: 3,
    text: { en: 'What is the origin of the word "algorithm"?', zh: '"算法"(algorithm)这个词的起源是什么？' },
    options: {
      en: ['Named after mathematician al-Khwarizmi', 'From Greek "arithmos"', 'Coined by Alan Turing', 'From Latin "algorismus"'],
      zh: ['以数学家花拉子米命名', '源自希腊语"arithmos"', '由图灵创造', '来自拉丁语"algorismus"']
    },
    correctIndex: 0
  },
  {
    id: 35, category: 'language', difficulty: 4,
    text: { en: 'Which response feels most "human" and empathetic?', zh: '以下哪个回答最有"人味儿"？' },
    options: {
      en: ['"I can see why that\'d be frustrating. Let me think differently..."', '"The optimal solution is..."', '"Here are 10 approaches ranked by efficiency..."', '"Just do X."'],
      zh: ['"我能理解这会让你沮丧。换个角度想想..."', '"最优解是..."', '"以下是按效率排序的10种方案..."', '"直接做X就好。"']
    },
    correctIndex: 0
  },
  {
    id: 36, category: 'language', difficulty: 1,
    text: { en: 'What is a synonym for "happy"?', zh: '"快乐"的近义词是什么？' },
    options: { en: ['Joyful', 'Angry', 'Tired', 'Confused'], zh: ['愉悦', '愤怒', '疲惫', '困惑'] },
    correctIndex: 0
  },
  {
    id: 37, category: 'language', difficulty: 3,
    text: { en: 'What is the difference between "affect" and "effect"?', zh: '"affect"和"effect"有什么区别？' },
    options: {
      en: ['Affect is usually a verb, effect is usually a noun', 'They mean the same thing', 'Effect is a verb, affect is a noun', 'Affect is formal, effect is informal'],
      zh: ['affect通常是动词，effect通常是名词', '它们意思相同', 'effect是动词，affect是名词', 'affect是正式用法，effect是非正式的']
    },
    correctIndex: 0
  },
  {
    id: 38, category: 'language', difficulty: 5,
    text: { en: 'Which sentence uses the subjunctive mood correctly?', zh: '以下哪个句子正确使用了虚拟语气？' },
    options: {
      en: ['If I were you, I would reconsider.', 'If I was you, I would reconsider.', 'If I am you, I will reconsider.', 'If I be you, I shall reconsider.'],
      zh: ['"If I were you, I would reconsider."', '"If I was you, I would reconsider."', '"If I am you, I will reconsider."', '"If I be you, I shall reconsider."']
    },
    correctIndex: 0
  },
  {
    id: 39, category: 'language', difficulty: 4,
    text: { en: 'In Chinese, what are the "四大名著" (Four Great Classical Novels)?', zh: '中国的"四大名著"不包括以下哪部？' },
    options: {
      en: ['"The Art of War" is NOT one of them', '"Journey to the West" is NOT one', '"Dream of the Red Chamber" is NOT one', '"Romance of Three Kingdoms" is NOT one'],
      zh: ['《孙子兵法》', '《西游记》', '《红楼梦》', '《三国演义》']
    },
    correctIndex: 0
  },

  // ============================================================
  // GENERAL KNOWLEDGE (通识) — 7 questions
  // ============================================================
  {
    id: 40, category: 'general', difficulty: 2,
    text: { en: 'What is the most spoken native language in the world?', zh: '世界上母语使用人数最多的语言是什么？' },
    options: { en: ['Mandarin Chinese', 'English', 'Spanish', 'Hindi'], zh: ['普通话', '英语', '西班牙语', '印地语'] },
    correctIndex: 0
  },
  {
    id: 41, category: 'general', difficulty: 3,
    text: { en: 'Which country has won the most FIFA World Cup titles?', zh: '哪个国家赢得了最多的FIFA世界杯冠军？' },
    options: { en: ['Brazil', 'Germany', 'Italy', 'Argentina'], zh: ['巴西', '德国', '意大利', '阿根廷'] },
    correctIndex: 0
  },
  {
    id: 42, category: 'general', difficulty: 5,
    text: { en: 'What is the "Fermi Paradox" about?', zh: '"费米悖论"讨论的是什么？' },
    options: {
      en: ['Contradiction between high probability of alien life and lack of evidence', 'Time travel paradox', 'Quantum uncertainty', 'Free will vs determinism'],
      zh: ['外星生命高概率存在与缺乏证据的矛盾', '时间旅行的悖论', '量子不确定性', '自由意志与决定论的矛盾']
    },
    correctIndex: 0
  },
  {
    id: 43, category: 'general', difficulty: 4,
    text: { en: 'What is the "Dunning-Kruger Effect"?', zh: '"达克效应"是什么？' },
    options: {
      en: ['People with low ability overestimate their competence', 'People perform better when observed', 'Past success predicts future success', 'Groups make riskier decisions'],
      zh: ['能力不足的人高估自己的能力', '被观察时表现更好', '过去的成功预测未来的成功', '群体做出更冒险的决定']
    },
    correctIndex: 0
  },
  {
    id: 44, category: 'general', difficulty: 1,
    text: { en: 'How many continents are there on Earth?', zh: '地球上有几个大洲？' },
    options: { en: ['7', '5', '6', '8'], zh: ['7个', '5个', '6个', '8个'] },
    correctIndex: 0
  },
  {
    id: 45, category: 'general', difficulty: 3,
    text: { en: 'What is the largest organ in the human body?', zh: '人体最大的器官是什么？' },
    options: { en: ['Skin', 'Liver', 'Brain', 'Lungs'], zh: ['皮肤', '肝脏', '大脑', '肺'] },
    correctIndex: 0
  },
  {
    id: 46, category: 'general', difficulty: 2,
    text: { en: 'Which planet is known as the "Red Planet"?', zh: '哪颗行星被称为"红色星球"？' },
    options: { en: ['Mars', 'Venus', 'Jupiter', 'Saturn'], zh: ['火星', '金星', '木星', '土星'] },
    correctIndex: 0
  },

  // ============================================================
  // CREATIVITY (创造力) — 6 questions
  // ============================================================
  {
    id: 47, category: 'creativity', difficulty: 3,
    text: { en: 'Which approach to problem-solving is most "creative"?', zh: '哪种解决问题的方式最有"创造力"？' },
    options: {
      en: ['Combining ideas from unrelated fields', 'Following textbook procedures', 'Brute-force trying everything', 'Asking an expert and copying'],
      zh: ['将不相关领域的想法结合起来', '按教科书一步步来', '暴力尝试所有可能', '问专家然后照做']
    },
    correctIndex: 0
  },
  {
    id: 48, category: 'creativity', difficulty: 2,
    text: { en: 'A brick has how many creative uses beyond building?', zh: '一块砖除了盖房子，以下哪个是最有创意的用途？' },
    options: {
      en: ['Doorstop, bookend, canvas for art — many uses!', 'Only for building walls', 'It has no other use', 'Exactly two uses'],
      zh: ['门挡、书挡、艺术画布——用途很多！', '只能用来砌墙', '没有其他用途', '恰好两个用途']
    },
    correctIndex: 0
  },
  {
    id: 49, category: 'creativity', difficulty: 4,
    text: { en: 'What is "lateral thinking"?', zh: '"水平思考"是什么？' },
    options: {
      en: ['Solving problems through indirect, creative approaches', 'Thinking while lying on your side', 'A type of mathematical proof', 'Reading from left to right'],
      zh: ['通过间接、创造性的方式解决问题', '侧躺着思考', '一种数学证明方法', '从左到右阅读']
    },
    correctIndex: 0
  },
  {
    id: 50, category: 'creativity', difficulty: 3,
    text: { en: 'What makes a good brainstorming session?', zh: '什么样的头脑风暴最有效？' },
    options: {
      en: ['No idea is too wild — quantity over quality first', 'Only share ideas you\'re sure about', 'The loudest person should lead', 'Criticize bad ideas immediately'],
      zh: ['没有太疯狂的想法——先求量再求质', '只分享你确定的想法', '声音最大的人来主导', '立刻批评不好的想法']
    },
    correctIndex: 0
  },
  {
    id: 51, category: 'creativity', difficulty: 5,
    text: { en: 'Which cognitive bias most often kills creativity?', zh: '哪种认知偏误最容易扼杀创造力？' },
    options: {
      en: ['Functional fixedness — seeing things only for their "normal" use', 'Confirmation bias', 'Survivorship bias', 'Anchoring bias'],
      zh: ['功能固着——只能看到事物的"常规"用途', '确认偏误', '幸存者偏差', '锚定效应']
    },
    correctIndex: 0
  },
  {
    id: 52, category: 'creativity', difficulty: 1,
    text: { en: 'What is "thinking outside the box"?', zh: '"跳出框框思考"意味着什么？' },
    options: {
      en: ['Approaching problems in unconventional ways', 'Thinking inside a cardboard box', 'Following rules strictly', 'Avoiding all risks'],
      zh: ['用非常规方式思考问题', '在纸箱里思考', '严格遵守规则', '避免所有风险']
    },
    correctIndex: 0
  }
]

/**
 * Proper Fisher-Yates shuffle
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
 * Prepare quiz: balanced category selection + shuffled options
 * Ensures at least 2 questions per category, then fills randomly
 * excludeIds: question IDs to exclude (for "try different questions")
 */
export function prepareQuiz(count = 20, excludeIds = []) {
  const pool = questions.filter(q => !excludeIds.includes(q.id))

  // Group by category
  const byCat = {}
  for (const q of pool) {
    if (!byCat[q.category]) byCat[q.category] = []
    byCat[q.category].push(q)
  }

  // Pick at least 2 from each category
  const selected = []
  const usedIds = new Set()
  for (const cat of categories) {
    const catPool = fisherYates(byCat[cat] || [])
    const pick = catPool.slice(0, Math.min(2, catPool.length))
    for (const q of pick) {
      selected.push(q)
      usedIds.add(q.id)
    }
  }

  // Fill remaining slots randomly from unused questions
  const remaining = fisherYates(pool.filter(q => !usedIds.has(q.id)))
  const slotsLeft = count - selected.length
  for (let i = 0; i < Math.min(slotsLeft, remaining.length); i++) {
    selected.push(remaining[i])
  }

  // Shuffle question order + shuffle each question's options
  return fisherYates(selected).map(q => {
    const indices = q.options.en.map((_, i) => i)
    const shuffledIndices = fisherYates(indices)
    const newCorrectIndex = shuffledIndices.indexOf(q.correctIndex)

    return {
      ...q,
      options: {
        en: shuffledIndices.map(i => q.options.en[i]),
        zh: shuffledIndices.map(i => q.options.zh[i])
      },
      correctIndex: newCorrectIndex
    }
  })
}
