const inputBalance = document.querySelector("#inputBalance");
const inputRange = document.querySelector("#inputRange");
const inputInterest = document.querySelector("#inputInterest");
const btnCalc = document.querySelector("#btnCalc");
// btnCalc.addEventListener("click", calcSimpleInterest);
btnCalc.addEventListener("click", onBtnCalculation);
window.addEventListener("load", onLoad);

function onLoad() {
  console.log("페이지 로드 완료");

  fetch("http://localhost:4000/my")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      const { name, age, birth } = myJson;
      
      document.querySelector(
        "#txtMyInfo"
      ).innerHTML = `이름:${name}, 나이: ${age}, 생년월일: ${birth}`;
      console.log(JSON.stringify(myJson));
    })
    .catch((e) => {});
}

function onBtnCalculation() {
  const balance = Number(inputBalance.value);
  const interest = Number(inputInterest.value);
  const range = Number(inputRange.value);

  // 단리 계산 시 결과
  const simpleInterestResult = calcSimpleInterest(balance, interest, range);
  console.log("단리 적용 후 원금변화", simpleInterestResult);
  // 복리 계산 시 결과
  const compoundInterestResult = calcCompoundInterest(balance, interest, range);
  console.log("복리 적용 후 원금변화", compoundInterestResult);

  document.querySelector("#txtResult").innerHTML = "복리 계산 완료";
}
