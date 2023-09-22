function pets(input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let totalSum = ((dogFood * 2.5) + (catFood * 4));
    console.log(totalSum + " lv.")
}

pets([3,2])