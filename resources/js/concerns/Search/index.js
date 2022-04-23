import _ from 'lodash';
import { computed, ref, unref, watch } from 'vue';
import fuzzysort from 'fuzzysort';

export function useFuzzySearch(collection, key = null, match = 'match') {
    const string = ref('');
    const search = _.debounce(value => string.value = value, 200);

    const results = computed(() => {
        if (_.isEmpty(string.value)) {
            return collection;
        }

        const target = _.cloneDeep(unref(collection));

        return _.map(fuzzysort.go(string.value, target, { key }), result => {
            const highlight = fuzzysort.highlight(result);

            return _.isNull(key) ? highlight : _.set(result.obj, match, highlight);
        });
    });

    return { search, results };
}
