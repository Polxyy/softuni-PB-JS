function calc(input){
    let h = Number(input[0]);
    let w = Number(input[1]);
    let l = Number(input[2]);
    let percentage = Number(input[3]);
    let totalVolumeInLiters = (h*w*l) * 0.001;
    let neededVolume = totalVolumeInLiters * (1-(percentage/100));
    console.log(neededVolume);
}

calc(["85","75","47","17"])