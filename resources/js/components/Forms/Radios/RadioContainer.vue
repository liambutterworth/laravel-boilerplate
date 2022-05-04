<template>
    <slot v-bind="{
        isSelected,
        isVisible,
        select,
        text,
        value,
    }" />
</template>

<script>

export default {
    inheritAttrs: false,
}

</script>

<script setup>

const props = defineProps({
    text: { type: String, required: true },
    selected: { type: Boolean, default: false },
    value: { required: true },
});

const { isSelected, isVisible, select, text } = useSelectable({
    text: props.text,
    value: props.value,
});

</script>
