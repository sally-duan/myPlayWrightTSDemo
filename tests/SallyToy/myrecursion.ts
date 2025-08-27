import { stringify } from "querystring";

function sumTo(n) {
    if (n === 1) return 1;
    else return n + sumTo(n - 1);
}

function reverseString(str) {
    if (str.length === 0) return '';

    if (str.length === 1) return str.slice(-1);

    return str.slice(-1) + reverseString(str.slice(0, -1));

}

function reverseString2(str) {
    if (str.length === 0) return '';

    if (str.length === 1) return str.slice(-1);

    return reverseString(str.slice(1)) + str[0];

}

// const result =(str)=>str.lenght===0? '': reverseString(str.slice(1))+ str.charAt(0);

function FibonacciTest(num) {
    // if (num < 2) return num;
    if (num === 0) return 0;
    if (num === 1) return 1;

    return FibonacciTest(num - 1) + FibonacciTest(num - 2)
}

function FactoriaTest(num) {

    if (num === 0 || num === 1) return 1;

    return num * FactoriaTest(num - 1)

    //  return num <=2? num: num*(num-1)
}

function Power(base, exponent) {

    if (exponent === 0) return 1;
    if (exponent === 1) return base;

    return base * Power(base, exponent - 1);
}

function ArraySum(data) {

    if (data.length === 0) return 0;

    return data[0] + ArraySum(data.slice(1));

}


function flattenArray(data) {
    let result = [];

    for (let item of data) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        }
        else result.push(item);
    }
    return result;

}

function permutation(str) {
    let result = [];

    if (str.length === 0) {
        result.push('');
        return result;
    }
    if (str.length === 1) {
        result.push(str);
        return result;
    }

    for (let i = 0; i < str.length; i++) {
        const firstChar = str[i];
        const rest = str.slice(0, i) + str.slice(i + 1);
        const subPermutation = permutation(rest);

        for (let j = 0; j < subPermutation.length; j++) {
            result.push(firstChar + subPermutation[j]);
        }
    }

    return result;
}




function numberRange(start, end) {
    // if (start>end) return []
    //   return [start].concat(numberRange(start + 1, end));

    if (start === end) return [start];

    const numbers = numberRange(start, end - 1);
    numbers.push(end);

    return numbers;


}

export {
    sumTo, reverseString, reverseString2, FibonacciTest, FactoriaTest, Power, ArraySum, numberRange,
    flattenArray, permutation
}