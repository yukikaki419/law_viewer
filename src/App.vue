<script setup lang="ts">
import router from './router';
import { useLawDataStore } from './modules/viewer/lawDataStore';

const lawDataStore = useLawDataStore()



</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <div class="px-6 py-3 border-b border-slate-100 flex justify-between items-center">
      <h1 class="text-lg font-bold text-slate-800 tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
        @click.prevent="router.push('/')">
        F-Gov
      </h1>
      <div class="text-slate-400 hover:text-slate-600 cursor-pointer">
        <span class="text-sm">ヘルプ</span>
      </div>
    </div>

    <div v-if="lawDataStore.selectedLawMeta !== null"
      class="px-6 py-2 bg-slate-50/50 flex items-center gap-3 border-b border-slate-200">
      <h2 class="text-md font-bold text-slate-700">
        {{ lawDataStore.selectedLawMeta.name }}
        <span class="ml-2 text-xs font-normal text-slate-500">（{{ lawDataStore.selectedLawMeta.lawNumber }}）</span>
      </h2>
      <div class="ml-auto">
        <span class="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-bold">{{
          lawDataStore.selectedLawMeta.lawType }}</span>
      </div>
    </div>
  </header>

  <main>
    <router-view />
  </main>
</template>
