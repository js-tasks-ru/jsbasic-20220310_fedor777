/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
// проверяем ввод имени пользователя на некорректные значения
// если имя переданное в переменной name пустое, если длина строки < 4 символов, если имя содержит пробел

  if ((name === null) || (name.length < 4) || (name.includes(" "))) {
//    console.log('name = __', name, "__");
    return false;
  } else {                    // если имя корректное, возвращаем значение переменной name как true
    return true;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();

