uScore = 0;
cScore = 0;

function getComputerChoice(){
    let options = ["rock","paper","scissors"]
    let choice = Math.floor(Math.random()*3);
    let ans = options[choice];
    return ans;
}

function result(cSelect,uSelect){
    if((cSelect === "rock" && uSelect === "scissors" )||(cSelect === "scissors" && uSelect === "paper")  || (cSelect === "paper" && uSelect === "rock")){
        let output = "You have lost this round! " + cSelect + " beats " + uSelect;
        cScore ++;
        return output;
    }
    else if((uSelect === "rock" && cSelect === "scissors" )||(uSelect === "scissors" && cSelect === "paper")  || (uSelect === "paper" && cSelect === "rock")){
        let output = "You have won this round! " + uSelect + " beats " + cSelect;
        uScore++;
        return output;

    }
    else if((cSelect === "rock" && uSelect === "rock" )||(cSelect === "scissors" && uSelect === "scissors")  || (cSelect === "paper" && uSelect === "paper")){
        let output = "It's a draw!";
        return output;
    }
    else{
        return "Wrong Input";
    }

}


function game(){
    for(let i = 0;i<5;i++){
        let cSelect = getComputerChoice();
        let uSelect = prompt("Enter Your choice!")
        uSelect = uSelect.toLowerCase();
        let output = result(cSelect,uSelect);
        alert(output);
        console.log("User Score : " + uScore + " CPU Score : " + cScore);
    }
    while(uScore === cScore){
        console.log("Suddent Death!");
        let cSelect = getComputerChoice();
        let uSelect = prompt("Enter Your choice!")
        uSelect = uSelect.toLowerCase();
        let output = result(cSelect,uSelect);
        alert(output);
    }
}

game()