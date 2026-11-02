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

