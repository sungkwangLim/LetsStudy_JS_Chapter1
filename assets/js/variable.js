// 드림코딩 by 엘리 강의 자바스크립트 기초강의(ES5+)
// 1. Use strict
// add in ES5
// use this for Valina Javasscript
// 모던하게 작업하기위에 use strict 설정
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'glabal name';
{
    let name = 'JH';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoising (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age; 
}
console.log(age);

// 3, Contants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const datInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value : ${size}, type: ${typeof size}`);

// number - speical numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`; //template literals (string)
console.log(`value : ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3<1;
console.log(`value : ${canRead}, type: ${typeof canRead}`);
console.log(`value : ${test}, type: ${typeof test}`);

// null
const nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value : ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2) //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2) //true
// console.log(`value : ${symbol1}, type: ${typeof symbol1}`); error
console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const JH = {name : 'JH', age : 35};
JH.age = 36;

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type: ${typeof text}`);
text = '8' * 2;
console.log(`value : ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //error