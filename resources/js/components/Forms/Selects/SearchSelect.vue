<template>
    <select-container v-bind="$props" v-slot="{
        deselect,
        isMultiSelect,
        label,
        search,
        selections,
    }">
        <div :class="classes" ref="root">
            <div class="search-select__label" @click="toggle">
                {{ label }}
            </div>

            <button class="search-select__button" @click.prevent.stop="toggle">
                <i class="search-select__search-icon" @click.stop="toggle">
                    <close-icon v-if="isActive" />
                    <search-icon v-else />
                </i>

                <input
                    v-if="isActive"
                    ref="input"
                    class="search-select__search"
                    type="text"
                    @click.stop
                    @input="search($event.target.value)"
                />

                <span v-if="!isMultiSelect && !isActive" class="search-select__text">
                    {{ text }}
                </span>

                <ul v-if="isMultiSelect && !isActive" class="search-select__chips">
                    <li
                        v-for="selection in selections"
                        class="search-select__chip"
                        @click="deselect(selection)"
                    >
                        {{ selection.text }}

                        <i class="search-select__chip__close-icon">
                            <close-icon size="small" />
                        </i>
                    </li>
                </ul>

                <i class="search-select__dropdown-icon" @click.stop="toggle">
                    <chevron-icon :direction="isActive ? 'up' : 'down'" />
                </i>
            </button>

            <ul class="search-select__listbox" role="listbox">
                <slot />
            </ul>
        </div>
    </select-container>
</template>

<script setup>

import { computed, nextTick, ref } from 'vue';
import { onClickOutside } from '@concerns/Events';
import ChevronIcon from '@components/Icons/ChevronIcon';
import CloseIcon from '@components/Icons/CloseIcon';
import SearchIcon from '@components/Icons/SearchIcon';
import SelectContainer from '@components/Forms/Selects/SelectContainer';

const isActive = ref(false);
const root = ref(null)
const input = ref(null);

const classes = computed(() => ({
    'search-select': true,
    'search-select--is-active': isActive.value,
}));

function toggle() {
    isActive.value = !isActive.value;

    if (isActive.value) {
        nextTick(() => input.value.focus());
    }
}

onClickOutside(root, () => isActive.value = false);

</script>

<style lang="scss">

@import '@css/_functions';
@import '@css/_settings';

.search-select {
    position: relative;

    .search-select__label {
        cursor: pointer;
        font-weight: bold;
    }

    .search-select__button {
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

    .search-select__search-icon,
    .search-select__dropdown-icon {
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

    .search-select__dropdown-icon {
        margin-left: auto;
    }

    .search-select__search {
        border: none;
        border-bottom: 1px solid $border-color;
        flex-grow: 1;
        font-size: font-size(18px);
        line-height: lines(1.5);
        margin: 0 lines(0.125);
        outline: none;
    }

    .search-select__chips {
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        gap: lines(0.25);
        padding: 0 lines(0.125);
    }

    .search-select__chip {
        background: $success-color;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
        color: #fff;
        display: inline-block;
        gap: lines(0.25);
        padding: lines(0.25) lines(0.5);

        .search-select__chip__close-icon {
            margin-left: lines(0.25);
        }

        &:hover {
            background: $error-color;
        }
    }

    .search-select__listbox {
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

    &.search-select--is-active {
        .search-select__button {
            border-bottom-color: #fff;
        }

        .search-select__listbox {
            display: block;
        }
    }
}

</style>
