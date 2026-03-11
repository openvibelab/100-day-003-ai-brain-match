<template>
  <svg :viewBox="`0 0 ${size} ${size}`" class="w-full max-w-[240px] lg:max-w-[320px] mx-auto select-none">
    <defs>
      <radialGradient :id="'radar-fill-' + accentColor.replace('#','')">
        <stop offset="0%" :stop-color="accentColor" stop-opacity="0.2" />
        <stop offset="100%" :stop-color="accentColor" stop-opacity="0.03" />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- Background rings -->
    <polygon
      v-for="ring in 4" :key="'ring-'+ring"
      :points="getPolygonPoints(ring / 4)"
      fill="none"
      :stroke="`rgba(255,255,255,${ring * 0.02})`"
      stroke-width="0.5"
    />

    <!-- Axis lines -->
    <line
      v-for="(_, i) in categories" :key="'axis-'+i"
      :x1="center" :y1="center"
      :x2="getPoint(i, 1).x" :y2="getPoint(i, 1).y"
      stroke="rgba(255,255,255,0.04)" stroke-width="0.5"
    />

    <!-- Data polygon -->
    <polygon :points="dataPoints" :fill="`url(#radar-fill-${accentColor.replace('#','')})`" />
    <polygon :points="dataPoints" fill="none" :stroke="accentColor" stroke-width="1.5"
             stroke-linejoin="round" filter="url(#glow)" opacity="0.8" />

    <!-- Data dots -->
    <template v-for="(cat, i) in categories" :key="'dots-'+i">
      <circle :cx="getPoint(i, scores[cat] || 0).x" :cy="getPoint(i, scores[cat] || 0).y"
              r="5" :fill="accentColor" opacity="0.1" />
      <circle :cx="getPoint(i, scores[cat] || 0).x" :cy="getPoint(i, scores[cat] || 0).y"
              r="2.5" :fill="accentColor" opacity="0.8" />
    </template>

    <!-- Labels — positioned further out for mobile -->
    <text
      v-for="(cat, i) in categories" :key="'label-'+i"
      :x="getLabelPos(i).x" :y="getLabelPos(i).y"
      text-anchor="middle" dominant-baseline="middle"
      fill="rgba(255,255,255,0.35)" style="font-size: 9px; font-weight: 500;"
    >
      {{ labels[i] }}
    </text>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  categories: Array,
  scores: Object,
  labels: Array,
  accentColor: { type: String, default: '#00f0ff' }
})

const size = 240
const center = size / 2
const radius = 78

function getPoint(index, value) {
  const angle = (Math.PI * 2 * index) / props.categories.length - Math.PI / 2
  return {
    x: center + Math.cos(angle) * radius * value,
    y: center + Math.sin(angle) * radius * value
  }
}

function getPolygonPoints(scale) {
  return props.categories.map((_, i) => {
    const p = getPoint(i, scale)
    return `${p.x},${p.y}`
  }).join(' ')
}

const dataPoints = computed(() =>
  props.categories.map((cat, i) => {
    const p = getPoint(i, Math.max(props.scores[cat] || 0, 0.05))
    return `${p.x},${p.y}`
  }).join(' ')
)

function getLabelPos(index) {
  const angle = (Math.PI * 2 * index) / props.categories.length - Math.PI / 2
  const r = radius + 28
  return {
    x: center + Math.cos(angle) * r,
    y: center + Math.sin(angle) * r
  }
}
</script>
