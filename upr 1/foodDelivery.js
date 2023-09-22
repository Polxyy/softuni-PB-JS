function deliver(input){
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegetarian = Number(input[2]);
    let sum = (chicken * 10.35) + (fish*12.4) + (vegetarian*8.15);
    let total = sum + (sum*0.2) + 2.5;
    console.log(total);
}

deliver(["2","4","3"])