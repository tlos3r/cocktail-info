<template>
    <SkeletonLoading v-if="loading" value-name="menu" />
    <div v-else class="container mt-20 md:mt-10">
        <h1 class="text-4xl font-bold text-center text-purple-700 dark:text-purple-50">
            Total result found : {{ cocktails.length === 0 ? "" : cocktails.length }}
        </h1>
        <button
            class="px-4 py-2 ml-5 rounded-full bg-gradient-to-r from-purple-900 to-purple-500 hover:from-purple-400 hover:to-purple-100 text-purple-50"
            @click="$router.push({ name: 'home' })"
        >
            Go back
        </button>
        <div class="grid items-center justify-center grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div
                v-for="cocktail in cocktails"
                :key="cocktail.idDrink"
                class="relative inline-block mx-auto my-24 shadow-md"
            >
                <img
                    :src="cocktail.strDrinkThumb"
                    class="w-full h-full mx-auto md:w-56 md:h-56 lg:w-72 lg:h-72"
                    alt="this is image about cocktail"
                />
                <h3 class="my-3 text-3xl text-center text-purple-700 dark:text-purple-50">
                    {{ cocktail.strDrink }}
                </h3>
                <div
                    class="absolute top-0 w-full h-full bg-transparent cursor-pointer"
                    @click="$router.push({ name: 'details', params: { id: cocktail.idDrink } })"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import request from "@/utils/request";
import type { Cocktail } from "@/models/Cocktails";
import SkeletonLoading from "@/components/SkeletonLoading.vue";
const route = useRoute();
const toast = useToast();
const router = useRouter();
const cocktails: Ref<Cocktail[]> = ref([]);
const loading = ref(false);
onBeforeMount(async () => {
    loading.value = true;
    try {
        const resultLetter = await request.searchByFirstLetter(route.params.value.toString());
        cocktails.value = resultLetter.drinks;
        loading.value = false;
    } catch (error) {
        loading.value = true;
        toast.error("Something has wrong");
        router.push({ name: "home" });
    }
});
</script>

<style scoped></style>
