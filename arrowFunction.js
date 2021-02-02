// function doubleIT(num) {
//     return num * 2;
// }

// const doubleIT = function myFun(num) {
//     return num * 2;
// }
const doubleIT = num => num * 2;
const add = (x, y) => x + y;
const take10 = () => 10;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIT(40);
const result2 = add(40, 50);
const result3 = take10();
const result4 = doMath(10, 8);
console.log(result4);
