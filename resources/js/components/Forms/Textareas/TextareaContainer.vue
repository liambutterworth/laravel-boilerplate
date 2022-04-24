<template>
    <slot
        :id="id"
        :handleInput="handleInput"
        :hasLabel="hasLabel"
        :label="label"
        :type="type"
        :value="value"
    />
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
    id: { type: String },
    throttle: { type: Number, default: 500 },
    label: { type: String },
    value: { required: true },

    type: {
        type: String,
        default: 'text',

        validator(value) {
            return [
                'email',
                'number',
                'password',
                'text',
            ].includes(value);
        },
    },
});

const emit = defineEmits(['update:value']);
const id = computed(() => props.id || _.uniqueId());
const hasLabel = computed(() => !_.isUndefined(props.label));

const handleInput = _.debounce(event => {
    emit('update:value', event.target.value);
}, props.throttle);

</script>
