function calcSanta(input){
    let timeAway = Number(input[0]);
    let foodLeft = Number(input[1]);
    let firstDeer = Number(input[2]);
    let secondDeer = Number(input[3]);
    let thirdDeer = Number(input[4]);
    let totalFoodDeer = (timeAway * firstDeer) + (timeAway * secondDeer) + (timeAway * thirdDeer);
    if (totalFoodDeer < foodLeft){
        console.log(Math.floor(foodLeft - totalFoodDeer) + " kilos of food left.");
    }
    else if(totalFoodDeer > foodLeft){
        console.log(Math.ceil(totalFoodDeer-foodLeft) + " more kilos of food are needed.")
    }
}

calcSanta(["5","10","2.1","0.8","11"])