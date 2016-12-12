function User(name, pass) {
    if(!(this instanceof User))
        return new User(name, pass);
    this.name = name;
    this.pass = pass;
}

console.log(User("Jarek", "pass"));
console.log(new User("Jarek", "pass"));


