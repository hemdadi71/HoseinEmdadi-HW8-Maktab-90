'use strict';

function counterMaker() {
  let num = 0;
  return function add(p = 0) {
    num += p;
    return num;
  };
}

const counter = counterMaker();

console.log(counter());
console.log(counter());
console.log(counter(1));
console.log(counter());
console.log(counter(3));
console.log(counter(7));
console.log(counter(-5));
console.log(counter());
