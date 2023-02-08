'use strict';

function elemCreator(elem, fun) {
  const element = document.createElement(elem);
  document.body.append(element);
  fun(element);
}

const callback = function (element) {
  element.style.backgroundColor = 'red';
  element.style.width = '200px';
  element.style.height = '200px';
};

elemCreator('div', callback);