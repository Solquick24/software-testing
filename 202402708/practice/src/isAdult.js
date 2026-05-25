function isAdult(age) {
  if (typeof age !== "number" || age < 0) {
    throw new Error("invalid age");
  }
  return age >= 19;
}

module.exports = isAdult;