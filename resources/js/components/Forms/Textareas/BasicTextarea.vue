<template>
    <textarea-container v-bind="$props" v-slot="{ hasLabel, id, label, value }">
        <div :class="classes">
            <label v-if="hasLabel" class="basic-textarea__label" :for="id">
                {{ label }}
            </label>

            <textarea
                :id="id"
                :value="value"
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
