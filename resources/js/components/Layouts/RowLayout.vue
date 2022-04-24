<template>
    <layout-container v-bind="$props" v-slot="{ layoutClasses }">
        <div :class="[classes, layoutClasses]">
            <slot />
        </div>
    </layout-container>
</template>

<script setup>

import { computed } from 'vue';
import LayoutContainer from '@components/Layouts/LayoutContainer';

const props = defineProps({
    center: { type: Boolean, default: false },
    gutter: { type: Boolean, defualt: false },
});

const classes = computed(() => ({
    'row-layout': true,
    'row-layout--center': props.center,
    'row-layout--gutter': props.gutter,
}));

</script>

<style lang="scss">

@import '@css/_functions';
@import '@css/_settings';

.row-layout {
    display: flex;

    &.row-layout--center {
        justify-content: center;
    }

    &.row-layout--gutter > * {
        padding: 0 lines($gutter-lines / 2);

        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            padding-right: 0;
        }
    }
}

</style>
