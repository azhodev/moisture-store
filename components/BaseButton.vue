<!-- components/ui/BaseButton.vue -->
<template>
  <button
    class="transition-all duration-200"
    :class="[
      size === 'sm' ? 'text-sm' : 'text-base',
      'bg-primary text-white hover:bg-primary/75 active:bg-accent'
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
