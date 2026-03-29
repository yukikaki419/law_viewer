import { defineStore } from 'pinia';
import { computed } from 'vue';
import type { Guide, UserNote } from './types';
import { useUserNotesStore } from './userNotesStore';
import { useViewerStore } from '../viewer/viewerStore';

export const useWorkspaceStore = defineStore('workspaceStore', () => {
    const userNotesStore = useUserNotesStore()
    const viewerStore = useViewerStore()

    const focusedArticleId = computed<string>(() => viewerStore.focusedArticle?.id ?? '')
    const focusedArticleNum = computed<string>(() => viewerStore.focusedArticle?.num ?? '')

    const guide = computed<Guide>(() => {
        if (focusedArticleId.value === '') {
            return { content: '' }
        }
        return { content: focusedArticleId.value }
    })

    const userNotes = computed<UserNote[]>(() => {
        if (focusedArticleId.value === '') {
            return []
        }
        return userNotesStore.getByArticleId(focusedArticleId.value)
    })

    const addUserNote = () => {
        const newNote: UserNote = {
            articleId: focusedArticleId.value,
            id: crypto.randomUUID(),
            title: '新規メモ',
            content: '',
            isExpanded: true
        }
        userNotesStore.add(newNote)
    }
    return { focusedArticleId, focusedArticleNum, guide, userNotes, addUserNote }
})