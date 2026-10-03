document.getElementById("rollDice").addEventListener("click",function(){
let randomDieNumber = Math.ceil(Math.random()*6)
document.getElementById("dieText").innerText= randomDieNumber
let dieImg = "die"+randomDieNumber+".png"
console.log(dieImg)
})


//WORKING WITH A KEYBOARD EVENTS
//document.getElementById("usernameText").inner


document.getElementById("box").style.backgroundColor = "green"
document.getElementById("show").classList.add("box1")
console.log
document.getElementById("box").style.backgroundColor = "blue"
document.getElementById("Hide").classList.add("box2")

//ADDING A BLA BLA  TO JS FILE