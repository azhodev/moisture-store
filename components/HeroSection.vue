<!-- HeroSection.vue -->
<template>
  <section class="relative bg-white overflow-hidden">
    <!-- Wrapper -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <!-- Текстовая часть -->
      <div class="text-center lg:text-left space-y-6 z-10">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
          ЭФФЕКТИВНОЕ <br />
          <span class="text-green-600">ХРАНЕНИЕ ЗЕРНА</span>
        </h1>
        <p class="text-lg font-semibold text-gray-800">
          РЕШЕНИЯ И ВОЗМОЖНОСТИ ДЛЯ АГРАРНЫХ <br />
          ПРЕДПРИЯТИЙ ЛЮБОГО МАСШТАБА
        </p>
        <p class="text-gray-700 text-base">
          Сохраните урожай и увеличьте<br />
          прибыль с нашим оборудованием
        </p>

        <BaseButton size="lg" class="bg-green-500 hover:bg-green-600 text-white">
          Получить консультацию
        </BaseButton>
      </div>

      <!-- Картинка + Блоки -->
      <div class="relative flex justify-center items-end">
        <img
          src="/images/hero-field.webp"
          alt="Зерно"
          class="rounded-t-[50px] lg:rounded-[150px] object-cover w-full max-h-[500px]"
        />

        <!-- Блоки с цифрами -->
        <div
          class="absolute bottom-0 inset-x-0 flex justify-center gap-4 lg:gap-6 px-4 lg:px-0 -mb-8 lg:-mb-16"
        >
          <div v-for="(item, i) in stats" :key="i" class="bg-white text-center px-4 py-4 shadow-md rounded-t-full w-24 lg:w-32">
            <div class="text-green-600 text-xl lg:text-2xl font-bold">{{ item.percent }}%</div>
            <div class="text-xs lg:text-sm text-gray-700">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { percent: 32, label: 'Экономия времени' },
  { percent: 28, label: 'Экономия зерна' },
  { percent: 32, label: 'Экономия денег' }
]
</script>
