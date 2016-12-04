var param = "default value";

var testFunction = function(param) {

    console.log(param);

    for(var i = 0; i <5; i++) {
        var param = i;
    }

    return param;
};

console.log(param);
console.log(testFunction("param"));
console.log(param);