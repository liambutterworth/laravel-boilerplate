<template>
    <div class="radio-group">
        <input v-if="inForm" type="hidden" :name="name" :value="selected" />

        <div v-if="hasLabel" class="radio-group__label">
            {{ label }}
        </div>

        <slot />
    </div>
</template>

<script setup>

import _ from 'lodash';
import { computed, inject, watch } from 'vue';
import { useSelect } from '@concerns/Select';

const props = defineProps({
    name: { type: String, required: true },
    label: { type: String },
    value: { required: true },
});

const { selected } = useSelect({ selected: props.value });
const emit = defineEmits(['update:value']);
const form = inject('form', null);
const inForm = computed(() => !_.isNull(form));
const hasLabel = computed(() => !_.isUndefined(props.label))

watch(selected, () => emit('update:value', selected.value));

</script>

<style lang="scss" scoped>

.radio-group {
    .radio-group__label {
        font-weight: bold;
    }
}

</style>
