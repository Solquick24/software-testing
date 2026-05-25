const validateLogin = require("../src/validateLogin");

test("성공 여부 확인", () => {
  const result = validateLogin({
    email: "test@test.com",
    password: "1234",
  });
  expect(result.success).toBe(true);
});