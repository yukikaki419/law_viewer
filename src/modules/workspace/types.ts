import type { ArticleId } from "../core/types/article_structure"

export interface Workspace {
    guides: Guide[]
    notes: UserNote[]
}

export interface Guide {
    content: string
}

export type UserNoteId = string

export interface UserNote {
    id: UserNoteId
    articleId: ArticleId
    title: string
    content: string
    isExpanded: boolean;
}
