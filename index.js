"use strict";
var shade = 10;
var setGradientTimer = setInterval(function () {
   return setGradient(shade++);
}, 10);
var setGradient = function (shade) {
   if (shade === void 0) {
      shade = 10;
   }
   var maxShade = 400;
   shade === maxShade && clearInterval(setGradientTimer);
   document.body.style.background =
      " no-repeat fixed center center\n               linear-gradient(150deg ,#f06d" +
      shade +
      " 40%,#" +
      shade +
      "0afe 10%) ";
};
