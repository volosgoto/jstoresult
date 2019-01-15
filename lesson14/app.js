let soldier = {
  firstName : 'Defauld Name',
  lastName : 'Defauld lastName',
  helth : 400,
  armor : 100,
   
  getFullName : function() {
    return this.firstName + " " + this.lastName;
  }
}


let john = {
  helth : 200
}


user.__proto__ = soldier;


console.log(user.getFullName());
console.log(user);