function books(input){
    let pages = Number(input[0]);
    let ppH = Number(input[1]);
    let days = Number(input[2]);
    let hpd = (pages / ppH) / days;
    console.log(hpd);
}

books(["432 ","15 ","4"])