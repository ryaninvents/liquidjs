/*
 * Checks if value is classified as a String primitive or object.
 * @param {any} value The value to check.
 * @return {Boolean} Returns true if value is a string, else false.
 */
function isString(value) {
    return value instanceof String || typeof value === 'string';
}

/*
 * Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property. 
 * The iteratee is invoked with three arguments: (value, key, object). 
 * Iteratee functions may exit iteration early by explicitly returning false.
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Object} Returns object.
 */
function forOwn(object, iteratee) {
    object = object || {};
    for (var k in object) {
        if (object.hasOwnProperty(k)) {
            if (iteratee(object[k], k, object) === false) break;
        }
    }
    return object;
}

function assign(dst, src) {
    dst = dst || {};
    forOwn(src, function(v, k) {
        dst[k] = v;
    });
    return dst;
}

function isArray(value) {
    return value instanceof Array;
}

function echo(prefix){
    return v => {
        console.log('[' + prefix + ']', v);
        return v;
    };
}

exports.isString = isString;
exports.isArray = isArray;
exports.forOwn = forOwn;
exports.assign = assign;
exports.echo = echo;
