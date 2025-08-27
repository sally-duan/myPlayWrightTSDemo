"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloworld = helloworld;
exports.getSum = getSum;
exports.calculator = calculator;
exports.countOccurence = countOccurence;
exports.largestNumber = largestNumber;
exports.titleCase = titleCase;
exports.removeDup = removeDup;
exports.FizzBuzz = FizzBuzz;
exports.intersection = intersection;
exports.FindMissingLetter = FindMissingLetter;
exports.firstNonRepeatChar = firstNonRepeatChar;
exports.areCharsUnique = areCharsUnique;
exports.firstNonRepeatCharMap = firstNonRepeatCharMap;
exports.diceGameSimulation = diceGameSimulation;
exports.formatPhoneNumber = formatPhoneNumber;
exports.validateEmail = validateEmail;
exports.validateEmail2 = validateEmail2;
function helloworld() {
    return "Hello World";
}
function getSum(a, b) {
    return a + b;
}
function calculator(a, b, operator) {
    var result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default: throw new Error('not covered');
    }
    return result;
}
function countOccurence(str, occurrenc) {
    return str.toLowerCase().split(occurrenc).length - 1;
}
function titleCase(str) {
    if (str.length == 1)
        return str[0];
    var name = '';
    var words = str.split(' ');
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        name = name + word[0].toUpperCase();
    }
    return name;
}
function removeDup(data) {
    var nonDup = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        if (nonDup.indexOf(item) === -1) {
            nonDup.push(item);
        }
    }
    return nonDup;
}
function FizzBuzz(data) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i] % 3 == 0 && data[i] % 5 == 0) {
            result.push("fizzbuzz");
        }
        else if (data[i] % 3 == 0) {
            result.push("fizz");
        }
        else if (data[i] % 5 == 0) {
            result.push("buzz");
        }
        else
            result.push(data[i].toString());
    }
    return result;
}
function intersection(data1, data2) {
    var intersection = [];
    for (var _i = 0, data1_1 = data1; _i < data1_1.length; _i++) {
        var item = data1_1[_i];
        if (data2.includes(item) && (!intersection.includes(item))) {
            intersection.push(item);
        }
    }
    return intersection;
}
function FindMissingLetter(data) {
    var first = data[0].charCodeAt(0);
    var last = data[data.length - 1].charCodeAt(0);
    var supposedNumber = (first + last) * (data.length + 1) / 2;
    console.log(supposedNumber);
    var reality = 0;
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var c = data_2[_i];
        reality = reality + c.charCodeAt(0);
    }
    console.log(supposedNumber - reality);
    var result = String.fromCharCode(supposedNumber - reality);
    return result;
}
function areCharsUnique(str) {
    var unique = new Set();
    var answer = true;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var c = str_1[_i];
        if (!unique.has(c)) {
            unique.add(c);
        }
        else
            answer = false;
    }
    return answer;
}
function areCharsUnique2(str) {
    var unique = {};
    var answer = true;
    for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
        var c = str_2[_i];
        {
            if (unique[c]) {
                return false;
            }
            unique[c] = true;
        }
    }
    return answer;
}
function firstNonRepeatCharMap(str) {
    var myMap = new Map();
    for (var _i = 0, str_3 = str; _i < str_3.length; _i++) {
        var c = str_3[_i];
        myMap.set(c, (myMap.get(c) || 0) + 1);
    }
    for (var _a = 0, str_4 = str; _a < str_4.length; _a++) {
        var c = str_4[_a];
        if (myMap.get(c) === 1) {
            return c;
        }
    }
    //if there is no tsconfig.json you have to turn this into an array
    // const entries = Array.from(myMap.entries());
    // console.log(entries.toString());
    // for (let i = 0; i < entries.length; i++) {
    //     const [key, value] = entries[i];
    //     if (value === 1) {
    //         return key;
    //     }
    // }
    return null;
}
function firstNonRepeatChar(str) {
    var charCount = {};
    for (var _i = 0, str_5 = str; _i < str_5.length; _i++) {
        var c = str_5[_i];
        charCount[c] = (charCount[c] || 0) + 1;
    }
    for (var _a = 0, str_6 = str; _a < str_6.length; _a++) {
        var c = str_6[_a];
        if (charCount[c] === 1) {
            return c;
        }
    }
    return null;
}
function validateEmail(str) {
    var pattern = /^[0-9a-zA-Z]{2,}@[0-9a-zA-Z]{2,}\.[a-z]{2,}$/;
    // let match = str.match(pattern);
    // if (match !== null) {
    //     return true;
    // }
    return pattern.test(str);
}
function validateEmail2(email) {
    if (email.indexOf('@') === -1)
        return false;
    var _a = email.split('@'), localpart = _a[0], domain = _a[1];
    if (localpart.length === 0 || domain.length < 3) {
        return false;
    }
    var domainExtension = domain.split('.');
    if (domainExtension.length < 2 || domainExtension[1] < 2) {
        return false;
    }
    return true;
}
function diceGameSimulation(data) {
    var num1;
    var num2;
    for (var i = 0; i < data; i++) {
        num1 = Math.floor(Math.random() * 6) + 1;
        num2 = Math.floor(Math.random() * 6) + 1;
        var total = num1 + num2;
        console.log(num1, num2);
        switch (total) {
            case 7:
            case 11:
                console.log("total is " + total + ", you win");
                return "you win";
            case 2:
            case 3:
            case 12:
                console.log("total is " + total + ", you lose");
                return "you lose";
            default:
                console.log("total is " + total + ", roll again");
            // return "roll again";
        }
    }
}
function formatPhoneNumber(data) {
    var areaCode = '(' + data.slice(0, 3).join('') + ')';
    var line = data.slice(3, 6).join('') + '-';
    var number = data.slice(6).join('');
    console.log(areaCode.concat(line).concat(number));
    return areaCode.concat(line).concat(number);
}
function largestNumber(data) {
    var biggie = data[0];
    for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
        var item = data_3[_i];
        if (item > biggie) {
            biggie = item;
        }
    }
    return biggie;
}
