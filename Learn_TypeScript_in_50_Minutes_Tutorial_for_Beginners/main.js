"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Welcome Back';
// console.log(message);
var number = 25;
var name = 'Fuad';
var total = 250;
var dynamicMessage = "My name is ".concat(name);
// console.log(name.indexOf('u'));
// console.log(dynamicMessage)
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Black"] = 7] = "Black";
})(Color || (Color = {}));
;
var c = Color.Red;
var green = Color.Green;
// console.log(green);
var Friends;
(function (Friends) {
    Friends[Friends["f1"] = 1] = "f1";
    Friends[Friends["f2"] = 2] = "f2";
    Friends[Friends["f3"] = 3] = "f3";
})(Friends || (Friends = {}));
var f = Friends.f2;
console.log(f);
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    // console.log(myVariable.name);
}
var myName;
myName = "Fuad";
// myName = 10
console.log(myName);
