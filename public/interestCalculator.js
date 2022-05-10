// writer: 박종진
// 복리계산 함수
// param: balance (원금), interest (이율), range (횟수)
// return: 복래계산결과 반환, type uinit
function calcCompoundInterest(balance, interest, range) {
  // 복리 계산 예제
  // 1회: 100 * 1.1 = 110
  // 2회: 110 * 1.1 = 121
  // 3회: 121 * 1.1 = Math.floor(133.10000000000002)

  for (let i = 0; i < range; i++) {
    balance += balance * (interest / 100);
  }

  return Math.floor(balance);
}

// writer: 박종진
// 단리계산 함수
// param: balance (원금), interest (이율), range (횟수)
// return: 단리계산결과, type uinit
function calcSimpleInterest(balance, interest, range) {
  // 순수 이자
  const pureInterest = balance * (interest / 100) * range;

  return balance + pureInterest;
}

exports.calcCompoundInterest = calcCompoundInterest;
exports.calcSimpleInterest = calcSimpleInterest;