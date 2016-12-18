function runOnClick() {
    for(var i = 0; i < 999; i++) {
        console.log('runOnClick function');
    }
}

function runTest() {
    console.log('started run test');
    document.getElementById('run-test-button').onclick();
    for(var i = 0; i < 999; i++) {
        console.log('runTest function');
    }
}

window.onload = function() {
    runTest();
};



