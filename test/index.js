const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  it("15で割り切れるならFizzBuzz", () => {
    assert(fizzbuzz(30) === "FizzBuzz");
  });

  it("3で割り切れるならFizz", () => {
    assert(fizzbuzz(9) === "Fizz");
  });

  it("5で割り切れるならBuzz", () => {
    assert(fizzbuzz(10) === "Buzz");
  });

  it("3でも5でも割り切れないなら値を返す", () => {
    assert(fizzbuzz(7) === "7");
  });
});
