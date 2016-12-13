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

var user = new User("JR", "321");
var superUser = new SuperUser("Jarek", "123");

console.log(user);
console.log(superUser);
