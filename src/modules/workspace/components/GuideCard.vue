<script setup lang="ts">
import { ref } from 'vue';
import type { Guide } from '../types';
const props = defineProps<{
    guide: Guide
}>();

// 解説カードの開閉状態を管理
const isExpanded = ref(true);

</script>

<template>
    <div class="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden transition-all">
        <button @click="isExpanded = !isExpanded"
            class="w-full flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-100 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="解説の表示を切り替える">
            <span class="font-bold text-sm text-slate-600 flex items-center">
                <span class="mr-2">💡</span> 解説
            </span>
            <span class="text-slate-400 text-xs font-medium">
                {{ isExpanded ? '閉じる ▲' : '開く ▼' }}
            </span>
        </button>

        <div v-show="isExpanded"
            class="p-4 text-slate-700 leading-relaxed text-sm animate-in fade-in slide-in-from-top-1 duration-200">
            <template v-if="guide.content">
                {{ guide.content }}
            </template>
            <template v-else>
                <span class="text-slate-400 italic">解説はありません。</span>
            </template>
        </div>
    </div>
</template>

<style scoped>
/* Tailwindのユーティリティが不足している場合のためのアニメーション補完 */
.animate-in {
    animation-duration: 200ms;
    animation-fill-mode: both;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideInFromTop {
    from {
        transform: translateY(-4px);
    }

    to {
        transform: translateY(0);
    }
}

.fade-in {
    animation-name: fadeIn;
}

.slide-in-from-top-1 {
    animation-name: slideInFromTop;
}
</style>