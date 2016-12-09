var globalFunction = function() {
    return this.name;
};

var obj = {
    name : "obj"
};

var obj2 = {
    name : "obj2"
};

var objName = globalFunction.call(obj);
console.log(objName);

var objName2 = globalFunction.call(obj2);
console.log(objName2);