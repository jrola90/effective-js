function User(name, pass) {
    var self = this instanceof User ? this : Object.create(User.prototype);
    self.name = name;
    self.pass = pass;
    return self;
}

console.log(User("Jarek", "pass"));
console.log(new User("Jarek", "pass"));