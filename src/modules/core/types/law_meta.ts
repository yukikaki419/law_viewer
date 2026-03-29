export interface LawMeta {
    lawId: string
    name: string
    /**
     * 法令番号 （例：昭和22年4月7日法律第49号）
     */
    lawNumber: string
    /**
     * 法令種別 （例：閣法、政令）
     */
    lawType: LawType
}

type LawType = "" | "憲法" | "法律" | "閣法" | "議法" | "政令" | "勅令" | "府省令" | "規則"