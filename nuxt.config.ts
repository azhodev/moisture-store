// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },

    components: [
        { path: '~/components', pathPrefix: false }
    ],

    modules: ["@nuxt/eslint", "shadcn-nuxt", "@nuxtjs/google-fonts", "@nuxt/icon", "@nuxt/image"],

    css: ["~/assets/css/tailwind.css"],
    vite: {
        plugins: [tailwindcss()],
    },

    shadcn: {
        prefix: "Ui",
        componentDir: "./components/ui",
    },

    googleFonts: {
        families: {
            Sora: [400, 600],
        },
    },
});