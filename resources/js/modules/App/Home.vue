<template>
    <section-layout :wrap="true" :pad-vertical="1">
        <template #header>
            Header
        </template>

        <search-select label="Testing" name="testing" v-model:value="optionTest">
            <basic-option
                v-for="(option, index) in options"
                :key="index"
                :value="option.value"
                :text="option.text"
            />
        </search-select>

        <br />

        <basic-textbox label="Testbox" name="testbox" v-model:value="textboxValue" />
        <basic-textarea label="Testarea"  name="testarea" v-model:value="textareaValue" />

        <basic-checkbox label="Checkbox Test" name="checkbox-test" v-model:value="checkboxValue" />

        <radio-group label="Radio Test" name="radio-test" v-model:value="radioTest">
            <basic-radio v-for="radio in radios" :text="radio.text" :value="radio.value" />
        </radio-group>
    </section-layout>

    <row-layout :wrap="true" :gutter="true" :push-bottom="1">
        <column-layout :size="6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores tenetur incidunt temporibus ab, ex enim nihil eaque, ratione recusandae soluta hic adipisci nesciunt fuga. Asperiores quo alias explicabo provident nobis?
        </column-layout>

        <column-layout :size="3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis necessitatibus nemo sit quas impedit, facere maiores doloremque officia alias quia consequatur incidunt ratione eveniet aspernatur quod nesciunt dignissimos labore minus.
        </column-layout>

        <column-layout :size="3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero excepturi amet autem ratione debitis inventore cupiditate necessitatibus quasi laboriosam quia ipsa, officia quibusdam repellendus laborum esse magni non sapiente.
        </column-layout>
    </row-layout>

    <grid-layout :wrap="true" :size="4" :gutter="true">
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi eum, nobis itaque atque, obcaecati aliquam commodi illum dolorum placeat molestiae aspernatur voluptas praesentium doloremque. Maxime facere autem in quibusdam!
        </div>

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi eum, nobis itaque atque, obcaecati aliquam commodi illum dolorum placeat molestiae aspernatur voluptas praesentium doloremque. Maxime facere autem in quibusdam!
        </div>

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi eum, nobis itaque atque, obcaecati aliquam commodi illum dolorum placeat molestiae aspernatur voluptas praesentium doloremque. Maxime facere autem in quibusdam!
        </div>

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi eum, nobis itaque atque, obcaecati aliquam commodi illum dolorum placeat molestiae aspernatur voluptas praesentium doloremque. Maxime facere autem in quibusdam!
        </div>
    </grid-layout>
</template>

<script setup>

import { ref, watch } from 'vue';
import BasicOption from '@components/Forms/Options/BasicOption';
import ToggleOption from '@components/Forms/Options/ToggleOption';
import SearchSelect from '@components/Forms/Selects/SearchSelect';
import SectionLayout from '@components/Layouts/SectionLayout';
import RowLayout from '@components/Layouts/RowLayout';
import ColumnLayout from '@components/Layouts/ColumnLayout';
import GridLayout from '@components/Layouts/GridLayout';
import BasicCheckbox from '@components/Forms/Checkboxes/BasicCheckbox';
import RadioGroup from '@components/Forms/Radios/RadioGroup';
import BasicRadio from '@components/Forms/Radios/BasicRadio';
import BasicTextbox from '@components/Forms/Textboxes/BasicTextbox';
import BasicTextarea from '@components/Forms/Textareas/BasicTextarea';

const options = ref([
    { text: 'Foo', value: 'select-foo' },
    { text: 'Bar', value: 'select-bar' },
]);

const radios = ref([
    { text: 'Radio Foo', value: 'radio-foo' },
    { text: 'Radio Bar', value: 'radio-bar' },
]);

const optionTest = ref(options.value[0].value);
const radioTest = ref(radios.value[1].value);
const checkboxValue = ref(false);
const textboxValue = ref('foobar');
const textareaValue = ref('This is some text');

watch(checkboxValue, () => console.log('checkbox changed', checkboxValue.value));
watch(radioTest, () => console.log('radio changed', radioTest.value));
watch(textboxValue, () => console.log('textbox changed', textboxValue.value))
watch(textareaValue, () => console.log('textarea changed', textareaValue.value))

</script>
