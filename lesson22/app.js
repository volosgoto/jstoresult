// Объекты!!!

// Канонический способ
let obj = {
  number: 5,
  sayHello : function () {
    console.log(this + ' sayHello ' + 'Hello');
    let say = ()=>{
      console.log(this + ' say ');
    };
    say();
  }
};



// ES5
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;

//   this.hello = function () {
//     console.log('Hello ' + this.name);
//   };
// }

// User.prototype.exit = function () {
//   return 'Exit: ' + this.name + ' ушел ' + n;
// };

// let ivan = new User('Ivan', 20);
// let alex = new User('Alex', 30);

// alex.hello();
// console.log(alex.exit());
 


// ES6
class User {
  constructor(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
  }
  hello () {
    console.log('Hello ' + this.name);
  }
  exit(){
    return 'Exit: ' + this.name + ' ушел ';
  }
}

User.status = 'admin'; // add prop
User.login = function () {
  return 'Login';
}; // add method


let ivan = new User('Ivan', 20);
let alex = new User('Alex', 30);

alex.hello();
console.log(alex.exit());
console.log(User.status);
console.log(User.login());
 
