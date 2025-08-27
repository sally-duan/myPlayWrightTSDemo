const {
  sumTo,
  reverseString,
  reverseString2,
  FibonacciTest,
  FactoriaTest,
  Power,
  ArraySum,
  numberRange,
  flattenArray,
  permutation,
} = require("./myrecursion.js");

test("test sumTo", () => {
  let result = sumTo(5);
  expect(result).toEqual(15);
});

test("test reverse string", () => {
  let result = reverseString("hello");
  expect(result).toEqual("olleh");
});

test("test reverse string 2", () => {
  let result = reverseString2("hello");
  expect(result).toEqual("olleh");
});

test("test Fibonacci", () => {
  let result = FibonacciTest(4);
  expect(result).toEqual(3);

  let result2 = FibonacciTest(6);
  expect(result2).toEqual(8);

  let result3 = FibonacciTest(10);
  expect(result3).toEqual(55);
});

test("Array sum", () => {
  let result = ArraySum([1, 2, 3, 4, 5]);
  expect(result).toEqual(15);
});

test("flatten array test", () => {
  let result = flattenArray([1, 2, [3, [4, 5]]]);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test("test power", () => {
  let result = Power(2, 3);
  expect(result).toEqual(8);

  let result2 = Power(3, 3);
  expect(result2).toEqual(27);

  let result3 = Power(5, 2);
  expect(result3).toEqual(25);
});

test("test number range", () => {
  let result = numberRange(1, 5);
  expect(result).toEqual([1, 2, 3, 4, 5]);

  let result3 = numberRange(7, 7);
  expect(result3).toEqual([7]);

  let result2 = numberRange(3, 10);
  expect(result2).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
});

test("test Factoria", () => {
  let result = FactoriaTest(4);
  expect(result).toEqual(24);

  let result2 = FactoriaTest(5);
  expect(result2).toEqual(120);

  let result3 = FactoriaTest(2);
  expect(result3).toEqual(2);
});
permutation;

test("permutation", () => {
  console.time("permutationTime");
  let result = permutation("abcdefg");

  console.timeEnd("permutationTime");
  console.log(result);
});
