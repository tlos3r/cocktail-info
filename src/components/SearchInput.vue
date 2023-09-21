<template>
    <form @submit.prevent="handleResultSearch" class="flex justify-center mt-5">
        <input
            type="text"
            class="bg-purple-50 dark:bg-purple-100 dark:border-purple-400 border border-gray-300 text-purple-900 text-base rounded-full focus:ring-purple-500 dark:focus:ring-white focus:border-purple-500 dark:focus:border-purple-50 block w-4/6 md:w-2/6 p-2.5 outline-none dark:text-purple-700"
            placeholder="Eg: Margarita, ..."
            v-model="searchText"
        />
        <button
            class="px-6 py-2 ml-5 rounded-full bg-gradient-to-r from-purple-900 to-purple-500 hover:from-purple-400 hover:to-purple-100"
        >
            <MagnifyingGlassIcon class="w-8 h-8 text-white" />
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";

const router = useRouter();
const searchText = ref("");

const handleResultSearch = () => {
    router.push({ name: "result", params: { value: searchText.value } });
    searchText.value = "";
};
</script>

<style scoped></style>
