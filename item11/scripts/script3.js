function caller() {
    return function callee() {
        return this;
    }()
}

console.log(this == caller());