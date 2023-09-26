const numbersValue = document.querySelector(".cal");
const inputOutput = document.querySelector("#input");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const evalute = document.querySelector("#evalute");

function clickHandler(event){
    if(event.target.value != undefined){
        inputOutput.innerText += event.target.value 
    }
}

function calculationHandler(){
    let value = inputOutput.innerText;
    if (value.split("*") != value){
        let arr = value.split("*")
        let value1 = Number(arr[0])
        let value2 = Number(arr[1])
        inputOutput.innerText = `Ans: ${value1 * value2}`
    }
    else if (value.split("/") != value){
        let arr = value.split("/")
        let value1 = Number(arr[0])
        let value2 = Number(arr[1])
        inputOutput.innerText = `Ans: ${value1 / value2}`
    }
    else if (value.split("+") != value){
        let arr = value.split("+")
        let value1 = Number(arr[0])
        let value2 = Number(arr[1])
        inputOutput.innerText = `Ans: ${value1 + value2}`
    }
    else if (value.split("-") != value){
        let arr = value.split("-")
        let value1 = Number(arr[0])
        let value2 = Number(arr[1])
        inputOutput.innerText = `Ans: ${value1 - value2}`
    }
}
numbersValue.addEventListener("click", clickHandler);
evalute.addEventListener("click", calculationHandler);
clear.addEventListener("click", () => inputOutput.innerText = "");
backspace.addEventListener("click", () => inputOutput.innerText = (inputOutput.innerText).slice(0, (inputOutput.innerText).length - 1));