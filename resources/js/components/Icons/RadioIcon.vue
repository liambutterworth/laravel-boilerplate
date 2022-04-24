<template>
    <icon-container>
        <g :class="classes">
            <circle class="icon-radio__border" cx="12" cy="12" r="10" />
            <circle v-if="isSelected" class="icon-radio__fill" cx="12" cy="12" r="6" />
        </g>
    </icon-container>
</template>

<script setup>

import { computed } from 'vue';
import IconContainer from '@components/Icons/IconContainer';

const props = defineProps({
    isSelected: { type: Boolean, default: true },
});

const classes = computed(() => ({
    'icon-radio': true,
}));

</script>

<style lang="scss" scoped>

.icon-radio {
    .icon-radio__fill {
        fill: black;
    }
}

</style>
