function asd(input){
    let pencils = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);
    let sum = (pencils * 5.8) + (markers*7.2) + (detergent * 1.2);
    let total = sum * ((100-discount)/100);
    console.log(total);
}

asd(["2","3","4","25"])