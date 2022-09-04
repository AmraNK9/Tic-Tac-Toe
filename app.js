const spaces = Array.from(document.querySelectorAll(".space"));
const button = document.querySelector("button");
const trun = document.querySelector("#trun");
const overlay = document.querySelector(".winner-container");

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
            }
        }
    }
   
    console.log("This Function is Running")
}

let xTurn = true;
let player2 = "Nay Myo Thant";
let player1 = "Ning Sian Kim"

const write = (e)=>{

    if(xTurn){
        e.target.innerHTML="X";
        xTurn = false;
        trun.innerHTML = `This is ${player2}`

    }
    else{
        e.target.innerHTML="O";
        xTurn = true;
        trun.innerHTML = `This is ${player1}`
    }
    checkWinner()
    
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
    overlay.style.zIndex = "0"
}

spaces.forEach(
    (space)=>{
        space.addEventListener("click",write
)});

button.addEventListener("click",reset)