var obj = {
    'key1': 1,
    'key2': 2,
    'key3': 3,
    'getName' : function() {
        return 'name'
    }
};

for (var key in obj) {
    console.log(key + " => " + obj[key] + " \n")
}
