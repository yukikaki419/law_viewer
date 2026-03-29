<script setup lang="ts">

import Workspace from '@/modules/workspace/Workspace.vue';
import LawViewer from '@/modules/viewer/LawViewer.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const lawId = route.params.lawId as string

</script>

<template>
    <div class="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        <main class="flex-1 flex overflow-hidden">
            <LawViewer :law-id="lawId" />
            <aside class="w-2/5 bg-slate-100/50 overflow-y-auto">
                <Workspace />
            </aside>
        </main>
    </div>
</template>

<style>
/* 全体で使うフォント設定（明朝体系を優先） */
.font-serif {
    font-family: "BIZ UDPMincho", "Hiragino Mincho ProN", "MS Mincho", serif;
}

/* スクロールバーのカスタマイズ（任意） */
::-webkit-scrollbar {
    width: 6px;
}
</style>