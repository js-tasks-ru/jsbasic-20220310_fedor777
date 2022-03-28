let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  let newArray = [];
    arr.forEach((item) => {
    if (item >= a && item <=b) {
    newArray.push(item);
    }
  });
  return newArray;
}

filterRange (arr, 1, 4);

