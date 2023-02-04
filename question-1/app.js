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
