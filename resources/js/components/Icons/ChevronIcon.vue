<template>
    <icon-container v-bind="$props">
        <polyline :class="classes" points="6,9 12,15 18,9" />
    </icon-container>
</template>

<script setup>

import { computed } from 'vue';
import IconContainer from '@components/Icons/IconContainer';

const props = defineProps({
    direction: {
        type: String,
        default: 'up',

        validator(value) {
            return ['down', 'left', 'right', 'up'].includes(value);
        },
    },
});

const classes = computed(() => ({
    'icon-chevron': true,
    'icon-chevron--is-down': props.direction === 'down',
    'icon-chevron--is-left': props.direction === 'left',
    'icon-chevron--is-right': props.direction === 'right',
    'icon-chevron--is-up': props.direction === 'up',
}));

</script>

<style lang="scss">

@import '@css/functions';

.icon-chevron {
    transform-origin: center;
    transition: transform 200ms ease-in-out;

    &.icon-chevron--is-down {
        transform: rotate(0deg);
    }

    &.icon-chevron--is-left {
        transform: rotate(90deg);
    }

    &.icon-chevron--is-right {
        transform: rotate(270deg);
    }

    &.icon-chevron--is-up {
        transform: rotate(180deg);
    }
}

</style>
