import type { ArticleId } from "./article_structure"

export interface Law {
    lawId: string // 例：322AC0000000049
    lawNum: string // 例：昭和二十二年法律第四十九号
    lawBody: LawBody
}

export interface LawBody {
    lawTitle: string
    toc: Toc
    mainProvision: MainProvision
    supplProvisions: SupplProvision[]
}

export interface Toc {
    tocLabel: string;
    chapters: TocChapter[];
    supplProvision?: TocSupplProvision;
}

export interface TocChapter {
    num: string; // "1" や "6_2" が入るため string 型
    chapterTitle: string;
}

export interface TocSupplProvision {
    supplProvisionLabel: string;
}

// 本則 → 複数の章で構成される
export interface MainProvision {
    chapters: Chapter
}
// 章
export interface Chapter {
    num: string
    title: string
    articleIds: ArticleId[]
}

// 附　則
export interface SupplProvision {
    articles: ArticleId[]
}

export interface AppdxTable {
    content: string
}



