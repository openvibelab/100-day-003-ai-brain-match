<template>
  <button
    @click="toggleLocale()"
    class="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-full glass-card
           text-xs font-medium tracking-wide
           hover:border-neon-cyan/40 transition-all cursor-pointer
           text-gray-300 hover:text-neon-cyan"
  >
    {{ locale === 'en' ? '中文' : 'EN' }}
  </button>
</template>

<script setup>
import { locale, toggleLocale } from '../lib/i18n.js'
</script>
