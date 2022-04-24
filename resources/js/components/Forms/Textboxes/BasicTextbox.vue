<template>
    <textbox-container v-bind="$props" v-slot="{ hasLabel, label, id, type, value, handleInput }">
        <div :class="classes">
            <label v-if="hasLabel" class="basic-textbox__label" :for="id">
                {{ label }}
            </label>

            <input
                class="basic-textbox__input"
                v-bind="$attrs"
                :id="id"
                :type="type"
                :value="value"
                @input="handleInput"
            />
        </div>
    </textbox-container>
</template>

<script>

export default {
    inheritAttrs: false,
}

</script>

<script setup>

import { computed } from 'vue';
import TextboxContainer from '@components/Forms/Textboxes/TextboxContainer';

const classes = computed(() => ({
    'basic-textbox': true,
}));

</script>

<style lang="scss">

@import '@css/_functions';
@import '@css/_settings';

.basic-textbox {
    .basic-textbox__label {
        cursor: pointer;
        font-weight: bold;
        line-height: lines(2);
    }

    .basic-textbox__input {
        background: #fff;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        display: block;
        height: lines(2);
        padding: 0 lines(0.75);
        width: 100%;
    }
}

</style>
