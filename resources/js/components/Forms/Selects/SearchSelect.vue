<template>
    <div :class="classes">
        <template v-if="inForm">
            <input v-if="!hasSelection" type="hidden" :name="name" :value="null" />
            <input v-for="selection in selections" type="hidden" :name="name" :value="selection" />
        </template>

        <div class="form-select__label" @click="toggleActive">
            {{ label }}
        </div>

        <button class="form-select__button" @click.prevent.stop="toggleActiveWhenNotSearching">
            <i
                v-if="isSearchable"
                class="form-select__search-icon"
                @click.prevent.stop="toggleActive"
            >
                <close-icon v-if="isSearching" />
                <search-icon v-else />
            </i>

            <input
                v-if="isSearching"
                ref="searchInput"
                class="form-select__search"
                type="text"
                v-model="searchString"
            />

            <span v-if="!isMultiSearch" class="form-select__text">
                {{ text }}
            </span>

            <ul v-if="isMultiSearch && !isSearching" class="form-select__chips">
                <li
                    v-for="selection in selections"
                    class="form-select__chip"
                    @click.prevent.stop="deselect(selection)"
                >
                    {{ selection.text }}

                    <i class="form-select__chip__close-icon">
                        <close-icon size="small" />
                    </i>
                </li>
            </ul>

            <i class="form-select__dropdown-icon" @click.prevent.stop="toggleActive">
                <chevron-icon :direction="direction" />
            </i>
        </button>

        <ul class="form-select__listbox" role="listbox">
            <slot />
        </ul>
    </div>
</template>

<script setup>

import _ from 'lodash';
import { computed, inject, nextTick, ref, watch } from 'vue';
import { useSelect } from '@concerns/Select';
import { onClickOutside } from '@concerns/Events';
import ChevronIcon from '@components/Icons/ChevronIcon';
import CloseIcon from '@components/Icons/CloseIcon';
import SearchIcon from '@components/Icons/SearchIcon';

const props = defineProps({
    ensure: { type: Boolean, default: true },
    label: { type: String, required: true },
    multi: { type: Boolean, default: true },
    name: { type: String, required: true },
    search: { type: Boolean, default: false },
    value: { default: null },
});

const { deselect, hasSelection, search, selected, selections } = useSelect({
    ensure: props.ensure,
    multi: props.multi,
    selected: props.value,
});

const emit = defineEmits(['update:value']);
const form = inject('form', null);
const text = computed(() => _.join(_.castArray(selected.value), ', '));
const name = computed(() => (props.multi && hasSelection.value ? `${props.name}[]` : props.name));
const searchInput = ref(null);
const searchString = ref(null);
const isActive = ref(false);
const isMultiSearch = computed(() => props.multi);
const isSearchable = computed(() => props.search);
const isSearching = computed(() => isSearchable.value && isActive.value);
const inForm = computed(() => !_.isUndefined(form));
const direction = computed(() => isActive.value ? 'up' : 'down');

const classes = computed(() => ({
    'form-select': true,
    'form-select--is-active': isActive.value,
    'form-select--is-searching': isSearching.value,
}));

function deactivate() {
    isActive.value = false;
}

function toggleActive() {
    isActive.value = !isActive.value;

    if (isSearching.value) {
        nextTick(() => searchInput.value.focus());
    }
}

function toggleActiveWhenNotSearching() {
    if (!isSearching.value) {
        toggleActive();
    }
}

watch(selected, () => emit('update:value', selected.value), { immediate: true });
watch(searchString, () => search(searchString.value));
onClickOutside(() => deactivate());

</script>

<style lang="scss">

@import '@css/_functions';
@import '@css/_settings';

.form-select {
    position: relative;

    .form-select__label {
        cursor: pointer;
        font-weight: bold;
    }

    .form-select__button {
        align-items: center;
        background: #fff;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        cursor: pointer;
        display: flex;
        line-height: lines-subtract-px(1, 1px);
        min-height: lines(2);
        padding: 0 lines(0.125);
        text-align: left;
        width: 100%;
    }

    .form-select__search-icon,
    .form-select__dropdown-icon {
        align-items: center;
        border-radius: $border-radius;
        display: flex;
        height: lines(1.75);
        justify-content: center;
        width: lines(1.75);

        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }

    .form-select__dropdown-icon {
        margin-left: auto;
    }

    .form-select__search {
        border: none;
        border-bottom: 1px solid $border-color;
        flex-grow: 1;
        font-size: font-size(18px);
        line-height: lines(1.5);
        margin: 0 lines(0.125);
        outline: none;
    }

    .form-select__chips {
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        gap: lines(0.25);
        padding: 0 lines(0.125);
    }

    .form-select__chip {
        background: $success-color;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
        color: #fff;
        display: inline-block;
        gap: lines(0.25);
        padding: lines(0.25) lines(0.5);

        .form-select__chip__close-icon {
            margin-left: lines(0.25);
        }

        &:hover {
            background: $error-color;
        }
    }

    .form-select__listbox {
        background: #fff;
        border: 1px solid $border-color;
        border-radius: 0 0 $border-radius $border-radius;
        border-top: none;
        display: none;
        margin-top: -1px;
        left: 0;
        position: absolute;
        top: 100%;
        width: 100%;
        z-index: 1;
    }

    &.form-select--is-active {
        .form-select__button {
            border-bottom-color: #fff;
        }

        .form-select__listbox {
            display: block;
        }
    }
}

</style>
