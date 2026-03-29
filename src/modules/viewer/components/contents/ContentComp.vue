<script setup lang="ts">
import type {
    V_Content
} from '@/modules/core/generated_types/article';

import RubyContent from '@/modules/viewer/components/contents/RubyContent.vue';
import LineContent from '@/modules/viewer/components/contents/LineContent.vue';

const props = defineProps<{
    content: V_Content
}>();

</script>

<template>
    <template v-if="content.contentType == 'ruby'">
        <RubyContent v-bind="content" />
    </template>
    <template v-else-if="content.contentType == 'line'">
        <LineContent v-bind="content" />
    </template>
    <template v-else-if="content.contentType == 'sup'">
        <sup>{{ content.content }}</sup>
    </template>
    <template v-else-if="content.contentType == 'sub'">
        <sub>{{ content.content }}</sub>
    </template>
    <span v-else>{{ content.content }}</span>
</template>

<style scoped>
.line-style.is-solid {
    text-decoration: underline;
}

.line-style.is-dotted {
    text-decoration: underline dotted;
}

.line-style.is-double {
    text-decoration: underline double;
}

.line-style.is-none {
    text-decoration: none;
}

/* 上付き・下付きの微調整 */
sup,
sub {
    line-height: 0;
    font-size: 0.75em;
}
</style>