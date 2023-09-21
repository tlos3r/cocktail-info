<template>
    <ToggleDark />
    <RouterView></RouterView>
</template>

<script setup lang="ts">
import ToggleDark from "@/components/ToggleDark.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@600;700&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
    font-family: "Comfortaa", cursive, sans-serif;
    @apply bg-[#FAFBFD] dark:bg-indigo-950;
}
</style>
