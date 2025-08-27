"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumTo = sumTo;
exports.reverseString = reverseString;
exports.reverseString2 = reverseString2;
exports.FibonacciTest = FibonacciTest;
exports.FactoriaTest = FactoriaTest;
exports.Power = Power;
exports.ArraySum = ArraySum;
exports.numberRange = numberRange;
exports.flattenArray = flattenArray;
exports.permutation = permutation;
function sumTo(n) {
    if (n === 1)
        return 1;
    else
        return n + sumTo(n - 1);
}
function reverseString(str) {
    if (str.length === 0)
        return '';
    if (str.length === 1)
        return str.slice(-1);
    return str.slice(-1) + reverseString(str.slice(0, -1));
}
function reverseString2(str) {
    if (str.length === 0)
        return '';
    if (str.length === 1)
        return str.slice(-1);
    return reverseString(str.slice(1)) + str[0];
}
// const result =(str)=>str.lenght===0? '': reverseString(str.slice(1))+ str.charAt(0);
function FibonacciTest(num) {
    // if (num < 2) return num;
    if (num === 0)
        return 0;
    if (num === 1)
        return 1;
    return FibonacciTest(num - 1) + FibonacciTest(num - 2);
}
function FactoriaTest(num) {
    if (num === 0 || num === 1)
        return 1;
    return num * FactoriaTest(num - 1);
    //  return num <=2? num: num*(num-1)
}
function Power(base, exponent) {
    if (exponent === 0)
        return 1;
    if (exponent === 1)
        return base;
    return base * Power(base, exponent - 1);
}
function ArraySum(data) {
    if (data.length === 0)
        return 0;
    return data[0] + ArraySum(data.slice(1));
}
function flattenArray(data) {
    var result = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        }
        else
            result.push(item);
    }
    return result;
}
function permutation(str) {
    var result = [];
    if (str.length === 0) {
        result.push('');
        return result;
    }
    if (str.length === 1) {
        result.push(str);
        return result;
    }
    for (var i = 0; i < str.length; i++) {
        var firstChar = str[i];
        var rest = str.slice(0, i) + str.slice(i + 1);
        var subPermutation = permutation(rest);
        for (var j = 0; j < subPermutation.length; j++) {
            result.push(firstChar + subPermutation[j]);
        }
    }
    return result;
}
function numberRange(start, end) {
    // if (start>end) return []
    //   return [start].concat(numberRange(start + 1, end));
    if (start === end)
        return [start];
    var numbers = numberRange(start, end - 1);
    numbers.push(end);
    return numbers;
}
