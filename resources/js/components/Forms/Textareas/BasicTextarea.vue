<template>
    <textarea-container v-bind="$props" v-slot="{
        handleInput,
        hasLabel,
        id,
        label,
        value,
    }">
        <div :class="classes">
            <label
                v-if="hasLabel"
                class="basic-textarea__label"
                :for="id"
            >
                {{ label }}
            </label>

            <textarea
                class="basic-textarea__input"
                :id="id"
                :value="value"
                @input="handleInput"
            />
        </div>
    </textarea-container>
</template>

<script setup>

import { computed } from 'vue';
import TextareaContainer from '@components/Forms/Textareas/TextareaContainer';

const classes = computed(() => ({
    'basic-textarea': true,
}));

</script>

<style lang="scss">

@import '@css/_functions';
@import '@css/_settings';

.basic-textarea {
    .basic-textarea__label {
        cursor: pointer;
        font-weight: bold;
        line-height: lines(2);
    }

    .basic-textarea__input {
        border: 1px solid $border-color;
        border-radius: $border-radius;
        font-family: inherit;
        height: lines(7);
        padding: lines(1);
        resize: vertical;
        width: 100%;
    }
}

</style>
