<template>
    <layout-container v-bind="$props" v-slot="{ layoutClasses }">
        <section :class="layoutClasses">
            <header v-if="hasHeader">
                <slot name="header" />
            </header>

            <slot />

            <footer v-if="hasFooter">
                <slot name="footer" />
            </footer>
        </section>
    </layout-container>
</template>

<script setup>

import { computed, useSlots } from 'vue';
import LayoutContainer from '@components/Layouts/LayoutContainer';

const slots = useSlots();
const hasHeader = computed(() => !_.isUndefined(slots.header));
const hasFooter = computed(() => !_.isUndefined(slots.footer));

</script>
