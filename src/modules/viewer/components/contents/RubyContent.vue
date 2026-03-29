<script setup lang="ts">
import type { V_RubyContent } from '@/modules/core/generated_types/articles';

const props = defineProps<V_RubyContent>()

</script>

<template>
    <ruby>
        <template v-for="(item, index) in props.content" :key="index">
            <template v-if="item.valueType === 'rb'">
                {{ item.value }}
            </template>

            <rt v-else-if="item.valueType === 'rt'">
                {{ item.value }}
            </rt>
        </template>
    </ruby>
</template>

<style scoped>
ruby {
    ruby-align: center;
}
</style>