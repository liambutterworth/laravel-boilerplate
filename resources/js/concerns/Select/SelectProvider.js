import _ from 'lodash';
import { computed, ref, reactive, unref } from 'vue';
import Fuzzysort from 'fuzzysort';
import Selectable from '@concerns/Select/Selectable';

export default class SelectProvider {
    constructor(options) {
        this.options = _.defaults(options, {
            ensure: true,
            multi: false,
            selectables: [],
            selected: null,
            toggle: false,
            throttle: 200,
        });

        this.search = _.debounce(this.search, this.options.throttle);
        this.selectables = reactive(_.map(this.options.selectables, this.makeSelectable));
        this.selections = computed(() => _.filter(this.selectables, selectable => selectable.isSelected ));
        this.selected = computed(() => _.first(this.selections));
        this.hasSelection = computed(() => !_.isEmpty(this.selections.value));
    }

    mount = () => {
        if (!_.isEmpty(this.options.selected)) {
            _.map(_.castArray(this.options.selected), this.select);
        } else if (this.options.ensure && !this.hasSelection.value) {
            this.select(_.first(this.selectables));
        }
    }

    search = (string, key = 'original') => {
        if (_.isEmpty(string)) {
            _.each(this.selectables, selectable => {
                selectable.text = selectable.original;
                selectable.isVisible = true;
            });
        } else {
            const results = Fuzzysort.go(string, this.selectables, { key });

            _.each(this.selectables, selectable => {
                const result = _.find(results, result => {
                    return result.obj.key === selectable.key
                });

                if (_.isUndefined(result)) {
                    selectable.isVisible = false;
                } else {
                    selectable.text = Fuzzysort.highlight(result);
                    selectable.isVisible = true;
                }
            });
        }
    }

    select = (value) => {
        const selection = this.findSelectable(value);

        if (selection.isSelected) {
            this.deselect(value);
        } else if (this.options.multi) {
            selection.isSelected = true;
        } else {
            _.each(this.selectables, selectable => {
                selectable.isSelected = selectable.key === selection.key;
            });
        }
    }

    deselect = (value) => {
        if (this.canDeselect() && this.isSelected(value)) {
            this.findSelectable(value).isSelected = false;
        }
    }

    canDeselect = () => {
        return !this.options.ensure || this.selections.value.length > 1;
    }

    findSelectable = (value, key = 'value') => {
        if (value instanceof Selectable) {
            return value;
        }

        return _.find(this.selectables, { [key]: value });
    }

    isSelected = (value) => {
        return this.findSelectable(value).isSelected;
    }

    isVisible = (value) => {
        return this.findSelectable(value).isVisible;
    }

    makeSelectable = (value) => {
        return value instanceof Selectable ? value : new Selectable(value);
    }

    addSelectable = (value) => {
        const selectable = reactive(this.makeSelectable(value));

        selectable.provide(this);

        this.selectables.push(selectable);

        return selectable;
    }

    removeSelectable = (value) => {
        _.remove(this.selectables, selectable => {
            return selectable.key === this.findSelectable(value).key;
        });
    }
}

