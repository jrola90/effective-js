function User(name, pass) {
    this.name = name;
    this.pass = pass;
}

User.prototype.getName = function() {
    return this.name;
};

function SuperUser(name, pass) {
    User.call(this, name, pass);
    this.pass += 'salt';
}

SuperUser.prototype = Object.create(User.prototype);

console.log(new SuperUser("Jarek", "123"));
