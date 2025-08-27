function helloworld(): string {
    return "Hello World";
}

function getSum(a: number, b: number): number {
    return a + b;
}

function calculator(a: number, b: number, operator: string): number {
    let result;
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

function countOccurence(str, occurrenc): number {
    return str.toLowerCase().split(occurrenc).length - 1;
}

function titleCase(str): string {

    if (str.length == 1) return str[0];

    let name = '';
    const words = str.split(' ');
    for (const word of words) {
        name = name + word[0].toUpperCase();

    }
    return name;

}

function removeDup(data) {
    let nonDup = [];
    for (const item of data) {
        if (nonDup.indexOf(item) === -1) {
            nonDup.push(item);
        }
    }

    return nonDup;
}

function FizzBuzz(data) {
    let result: string[] = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] % 3 == 0 && data[i] % 5 == 0) {
            result.push("fizzbuzz");
        }
        else if (data[i] % 3 == 0) {
            result.push("fizz");
        }

        else if (data[i] % 5 == 0) {
            result.push("buzz");
        }
        else result.push(data[i].toString());
    }

    return result;
}

function intersection(data1: number[], data2: number[]): number[] {
    let intersection: number[] = []
    for (let item of data1) {
        if (data2.includes(item) && (!intersection.includes(item))) {
            intersection.push(item);
        }
    }
    return intersection;
}

function FindMissingLetter(data) {
    let first = data[0].charCodeAt(0);
    let last = data[data.length - 1].charCodeAt(0);


    let supposedNumber = (first + last) * (data.length + 1) / 2;
    console.log(supposedNumber);

    let reality = 0;
    for (const c of data) {
        reality = reality + c.charCodeAt(0);

    }
    console.log(supposedNumber - reality);
    let result = String.fromCharCode(supposedNumber - reality);

    return result;

}


function areCharsUnique(str): boolean {
    let unique = new Set();
    let answer = true;

    for (const c of str) {
        if (!unique.has(c)) {
            unique.add(c);
        }
        else answer = false;
    }
    return answer;

}

function areCharsUnique2(str): boolean {
    let unique = {};
    let answer = true;

    for (const c of str) {
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
    let myMap = new Map();

    for (const c of str) {
        myMap.set(c, (myMap.get(c) || 0) + 1);
    }

    for (const c of str) {
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
    let charCount = {};

    for (const c of str) {
        charCount[c] = (charCount[c] || 0) + 1;
    }

    for (const c of str) {
        if (charCount[c] === 1) {
            return c;
        }
    }

    return null;
}
function validateEmail(str) {
    let pattern = /^[0-9a-zA-Z]{2,}@[0-9a-zA-Z]{2,}\.[a-z]{2,}$/
    // let match = str.match(pattern);
    // if (match !== null) {
    //     return true;
    // }
    return pattern.test(str);
}

function validateEmail2(email) {
    if (email.indexOf('@') === -1) return false;

    const [localpart, domain] = email.split('@');
    if (localpart.length === 0 || domain.length < 3) {
        return false;
    }

    const domainExtension = domain.split('.');
    if (domainExtension.length < 2 || domainExtension[1] < 2) 
    {return false;
        }

    return true;
}








function diceGameSimulation(data) {
    let num1;
    let num2;
    for (let i = 0; i < data; i++) {

        num1 = Math.floor(Math.random() * 6) + 1;
        num2 = Math.floor(Math.random() * 6) + 1;
        let total = num1 + num2;
        console.log(num1, num2)
        switch (total) {
            case 7:
            case 11:
                console.log("total is " + total + ", you win")
                return "you win";

            case 2:
            case 3:
            case 12:
                console.log("total is " + total + ", you lose")
                return "you lose"

            default:
                console.log("total is " + total + ", roll again")
            // return "roll again";
        }
    }

}

function formatPhoneNumber(data) {
    let areaCode = '(' + data.slice(0, 3).join('') + ')';
    let line = data.slice(3, 6).join('') + '-';
    let number = data.slice(6).join('');
    console.log(areaCode.concat(line).concat(number));
    return areaCode.concat(line).concat(number);
}


function largestNumber(data): number {
    let biggie = data[0];
    for (const item of data) {
        if (item > biggie) {
            biggie = item;
        }
    }
    return biggie;
}

export { helloworld, getSum, calculator, countOccurence, largestNumber, titleCase, removeDup, FizzBuzz, intersection, FindMissingLetter, firstNonRepeatChar, areCharsUnique, firstNonRepeatCharMap, diceGameSimulation, formatPhoneNumber, validateEmail, validateEmail2 };