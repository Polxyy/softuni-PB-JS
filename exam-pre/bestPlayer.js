function player(input){
    let index = 0;
    let bestPlayer;
    let bestGoals = -1;
    let hattrick = false;
    while (input[index] != "END"){
    let playerName = input[index];
    let playerGoals = Number(input[index + 1]);
    if(playerGoals>bestGoals){
        bestPlayer = playerName;
        bestGoals = playerGoals;
        if(playerGoals>2){
            hattrick=true;
        }
    }
    index+=2;
    }
    console.log(bestPlayer + " is the best player!");
    if(hattrick)console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    else console.log(`He has scored ${bestGoals} goals.`);
}

player(["Silva","5","Harry Kane","10","Messi","3","END"])