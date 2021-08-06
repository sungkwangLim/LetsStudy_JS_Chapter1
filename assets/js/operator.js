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

// || or 연산자는 앞에서 true 가 나오면 거기서 멈춤
console.log(` or : ${value1 || value2 || check()}`);

// && and 연산자도 앞에서 falst 이면 뒤에꺼와 상관없이 실행 안함.
console.log(` and : ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😘'); 
    };
    return true;
}