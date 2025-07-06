<!-- components/app/AppHeader.vue -->
<template>
    <header class="py-4 bg-secondary">
        <BaseOuterWrapper>
            <div class="flex items-center justify-between gap-4 flex-wrap">
                <!-- ЛОГО -->
                <div class="xs:text-2xl lg:text-4xl font-semibold text-primary z-50">
                    РусТехно
                </div>

                <!-- Контактная информация -->
                <div class="hidden lg:flex items-center gap-15 text-gray-700 flex-wrap">
                    <ContactInfo />

                    <!-- КНОПКА -->
                    <BaseButton
                        size="sm"
                        class="bg-primary hover:bg-green-600 text-primary-foreground py-[18px] px-11 rounded-5xl"
                    >
                        Связаться с нами
                    </BaseButton>
                </div>
                <BurgerPopover
                    v-model="isMenuOpen"
                    class="lg:hidden"
                />
            </div>
        </BaseOuterWrapper>
    </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
</script>
