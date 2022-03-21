function isEmpty(obj) {
  // in this method we will go across the object and
  // check if is has a property
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    };

  };
  return true;
};

const obj = {

};

let isEmptyObject = isEmpty(obj);
