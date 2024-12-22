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
function sum(number1, number2) {
    return number1 + number2;
}
var sum_result = sum(10, 20);
console.log(sum_result);
function fullName(params) {
    return params.firstName + ' ' + params.middleName + ' ' + params.lastName;
}
var p = {
    firstName: 'Fuad',
    middleName: 'Islam',
    lastName: 'Redoy'
};
console.log(fullName(p));
function getRegistrationFormValue(params) {
    console.log('First name: ', params.firstName);
    console.log('Last name: ', params.lastName);
    console.log('Age: ', params.age);
    console.log('Salary: ', params.salary);
}
var RegistrationData = {
    firstName: 'Fuad',
    lastName: 'Redoy',
    age: 24,
    salary: 45000
};
getRegistrationFormValue(RegistrationData);
