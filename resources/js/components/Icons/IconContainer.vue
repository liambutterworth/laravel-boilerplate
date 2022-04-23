<template>
    <svg
        :class="classes"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMin meet"
    >
        <slot />
    </svg>
</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
    size: {
        type: String,
        default: 'medium',

        validator(value) {
            return [
                'small',
                'medium',
                'large',
            ].includes(value);
        },
    },
});

const classes = computed(() => ({
    'icon-container': true,
    'icon-container--is-small': props.size === 'small',
    'icon-container--is-medium': props.size === 'medium',
    'icon-container--is-large': props.size === 'large',
    'icon-container--is-fluid': props.size === 'fill',
}));

</script>

<style lang="scss">

@import '@css/_functions';

.icon-container {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    vertical-align: text-bottom;

    &.icon-container--is-small {
        height: lines(0.75);
        width: lines(0.75);
    }

    &.icon-container--is-medium {
        height: lines(1);
        width: lines(1);
    }

    &.icon-container--is-large {
        height: lines(2);
        width: lines(2);
    }

    &.icon-container--is-fluid {
        height: 100%;
        width: 100%;
    }
}

</style>
