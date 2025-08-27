const {
  DoubleTheNumbers,
  DoubleTheNumbers2,
  OnlyEvenNumbers,
  SumOfEvenSquares,
  totalSales,
  HighestScoringWord,
  Anagram,
  Anagram2,
  AnagramBest,
  HashTagGenerator,
  IPV4Validator,
} = require("./myArray.js");

describe("Double the number ", () => {
  it("double the numbers test", () => {
    let original = [3, 4, 5, 6];
    let result = DoubleTheNumbers(original);
    expect(result).toEqual([6, 8, 10, 12]);
  });
});

describe("Double the number 2", () => {
  it("double the numbers test 2", () => {
    let original = [3, 4, 5, 6];
    let result = DoubleTheNumbers2(original);
    expect(result).toEqual([6, 8, 10, 12]);
  });
});

describe("only even number", () => {
  it("show even number", () => {
    let original = [3, 4, 5, 6];
    let result = OnlyEvenNumbers(original);
    expect(result).toEqual([4, 6]);
  });
});

describe("SumOfEvenSquares", () => {
  it("even number squred then added up", () => {
    let original = [3, 4, 5, 6];
    let result = SumOfEvenSquares(original);
    expect(result).toEqual(52);
  });
});

describe("IPV4 validator", () => {
  it("test ipv4 ", () => {
    let test = IPV4Validator("1.2.3.4");
    expect(test).toEqual(true);

    let test2 = IPV4Validator("1.2.3");
    expect(test2).toEqual(true);

    let test3 = IPV4Validator("123.045.067.089");
    expect(test3).toEqual(false);

    let test4 = IPV4Validator("1.2.3.4.5");
    expect(test4).toEqual(true);
  });
});

describe("HashTag Generator test", () => {
  it("Hashtag generator", () => {
    let test = HashTagGenerator("");
    expect(test).toEqual(false);
    let test1 = HashTagGenerator(
      "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWWWWnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
    );
    expect(test1).toEqual(false);
    let test2 = HashTagGenerator("JavaScript is awesome");
    expect(test2).toEqual("#JavaScriptIsAwesome");
  });
});

describe("total sales test", () => {
  it("The total sales number should be correct", () => {
    const products = [
      { name: "apple", price: 0.5, quantity: 10 },
      { name: "banana", price: 0.3, quantity: 20 },
      { name: "orange", price: 0.6, quantity: 15 },
    ];
    let salesNumber = totalSales(products);
    expect(salesNumber).toEqual(20);
  });
});

describe("Anagram test", () => {
  it("testing if two strings are anagram", () => {
    let result = Anagram("listen", "silent");
    expect(result).toEqual(true);

    let result2 = Anagram("astronomer", "moonstarer");
    expect(result2).toEqual(true);

    let result3 = Anagram("hello", "world");
    expect(result3).toEqual(false);
  });
});

describe("Anagram test 2", () => {
  it("testing if two strings are anagram 2", () => {
    let result = Anagram2("listen", "silent");
    expect(result).toEqual(true);

    let result2 = Anagram2("astronomer", "moonstarer");
    expect(result2).toEqual(true);

    let result3 = Anagram2("hello", "world");
    expect(result3).toEqual(false);
  });
});

describe("Anagram test best", () => {
  it("testing if two strings are anagram best", () => {
    let result = AnagramBest("listen", "silent");
    expect(result).toEqual(true);

    let result2 = AnagramBest("astronomer", "moonstarer");
    expect(result2).toEqual(true);

    let result3 = AnagramBest("hello", "world");
    expect(result3).toEqual(false);
  });
});

describe.only("password validator best", () => {
  it("testing if it is a valid password", () => {
    let password = "xx123$89";
    if (password.length < 8) return false;

    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    let match = password.match(pattern);
    if (match) {
      console.log("password matches the standard");
    } else {
      console.log("password does not match the standard");
    }
  });
});

describe("Car mileage test", () => {
  it("Car mileage test", () => {
    const cars = [
      { make: "toyota", model: "camry", year: 2020, milage: 30800 },
      { make: "honda", model: "civic", year: 2019, milage: 32000 },
      { make: "chevrolet", model: "impala", year: 2021, milage: 17500 },
      { make: "audi", model: "r8", year: 2020, milage: 13000 },
      { make: "tesla", model: "model 3", year: 2018, milage: 50000 },
    ];

    let avgMillage =
      cars.map((item) => item.milage).reduce((total, cur) => total + cur, 0) /
      cars.length;
    console.log(avgMillage);
    let highestMileage = Math.max(...cars.map((item) => item.milage));
    console.log(highestMileage);

    let lowestMileage = Math.min(...cars.map((item) => item.milage));
    console.log(lowestMileage);

    let totalMileage = cars
      .map((item) => item.milage)
      .reduce((total, cur) => total + cur, 0);
    console.log(totalMileage);
  });
});

describe("Highest score words", () => {
  it("find the word with highest number", () => {
    const sentences = [
      "man I need a taxi up to ubud",
      "what time are we climbing up the volcano",
      "take me to semynak",
    ];
    for (let i = 0; i < sentences.length; i++) {
      console.log(HighestScoringWord(sentences[i]));
    }
  });
});
