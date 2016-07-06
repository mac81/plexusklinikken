import mapKeys from 'lodash.mapkeys';
import kebabCase from 'lodash.kebabcase';

module.exports = {
    getAttributesFromProps: function(data) {
        return mapKeys(data, function(value, key) {
            return kebabCase(key);
        });
    }
};
