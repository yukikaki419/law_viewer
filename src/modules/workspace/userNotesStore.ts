import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { UserNote, UserNoteId } from './types';
import type { ArticleId } from '../core/types/article_structure';

export const useUserNotesStore = defineStore('userNotesStore', () => {
    const userNotes = ref<UserNote[]>([])
    const getByArticleId: (articleId: ArticleId) => UserNote[] = (articleId) => {
        return userNotes.value.filter(item => item.articleId === articleId)
    }

    const removeById = (noteId: UserNoteId) => {
        userNotes.value = userNotes.value.filter((item) => item.id != noteId)
    }

    const add = (newUserNote: UserNote) => {
        userNotes.value.push(newUserNote)
    }

    return { userNotes, getByArticleId, removeById, add }
}, {
    persist: { storage: localStorage }
})