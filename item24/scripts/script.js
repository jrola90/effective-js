function values() {
    var i = 0, n = arguments.length, args = arguments;
    return {
        hasNext: function() {
            return i < n;
        },
        next: function() {
            if (i >= n) {
                throw newError("End of iteration");
            }
            return args[i++];
        }
    };
}

var it = values(1, 4, 1, 4, 2, 1, 3, 5, 6);

while(it.hasNext())
    console.log(it.next());
