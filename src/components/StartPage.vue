<template>
  <div class="min-h-dvh flex flex-col items-center justify-center px-5 py-16">
    <div class="text-center max-w-sm w-full">

      <!-- Brain icon with animated glow ring -->
      <div class="relative inline-flex items-center justify-center mb-10 animate-float-in">
        <div class="absolute w-28 h-28 rounded-full bg-neon-cyan/8 animate-pulse-glow" />
        <div class="absolute w-20 h-20 rounded-full bg-neon-purple/6 animate-pulse-glow" style="animation-delay: -1.5s" />
        <span class="relative text-7xl drop-shadow-lg select-none">🧠</span>
      </div>

      <!-- Title -->
      <h1 class="text-[2.5rem] md:text-5xl font-black leading-tight mb-3 animate-float-in-1">
        <span class="gradient-text">{{ t('app.title') }}</span>
      </h1>

      <!-- Subtitle -->
      <p class="text-base md:text-lg text-white/50 mb-2 animate-float-in-2">
        {{ t('app.subtitle') }}
      </p>
      <p class="text-xs text-white/25 mb-10 leading-relaxed max-w-xs mx-auto animate-float-in-2">
        {{ t('app.description') }}
      </p>

      <!-- AI model parade — scrolling row on mobile -->
      <div class="mb-10 animate-float-in-3">
        <div class="flex flex-wrap justify-center gap-2">
          <span
            v-for="model in aiModels"
            :key="model.id"
            class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full
                   text-[10px] font-semibold tracking-wide
                   transition-all duration-500 hover:scale-110 cursor-default
                   border"
            :style="{
              borderColor: model.color + '25',
              color: model.color + 'cc',
              background: model.color + '08'
            }"
          >
            <span>{{ model.emoji }}</span>
            <span>{{ model.name }}</span>
          </span>
        </div>
      </div>

      <!-- Personal best -->
      <div v-if="bestScore > 0" class="mb-8 animate-float-in-3">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs">
          <span class="text-neon-yellow text-sm">&#9733;</span>
          <span class="text-white/40">{{ t('result.best') }}</span>
          <span class="font-bold text-neon-cyan tabular-nums">{{ bestScore }}</span>
          <span class="text-white/20">/100</span>
        </div>
      </div>

      <!-- Start button -->
      <div class="animate-float-in-4">
        <button
          @click="$emit('start')"
          class="shimmer-btn relative px-14 py-4 rounded-2xl font-bold text-base
                 bg-gradient-to-r from-neon-cyan/12 via-neon-purple/12 to-neon-pink/12
                 border border-neon-cyan/25 hover:border-neon-cyan/60
                 transition-all duration-500 cursor-pointer
                 hover:shadow-[0_0_50px_rgba(0,240,255,0.15)]
                 active:scale-[0.97] overflow-hidden"
        >
          <span class="relative z-10 text-white tracking-wide">{{ t('app.start') }}</span>
        </button>
        <p class="text-[11px] text-white/20 mt-4 tracking-wider">{{ t('app.startSub') }}</p>
      </div>

      <!-- Deep Dive entry -->
      <div class="mt-6 animate-float-in-5">
        <button
          @click="$emit('deepDive')"
          class="px-6 py-3 rounded-xl text-xs font-semibold
                 bg-white/[0.02] border border-white/[0.06]
                 hover:border-neon-purple/30 hover:bg-neon-purple/[0.03]
                 transition-all duration-300 cursor-pointer active:scale-[0.97]
                 text-white/35 hover:text-white/60"
        >
          🧩 {{ t('special.deepDive') }}
          <span class="block text-[10px] text-white/20 mt-0.5 font-normal">{{ t('special.deepDiveSub') }}</span>
        </button>
      </div>

      <!-- Attempt counter -->
      <p v-if="attempt > 0" class="text-[11px] text-white/15 mt-2 animate-float-in-5">
        {{ t('result.attempt') }} #{{ attempt + 1 }}
      </p>
    </div>

    <!-- Footer -->
    <div class="mt-auto pt-16 text-center text-[11px] text-white/15 tracking-wider">
      {{ t('footer.day') }}
      <span class="mx-1.5 text-white/10">/</span>
      <a href="https://github.com/openvibelab" target="_blank"
         class="text-neon-cyan/25 hover:text-neon-cyan/60 transition-colors duration-300">
        OpenVibeLab
      </a>
    </div>
  </div>
</template>

<script setup>
import { t } from '../lib/i18n.js'
import { aiModels } from '../data/aiModels.js'

defineProps({
  attempt: { type: Number, default: 0 },
  bestScore: { type: Number, default: 0 }
})
defineEmits(['start', 'deepDive'])
</script>
