<template>
    <option-container v-bind="$props" v-slot="{ isVisible, optionClasses, select, text }">
        <li v-if="isVisible" :class="[classes, optionClasses]" role="option" @click="select">
            <span class="toggle-option__text" v-html="text" />
        </li>
    </option-container>
</template>

<script setup>

import { computed } from 'vue';
import OptionContainer from '@components/Forms/Options/OptionContainer';

const classes = computed(() => ({
    'basic-option': true,
}));

</script>

<style lang="scss" scoped>

@import '@css/_functions';

.basic-option {
    line-height: lines(2);
    padding: 0 lines(0.5);
    vertical-align: center;
}

</style>
