<template>
    <div>
        <BurgerButton
            v-model="isOpen"
            class="lg:hidden z-50 relative"
        />

        <Teleport to="body">
            <transition name="fade">
                <div
                    v-if="isOpen"
                    class="fixed inset-0 z-40 bg-black/50"
                    @click.self="isOpen = false"
                >
                    <div
                        class="absolute top-0 right-0 w-full h-full bg-white shadow-lg p-6 z-50 flex flex-col justify-center items-center gap-7.5">
                        <!-- Содержимое меню -->
                        <ContactInfo />
                        <NuxtLink to="/">
                            <NuxtImg
                                src="/logo.svg"
                                class="w-30 h-22"
                            />
                        </NuxtLink>
                        <BaseButton
                            size="sm"
                            class="bg-primary hover:bg-green-600 text-primary-foreground py-[18px] px-11 rounded-5xl"
                        >
                            Связаться с нами
                        </BaseButton>
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
