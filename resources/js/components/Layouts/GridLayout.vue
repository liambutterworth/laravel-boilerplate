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
    gutter: { type: Boolean, default: false },
    size: { type: Number },
});

const classes = computed(() => ({
    'grid-layout': true,
    'grid-layout--gutter': props.gutter,
    [`grid-layout--size-${props.size}`]: !_.isUndefined(props.size),
}));

</script>

<style lang="scss">

@import '@css/_functions';

.grid-layout {
    $gutter: lines($gutter-lines);

    display: flex;
    flex-wrap: wrap;

    &.grid-layout--gutter {
        gap: $gutter;
    }

    @for $count from 1 through $column-total {
        $width: column-size($count);

        &.grid-layout--size-#{$count} > * {
            width: $width;
        }

        &.grid-layout--gutter.grid-layout--size-#{$count} > * {
            width: calc($width - $gutter);
        }
    }
}

</style>
