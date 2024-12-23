export {}

let message = 'Welcome Back'
// console.log(message);

let number: number = 25;
let name: string = 'Fuad';
let total: number = 250;

let dynamicMessage: string = `My name is ${name}`

// console.log(name.indexOf('u'));

// console.log(dynamicMessage)

enum Color {Red = 5, Green, Black};

let c:Color = Color.Red
let green: Color = Color.Green
// console.log(green);

enum Friends {f1 = 1, f2, f3}
const f:Friends = Friends.f2
console.log(f)

let myVariable: unknown = 10
function hasName(obj: any): obj is {name: string}{
    return !!obj && 
    typeof obj === "object" && "name" in obj
}

if(hasName(myVariable)){
    // console.log(myVariable.name);
}


let myName: string | number;
myName = "Fuad"
// myName = 10
console.log(myName);

<<<<<<< HEAD

=======
function sum(number1:number, number2:number): number{
    return number1 + number2
}

let sum_result:number = sum(10, 20)
console.log(sum_result);

// .............................................................................
interface Person{
    firstName: string,
    middleName: string,
    lastName: string,
}

function fullName(params: Person): string{
    return params.firstName + ' ' + params.middleName + ' ' + params.lastName
}

let p = {
        firstName: 'Fuad',
        middleName: 'Islam',
        lastName: 'Redoy'

    }

console.log(fullName(p));

interface RegistrationForm{
    firstName: string,
    lastName: string,
    age: number,
    salary: number,
}

function getRegistrationFormValue(params: RegistrationForm){
    console.log('First name: ', params.firstName);
    console.log('Last name: ', params.lastName);
    console.log('Age: ', params.age);
    console.log('Salary: ', params.salary);
}

const RegistrationData = {
    firstName: 'Fuad',
    lastName: 'Redoy',
    age: 24,
    salary: 45000
}

getRegistrationFormValue(RegistrationData)
>>>>>>> 59329797f89ba57dc17dca7ac76e658ea30546da
