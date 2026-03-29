<script setup lang="ts">
import Article from './components/Article.vue';
import { useLawDataStore } from './lawDataStore'


const props = defineProps<{
    lawId: string
}>()

const lawDataStore = useLawDataStore()
lawDataStore.loadArticles(props.lawId)
</script>

<template>

    <div class="law-container">

        <div v-if="lawDataStore.articles">
            <Article v-for="article in lawDataStore.articles" :article="article" :id="article.id"
                style="scroll-margin-top: 100px;"></Article>
        </div>
        <div v-else class="flex items-center justify-center h-64 text-slate-400">
            法令データが読み込まれていません
        </div>
    </div>
</template>

<style scoped>
@reference "@/style.css";

.law-container {
    /* スクロールバーを表示するための設定 */
    height: 80vh;
    /* 画面の高さの80%にする（適宜調整） */
    overflow-y: auto;
    /* 縦方向に溢れたらスクロールバーを表示 */
    padding-right: 1rem;
    /* スクロールバーとコンテンツの間の余白 */

    /* 本文が読みやすいように行間と余白を調整 */
    line-height: 1.8;
    @apply max-w-none;
    width: 75%;
}

/* (任意) スクロールバー自体のデザインを整える（Webkit系ブラウザ） */
.law-container::-webkit-scrollbar {
    width: 8px;
}

.law-container::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    /* slate-300 */
    border-radius: 4px;
}
</style>
