<template>
    <icon-container v-bind="$props">
        <g>
            <template v-if="isChecked">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </template>

            <template v-else>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            </template>
        </g>
    </icon-container>
</template>

<script setup>

import IconContainer from '@components/Icons/IconContainer';

const props = defineProps({
    isChecked: { type: Boolean, default: true },
});

</script>
