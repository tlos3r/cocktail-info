<template>
    <div class="absolute z-10 flex items-center justify-center top-5 right-5">
        <SunIcon class="mr-3 text-yellow-400 w-9 h-9" />
        <span
            class="relative flex items-center justify-between w-12 p-1 rounded-full cursor-pointer h-7"
            :class="isDark ? 'bg-purple-700' : 'bg-purple-100'"
            @click="toggleDark()"
        >
            <div
                class="absolute left-0 rounded-full w-7 h-7 ball"
                :class="{ move: isDark, 'bg-purple-50': isDark, 'bg-purple-700': !isDark }"
            ></div>
        </span>
        <MoonIcon class="ml-3 w-9 h-9" :class="{ 'text-black': !isDark, 'text-purple-50': isDark }" />
    </div>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped>
.ball {
    transition: all 0.5 ease-in-out;
}
.move {
    transform: translateX(26px);
}
</style>
