function User(n, l, a) {
    this.name = n;
    this.lastName = l;
    this.age = a
}

let user = new User('Вася', 'Пупкин', 30);
User.prototype.getFullName = function () {
    alert ('Привет ' + this.name + ' ' + this.lastName);
}

user.getFullName();