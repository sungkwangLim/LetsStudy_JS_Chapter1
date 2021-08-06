// 1. String concatention
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${ 1 + 2 }`);

// 2. Numeric operators
console.log(1+1); // add
console.log(1-1); // substract
console.log(1/1); // divide
console.log(1*1); // multiply
console.log(5%2); // remainder
console.log(2**3); // exponentiation

// 3. Increment and decreament operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
// console.log(`x += y = ${x+=y} , ${x} `);
// console.log(`x -= y = ${x-=y} , ${x} `);
// console.log(`x *= y = ${x*=y} , ${x} `);
console.log(`x /= y = ${x/=y} , ${x} `);

// 5. Comparison operators
console.log(`10 < 6 ${10 < 6}`);
console.log(`10 <= 6 ${10 <= 6}`);
console.log(`10 > 6 ${10 > 6}`);
console.log(`10 >= 6 ${10 >= 6}`);

// 6. Logical operators
const value1 = false;
const value2 = 4<2;
const nullableObject = {
    something : 'asdf'
}
// || or 연산자는 앞에서 true 가 나오면 거기서 멈춤
console.log(` or : ${value1 || value2 || check()}`);

// && and 연산자도 앞에서 falst 이면 뒤에꺼와 상관없이 실행 안함.
console.log(` and : ${value1 && value2 && check()}`);

if(nullableObject != null){    
    console.log(nullableObject.something);
}

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😘'); 
    };
    return true;
}

// ! not
console.log( `!not ${!value1}`);

// 7. Equality
const stringFive = '5';
const numberFixe = 5;

// == loose equality with type conversion
console.log(stringFive == numberFixe);
console.log(stringFive != numberFixe);

// === strict equality no type conversion 타입 포함해서 검사
console.log(stringFive === numberFixe);
console.log(stringFive !== numberFixe);

// object equality by reference
const kwang1 = { name : 'kwang' };
const kwang2 = { name : 'kwang' };
const kwang3 = kwang1;
console.log(`kwang1 == kwang2 ${kwang1 == kwang2}`);
console.log(`kwang1 === kwang2 ${kwang1 === kwang2}`);
console.log(`kwang3 === kwang1 ${kwang3 === kwang1}`);

// equality - puzzler 
console.log(`0 == false ${0 == false}`);
console.log(`0 === false ${0 === false}`);
console.log(`'' == false ${'' == false}`);
console.log(`'' === false ${'' === false}`);
console.log(`null == undefined ${null == undefined}`);
console.log(`null === undefined ${null === undefined}`);

// 8. Conditional operators : if
// if, else if, else
const name1 = kwang1.name;
if (name1 === 'kwang') {
    console.log('welcome kwang');
} else if (name1 === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator : ? 간단하게 쓸때만 사용하는게 좋다.
// condition ? value1 : value2 ;
console.log(name1 === 'kwang' ? 'yes': 'no');

// 10. Switch statement
// use for multiple if check 반복되는 if else 사용할때는 switch 문 쓰는것도 좋다.
// use for enum-like value check
// use for multiple type checks in TS 타입스크립트에서 정해저있는 타입을 검사할때 가독성에 좋다.
const broswer = 'IE'; 
switch (broswer) {
    case 'IE':
        console.log('fucking IE');
        break;
    case 'Chrome':
        console.log('God bless you');
        break;
    case 'Firefox':
        console.log('God bless you');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.

let i = 3;
while (i>0) {
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while : ${i}`);
    i--;
} while(i>0);


// for loop, for(begin; condition; step)
for (index = 3; index > 0; index--) {
    console.log(`for : ${index}`);
}

for (let index = 3; index > 0; index = index - 2) {
    // inline variable declaration
    console.log(`inline variable declaration : ${index}`);
}

// nested loops
for (let index = 0; index < 2; index++) {
    for (let j = 0; j < 6; j++) {
        console.log(`index : ${index}, j : ${j}`);
    }
}
