const spaces = Array.from(document.querySelectorAll(".space"));
const button = document.querySelector("button");
const trun = document.querySelector("#trun");


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
        }
        else if(spaces[winCondition[i][0]].innerHTML== "O" && spaces[winCondition[i][1]].innerHTML== "O" && spaces[winCondition[i][2]].innerHTML== "O" ){
            console.log("O is Win");
            Owin = true;
        }
    }
   
    console.log("This Function is Running")
}

let xTurn = true;

const write = (e)=>{

    if(xTurn){
        e.target.innerHTML="X";
        xTurn = false;
        trun.innerHTML = "This is Player2"

    }
    else{
        e.target.innerHTML="O";
        xTurn = true;
        trun.innerHTML = "This is Player1"
    }
    checkWinner()
    
};

const reset = ()=>{
    spaces.forEach(
        (value)=>{
            value.innerHTML = " "
        }
    )
}

spaces.forEach(
    (space)=>{
        space.addEventListener("click",write
)});

button.addEventListener("click",reset)