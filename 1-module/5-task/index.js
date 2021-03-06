/*
* # Усечение строки
Создайте функцию `truncate(str, maxlength)`, которая проверяет длину строки `str` и, если она превосходит `maxlength`, заменяет конец `str` на `"…"`, так, чтобы её длина стала равна `maxlength`.
## Возврат значения
Функция должна возвращать:
1. Ту же строку, если усечение не требуется.
2. Усечённую строку, если длина исходной строки больше `maxlength`.
Например:
```js
truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) === 'Вот, что мне хотело…';
truncate('Всем привет!', 20) === 'Всем привет!';
```
Обратите внимание, что **в решении нужно использовать специальный символ "троеточие" из условия задачи** (просто скопируйте и вставьте в свой код) :)
…
*
* * */

function truncate(str, maxlength) {
  let strLength = 0;
  strLength = str.length;
  console.log ('strLength = ', strLength);

  if (strLength > maxlength) {
    let trancatedStr = str.slice(0, maxlength-1) + '…';
    //console.log('trancatedStr:', trancatedStr);
    return trancatedStr;
  } else {
    return str;
  }

}
let stringForTrancate = `в решении нужно использовать специальный символ "троеточие" из условия задачи** (просто скопируйте и вставьте в `;
const trancatedString = truncate(stringForTrancate, 15);
console.log("Обработанная строка:", trancatedString);
