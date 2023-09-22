function final(input){
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = (input[2]);
    let place = (input[3]);

    let isSummer = true; 
    let isBulgaria = true; 

    if (place != "Bulgaria") isBulgaria = false;
    if (season != "summer" ) isSummer = false;

    let percentage;

    if(isBulgaria && isSummer) percentage = 0.05;else if(isBulgaria && !isSummer) percentage = 0.08;
    else if(!isBulgaria && isSummer)percentage = 0.1; else if(!isBulgaria && !isSummer) percentage = 0.15;
    

    let awardedPrize;


    if(isBulgaria) awardedPrize = (dancers * points) * (1 -percentage);
    else if(!isBulgaria) awardedPrize = ((dancers * points) * 1.5)* (1- percentage);

    let priceCharity = awardedPrize * 0.75;
    let moneyPerDancer = (awardedPrize * 0.25)/dancers;

    console.log("Charity - " + priceCharity.toFixed(2));
    console.log("Money per dancer - " + moneyPerDancer.toFixed(2));
}

final(["25","98","winter","Bulgaria"])