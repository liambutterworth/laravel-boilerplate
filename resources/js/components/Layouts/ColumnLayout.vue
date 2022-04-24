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
    size: { type: Number },
});

const classes = computed(() => ({
    'column-layout': true,
    [`column-layout--size-${props.size}`]: !_.isUndefined(props.size),
}));

</script>

<style lang="scss">

@import '@css/_functions';
@import '@css/_settings';

.column-layout {
    @for $count from 1 through $column-total {
        &.column-layout--size-#{$count} {
            width: column-size($count);
        }
    }
}

</style>
