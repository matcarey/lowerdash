/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var isIterateeCall = require('lodash._isiterateecall'),
    keys = require('lodash.keys');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite property
 * assignments of previous values unless `multiValue` is `true`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to invert.
 * @param {boolean} [multiValue] Allow multiple values per key.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 *
 * // with `multiValue`
 * _.invert(object, true);
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function invert(object, multiValue, guard) {
  if (guard && isIterateeCall(object, multiValue, guard)) {
    multiValue = null;
  }
  var index = -1,
      props = keys(object),
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (multiValue) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }
    else {
      result[value] = key;
    }
  }
  return result;
}

module.exports = invert;