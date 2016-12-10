function callMethod(obj, method) {
    var shift = [].shift;
    var tmpArgs = [].slice.call(arguments);
    shift.call(tmpArgs);
    shift.call(tmpArgs);
    return obj[method].apply(obj, tmpArgs);
}

var obj = {
    add: function(x, y) { return x + y; }
};

console.log(callMethod(obj, "add", 17, 25));