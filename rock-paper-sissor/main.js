const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const sissor = document.querySelector("#sissor")
const results = document.querySelector("#results")
const compchoise = document.querySelector("#compchoise")

// rock if < 33, paper if < 66, sissor if < 99

function rockHandler(){
    const comp = Math.random() * 100
    if(comp < 33){
        results.innerHTML = "its tie"
        compchoise.innerHTML = "🪨"
    }else if(comp < 66){
        results.innerHTML = "comp wins"
        compchoise.innerHTML = "📃"
    }else{
        results.innerHTML = "you wins"
        compchoise.innerHTML = "✂️" 
    }
}
function paperHandler(){
    const comp = Math.random() * 100
    if(comp < 33){
        results.innerHTML = "you wins"
        compchoise.innerHTML = "🪨"
    }else if(comp < 66){
        results.innerHTML = "its tie"
        compchoise.innerHTML = "📃"
    }else{
        results.innerHTML = "comp wins"
        compchoise.innerHTML = "✂️" 
    }
}
function sissorHandler(){
    const comp = Math.random() * 100
    if(comp < 33){
        results.innerHTML = "comp wins"
        compchoise.innerHTML = "🪨"
    }else if(comp < 66){
        results.innerHTML = "you wins"
        compchoise.innerHTML = "📃"
    }else{
        compchoise.innerHTML = "✂️" 
        results.innerHTML = "its tie"
    }
}


rock.addEventListener("click", rockHandler)
paper.addEventListener("click", paperHandler)
sissor.addEventListener("click", sissorHandler)