[![中文版本](https://img.shields.io/badge/🇨🇳_中文版本-点击查看-blue?style=for-the-badge)](#中文版本)

# AI Brain Match

A fun quiz that compares your knowledge level to AI models — from GPT-2 to Claude Opus!

Live: https://brain.openvibelab.com

## Features

- **142 bilingual questions** across 7 categories + 6 specialties
- **General Quiz**: 52 questions, 20 per session, randomized every time
- **Deep Dive Mode**: 6 specialty quizzes (Math & Physics, Bio & Medical, Chinese Culture, Advanced Coding, World History, Art & Literature), each with 15 questions and its own fine-tuned model tiers
- Difficulty-weighted scoring (harder questions = more points)
- Match your score to real AI models (GPT-2 → GPT-5, or specialty models like Med-PaLM 2, DeepSeek-R1, Devin-level)
- Radar chart showing your strengths across categories
- Thinking style analysis: Claude / Gemini / DeepSeek / GPT personality
- Dynamic emotional result headlines per score tier
- Share results with one click
- Bilingual: EN + 中文 (Xiaohongshu-style Chinese copy)
- Mobile-friendly, cyberpunk dark UI with confetti

## Tech Stack

- Vue 3 + Vite
- Tailwind CSS v4
- Canvas Confetti
- Vercel Analytics
- Pure frontend (no API keys needed)

## Getting Started

```bash
git clone https://github.com/openvibelab/100-day-003-ai-brain-match.git
cd 100-day-003-ai-brain-match
npm install
npm run dev
```

## Environment Variables

See `.env.example` — no keys required for MVP.

## Deployment

```bash
npm run build
# Deploy dist/ to Vercel
```

## License

MIT

---

<a id="中文版本"></a>

## 中文版本

# 测测你是哪款AI

一个超好玩的知识测试，看看你的知识量约等于哪个大模型——从GPT-2到Claude Opus！

在线体验: https://brain.openvibelab.com

## 主要功能

- **142道双语题目**，覆盖7大类别 + 6个专项方向
- **综合测试**：52道题库，每次随机抽20题，题目不重复
- **专项深度挑战**：6个方向（数理基础、生物医学、中国传统文化、编程深度、世界历史、艺术文学），每个方向15题，配有专属fine-tuned模型段位
- 难度加权评分（越难的题分值越高）
- 匹配真实AI模型段位（GPT-2 → GPT-5，或专项模型如 Med-PaLM 2、DeepSeek-R1、Devin-level）
- 雷达图展示各维度能力
- AI人格分析：Claude型 / Gemini型 / DeepSeek型 / GPT型
- 动态情绪化结果标题（"我的智力水平竟然堪比..." / "Oops...我竟然只是..."）
- 一键分享结果，小红书风格文案
- 双语支持：中文 + English
- 手机友好，赛博朋克暗色UI + 彩带庆祝

## 本地开发

```bash
git clone https://github.com/openvibelab/100-day-003-ai-brain-match.git
cd 100-day-003-ai-brain-match
npm install
npm run dev
```

## 环境变量

参见 `.env.example` —— MVP版本无需任何密钥。

## 开源协议

MIT
