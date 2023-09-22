function equip(input){
    let yearlyTax = Number(input[0]);
    let sneakers = yearlyTax * 0.6;
    let kit = sneakers * 0.8;
    let ball = kit / 4;
    let accesories = ball / 5;
    let sum = yearlyTax + sneakers + kit + ball + accesories;
    console.log(sum);
}

equip(["365"]);