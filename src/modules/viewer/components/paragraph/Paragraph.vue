<script setup lang="ts">
import type { V_Paragraph } from "@/modules/core/generated_types/article";
import ParagraphSentence from "@/modules/viewer/components/paragraph/ParagraphSentence.vue"

defineProps<{ paragraph: V_Paragraph }>();
</script>

<template>
    <div class="paragraph-node">
        <span class="paragraph-num">[{{ paragraph.num }}]</span>

        <div class="sentence-content">
            <span v-if="paragraph.caption" class="font-bold mr-2">{{ paragraph.caption }}</span>
            <ParagraphSentence v-bind="paragraph.paragraphSentence" />
        </div>
    </div>
</template>

<style scoped>
@reference "@/style.css";

.paragraph-node {
    /* flex を使い、上揃え(baseline)で横に並べる */
    @apply ml-4 my-2 leading-relaxed flex items-baseline;
}

.paragraph-num {
    /* 2文字分程度の幅を確保しておくと、本文の開始位置が揃って綺麗です */
    @apply font-bold text-slate-600 mr-2 min-w-[1.5rem] flex-shrink-0;
}

.sentence-content {
    /* ParagraphSentenceコンポーネント自体も inline として扱う */
    @apply inline;
}

/* ParagraphSentence 内の div 等がブロック化するのを防ぐ */
:deep(.v-paragraph-sentence),
:deep(.v-sentence) {
    display: inline;
}
</style>