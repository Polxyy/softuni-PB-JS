function architect(input){
    let name = input[0];
    let amount = Number(input[1]);
    let time = amount * 3;
    console.log(`The architect ${name} will need ${time} hours to complete ${amount} project/s.`)
}

architect(["George","5"])