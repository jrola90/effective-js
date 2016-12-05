function wrapElements(a) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        (function () {
            var j = i;
            result[i] = function () {
                return a[j];
            };
        })();
    }
    return result;
}

var wrapElements = wrapElements([1, 2, 3]);
console.log(wrapElements[0]());

function wrapElements2(a) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        (function (param) {
            result[param] = function () {
                return a[param];
            };
        })(i);
    }
    return result;
}

var wrapElements2 = wrapElements2([1, 2, 3]);
console.log(wrapElements2[0]());