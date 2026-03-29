<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useWorkspaceStore } from './workspaceStore';
import GuideCard from './components/GuideCard.vue';
import NoteCard from './components/NoteCard.vue';

const workspaceStore = useWorkspaceStore();

// 解説カードの開閉状態
const isCommentaryExpanded = ref(true);

// 選択中の条文番号（表示用）
const currentArticleNum = computed(() => workspaceStore.focusedArticleNum);

// メモ追加のハンドリング
const handleAddNote = () => {
    workspaceStore.addUserNote();
};

// 条文が切り替わった際に解説を自動で開く
watch(() => workspaceStore.focusedArticleId, () => {
    isCommentaryExpanded.value = true;
});
</script>

<template>
    <div class="h-full flex flex-col">
        <div v-if="currentArticleNum" class="flex-1 overflow-y-auto p-6 space-y-6">
            <header class="mb-8">
                <h2 class="text-2xl font-bold text-slate-800 border-l-4 border-blue-500 pl-3">
                    第 {{ currentArticleNum }} 条
                </h2>
            </header>

            <section v-if="workspaceStore.guide">
                <GuideCard :guide="workspaceStore.guide"></GuideCard>
            </section>

            <section class="space-y-4">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wider">Notes</h3>
                    <button @click="handleAddNote"
                        class="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full font-bold shadow-sm transition-all active:scale-95">
                        ＋ メモを追加
                    </button>
                </div>

                <TransitionGroup name="note-list" tag="div" class="space-y-4">
                    <NoteCard v-for="note in workspaceStore.userNotes" :key="note.id" :note="note" />
                </TransitionGroup>

                <div v-if="!workspaceStore.userNotes.length"
                    class="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400 text-sm">
                    まだメモがありません。
                </div>
            </section>
        </div>

        <div v-else class="flex-1 flex items-center justify-center text-slate-400 italic">
            条文を選択してください
        </div>
    </div>
</template>

<style scoped>
@reference "@/style.css";

/* リストのアニメーション */
.note-list-enter-active,
.note-list-leave-active {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.note-list-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
}

.note-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* カスタムスクロールバー */
.overflow-y-auto::-webkit-scrollbar {
    width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    @apply bg-slate-300 rounded-full;
}

.animate-in {
    animation-duration: 0.3s;
    animation-fill-mode: both;
}
</style>