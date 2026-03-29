<script setup lang="ts">
import type { V_Sentence } from '@/modules/core/generated_types/article';
import ContentComp from '@/modules/viewer/components/contents/ContentComp.vue';

const props = defineProps<V_Sentence>();
</script>

<template>
    <div class="v-sentence">
        <div class="sentence-content">
            <ContentComp v-for="content in props.content" :content="content" />
        </div>
    </div>
</template>

<style scoped>
.v-sentence {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    line-height: 1.6;
}

.sentence-number {
    font-size: 0.8rem;
    color: #888;
    min-width: 1.5rem;
}

.sentence-function {
    font-weight: bold;
    font-size: 0.85rem;
    color: #555;
}

.sentence-content {
    flex: 1;
}
</style>