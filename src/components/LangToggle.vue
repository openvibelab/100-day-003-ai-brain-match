<template>
  <button
    @click="toggleLocale()"
    aria-label="Switch language / 切换语言"
    class="fixed top-3 right-3 z-50 w-9 h-9 rounded-full glass-card
           flex items-center justify-center
           text-[10px] font-bold tracking-wide
           hover:border-neon-cyan/40 transition-all cursor-pointer
           text-gray-400 hover:text-neon-cyan"
  >
    {{ locale === 'en' ? '中' : 'EN' }}
  </button>
</template>

<script setup>
import { locale, toggleLocale } from '../lib/i18n.js'
</script>
