<script setup lang="ts">
import type { V_ParagraphSentence } from '@/modules/core/generated_types/article';
import Sentence from '@/modules/viewer/components/sentence/Sentence.vue';

// Propsの定義
const props = defineProps<V_ParagraphSentence>()
</script>

<template>
    <div class="v-paragraph-sentence">
        <Sentence v-for="(sentence, index) in props.sentences" :key="index" :num="sentence.num"
            :function="sentence.function" :content="sentence.content" />
    </div>
</template>

<style scoped>
.v-paragraph-sentence {
    /* 段落内の文の集まりとしてのスタイリング */
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;

    /* 文が横に並ぶか縦に並ぶかは、文書の性質によりますが、
     一般的にはブロックとして配置し、Sentence側でインライン制御するのが柔軟です */
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

/* もし「。 (句点)」で区切られた文を通常の文章のように流したい場合は
   display: block (または inline) に変更してください 
*/
</style>