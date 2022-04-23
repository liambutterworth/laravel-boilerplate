<template>
    <div :class="classes">
        <h3>{{ props.title }}</h3>
        <slot />
    </div>
</template>

<script setup>

import _ from 'lodash';
import { computed } from 'vue';
import { useSelectable } from '@concerns/Select';

const props = defineProps({
    title: { type: String, required: true },
});

const { isSelected } = useSelectable(props.title);

const classes = computed(() => ({
    'tab-section': true,
    'tab-section--is-selected': isSelected.value,
}));

</script>

<style lang="scss">

.tab-section {
    display: none;

    &.tab-section--is-selected {
        display: block;
    }
}

</style>
