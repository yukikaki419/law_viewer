<script setup lang="ts">
import { useLawDataStore } from '@/modules/viewer/lawDataStore';

const lawDataStore = useLawDataStore()
const laws = lawDataStore.laws
</script>

<template>
    <div class="max-w-2xl mx-auto p-6">
        <h2 class="text-lg font-bold text-slate-700 mb-6 border-l-4 border-blue-500 pl-3">
            法令一覧
        </h2>

        <div class="grid gap-3">
            <router-link v-for="law in laws" :key="law.lawId" :to="`/laws/${law.lawId}`"
                class="group block p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200">
                <div class="flex items-center justify-between">
                    <span class="font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                        {{ law.name }}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-slate-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </router-link>
        </div>
    </div>
</template>
