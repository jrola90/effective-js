var y = "globalna";
function test(x) {
    if (x) {
        eval("var y = 'lokalna';"); // Wi¹zanie dynamiczne
    }
    return y;
}

console.log(test(true));
console.log(test(false));