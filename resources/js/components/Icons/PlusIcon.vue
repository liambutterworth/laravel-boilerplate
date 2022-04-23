<template>
    <icon-container v-bind="$props">
        <g :class="classes">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
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
