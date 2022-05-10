console.log("고급웹프로그래밍 로그");

const inputBalance = document.querySelector("#inpBalance");
const inputRange = document.querySelector("#inpRange");
const selRangeUnit = document.querySelector("#selRangeUnit");
const inputInterest = document.querySelector("#inpInterest");
const btnCalc = document.querySelector("#btnCalc");
// btnCalc.addEventListener("click", calcSimpleInterest);
btnCalc.addEventListener("click", onBtnCalculation);

function onBtnCalculation() {
  const balance = Number(inputBalance.value);
  const interest = Number(inputInterest.value);
  const range = Number(inputRange.value);

  // 단리 계산 시 결과
  const simpleInterestResult = calcSimpleInterest(balance, interest, range);
  console.log('단리 적용 후 원금변화', simpleInterestResult);
  // 복리 계산 시 결과
  const compoundInterestResult = calcCompoundInterest(balance, interest, range);
  console.log('복리 적용 후 원금변화', compoundInterestResult);
  
}