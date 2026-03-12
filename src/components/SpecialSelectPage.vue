<template>
  <div class="min-h-dvh flex flex-col items-center px-5 py-12">
    <div class="w-full max-w-lg lg:max-w-xl">

      <!-- Back button -->
      <button @click="$emit('back')"
              class="mb-8 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg
                     text-xs lg:text-sm text-ink-secondary hover:text-ink
                     border-2 border-border hover:border-ink-muted
                     transition-all cursor-pointer animate-float-in">
        &larr; {{ t('special.back') }}
      </button>

      <!-- Header -->
      <div class="text-center mb-10 animate-float-in">
        <h1 class="heading-text text-3xl md:text-4xl lg:text-5xl mb-3">
          {{ t('special.title') }}
        </h1>
        <p class="text-sm lg:text-base text-ink-secondary leading-relaxed max-w-xs lg:max-w-sm mx-auto">
          {{ t('special.subtitle') }}
        </p>
      </div>

      <!-- Specialization cards -->
      <div class="space-y-3">
        <button
          v-for="(spec, idx) in specializations"
          :key="spec.id"
          @click="$emit('select', spec.id)"
          class="w-full p-5 lg:p-6 rounded-xl text-left quiz-card
                 transition-all duration-300
                 cursor-pointer active:scale-[0.98] group"
          :class="'animate-float-in-' + Math.min(idx + 1, 5)"
        >
          <div class="flex items-center gap-4">
            <div class="relative shrink-0">
              <div class="relative w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                   :style="{ background: spec.color + '0c' }">
                {{ spec.icon }}
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-bold text-sm lg:text-base text-ink group-hover:text-ink transition-colors"
                   :style="{ '--hover-color': spec.color }">
                {{ spec.name[locale] }}
              </div>
              <div class="text-[11px] lg:text-xs text-ink-muted mt-0.5">
                {{ spec.subtitle[locale] }}
              </div>
            </div>
            <div class="text-ink-muted group-hover:text-ink-secondary transition-colors text-sm lg:text-base">
              &rarr;
            </div>
          </div>

          <!-- Model tiers preview -->
          <div class="flex gap-1.5 mt-3 ml-16">
            <span v-for="model in spec.models" :key="model.name"
                  class="text-[11px] lg:text-xs px-1.5 py-0.5 lg:px-2 lg:py-1 rounded bg-sand text-ink-secondary">
              {{ model.emoji }} {{ model.name }}
            </span>
          </div>
        </button>
      </div>

      <!-- Info text -->
      <p class="text-center text-[11px] text-ink-muted mt-8 animate-float-in-5">
        {{ t('special.info') }}
      </p>

      <!-- Footer -->
      <div class="text-center text-[11px] text-ink-muted mt-16 tracking-wider">
        {{ t('footer.day') }}
        <span class="mx-1.5 text-border">/</span>
        <a href="https://github.com/openvibelab" target="_blank"
           class="text-pop-blue/60 hover:text-pop-blue transition-colors duration-300">
          OpenVibeLab
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { t, locale } from '../lib/i18n.js'
import { specializations } from '../data/specializations.js'

defineEmits(['select', 'back'])
</script>
