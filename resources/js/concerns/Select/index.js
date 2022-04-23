import _ from 'lodash';
import { computed, inject, onMounted, onUnmounted, provide, ref, toRefs } from 'vue';
import SelectProvider from '@concerns/Select/SelectProvider';
import Selectable from '@concerns/Select/Selectable';

export function useSelect(options) {
    const selectProvider = new SelectProvider(options);

    provide('selectProvider', selectProvider)

    onMounted(() => selectProvider.mount());

    return selectProvider;
}

export function useSelectable(value) {
    const selectProvider = inject('selectProvider');
    const selectable = selectProvider.addSelectable(value);

    // console.log('selectable', selectable);

    return toRefs(selectable);

    // const isSelected = computed(() => selectProvider.isSelected(value));
    // const isVisible = computed(() => selectProvider.isVisible(value));

    // // const isVisible = ref(true);
    // const select = () => selectProvider.select(value);

    // // const selectable = new Selectable(selectProvider, value, text);
    // // console.log('selectable', selectable);

    // const selectable = selectProvider.addSelectable(value);

    // onUnmounted(() => selectProvider.removeSelectable(value));

    // return { isSelected, select, isVisible };
}
