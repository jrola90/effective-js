function globalFunction() {
    return this.name;
}

var obj = {
    name : "obj"
};


var bindedFunc = globalFunction.bind(obj)
console.log(bindedFunc());

