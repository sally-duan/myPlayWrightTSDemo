import { join } from "path/posix";

function DoubleTheNumbers(data): number[] {
    let doubleThem = data.map(item => item * 2);
    return doubleThem;
}

function DoubleTheNumbers2(array): number[] {
    return array.map((number, index, array) => number * 2);

}
function OnlyEvenNumbers(data) {
    let result = data.filter(item => item % 2 === 0)
    return result;
}

function totalSales(data) {

    let salesNumber = data.map(item => item.price * item.quantity).reduce((acc, curr) => acc + curr, 0);
    return salesNumber;

}

function SumOfEvenSquares(data) {
    let result = data.filter(number => number % 2 === 0).map(num => num * num).reduce((acc, curr) => acc + curr, 0);
    return result;
}


function HighestScoringWord(sentence) {
    let myMap = new Map();
    for (let i = 1, j = 97; i < 26 && j <= 122; i++, j++) {
        myMap.set(String.fromCharCode(j), i);
    }

    const toLowerSentences = sentence.toLowerCase();
    let words = toLowerSentences.split(' ');
    console.log(" words are " + words);
    let scoreContainer: number[] = [];
    let singleWord;
    let score;
    for (let i = 0; i < words.length; i++) {
        score = 0;
        singleWord = words[i].split('');

        for (let j = 0; j < singleWord.length; j++) {
            score = score + myMap.get(singleWord[j])
        }
        scoreContainer.push(score);
    }

    let highestScore = Math.max(...scoreContainer);
    let index = scoreContainer.indexOf(highestScore);
    return words[index];
}

function highestScore2(str) {

    const words = str.split(' ');
    const scores = words.map(word => {
        let score = 0;
        for (const letter of word) {
            score += letter.charCodeAt(0) - 96;
        }
        return score
    });
    return scores;
    //omit the rest to get highest
}

function Anagram(str, str2) {
    let charFreq = new Map();
    for (let c of str) {
        charFreq.set(c, charFreq.get(c) || 0 + 1)
    }

    let charFreq2 = new Map();
    for (let c of str2) {
        charFreq2.set(c, charFreq.get(c) || 0 + 1)
    }

    let key1 = new Set(charFreq.keys());
    let key2 = new Set(charFreq2.keys());


    for (const key of key1) {
        if (!key2.has(key))
            return false;
    }

    for (const key of key2) {
        if (!key1.has(key))
            return false;
    }

    let value1 = new Set(charFreq.values());
    let value2 = new Set(charFreq2.values());


    for (const value of value1) {
        if (!value2.has(value))
            return false
    }

    for (const value of value2) {
        if (!value1.has(value))
            return false;
    }
    return true;
}

function Anagram2(str, str2) {
    let charFreq = {}
    for (let c of str) {
        charFreq[c] = charFreq[c] || 0 + 1;
    }

    let charFreq2 = {};
    for (let c of str2) {
        charFreq2[c] = charFreq2[c] || 0 + 1;
    }

    console.log(charFreq);
    console.log(charFreq2);

    let key1 = [...Object.keys(charFreq)];
    let key2 = [...Object.keys(charFreq2)];

    console.log(key1);
    console.log(key2);
    for (const key of key1) {
        if (!key2.includes(key))
            return false;
    }

    for (const key of key2) {
        if (!key1.includes(key))
            return false;
    }
    let value1 = [...Object.values(charFreq)];
    let value2 = [...Object.values(charFreq2)];
    console.log(value1);
    console.log(value2);

    for (const value of value1) {
        if (!value2.includes(value))
            return false
    }

    for (const value of value2) {
        if (!value1.includes(value))
            return false;
    }
    return true;
}


function AnagramBest(str, str2) {
    const fre1 = str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {})

    const fre2 = str2.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(fre1).every(c => fre1[c] === fre2[c]);
}

// function HashTagGenerator(str): string | boolean {
//     if (str.trim().length === 0 || str.length > 140) return false;

//     else
//         return "#" + str.trim().split(/\s+/).map((item: string | any[]) => item[0].toUpperCase() + item.slice(1)).join('');
// }

function HashTagGenerator(str): string | boolean {

    if (str.length <= 1) return false;
    let hashtag = str.trim().split(' ').reduce((hash, cur) => {
        hash = hash + cur[0].toUpperCase() + cur.substring(1);
        return hash;
    }, "#");

    return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}


function IPV4Validator(str): boolean {
    let numbers = str.split('.');
    if (numbers.length !== 4) return false;
    for (let num of numbers) {
        const test = parseInt(num);
        if (num < 1 || num > 255 || test === num.toString()) {
            return false;
        }
    }
    return true;
}






export { DoubleTheNumbers, DoubleTheNumbers2, OnlyEvenNumbers, SumOfEvenSquares, totalSales, HighestScoringWord, Anagram, Anagram2, AnagramBest, HashTagGenerator, IPV4Validator }