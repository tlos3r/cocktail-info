<template>
    <div v-if="props.valueName === 'menu'">
        <div class="container mt-20 animate-pulse">
            <div class="w-1/3 h-10 mx-auto my-0 empty:bg-slate-300"></div>
            <div class="grid items-center justify-center grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                <div v-for="n in 8" :key="n" class="relative inline-block mx-auto my-24 shadow-md bg-slate-300">
                    <div class="w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72"></div>
                    <div class="w-12 h-5 my-3 text-3xl"></div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="props.valueName === 'detail'">
        <div class="container animate-pulse">
            <div class="grid items-center justify-center grid-cols-1 gap-3 mt-20 md:grid-cols-2">
                <div class="mx-auto rounded-md w-72 h-72 empty:bg-slate-300"></div>
                <div class="flex flex-col items-center">
                    <div class="w-56 h-20 rounded-md empty:bg-slate-300"></div>
                    <div class="w-full mt-5 rounded-md h-80 empty:bg-slate-300"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    valueName: String,
});
console.log(props.valueName);
</script>

<style scoped></style>
