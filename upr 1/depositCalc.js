function a(input){
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let anualInterest = Number(input[2]);
    // cума = депозирана сума + срок на депозита * 
    //((депозирана сума * годишен лихвен процент ) / 12)
    let sum = deposit + term * ((deposit * (anualInterest/100)) /12);
    console.log(sum);
}

a(["200","3","5.7"])