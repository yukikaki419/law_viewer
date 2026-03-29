import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Law } from '../core/types/document_structure';
import type { LawMeta } from '../core/types/law_meta';
import { useRoute } from 'vue-router';
import type { V_Article } from '../core/generated_types/article';
import type { V_Articles } from '../core/generated_types/articles';



export const useLawDataStore = defineStore('lawDataStore', () => {
    const route = useRoute();

    const selectedLawMeta = computed<LawMeta | null>(() => {
        const lawId = route.params.lawId
        if (lawId === undefined) {
            return null
        }
        const lawName = laws.find(l => l.lawId === lawId)?.name || ""
        const lawNumber = laws.find(l => l.lawId === lawId)?.lawNumber || ""
        const lawType = laws.find(l => l.lawId === lawId)?.lawType || ""
        return {
            lawId: lawId as string,
            name: lawName,
            lawNumber: lawNumber,
            lawType: lawType
        }
    })

    const laws: LawMeta[] = [
        { name: "健康保険法", lawId: "211AC0000000070", lawNumber: "大正11年法律第70号", lawType: "閣法" },
        { name: "労働者災害補償保険法", lawId: "322AC0000000050", lawNumber: "昭和22年法律第50号", lawType: "閣法" },
        { name: "労働基準法", lawId: "322AC0000000049", lawNumber: "昭和22年法律第49号", lawType: "閣法" },
        { name: "厚生年金保険法", lawId: "329AC0000000115", lawNumber: "昭和29年法律第115号", lawType: "閣法" },
        { name: "国民年金法", lawId: "334AC0000000141", lawNumber: "昭和34年法律第141号", lawType: "閣法" },
        { name: "労働保険の保険料の徴収等に関する法律", lawId: "344AC0000000084", lawNumber: "昭和44年法律第84号", lawType: "閣法" },
        { name: "労働安全衛生法", lawId: "347AC0000000057", lawNumber: "昭和47年法律第57号", lawType: "閣法" },
        { name: "雇用保険法", lawId: "349AC0000000116", lawNumber: "昭和49年法律第116号", lawType: "閣法" }
    ];

    const loadArticles = async (lawId: string) => {
        articles.value = []
        const baseUrl = import.meta.env.BASE_URL
        const response = await fetch(`${baseUrl}articles_${lawId}.json`)
        const body: V_Articles = await response.json()
        articles.value = body.items
    }
    const articles = ref<V_Article[]>([])

    const loadLaw = async (lawId: string) => {
        const response = await fetch(`/${lawId}_doc_structure.json`)
        const body: Law = await response.json()
        law.value = body
    }
    const law = ref<Law>()

    return { articles, law, laws, selectedLawMeta, loadArticles, loadLaw, }
})