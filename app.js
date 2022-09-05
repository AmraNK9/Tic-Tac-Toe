

const spaces = Array.from(document.querySelectorAll(".space"));
const button = document.querySelector("button");
const trun = document.querySelector("#trun");
const overlay = document.querySelector(".winner-container");
const winner = document.querySelector('#winner');

overlay.style.zIndex = "0"
//function setup
//0 3 6
//1 4 7
//2 5 8
const winCondition = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
]
let Xwin = false;
let Owin = false;
let checkEnd = [];
const checkWinner = ()=>{
    for(let i=0;i<winCondition.length;i++){

        if(spaces[winCondition[i][0]].innerHTML== "X" && spaces[winCondition[i][1]].innerHTML== "X" && spaces[winCondition[i][2]].innerHTML== "X"  ){
            console.log("X is Win");
            Xwin = true;
            if(Xwin){
                for (let r = 0; r<3;r++){
                    spaces[winCondition[i][r]].style.backgroundColor = "Green";
                    console.log(  spaces[winCondition[i][r]]);
                }
                
                overlay.style.zIndex = "9";
                winner.innerHTML = `${player2} is Winner`;
            }
        }
        else if(spaces[winCondition[i][0]].innerHTML== "O" && spaces[winCondition[i][1]].innerHTML== "O" && spaces[winCondition[i][2]].innerHTML== "O" ){
            console.log("O is Win");
            Owin = true;
            if(Owin){
                for (let r = 0; r<3;r++){
                    spaces[winCondition[i][r]].style.backgroundColor = "Green";
                    console.log(  spaces[winCondition[i][r]]);
                }
                overlay.style.zIndex = "9";
                winner.innerHTML = `${player1} is Winner`;
            }
        }
    }
    if(checkEnd.length == 9){
        winner.innerHTML = "The End";

    }
    console.log("This Function is Running")
}

let xTurn = true;
let player2 = localStorage.getItem("player1")||"Nay Myo Thant"
let player1 =localStorage.getItem("player2")|| "Ning Sian Kim"
trun.innerHTML = ` ${player1}`
const write = (e)=>{

    if(xTurn){
        e.target.innerHTML="X";
        xTurn = false;
        trun.innerHTML = ` ${player2}`

    }
    else{
        e.target.innerHTML="O";
        xTurn = true;
        trun.innerHTML = ` ${player1}`
    }
    e.target.removeEventListener("click",write);
    checkEnd.push("NN")
    checkWinner();
    
};

const reset = ()=>{
    spaces.forEach(
        (value)=>{
            value.innerHTML = " ";
             Xwin = false;
             Owin = false;
             value.style.backgroundColor = "red"

        }
    )
    overlay.style.zIndex = "0";
    winner.innerHTML = "";
    checkEnd = [];
    spaces.forEach(
        (space)=>{
            space.addEventListener("click",write
    )});
}

spaces.forEach(
    (space)=>{
        space.addEventListener("click",write
)});

button.addEventListener("click",reset);