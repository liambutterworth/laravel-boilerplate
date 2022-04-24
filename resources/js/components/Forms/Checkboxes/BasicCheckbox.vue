<template>
    <checkbox-container v-bind="$props" v-slot="{ checkboxClasses, isChecked, label, toggle }">
        <div :class="[classes, checkboxClasses]" @click="toggle">
            <i class="basic-checkbox__icon">
                <checkbox-icon :is-checked="isChecked" />
            </i>

            <span class="basic-checkbox__text">
                {{ label }}
            </span>
        </div>
    </checkbox-container>
</template>

<script setup>

import { computed } from 'vue';
import CheckboxContainer from '@components/Forms/Checkboxes/CheckboxContainer';
import CheckboxIcon from '@components/Icons/CheckboxIcon';

const classes = computed(() => ({
    'basic-checkbox': true,
}));

</script>

<style lang="scss">

@import '@css/_functions';
@import '@css/_settings';

.basic-checkbox {
    display: inline-block;
    line-height: lines(2);

    .basic-checkbox__label {
        cursor: pointer;
        display: flex;
    }

    .basic-checkbox__icon {
        margin-right: lines(0.5);
        position: relative;
    }

    .basic-checkbox__icon::before {
        background-color: rgba(0, 0, 0, 0.15);
        border-radius: $border-radius;
        content: "";
        display: none;
        height: lines(1.5);
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        width: lines(1.5);
        z-index: -1;
    }

    .basic-checkbox__icon:hover::before {
        display: block;
    }
}

</style>
