"use strict";
exports.__esModule = true;
var score = 44; //union of types
score = "a+";
var hitesh = { name: "vid", id: 123 };
hitesh = { username: 'vidhya', id: 123 };
function getDBId(param) {
    if (typeof param === "string")
        param.concat("hello");
    else if (typeof param === "number")
        param += 2;
}
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, 3];
