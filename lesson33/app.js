// LocalStorage

// localStorage.setItem('number', 1);
// localStorage.setItem('more', 2);
// localStorage.removeItem('more');
// localStorage.clear();


console.log(localStorage.getItem('number'));

window.addEventListener('DOMContentLoaded', ()=>{
  let checkBox = document.getElementById('checked');
  let change = document.getElementById('change');
  let form = document.getElementsByTagName('form');

  if(localStorage.getItem('isChecked') === "true") {
    checkBox.checked = true;
  }

  checkBox.addEventListener('click', ()=>{
    localStorage.setItem('isChecked', true);

  });
  
  if(localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'green';
  } 

  change.addEventListener('click', ()=>{
     localStorage.setItem('bg', 'changed');
     form.style.backgroundColor = 'green';
  });

  let person = {
    name: 'Jara',
    age: 20,
    tech : ['mobile', 'notebook']
  };

  let serializePerson = JSON.stringify(person);
  localStorage.setItem('person', serializePerson);
  console.log(JSON.parse(localStorage.getItem('person')));
});
