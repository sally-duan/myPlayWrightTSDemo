"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleTheNumbers = DoubleTheNumbers;
exports.DoubleTheNumbers2 = DoubleTheNumbers2;
exports.OnlyEvenNumbers = OnlyEvenNumbers;
exports.SumOfEvenSquares = SumOfEvenSquares;
exports.totalSales = totalSales;
exports.HighestScoringWord = HighestScoringWord;
exports.Anagram = Anagram;
exports.Anagram2 = Anagram2;
exports.AnagramBest = AnagramBest;
exports.HashTagGenerator = HashTagGenerator;
exports.IPV4Validator = IPV4Validator;
function DoubleTheNumbers(data) {
    var doubleThem = data.map(function (item) { return item * 2; });
    return doubleThem;
}
function DoubleTheNumbers2(array) {
    return array.map(function (number, index, array) { return number * 2; });
}
function OnlyEvenNumbers(data) {
    var result = data.filter(function (item) { return item % 2 === 0; });
    return result;
}
function totalSales(data) {
    var salesNumber = data.map(function (item) { return item.price * item.quantity; }).reduce(function (acc, curr) { return acc + curr; }, 0);
    return salesNumber;
}
function SumOfEvenSquares(data) {
    var result = data.filter(function (number) { return number % 2 === 0; }).map(function (num) { return num * num; }).reduce(function (acc, curr) { return acc + curr; }, 0);
    return result;
}
function HighestScoringWord(sentence) {
    var myMap = new Map();
    for (var i = 1, j = 97; i < 26 && j <= 122; i++, j++) {
        myMap.set(String.fromCharCode(j), i);
    }
    var toLowerSentences = sentence.toLowerCase();
    var words = toLowerSentences.split(' ');
    console.log(" words are " + words);
    var scoreContainer = [];
    var singleWord;
    var score;
    for (var i = 0; i < words.length; i++) {
        score = 0;
        singleWord = words[i].split('');
        for (var j = 0; j < singleWord.length; j++) {
            score = score + myMap.get(singleWord[j]);
        }
        scoreContainer.push(score);
    }
    var highestScore = Math.max.apply(Math, __spreadArray([], __read(scoreContainer), false));
    var index = scoreContainer.indexOf(highestScore);
    return words[index];
}
function highestScore2(str) {
    var words = str.split(' ');
    var scores = words.map(function (word) {
        var e_1, _a;
        var score = 0;
        try {
            for (var word_1 = __values(word), word_1_1 = word_1.next(); !word_1_1.done; word_1_1 = word_1.next()) {
                var letter = word_1_1.value;
                score += letter.charCodeAt(0) - 96;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (word_1_1 && !word_1_1.done && (_a = word_1.return)) _a.call(word_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return score;
    });
    return scores;
    //omit the rest to get highest
}
function Anagram(str, str2) {
    var e_2, _a, e_3, _b, e_4, _c, e_5, _d, e_6, _e, e_7, _f;
    var charFreq = new Map();
    try {
        for (var str_1 = __values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
            var c = str_1_1.value;
            charFreq.set(c, charFreq.get(c) || 0 + 1);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var charFreq2 = new Map();
    try {
        for (var str2_1 = __values(str2), str2_1_1 = str2_1.next(); !str2_1_1.done; str2_1_1 = str2_1.next()) {
            var c = str2_1_1.value;
            charFreq2.set(c, charFreq.get(c) || 0 + 1);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (str2_1_1 && !str2_1_1.done && (_b = str2_1.return)) _b.call(str2_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    var key1 = new Set(charFreq.keys());
    var key2 = new Set(charFreq2.keys());
    try {
        for (var key1_1 = __values(key1), key1_1_1 = key1_1.next(); !key1_1_1.done; key1_1_1 = key1_1.next()) {
            var key = key1_1_1.value;
            if (!key2.has(key))
                return false;
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (key1_1_1 && !key1_1_1.done && (_c = key1_1.return)) _c.call(key1_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var key2_1 = __values(key2), key2_1_1 = key2_1.next(); !key2_1_1.done; key2_1_1 = key2_1.next()) {
            var key = key2_1_1.value;
            if (!key1.has(key))
                return false;
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (key2_1_1 && !key2_1_1.done && (_d = key2_1.return)) _d.call(key2_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    var value1 = new Set(charFreq.values());
    var value2 = new Set(charFreq2.values());
    try {
        for (var value1_1 = __values(value1), value1_1_1 = value1_1.next(); !value1_1_1.done; value1_1_1 = value1_1.next()) {
            var value = value1_1_1.value;
            if (!value2.has(value))
                return false;
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (value1_1_1 && !value1_1_1.done && (_e = value1_1.return)) _e.call(value1_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
    try {
        for (var value2_1 = __values(value2), value2_1_1 = value2_1.next(); !value2_1_1.done; value2_1_1 = value2_1.next()) {
            var value = value2_1_1.value;
            if (!value1.has(value))
                return false;
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (value2_1_1 && !value2_1_1.done && (_f = value2_1.return)) _f.call(value2_1);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return true;
}
function Anagram2(str, str2) {
    var e_8, _a, e_9, _b, e_10, _c, e_11, _d, e_12, _e, e_13, _f;
    var charFreq = {};
    try {
        for (var str_2 = __values(str), str_2_1 = str_2.next(); !str_2_1.done; str_2_1 = str_2.next()) {
            var c = str_2_1.value;
            charFreq[c] = charFreq[c] || 0 + 1;
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (str_2_1 && !str_2_1.done && (_a = str_2.return)) _a.call(str_2);
        }
        finally { if (e_8) throw e_8.error; }
    }
    var charFreq2 = {};
    try {
        for (var str2_2 = __values(str2), str2_2_1 = str2_2.next(); !str2_2_1.done; str2_2_1 = str2_2.next()) {
            var c = str2_2_1.value;
            charFreq2[c] = charFreq2[c] || 0 + 1;
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (str2_2_1 && !str2_2_1.done && (_b = str2_2.return)) _b.call(str2_2);
        }
        finally { if (e_9) throw e_9.error; }
    }
    console.log(charFreq);
    console.log(charFreq2);
    var key1 = __spreadArray([], __read(Object.keys(charFreq)), false);
    var key2 = __spreadArray([], __read(Object.keys(charFreq2)), false);
    console.log(key1);
    console.log(key2);
    try {
        for (var key1_2 = __values(key1), key1_2_1 = key1_2.next(); !key1_2_1.done; key1_2_1 = key1_2.next()) {
            var key = key1_2_1.value;
            if (!key2.includes(key))
                return false;
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (key1_2_1 && !key1_2_1.done && (_c = key1_2.return)) _c.call(key1_2);
        }
        finally { if (e_10) throw e_10.error; }
    }
    try {
        for (var key2_2 = __values(key2), key2_2_1 = key2_2.next(); !key2_2_1.done; key2_2_1 = key2_2.next()) {
            var key = key2_2_1.value;
            if (!key1.includes(key))
                return false;
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (key2_2_1 && !key2_2_1.done && (_d = key2_2.return)) _d.call(key2_2);
        }
        finally { if (e_11) throw e_11.error; }
    }
    var value1 = __spreadArray([], __read(Object.values(charFreq)), false);
    var value2 = __spreadArray([], __read(Object.values(charFreq2)), false);
    console.log(value1);
    console.log(value2);
    try {
        for (var value1_2 = __values(value1), value1_2_1 = value1_2.next(); !value1_2_1.done; value1_2_1 = value1_2.next()) {
            var value = value1_2_1.value;
            if (!value2.includes(value))
                return false;
        }
    }
    catch (e_12_1) { e_12 = { error: e_12_1 }; }
    finally {
        try {
            if (value1_2_1 && !value1_2_1.done && (_e = value1_2.return)) _e.call(value1_2);
        }
        finally { if (e_12) throw e_12.error; }
    }
    try {
        for (var value2_2 = __values(value2), value2_2_1 = value2_2.next(); !value2_2_1.done; value2_2_1 = value2_2.next()) {
            var value = value2_2_1.value;
            if (!value1.includes(value))
                return false;
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (value2_2_1 && !value2_2_1.done && (_f = value2_2.return)) _f.call(value2_2);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return true;
}
function AnagramBest(str, str2) {
    var fre1 = str.split('').reduce(function (acc, char) {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
    var fre2 = str2.split('').reduce(function (acc, char) {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(fre1).every(function (c) { return fre1[c] === fre2[c]; });
}
// function HashTagGenerator(str): string | boolean {
//     if (str.trim().length === 0 || str.length > 140) return false;
//     else
//         return "#" + str.trim().split(/\s+/).map((item: string | any[]) => item[0].toUpperCase() + item.slice(1)).join('');
// }
function HashTagGenerator(str) {
    if (str.length <= 1)
        return false;
    var hashtag = str.trim().split(' ').reduce(function (hash, cur) {
        hash = hash + cur[0].toUpperCase() + cur.substring(1);
        return hash;
    }, "#");
    return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}
function IPV4Validator(str) {
    var e_14, _a;
    var numbers = str.split('.');
    if (numbers.length !== 4)
        return false;
    try {
        for (var numbers_1 = __values(numbers), numbers_1_1 = numbers_1.next(); !numbers_1_1.done; numbers_1_1 = numbers_1.next()) {
            var num = numbers_1_1.value;
            var test = parseInt(num);
            if (num < 1 || num > 255 || test === num.toString()) {
                return false;
            }
        }
    }
    catch (e_14_1) { e_14 = { error: e_14_1 }; }
    finally {
        try {
            if (numbers_1_1 && !numbers_1_1.done && (_a = numbers_1.return)) _a.call(numbers_1);
        }
        finally { if (e_14) throw e_14.error; }
    }
    return true;
}
