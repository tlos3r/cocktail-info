<template>
    <main class="container text-center mt-52">
        <div class="grid items-center gap-5 place-items-center">
            <h1 class="font-bold text-purple-700 dark:text-purple-50 text-7xl">Cocktail Info</h1>
            <p class="text-sm text-purple-400 dark:text-purple-50">All everything you need to know about cocktails</p>
        </div>
        <SearchInput />
        <ul class="flex justify-center gap-2 mt-5 md:gap-3">
            <li v-for="(value, index) in alplabet" :key="index">
                <RouterLink :to="`/letter/${value}`" class="text-xl font-bold text-purple-800 dark:text-purple-100">{{
                    value
                }}</RouterLink>
            </li>
        </ul>
    </main>
</template>

<script setup lang="ts">
import SearchInput from "@/components/SearchInput.vue";
import { ref, type Ref } from "vue";

const alplabet: Ref<string[]> = ref([]);

for (let i = 97; i <= 122; i++) {
    alplabet.value.push(String.fromCharCode(i));
}
</script>

<style scoped></style>
