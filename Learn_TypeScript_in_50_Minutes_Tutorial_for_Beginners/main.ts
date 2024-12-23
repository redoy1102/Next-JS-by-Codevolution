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


