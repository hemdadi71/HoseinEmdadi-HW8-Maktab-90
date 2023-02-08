'use strict';
const user = {};

function setterGenerator(key) {
  return function (value) {
    user[key] = value;
    return user;
  };
}
const nameSetter = setterGenerator('name');
nameSetter('Jack');
console.log(user);

// .....................................................

// const user = {};

// function setterGenerator(key) {
//   return function (value) {
//     this[key] = value;
//     return user;
//   };
// }
// const nameSetter = setterGenerator('name');
// nameSetter.call(user, 'Jack');
// console.log(user);
