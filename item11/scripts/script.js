function myClosure() {
    var internalVar = "default value";

    var internalClosure = function() {
        return internalVar;
    };

    return {
        setInternalVar : function(param) {
            internalVar = param;
        },
        getInternalVar : function() {
            return internalVar;
        },
        getInternalClosure : internalClosure
    };
}

var closure = myClosure();

// getting default value
console.log(closure.getInternalVar());

// setting default value
closure.setInternalVar(1);

// getting default value
console.log(closure.getInternalVar());
console.log(closure.getInternalClosure());

