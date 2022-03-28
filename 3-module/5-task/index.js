function getMinMax(str) {
  let newStr = str.split(' ');
  let arrOfNumbers = newStr.filter(num => {
    let tempNumber = Number (num);
    if ((isNaN(tempNumber) === false) && (typeof tempNumber === 'number')) {
    return Number (num);
    };
    });
  let result = {
  };
  result.min = Math.min(...arrOfNumbers);
  result.max = Math.max(...arrOfNumbers);
  return(result);
};
