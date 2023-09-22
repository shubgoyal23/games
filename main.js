const currentNumber = document.getElementById("currentNumber");
const numberHistory = document.getElementById("numberHistory");
const showNumbers = document.getElementById("showNumbers");
const HideNumbers = document.getElementById("HideNumbers");
const nextBtn = document.querySelector("#nextBtn");
const numberArr = [];

function clickHandler() {
  while (1) {
    if (numberArr.length == 91) {
      break;
    }
    let number = Math.round(Math.random() * (90 - 1 + 1) + 1);
    if (!numberArr.includes(number)) {
      numberArr.push(number);
      document.getElementById(number).style.backgroundColor = "#ffff00";
      //document.getElementById(number).style.color = "#c31432";
      currentNumber.innerText = number;
      break;
    }
  }
}numberHistory.style.display = "none";
function clickHandlershowNumbers() {
  if ((numberHistory.style.display == "block")) {
    numberHistory.style.display = "none";
    showNumbers.innerText = "Show All Numbers"
  }else{
    numberHistory.style.display = "block";
    showNumbers.innerText = "Hide Numbers"
    numberHistory.innerHTML = "";
    numberArr.map((item) => {
      let num = document.createElement("li");
      num.innerText = item;
      numberHistory.appendChild(num);
    });
  }
}

nextBtn.addEventListener("click", clickHandler);
showNumbers.addEventListener("click", clickHandlershowNumbers);