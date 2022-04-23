<template>
    <icon-container>
        <g :class="classes">
            <circle
                class="icon-radio__border"
                cx="12"
                cy="12"
                r="10"
            />

            <circle
                v-if="isSelected"
                class="icon-radio__fill"
                cx="12"
                cy="12"
                r="6"
            />
        </g>
    </icon-container>
</template>

<script setup>

import { computed } from 'vue';
import IconContainer from '@components/Icons/RadioIcon';

const props = defineProps({
    selected: { type: Boolean, default: true },
});

const isSelected = computed(() => props.selected);

const classes = computed(() => ({
    'icon-radio': true,
    'icon-radio--is-selected': isSelected,
}));

</script>

<style lang="scss" scoped>

.icon-radio {
    .icon-radio__fill {
        fill: black;
    }
}

</style>
