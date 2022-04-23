import _ from 'lodash';
import { computed } from 'vue';

export default class Selectable {
    constructor(value, text) {
        this.key = _.uniqueId();
        this.text = text ?? _.isObject(value) ? value.text : value;
        this.value = _.isObject(value) ? value.value : value;
        this.original = this.text;
        this.isSelected = false;
        this.isVisible = true;
    }

    provide = (provider) => {
        this.provider = provider;
    }

    select = () => {
        this.provider.select(this.value);
    }

    deselect = () => {
        this.provider.deselect(this.value);
    }
}
