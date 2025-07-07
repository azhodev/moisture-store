<template>
    <div>
        <HeroSection />
    </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';


useHead({
    title: 'РусТехно'
})
</script>

<style scoped></style>

<!-- 

homepage/
│   ├── HeroSection.vue
│   ├── GrainInfoSection.vue
│   ├── ProblemsSection.vue
│   ├── ImportanceSection.vue
│   ├── OpportunitiesSection.vue
│   ├── ProductsPreviewSection.vue
│   ├── BenefitsSection.vue
│   ├── WhyUsSection.vue
│   ├── FaqSection.vue
-->