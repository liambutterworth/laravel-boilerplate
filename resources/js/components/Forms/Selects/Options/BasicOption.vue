<template>
    <li v-if="isVisible" :class="classes" role="option" @click="select">
        <i class="form-option__icon">
            <plus-icon :slanted="isSelected" />
        </i>

        <span class="form-option__text" v-html="text" />
    </li>
</template>

<script setup>

import _ from 'lodash';
import { computed, onBeforeMount } from 'vue';
import { useSelectable } from '@concerns/Select'
import PlusIcon from '@components/Icons/PlusIcon';

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
    'form-option': true,
    'form-option--is-selected': isSelected.value,
}));

onBeforeMount(() => {
    if (props.selected) {
        select();
    }
});

</script>

<style lang="scss" scoped>

@import '@css/_functions';
@import '@css/_settings';

.form-option {
    cursor: pointer;
    line-height: lines(2);
    padding: 0 lines(0.5);
    vertical-align: center;

    .form-option__icon {
        margin-right: lines(0.5);
    }

    &:hover {
        background: $success-color;
        color: #fff;
    }

    &.form-option--is-selected {
        background: darken(#fff, 10%);

        &:hover {
            background: $error-color;
            color: #fff;
        }
    }
}

</style>
