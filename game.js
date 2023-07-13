function getComputerChoice(){
    let options = ["Rock","Paper","Scissors"]
    let choice = Math.floor(Math.random()*3);
    let ans = options[choice];
    return ans;
}

function result(cSelect,uSelect){
    if((cSelect === "Rock" && uSelect == "scissors" )||(cSelect === "Scissors" && uSelect === "paper")  || (cSelect === "Paper" && uSelect === "rock")){
        
    }
}


function game(){
    let ans = getComputerChoice();
    console.log(ans);
}

game()