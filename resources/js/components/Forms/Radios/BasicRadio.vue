<template>
    <div :class="classes" @click="select">
        <span class="basic-radio__icon">
            <radio-icon :is-selected="isSelected" />
        </span>

        <span class="basic-radio__text">
            {{ text }}
        </span>
    </div>
</template>

<script setup>

import { computed } from 'vue';
import { useSelectable } from '@concerns/Select';
import RadioIcon from '@components/Icons/RadioIcon';

const props = defineProps({
    text: { type: String },
    value: { required: true },
});

const { isSelected, select } = useSelectable(props.value);
const text = computed(() => props.text || props.value);

const classes = computed(() => ({
    'basic-radio': true,
    'basic-radio--is-selected': isSelected.value,
}));

</script>

<style lang="scss" scoped>

@import '@css/_functions';

.basic-radio {
    cursor: pointer;
    display: flex;
    line-height: lines(2);

    .basic-radio__icon {
        margin-right: lines(0.5);
        position: relative;
    }

    .basic-radio__icon::before {
        background-color: rgba(0, 0, 0, 0.15);
        border-radius: 100%;
        content: "";
        display: none;
        height: lines(1.5);
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        width: lines(1.5);
        z-index: -1;
    }

    .basic-radio__icon:hover::before {
        display: block;
    }
}

</style>

