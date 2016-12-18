function funA(arg0, fun) {
    fun();
}

funA(10, funB.bind(null, 10));

function funB(arg0) {
    console.log(arg0);
}







