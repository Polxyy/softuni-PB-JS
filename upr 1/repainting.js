function paint(input){
    let nylon = Number(input[0])+2;
    let paint = Number(input[1])*1.10;
    let paintThinner = Number(input[2]);
    let workHours = Number(input[3]);
    let totalMaterials = ((nylon*1.5) + (paint*14.50) + (paintThinner*5) + 0.4);
    let workers = totalMaterials * 0.3 * workHours;
    let sum = totalMaterials + workers;
    console.log(sum);
}

paint(["10","11","4","8"])