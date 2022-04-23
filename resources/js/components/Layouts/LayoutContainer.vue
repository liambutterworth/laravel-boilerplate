<template>
    <template v-if="wrapped">
        <div class="layout-container">
            <slot />
        </div>
    </template>

    <slot v-else />
</template>

<script setup>

const props = defineProps({
    wrapped: { type: Boolean, default: false },
});

</script>

<style lang="scss" scoped>

@import '@css/_settings';

.layout-container {
    margin: 0 auto;
    max-width: $wrapper-width;
}

</style>
