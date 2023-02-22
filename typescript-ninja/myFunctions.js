"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function toUpper(text) {
    return text.toUpperCase();
}
toUpper("vidhya");
function signupUser(name, email, isPaid) {
}
signupUser("v", "v@v.com", true);
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
loginUser("k", "k@k.com");
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "superman"];
//input type is automatically infered but output type has to be given
heros.map(function (hero) {
    return "my hero is ".concat(hero);
});
//returning void
function consoleError(errmsg) {
    console.log(errmsg);
}
//functions that never return a value
function throwError(errmsg) {
    throw new Error(errmsg);
}
