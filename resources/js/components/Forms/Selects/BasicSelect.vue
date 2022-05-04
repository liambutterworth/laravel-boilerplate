<template>
    <select-container v-bind="$props" v-slot="{
        deselect,
        isMultiSelect,
        label,
        search,
        selected,
        selections,
    }">
        <div :class="classes" ref="root" @click="toggle">
            <template v-if="isMultiSelect">
                <ul>
                    <slot />
                </ul>

                <input ref="input" type="text" />
            </template>

            <template v-else>
                {{ selected.text }}
            </template>
        </div>
    </select-container>
</template>

<script setup>

import { computed, ref } from 'vue';
import { onClickOutside } from '@concerns/Events';
import SelectContainer from '@components/Forms/Selects/SelectContainer';

const isActive = ref(false);
const root = ref(null);

const classes = computed(() => ({
    'basic-select': true,
    'basic-select--is-active': isActive.value,
}));

function toggle() {
    isActive.value = !isActive.value;

    if (isActive.value) {
        nextTick(() => input.value.focus());
    }
}

onClickOutside(root, () => isActive.value = false);

</script>

<style lang="scss">

@import '@css/_functions';
@import '@css/_settings';

.basic-select {
    position: relative;

    ul {
        display: none;
        left: 0;
        position: absolute;
        top: 100%;
        width: 100%;
    }

    &.basic-select--is-active ul {
        display: block;
    }
}

</style>
