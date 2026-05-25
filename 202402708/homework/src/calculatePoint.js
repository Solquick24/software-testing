function calculatePoint(price, isVip = false) {
  if (price === null || typeof price !== "number" || isNaN(price)) {
    throw new Error("invalid input");
  }

  const rate = isVip ? 0.02 : 0.01;
  let point = price * rate;

  if (point > 5000) {
    point = 5000;
  }

  return point;
}

module.exports = calculatePoint;