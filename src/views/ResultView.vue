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
                    class="w-full h-full md:w-56 md:h-56 lg:w-72 lg:h-72"
                    alt="this is image about cocktail"
                />
                <h3 class="my-3 text-3xl text-center text-purple-700 dark:text-purple-50">{{ cocktail.strDrink }}</h3>
                <div
                    class="absolute top-0 w-full h-full bg-transparent cursor-pointer"
                    @click="$router.push({ name: 'details', params: { id: cocktail.idDrink } })"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, type Ref } from "vue";
import SkeletonLoading from "@/components/SkeletonLoading.vue";
import { useRoute } from "vue-router";
import type { Cocktail } from "@/models/Cocktails";
import request from "@/utils/request";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const toast = useToast();
const route = useRoute();
const router = useRouter();

const cocktails: Ref<Cocktail[]> = ref([]);
const loading: Ref<boolean> = ref(false);

onBeforeMount(async () => {
    loading.value = true;
    try {
        const searchResult = await request.searchCocktail(route.params.value.toString());
        cocktails.value = searchResult.drinks;
        loading.value = false;
    } catch (error) {
        loading.value = false;
        toast.error(error as string);
        router.push({ name: "home" });
    }
});
</script>
