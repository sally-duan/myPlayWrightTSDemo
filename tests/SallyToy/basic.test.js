const {
  helloworld,
  getSum,
  titleCase,
  calculator,
  countOccurence,
  intersection,
  removeDup,
  FindMissingLetter,
  FizzBuzz,
  areCharsUnique,
  firstNonRepeatChar,
  firstNonRepeatCharMap,
  diceGameSimulation,
  largestNumber,
  formatPhoneNumber,
  validateEmail,
  validateEmail2,
} = require("./basic.js");

describe("basic test", () => {
  it("returning 'hello world' as a string", () => {
    const result = helloworld();
    expect(result).toBe("Hello World");
  });

  it("returning the total sum", () => {
    const result = getSum(3, 5);
    expect(result).toBe(8);
  });

  it("validate email test", () => {
    const test = validateEmail("ab12@domain.com");
    expect(test).toBe(true);
    const test1 = validateEmail("ab12@domain.com");
    expect(test1).toBe(true);
    const test3 = validateEmail("a@b.co");
    expect(test3).toBe(false);
    const test4 = validateEmail("user@domain,com");
    expect(test4).toBe(false);
  });

  it("validate email test", () => {
    const test = validateEmail2("ab12@domain.com");
    expect(test).toBe(true);
    const test1 = validateEmail2("ab12@domain.com");
    expect(test1).toBe(true);
    const test3 = validateEmail2("a@b.co");
    expect(test3).toBe(true);
    const test4 = validateEmail2("user@domain,com");
    expect(test4).toBe(false);
  });

  it("remove dup", () => {
    const result = removeDup(["apple", "banana", "apple", "orange", "banana"]);
    expect(result).toEqual(["apple", "banana", "orange"]);
  });

  it("the biggest number is", () => {
    const result = largestNumber([4, 5, 7, 9, 11, 0, -2]);
    expect(result).toBe(11);
  });

  it("test fizzbuss", () => {
    const result = FizzBuzz([5, 15, 3, 22]);
    expect(result[0]).toBe("buzz");
    expect(result[3]).toBe("22");
  });

  it("how many times a char in a string ", () => {
    const times = countOccurence("hello", "l");
    expect(times).toBe(2);
  });

  it("Titel case test", () => {
    const name = titleCase("hello beautiful people here");
    expect(name).toBe("HBPH");
  });

  it("char unique test", () => {
    const name = areCharsUnique("abcefg");
    expect(name).toBe(true);
  });

  it("char unique test2", () => {
    const name = areCharsUnique("abcddefg");
    expect(name).toBe(false);
  });

  it("return first unique char test with object filling", () => {
    const name = firstNonRepeatChar("mmgzzta");
    expect(name).toBe("g");
  });

  it("return first unique char test with map", () => {
    const name = firstNonRepeatCharMap("mmgzzta");
    expect(name).toBe("g");
  });

  it("Find missing letter", () => {
    const result = FindMissingLetter(["a", "b", "c", "d", "f"]);
    console.log(result);
    expect(result).toEqual("e");
  });

  it("intersection test", () => {
    const common = intersection([1, 2, 3, 4, 4, 5], [4, 4, 5, 6, 7]);

    expect(common).toEqual([4, 5]);
  });

  it("diceGames test", () => {
    const result = diceGameSimulation(5);
  });

  it("phone number format", () => {
    const result = formatPhoneNumber([3, 4, 5, 6, 7, 8, 6, 5, 4, 3]);
  });

  it("test calculator", () => {
    const plusResult = calculator(3, 5, "+");
    expect(plusResult).toBe(8);
    const multiplyResult = calculator(3, 5, "*");
    expect(multiplyResult).toBe(15);
    const divisionresult = calculator(6, 2, "/");
    expect(divisionresult).toBe(3);
    expect(() => calculator(6, 2, ".")).toThrow("not covered");
  });
});
