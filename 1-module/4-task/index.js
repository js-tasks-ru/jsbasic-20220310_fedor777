/*Напишите функцию `checkSpam(str)`, возвращающую `true`, если `str` содержит `'1xBet'` или `'XXX'`, а иначе `false`.

Функция должна быть нечувствительна к регистру:
checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false*/

function checkSpam(str) {
  // ваш код...
  const spamWord1 = '1xbet';
  const spamWord2 = 'xxx';
  let checkResult = false;
  let strToLowerCase = str.toLowerCase();
  //console.log(strToLowerCase);

  // check condition if string contains the spam word
  if (strToLowerCase.includes(spamWord1) || strToLowerCase.includes(spamWord2)) {
    checkResult = true;
  }
   else {
    checkResult = false;
  }
  return checkResult;
}

const isSpam = checkSpam("HJJxxxxxxfhfhfd1xddbetjEEEE");
console.log("isSpam:", isSpam);
