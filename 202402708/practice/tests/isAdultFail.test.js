const isAdult = require("../src/isAdult");

test("잘못된 나이가 들어오면 에러가 발생한다", () => {
  expect(() => isAdult(-5)).toThrow();
});