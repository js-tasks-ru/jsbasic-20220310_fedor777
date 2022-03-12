function factorial(n) {

  if ((n === 0) || (n === 1)) {
    return 1;
  } else {
      let factorialValue = n;
      for (let i = 1; i < (n-1); i++) {
//        console.log('i = ' + i);
        factorialValue = factorialValue*(n-i);
        //console.log("factorialValue = " + factorialValue);
      }
    return factorialValue;
  }
}

