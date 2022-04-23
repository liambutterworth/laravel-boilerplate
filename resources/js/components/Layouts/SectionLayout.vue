<template>
    <layout-container v-bind="$props">
        <div class="section-layout">
            <slot />
        </div>
    </layout-container>
</template>

<script setup>

import LayoutContainer from '@components/Layouts/LayoutContainer';

</script>
