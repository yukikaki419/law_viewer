import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { V_Article } from '../core/generated_types/article';

export const useViewerStore = defineStore('viewerStore', () => {
    // 現在フォーカス（選択）されている条文ID
    const focusedArticle = ref<V_Article>();

    // フォーカスを切り替えるアクション
    const setFocus = (newItem: V_Article) => {
        focusedArticle.value = newItem;
    };

    return {
        focusedArticle,
        setFocus
    };
});