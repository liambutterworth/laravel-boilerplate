<template>
    <slot
        :is-selected="isSelected"
        :is-visible="isVisible"
        :option-classes="classes"
        :select="select"
        :text="text"
    />
</template>

<script>

export default {
    inheritAttrs: false,
}

</script>

<script setup>

import _ from 'lodash';
import { computed, onBeforeMount } from 'vue';
import { useSelectable } from '@concerns/Select'

const props = defineProps({
    text: { type: String, required: true },
    selected: { type: Boolean, default: false },
    value: { required: true },
});

const { isSelected, isVisible, select, text } = useSelectable({
    text: props.text,
    value: props.value,
});

const classes = computed(() => ({
    'option': true,
    'option--is-selected': isSelected.value,
    'option--is-visible': isVisible.value,
}));

onBeforeMount(() => {
    if (props.selected) {
        select();
    }
});

</script>

<style lang="scss">

.option {
    cursor: pointer;
}

</style>
