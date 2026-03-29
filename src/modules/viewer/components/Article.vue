<script setup lang="ts">
import { computed } from 'vue';
import type { V_Article } from "@/modules/core/generated_types/article";
import { useViewerStore } from '../viewerStore';
import { useUserNotesStore } from '../../workspace/userNotesStore'
import Paragraph from './paragraph/Paragraph.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps<{ article: V_Article }>();

const viewerStore = useViewerStore();
const userNotesStore = useUserNotesStore();

const isActive = computed(() => viewerStore.focusedArticle?.id === props.article.id);
const hasNotes = computed(() => userNotesStore.getByArticleId(props.article.id).length > 0);

const handleClick = () => {
    viewerStore.setFocus(props.article);
    router.replace({ hash: `#${props.article.id}` });
};

const formattedArticleNum = computed(() => {
    const splitParts = props.article.num.split("_")
    if (splitParts.length === 1) {
        return `第${splitParts[0]}条`
    }
    return `第${splitParts[0]}の${splitParts[1]}条`
})

</script>

<template>
    <div class="article-container" :class="{ 'active-article': isActive, 'has-notes': hasNotes }"
        @click.stop="handleClick">
        <div class="article-title">
            {{ formattedArticleNum }} <template v-if="article.caption"> {{ article.caption }}</template>
            <span v-if="hasNotes" class="note-icon">✎</span>
        </div>

        <Paragraph v-for="(p, index) in article.paragraphs" :key="`${article.id}-p-${index}`" :paragraph="p" />
    </div>
</template>

<style scoped>
@reference "@/style.css";

.article-container {
    @apply my-6 p-4 rounded-lg border border-transparent cursor-pointer transition-colors font-serif;
}

.active-article {
    @apply bg-blue-50 border-blue-200 ring-2 ring-blue-100;
}

.has-notes:not(.active-article) {
    @apply border-amber-100/50;
}

.article-title {
    @apply font-bold block mb-2 text-lg border-b border-slate-200 pb-1;
}

.note-icon {
    @apply ml-2 text-amber-500 text-sm;
}
</style>