let json = '{"id" : 2}';

try {

  console.log('Try');
  let user = JSON.parse(json); // true
    console.log(user);
    if (!user.name) {
      throw new Error("В этих данных нет имени");
    }
    
} catch (error) {
  console.log('Error', error);
  console.log('Error', error.name);
  console.log('Error', error.message);
  console.log('Error', error.stack);
  
} finally {
  console.log('Я выполнюсь всегда');
}

console.log('Работает');
