export type ArticleId = string

/*
修正が必要
* title は 第百五十条の二
* Article に Caption を追加

*/

export interface Articles {
    items: Article[]
}

/** 条 */
export interface Article {
    id: ArticleId
    num: string // "第三十二条の二"は "32_2"と表現
    title: string // 例；"第百五十条の二"
    caption: string // 例："（国民保健の向上のための匿名診療等関連情報の利用又は提供）"
    paragraphs: Paragraph[]
}

/** 項  */
export interface Paragraph {
    num: string
    caption: string
    sentence: ParagraphSentence
    items: Item[]
}

export type ParagraphSentenceContent = string
export interface ParagraphSentence {
    function: "main" | "proviso"
    num: string
    content: ParagraphSentenceContent
}

// 号：Item.ItemSentence.
/** 号 */
export interface Item {
    num: string
    title: string
    sentence: ItemSentence
    subItems: SubItem[]
}
export interface ItemSentence {
    content: ItemSentenceContent
}
export type ItemSentenceContent = string


/** 号の細目 */
export interface SubItem {
    num: string
    title: string
    subItems: SubItem[] // 再帰的に
}
