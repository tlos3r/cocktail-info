<template>
    <SkeletonLoading v-if="loading" value-name="detail" />
    <div v-else class="container h-screen">
        <button
            class="px-4 py-2 mt-5 rounded-full bg-gradient-to-r from-purple-900 to-purple-500 hover:from-purple-400 hover:to-purple-100 text-purple-50"
            @click="$router.back()"
        >
            Go back
        </button>
        <div class="grid items-center justify-center grid-cols-1 gap-3 md:grid-cols-2">
            <div class="flex flex-col items-center">
                <img
                    :src="cocktails[0].strDrinkThumb"
                    :alt="cocktails[0].strAlcoholic"
                    class="w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72"
                />
                <h3 class="pt-10 text-3xl font-bold text-center text-purple-700 dark:text-purple-50">
                    {{ cocktails[0].strDrink }}
                </h3>
            </div>
            <div class="flex flex-col items-center">
                <h4 class="pb-5 text-6xl font-bold text-purple-700 dark:text-purple-50">Details</h4>
                <table class="w-full shadow-md table-fixed border-spacing-px bg-gradient-to-r bg-slate-50">
                    <tbody>
                        <tr>
                            <td
                                class="w-2/6 p-5 text-xl font-bold text-center text-white border border-slate-200 bg-gradient-to-tr from-purple-900 to-purple-500"
                            >
                                Introduction
                            </td>
                            <td class="p-5 text-base border border-slate-200">{{ cocktails[0].strInstructions }}</td>
                        </tr>
                        <tr>
                            <td
                                class="p-5 text-xl font-bold text-center text-white border border-slate-200 bg-gradient-to-tr from-purple-900 to-purple-500"
                            >
                                Categories
                            </td>
                            <td class="p-5 text-base border border-slate-200">{{ cocktails[0].strCategory }}</td>
                        </tr>
                        <tr>
                            <td
                                class="p-5 text-xl font-bold text-center text-white border border-slate-200 bg-gradient-to-tr from-purple-900 to-purple-500"
                            >
                                Ingreadients
                            </td>
                            <td class="p-5 text-base border border-slate-200">
                                <ul>
                                    <li v-for="index in 15" :key="index">
                                        <p>
                                            {{
                                                cocktails[0][`strMeasure${index}`] === typeof null
                                                    ? null
                                                    : cocktails[0][`strMeasure${index}`]
                                            }}{{
                                                cocktails[0][`strIngredient${index}`] === typeof null
                                                    ? null
                                                    : cocktails[0][`strIngredient${index}`]
                                            }}
                                        </p>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td
                                class="p-5 text-xl font-bold text-center text-white border border-slate-200 bg-gradient-to-tr from-purple-900 to-purple-500"
                            >
                                Tag
                            </td>
                            <td class="p-5 text-base truncate border border-slate-200">
                                {{ cocktails[0].strTags === null ? "No tag" : cocktails[0].strTags }}
                            </td>
                        </tr>
                        <tr>
                            <td
                                class="p-5 text-xl font-bold text-center text-white border border-slate-200 bg-gradient-to-tr from-purple-900 to-purple-500"
                            >
                                Creative Confirmed
                            </td>
                            <td class="p-5 text-base border border-slate-200">
                                <p>{{ cocktails[0].strCreativeCommonsConfirmed }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                class="p-5 text-xl font-bold text-center text-white border border-slate-200 bg-gradient-to-tr from-purple-900 to-purple-500"
                            >
                                Last update
                            </td>
                            <td class="p-5 text-base border border-slate-200">
                                {{ formatDateVn(cocktails[0].dateModified) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Cocktail } from "@/models/Cocktails";
import { onBeforeMount, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import request from "@/utils/request";
import SkeletonLoading from "@/components/SkeletonLoading.vue";

const route = useRoute();
const toast = useToast();
const loading = ref(false);
const cocktails: Ref<Cocktail[]> = ref([]);

onBeforeMount(async () => {
    loading.value = true;
    try {
        const detailCocktail = await request.detailsCocktail(route.params.id.toString());
        cocktails.value = detailCocktail.drinks;
        console.log(cocktails.value);
        loading.value = false;
    } catch (error: Error | any) {
        loading.value = false;
        toast.error(error.message);
    }
});
const formatDateVn = (time: string) => {
    return new Date(time).toLocaleDateString("vi-VN");
};
</script>
