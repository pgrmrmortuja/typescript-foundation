//  
let myString: string = "Programming"; 
let myNumber: number = 10; 
let myBoolean: boolean = true;
let mySymbol: symbol = Symbol("id"); let myBigInt: bigint = 100n;

let add = (a:number , b:number):number => {
    return a + b;
}

//2
//Array
//For Js
let randomArray = ['Hello', 10, true];

//Array for Typescript
let stringArray: string[] = ['Hello', 'Hi'];
let numberArray: number[] = [1,2,3];
let flags: boolean[] = [];

flags.push(true);


//3
//Tuples
// let dhakaLatLong: number[] = [23.8103, 90.4125]; //Normal
let dhakaLatLong: [number,number] = [23.8103, 90.4125]; //this is tuples

//4
//Readonly Modifier
let readonlyLatLong: readonly[number,number] = [23.8103, 90.4125];

//5
//Function Optional Parameters
function concatName(firstName: string , lastName?: string): string {
    if(!lastName){
        return firstName;
    }

    return `${firstName} ${lastName}`;
}
concatName("Md");

//6
//Function with Default Parameters
function greets(name: string, greetings: string = "Salam"){
    return `${greetings} ${name}`;
}
greets("Md");

//7
//Function with Void Parameters
//No return
function hello():void {
    console.log("void");
}