<template>
    <icon-container v-bind="$props">
        <g :class="classes">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </g>
    </icon-container>
</template>

<script setup>

import { computed } from 'vue';
import IconContainer from '@components/Icons/IconContainer';

const props = defineProps({
    slanted: { type: Boolean, default: false },
});

const classes = computed(() => ({
    'icon-plus': true,
    'icon-plus--is-slanted': props.slanted,
}));

</script>

<style lang="scss">

.icon-plus {
    transform-origin: center;
    transition: transform 200ms ease-in-out;

    &.icon-plus--is-slanted {
        transform: rotate(45deg);
    }
}

</style>
