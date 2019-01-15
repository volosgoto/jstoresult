// Incapsulation

function User(name, age){
  this.name = name;
  // this.age = age;
  let userAge = age;

  this.getAge = function() {
    return userAge;
  };
  
  this.setAge = function (age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      userAge = age;
    } else {
      console.log('Не верное значение');
    };

  };

  this.say = function () {
    console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
  };
}

let user = new User('John', 20);
user.say();
console.log('getAge', user.getAge());
user.setAge(30);
console.log(user.getAge());