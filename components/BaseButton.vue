<!-- components/ui/BaseButton.vue -->
<template>
  <button
    class="transition-all duration-200"
    :class="[
      size === 'sm' ? 'text-sm' : 'text-base',
      'bg-green-500 text-white hover:bg-green-600'
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md'
}>()
</script>
