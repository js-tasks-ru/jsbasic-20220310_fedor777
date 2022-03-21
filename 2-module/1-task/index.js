let salaries = {
  Greg: NaN,
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  Burton: (-Infinity),
  King: Infinity,
  month: 'December',
  currency: 'USD',
  isPayed: false,
};

function sumSalary(salaries) {
  let TotalSalary = 0;

  for (let key in salaries) {
    let objValue = salaries[key];
     if ( (objValue !== Infinity) && (objValue!==(-Infinity)) && (isNaN(objValue) === false) && (typeof objValue === 'number')) {
      TotalSalary = TotalSalary + objValue;
    }
  };
  return TotalSalary;
};

let sal = sumSalary(salaries);
