<template>
  <div class="min-h-dvh flex flex-col items-center px-5 py-12">
    <div class="w-full max-w-lg lg:max-w-xl">

      <!-- Back button -->
      <button @click="$emit('back')"
              class="mb-8 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg
                     text-xs lg:text-sm text-white/40 hover:text-white/70
                     border border-white/[0.08] hover:border-white/[0.18]
                     transition-all cursor-pointer animate-float-in">
        &larr; {{ t('special.back') }}
      </button>

      <!-- Header -->
      <div class="text-center mb-10 animate-float-in">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-black mb-3">
          <span class="gradient-text">{{ t('special.title') }}</span>
        </h1>
        <p class="text-sm lg:text-base text-white/35 leading-relaxed max-w-xs lg:max-w-sm mx-auto">
          {{ t('special.subtitle') }}
        </p>
      </div>

      <!-- Specialization cards -->
      <div class="space-y-3">
        <button
          v-for="(spec, idx) in specializations"
          :key="spec.id"
          @click="$emit('select', spec.id)"
          class="w-full p-5 lg:p-6 rounded-2xl text-left glass-card
                 hover:border-opacity-40 transition-all duration-300
                 cursor-pointer active:scale-[0.98] group"
          :class="'animate-float-in-' + Math.min(idx + 1, 5)"
          :style="{ '--hover-color': spec.color }"
        >
          <div class="flex items-center gap-4">
            <div class="relative shrink-0">
              <div class="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"
                   :style="{ background: spec.color }" />
              <div class="relative w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                   :style="{ background: spec.color + '10' }">
                {{ spec.icon }}
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-bold text-sm lg:text-base text-white/80 group-hover:text-white/95 transition-colors">
                {{ spec.name[locale] }}
              </div>
              <div class="text-[11px] lg:text-xs text-white/25 mt-0.5">
                {{ spec.subtitle[locale] }}
              </div>
            </div>
            <div class="text-white/15 group-hover:text-white/40 transition-colors text-sm lg:text-base">
              &rarr;
            </div>
          </div>

          <!-- Model tiers preview -->
          <div class="flex gap-1.5 mt-3 ml-16">
            <span v-for="model in spec.models" :key="model.name"
                  class="text-[11px] lg:text-xs px-1.5 py-0.5 lg:px-2 lg:py-1 rounded bg-white/[0.05] text-white/35">
              {{ model.emoji }} {{ model.name }}
            </span>
          </div>
        </button>
      </div>

      <!-- Info text -->
      <p class="text-center text-[11px] text-white/15 mt-8 animate-float-in-5">
        {{ t('special.info') }}
      </p>

      <!-- Footer -->
      <div class="text-center text-[11px] text-white/15 mt-16 tracking-wider">
        {{ t('footer.day') }}
        <span class="mx-1.5 text-white/8">/</span>
        <a href="https://github.com/openvibelab" target="_blank"
           class="text-neon-cyan/45 hover:text-neon-cyan/70 transition-colors duration-300">
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
