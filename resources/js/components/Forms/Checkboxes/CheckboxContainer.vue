<template>
    <input type="hidden" :name="name" :value="value" />

    <slot
        :checkbox-classes="classes"
        :is-checked="isChecked"
        :label="label"
        :toggle="toggle"
        :value="value"
    />
</template>

<script>

export default {
    inheritAttrs: false,
}

</script>

<script setup>

import { computed } from 'vue';

const props = defineProps({
    label: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: Boolean, required: true },
});

const classes = computed(() => ({
    'checkbox': true,
}));

const emit = defineEmits(['update:value']);
const isChecked = computed(() => props.value);

function toggle() {
    emit('update:value', !props.value);
}

</script>

<style lang="scss">

.checkbox {
    cursor: pointer;
}

</style>
