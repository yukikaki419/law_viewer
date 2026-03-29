<script setup lang="ts">
import type { UserNote } from '../types';
import { useUserNotesStore } from '../userNotesStore';

const props = defineProps<{
    note: UserNote
}>();

const userNotesStore = useUserNotesStore();

const handleDeleteNote = (id: string) => {
    userNotesStore.removeById(id);
};

</script>
<template>
    <div
        class="note-card bg-amber-50 border border-amber-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300">

        <div class="flex items-center gap-2 px-4 py-2 bg-amber-100/50 border-b border-amber-200/50">
            <input v-model="note.title" placeholder="タイトルを入力..."
                class="flex-1 bg-transparent font-bold text-sm text-amber-900 focus:outline-none placeholder:text-amber-300" />
            <div class="flex items-center gap-3">
                <button @click="note.isExpanded = !note.isExpanded" class="text-amber-600 hover:text-amber-800 text-xs">
                    {{ note.isExpanded ? '収縮' : '展開' }}
                </button>
                <button @click="handleDeleteNote(note.id)"
                    class="text-amber-400 hover:text-red-500 transition-colors text-lg leading-none">
                    ×
                </button>
            </div>
        </div>

        <div v-show="note.isExpanded" class="p-4 animate-in zoom-in-95 duration-200">
            <textarea v-model="note.content" placeholder="ここにメモを入力..."
                class="w-full bg-transparent text-sm text-amber-800 focus:outline-none min-h-[120px] resize-none leading-relaxed placeholder:text-amber-200"></textarea>
        </div>

        <div v-if="!note.isExpanded && note.content" class="px-4 py-2 flex items-center gap-1">
            <span class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span class="text-[10px] text-amber-500 font-medium">内容あり</span>
        </div>
    </div>
</template>
