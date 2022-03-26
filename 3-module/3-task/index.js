function camelize(str) {
  let StringAfterSplit = [];
  StringAfterSplit = str.split('');

  StringAfterSplit.forEach((item, i) => {
    if((item === '-')) {
      StringAfterSplit[i+1] = StringAfterSplit[i+1].toUpperCase();
      StringAfterSplit.splice(i, 1);
      };
});
  return StringAfterSplit.join('');
};




