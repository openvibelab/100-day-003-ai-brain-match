<template>
  <button
    @click="toggleLocale()"
    aria-label="Switch language / 切换语言"
    class="fixed top-4 right-4 z-50 w-11 h-11 lg:w-12 lg:h-12 rounded-full glass-card
           flex items-center justify-center
           text-xs lg:text-sm font-bold tracking-wide
           hover:border-neon-cyan/40 transition-all cursor-pointer
           text-white/50 hover:text-neon-cyan"
  >
    {{ locale === 'en' ? '中' : 'EN' }}
  </button>
</template>

<script setup>
import { locale, toggleLocale } from '../lib/i18n.js'
</script>
