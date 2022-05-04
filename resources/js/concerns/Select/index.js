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
    return toRefs(inject('selectProvider').addSelectable(value));
}
