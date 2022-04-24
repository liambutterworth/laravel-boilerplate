<template>
    <option-container v-bind="$props" v-slot="{ isSelected, isVisible, optionClasses, select, text }">
        <li v-if="isVisible" :class="[classes, optionClasses]" role="option" @click="select">
            <i class="toggle-option__icon">
                <plus-icon :slanted="isSelected" />
            </i>

            <span class="toggle-option__text" v-html="text" />
        </li>
    </option-container>
</template>

<script setup>

import { computed } from 'vue';
import OptionContainer from '@components/Forms/Options/OptionContainer';
import PlusIcon from '@components/Icons/PlusIcon';

const classes = computed(() => ({
    'toggle-option': true,
}));

</script>

<style lang="scss" scoped>

@import '@css/_functions';
@import '@css/_settings';

.toggle-option {
    line-height: lines(2);
    padding: 0 lines(0.5);

    .toggle-option__icon {
        margin-right: lines(0.5);
    }

    &:hover {
        background: $success-color;
        color: #fff;
    }

    &.option--is-selected {
        background: darken(#fff, 10%);

        &:hover {
            background: $error-color;
            color: #fff;
        }
    }
}

</style>
