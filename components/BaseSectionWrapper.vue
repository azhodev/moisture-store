<!-- components/SectionWrapper.vue -->
<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <section class="py-16">
    <div :class="align === 'center' ? 'text-center' : 'text-left'" class="mb-8">
      <h2 class="text-3xl font-bold">{{ title }}</h2>
      <p v-if="subtitle" class="mt-2 text-gray-500">{{ subtitle }}</p>
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>
