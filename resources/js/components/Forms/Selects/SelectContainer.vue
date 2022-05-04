<template>
    <template v-if="inForm">
        <input v-if="!hasSelection" type="hidden" :name="name" :value="null" />
        <input v-for="selection in selections" type="hidden" :name="name" :value="selection" />
    </template>

    <slot v-bind="{
        deselect,
        hasSelection,
        isMultiSelect,
        label,
        value,
        search,
        selected,
        selections,
    }" />
</template>

<script setup>

import { computed, inject, watch } from 'vue';
import { useSelect } from '@concerns/Select';

const props = defineProps({
    ensure: { type: Boolean, default: true },
    label: { type: String, required: true },
    multi: { type: Boolean, default: true },
    name: { type: String, required: true },
    search: { type: Boolean, default: false },
    value: { default: null },
});

const { deselect, hasSelection, search, selected, selections } = useSelect({
    ensure: props.ensure,
    multi: props.multi,
    selected: props.value,
});

const emit = defineEmits(['update:value']);
const form = inject('form', null);
const inForm = computed(() => !_.isNull(form));
const isMultiSelect = computed(() => props.multi);

const name = computed(() => (
    isMultiSelect.value && hasSelection.value ? `${props.name}[]` : props.name
));

watch(selected, () => emit('update:value', selected.value));

</script>
