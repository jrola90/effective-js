function User(name, pass) {
    this.name = name;
    this.pass = pass;
}

User.prototype.getName = function() {
    return this.name;
};

console.log(new User("aa", "bb"));




