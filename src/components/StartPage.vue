<template>
  <div class="min-h-dvh flex flex-col items-center justify-center px-5 py-16">
    <div class="text-center max-w-sm lg:max-w-md w-full">

      <!-- Brain icon -->
      <div class="relative inline-flex items-center justify-center mb-10 animate-float-in">
        <span class="relative text-7xl select-none">🧠</span>
      </div>

      <!-- Title -->
      <h1 class="heading-text text-[2.5rem] md:text-5xl lg:text-6xl leading-tight mb-3 animate-float-in-1">
        {{ t('app.title') }}
      </h1>

      <!-- Subtitle -->
      <p class="text-base md:text-lg lg:text-xl text-ink-secondary mb-2 animate-float-in-2">
        {{ t('app.subtitle') }}
      </p>
      <p class="text-xs lg:text-sm text-ink-muted mb-10 leading-relaxed max-w-xs lg:max-w-sm mx-auto animate-float-in-2">
        {{ t('app.description') }}
      </p>

      <!-- AI model parade -->
      <div class="mb-10 animate-float-in-3">
        <div class="flex flex-wrap justify-center gap-2">
          <span
            v-for="model in aiModels"
            :key="model.id"
            class="inline-flex items-center gap-1 px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full
                   text-xs lg:text-sm font-semibold tracking-wide
                   transition-all duration-300 hover:scale-105 cursor-default
                   border-2"
            :style="{
              borderColor: model.color + '30',
              color: model.color,
              background: model.color + '0a',
            }"
          >
            <span>{{ model.emoji }}</span>
            <span>{{ model.name }}</span>
          </span>
        </div>
      </div>

      <!-- Personal best -->
      <div v-if="bestScore > 0" class="mb-8 animate-float-in-3">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-pop-yellow/30 bg-pop-yellow/5 text-xs">
          <span class="text-pop-yellow text-sm">&#9733;</span>
          <span class="text-ink-secondary">{{ t('result.best') }}</span>
          <span class="heading-text text-pop-blue tabular-nums">{{ bestScore }}</span>
          <span class="text-ink-muted">/100</span>
        </div>
      </div>

      <!-- Start button -->
      <div class="animate-float-in-4">
        <button
          @click="$emit('start')"
          class="relative px-14 py-4 lg:px-16 lg:py-5 rounded-xl font-bold text-base lg:text-lg
                 bg-pop-blue text-white
                 border-2 border-pop-blue hover:bg-pop-blue/90
                 shadow-[0_4px_16px_rgba(58,123,213,0.2)]
                 transition-all duration-300 cursor-pointer
                 hover:shadow-[0_6px_24px_rgba(58,123,213,0.3)] hover:-translate-y-0.5
                 active:scale-[0.97] min-h-[56px]"
        >
          <span class="relative z-10 tracking-wide">{{ t('app.start') }}</span>
        </button>
        <p class="text-[11px] lg:text-xs text-ink-muted mt-4 tracking-wider">{{ t('app.startSub') }}</p>
      </div>

      <!-- Deep Dive entry -->
      <div class="mt-10 animate-float-in-5">
        <button
          @click="$emit('deepDive')"
          class="w-full mx-auto px-6 py-5 lg:px-8 lg:py-6 rounded-xl
                 bg-card border-2 border-border hover:border-pop-purple/40
                 hover:shadow-[0_4px_20px_rgba(124,92,191,0.1)]
                 transition-all duration-300 cursor-pointer active:scale-[0.98]
                 group text-left"
        >
          <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl lg:text-3xl">🧩</span>
            <div>
              <div class="heading-text text-base lg:text-lg group-hover:text-pop-purple">
                {{ t('special.deepDive') }}
              </div>
              <p class="text-xs lg:text-sm text-ink-secondary mt-0.5">
                {{ t('special.deepDiveSub') }}
              </p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2.5 mt-2">
            <span v-for="spec in specializations" :key="spec.id"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                         text-xs lg:text-sm font-medium
                         transition-all duration-300 group-hover:scale-105"
                  :style="{ background: spec.color + '0c', color: spec.color, border: '2px solid ' + spec.color + '20' }">
              <span class="text-base">{{ spec.icon }}</span>
              {{ spec.name[locale] }}
            </span>
          </div>
        </button>
      </div>

      <!-- Attempt counter -->
      <p v-if="attempt > 0" class="text-[11px] lg:text-xs text-ink-muted mt-4">
        {{ t('result.attempt') }} #{{ attempt + 1 }}
      </p>
    </div>

    <!-- Footer -->
    <div class="mt-auto pt-16 text-center text-[11px] lg:text-xs text-ink-muted tracking-wider">
      {{ t('footer.day') }}
      <span class="mx-1.5 text-border">/</span>
      <a href="https://github.com/openvibelab" target="_blank"
         class="text-pop-blue/60 hover:text-pop-blue transition-colors duration-300">
        OpenVibeLab
      </a>
    </div>
  </div>
</template>

<script setup>
import { t, locale } from '../lib/i18n.js'
import { aiModels } from '../data/aiModels.js'
import { specializations } from '../data/specializations.js'

defineProps({
  attempt: { type: Number, default: 0 },
  bestScore: { type: Number, default: 0 }
})
defineEmits(['start', 'deepDive'])
</script>
