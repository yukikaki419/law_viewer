<script setup lang="ts">
import type { V_LineContent } from '@/modules/core/generated_types/article';

const props = defineProps<V_LineContent>()

</script>
<template>
    <span v-for="item in props.content.contents" class="line-style" :class="`is-${item.style}`">
        {{ item.value }}
    </span>
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
</style>