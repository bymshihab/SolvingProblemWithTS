// ===================================
// Basic Types in JavaScript/TypeScript
// Reference Types
var obj = {value: 10};
var copy = obj;
copy.value = 20;
console.log(obj.value); // 20

// Primitive Types
var num = 10;
var numCopy = num;
numCopy = 20;
console.log(num); // 10

var obj2a = {value: 10};
var copy2 = obj2a;
copy2.value = 20;
console.log(obj2a.value); // 20

console.log(obj === copy); // true
console.log(num === numCopy); // false
console.log(obj2a === copy2); // true
console.log(obj === obj2a); // false

console.log('-----------------------------------');

// context vs scope
function outer() {
    var outerVar = 'I am outside!';
    function inner() {
        var innerVar = 'I am inside!';
        console.log(outerVar); // Accessible
        console.log(innerVar); // Accessible
    }
    inner();
    // console.log(innerVar); // Error: innerVar is not defined
}
outer();

console.log('-----------------------------------');




















// ===============================

//referenceType array
let arr1: number[] = [1, 2, 3];
let arr2: Array<string> = ['a', 'b', 'c'];
let arr3: (number | string)[] = [1, 'a', 2, 'b'];

//referenceType tuple
let tuple1: [number, string] = [1, 'a'];
let tuple2: [string, boolean, number] = ['hello', true, 42];

//referenceType any
let anyVar: any = 5;
anyVar = 'now a string';
anyVar = { key: 'value' };

//referenceType void
function logMessage(message: string): void {
    console.log(message);
}

//referenceType null and undefined
let nullVar: null = null;
let undefinedVar: undefined = undefined;

//referenceType never
function throwError(message: string): never {
    throw new Error(message);
}

//referenceType object
let obj1: object = { key: 'value' };
let obj2b: { id: number; name: string } = { id: 1, name: 'Item 1' };

//referenceType enum
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

//referenceType union
let unionVar: number | string;
unionVar = 10;
unionVar = 'ten';

//referenceType intersection
interface A {
    a: string;
}
interface B {
    b: number;
}
type AB = A & B;
let abVar: AB = { a: 'hello', b: 42 };

//referenceType literal
let literalVar: 'success' | 'failure';
literalVar = 'success';
// literalVar = 'error'; // Error

//referenceType type alias
type ID = number | string;
let userId: ID;
userId = 123;
userId = 'abc123';

//referenceType readonly
let readonlyArr: ReadonlyArray<number> = [1, 2, 3];
// readonlyArr.push(4); // Error

//referenceType tuple with optional and rest elements
let complexTuple: [number, string?, ...boolean[]] = [1, 'optional', true, false];

//referenceType function type
let funcVar: (x: number, y: number) => number;
funcVar = (a, b) => a + b;

//referenceType class type
class Person {
    name: string;   
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
let personVar: Person = new Person('Alice');
personVar.greet();

//referenceType interface
interface Point {
    x: number;
    y: number;
}
let pointVar: Point = { x: 10, y: 20 };

//# sourceMappingURL=basic.js.map
// const greeting = "hello world";
// console.log(greeting);
// export {};

// //# sourceMappingURL=index.js.map
