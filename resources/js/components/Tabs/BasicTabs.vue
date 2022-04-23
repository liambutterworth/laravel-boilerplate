<template>
    <div class="basic-tabs">
        <ul class="basic-tabs__header">
            <li v-for="tab in tabs" :class="tabHeadingClasses(tab)" @click="select(tab)">
                {{ tab.text }}
            </li>
        </ul>

        <slot />
    </div>
</template>

<script setup>

import _ from 'lodash';
import { computed } from 'vue';
import { useSelect } from '@concerns/Select';

const { selectables: tabs, select, isSelected } = useSelect();

const tabHeadingClasses = computed(() => {
    return (tab) => {
        return {
            'basic-tabs__heading': true,
            'basic-tabs__heading--is-selected': isSelected(tab),
        };
    };
});

</script>

<style lang="scss">

@import '@css/_settings';
@import '@css/_functions';

.basic-tabs {
    .basic-tabs__header {
        display: flex;
        padding: 0 0 lines(1);
    }

    .basic-tabs__heading {
        border-bottom: 1px solid $border-color;
        cursor: pointer;
        padding: lines(0.5);
        margin: 0 0 px-to-rem(-1px);

        &:hover,
        &.basic-tabs__heading--is-selected {
            background: darken($background-color, 5%);
        }

        &.basic-tabs__heading--is-selected {
            border-bottom: 1px solid $primary-color;
        }
    }
}

</style>
