function f() {
    return "globalna";
}
function test(x) {
    var result = [];

    if (x) {
        function f() {
            return "lokalna";
        }

        result.push(f());
    }

    result.push(f());
    return result;
}

console.log(test(true));
console.log(test(false));