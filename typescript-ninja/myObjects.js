"use strict";
exports.__esModule = true;
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "vidhya", isPaid: true });
function createCourse() {
    return { name: "vidhya", isPaid: true };
}
function createUser1(user) {
    return 'user created';
}
function createUserAgain(u) {
    return "created";
}
var myUser = {
    _id: "1234",
    name: "v",
    email: "l@false.com",
    isActive: true
};
//myUser._id="fsdfs" // not allowed since readonly
myUser.email = "f@g.com";
