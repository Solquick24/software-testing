function calculatePoint(price, isVip = false) {
  // 숫자 타입만 허용
  if (typeof price !== "number" || price === null) {
    throw new Error("유효하지 않은 입력입니다. 숫자만 허용됩니다.");
  }

  const rate = isVip ? 0.02 : 0.01;
  const point = price * rate;

  // 최대 5000 제한
  return Math.min(point, 5000);
}

module.exports = calculatePoint;