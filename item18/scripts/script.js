var obj = {
    username : "obj",
    getUsername : function() {
        return this.username;
    }
};

var obj2 = {
    username : "obj2",
    getUsername : obj.getUsername
};

var globalFunction = function() {
    return "global function";
};

function SampleObject() {
    return {
        name : "sample object"
    }
}

// calling properties depends on this
console.log(obj.getUsername());
console.log(obj2.getUsername());

// example of using global function
console.log(this.globalFunction());

// example of new object creation
console.log(new SampleObject());
