<template>
    <slot :layout-classes="layoutClasses" />
</template>

<script>

export default {
    inheritAttrs: false,
}

</script>

<script setup>

import _ from 'lodash';
import { computed } from 'vue';

const props = defineProps({
    pad: { type: Number },
    padBottom: { type: Number },
    padHorizontal: { type: Number },
    padLeft: { type: Number },
    padRight: { type: Number },
    padTop: { type: Number },
    padVertical: { type: Number },
    push: { type: Number },
    pushBottom: { type: Number },
    pushHorizontal: { type: Number },
    pushLeft: { type: Number },
    pushRight: { type: Number },
    pushTop: { type: Number },
    pushVertical: { type: Number },
    wrap: { type: Boolean },
});

const layoutClasses = computed(() => ({
    'layout': true,
    'layout--wrap': props.wrap,
    [`layout--pad-${props.pad}`]: !_.isUndefined(props.pad),
    [`layout--pad-bottom-${props.padBottom}`]: !_.isUndefined(props.padBottom),
    [`layout--pad-horizontal-${props.padHorizontal}`]: !_.isUndefined(props.padHorizontal),
    [`layout--pad-left-${props.padLeft}`]: !_.isUndefined(props.padLeft),
    [`layout--pad-right-${props.padRight}`]: !_.isUndefined(props.padRight),
    [`layout--pad-top-${props.padTop}`]: !_.isUndefined(props.padTop),
    [`layout--pad-vertical-${props.padVertical}`]: !_.isUndefined(props.padVertical),
    [`layout--push-${props.push}`]: !_.isUndefined(props.push),
    [`layout--push-bottom-${props.pushBottom}`]: !_.isUndefined(props.pushBottom),
    [`layout--push-horizontal-${props.pushHorizontal}`]: !_.isUndefined(props.pushHorizontal),
    [`layout--push-left-${props.pushLeft}`]: !_.isUndefined(props.pushLeft),
    [`layout--push-right-${props.pushRight}`]: !_.isUndefined(props.pushRight),
    [`layout--push-top-${props.pushTop}`]: !_.isUndefined(props.pushTop),
    [`layout--push-vertical-${props.pushVertical}`]: !_.isUndefined(props.pushVertical),
}));

</script>

<style lang="scss">

@import '@css/_functions';
@import '@css/_settings';

.layout {
    &.layout--wrap {
        margin-left: auto;
        margin-right: auto;
        max-width: $wrapper-width;
    }

    @for $index from 1 through 10 {
        &.layout--pad-#{$index} { padding: lines($index); }
        &.layout--pad-bottom-#{$index} { padding-bottom: lines($index); }
        &.layout--pad-horizontal-#{$index} { padding: 0 lines($index); }
        &.layout--pad-left-#{$index} { padding-left: lines($index); }
        &.layout--pad-right-#{$index} { padding-right: lines($index); }
        &.layout--pad-top-#{$index} { padding-top: lines($index); }
        &.layout--pad-vertical-#{$index} { padding: lines($index) 0; }
        &.layout--push-#{$index} { margin: lines($index); }
        &.layout--push-bottom-#{$index} { margin-bottom: lines($index); }
        &.layout--push-horizontal-#{$index} { margin: 0 lines($index); }
        &.layout--push-left-#{$index} { margin-left: lines($index); }
        &.layout--push-right-#{$index} { margin-right: lines($index); }
        &.layout--push-top-#{$index} { margin-top: lines($index); }
        &.layout--push-vertical-#{$index} { margin: lines($index) 0; }
    }
}

</style>
