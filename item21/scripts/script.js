var average = function() {

    var sum = 0, argCount = arguments.length;

    for(var i = 0; i < argCount; i++)
        sum += arguments[i];

    return sum / argCount;
};

// using standard invocation
console.log(average(1,2,3));

// using apply function
console.log(average.apply(this, [1,2,3]));

