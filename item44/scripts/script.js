var obj = {
    'toString' : 'overridden function'
};


var toString = {}.toString;

// value was overridden
console.log(obj.toString);

// executing
console.log(toString.call(obj));