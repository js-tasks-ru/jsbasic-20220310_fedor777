function ucFirst(str) {

  // ваш код...
  //
  /*функция также должна работать со строкой:

    содержащей только один символ 'В'
    не содержащей символы ''
  */
// make new string = First letter changed to UpperCase + remaining string
    let changedStr = str.substr(0, 1).toUpperCase() + str.substr(1);
//  console.log("changedStr", changedStr);
    return changedStr;
}

const changedName = ucFirst('вася');
console.log("Измененное имя: ", changedName);


