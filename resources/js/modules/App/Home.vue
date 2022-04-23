<template>
    <section-layout :wrapped="true">
        Home
    </section-layout>

    <!-- <search-select label="Testing" name="testing" v-model:value="optionTest"> -->
    <!--     <basic-option -->
    <!--         v-for="(option, index) in options" -->
    <!--         :key="index" -->
    <!--         :value="option.value" -->
    <!--         :text="option.text" -->
    <!--     /> -->
    <!-- </search-select> -->
</template>

<script setup>

import { ref } from 'vue';
import SectionLayout from '@components/Layouts/SectionLayout';
// import SearchSelect from '@components/Forms/Selects/SearchSelect';
// import BasicOption from '@components/Forms/Selects/Options/BasicOption';

const options = ref([
    { text: 'Foo', value: 'select-foo' },
    { text: 'Bar', value: 'select-bar' },
]);

const optionTest = ref(options.value[0].value);

</script>
