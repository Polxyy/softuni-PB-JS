function pin(input){
    let maxFirstNum = Number(input[0]);
    let maxSecondNum = Number(input[1]);
    let maxThirdNum = Number(input[2]);
    
    function isPrime(number) {
        if (number <= 1) {
          return false;
        }
      
        if (number <= 3) {
          return true;
        }
      
        if (number % 2 === 0 || number % 3 === 0) {
          return false;
        }
      
        for (let i = 5; i * i <= number; i += 6) {
          if (number % i === 0 || number % (i + 2) === 0) {
            return false;
          }
        }
      
        return true;
      }


    index =0 ;
    let validFirst= [];
    let validSecond= [];
    let validThird= [];
  for (let i = 1; i <= maxFirstNum; i++) {

    if (i % 2 == 0) {
      validFirst[index] = i;
      index++;
    }
  }

  let ind2 = 0;
  for (let x = 2; x > 1, x < 6, x <= maxSecondNum; x++) {
    if (isPrime(x)) { validSecond[ind2] = x; ind2++ }
  }
  6
  let ind3 = 0;
  for (let d = 1; d <= maxThirdNum; d++) {

    if (d % 2 == 0) {
      validThird[ind3] = d;
      ind3++;
    }
  }

  for (let i = 0; i < validFirst.length; i++) {
    for (let j = 0; j < validSecond.length; j++) {
      for (let k = 0; k < validThird.length; k++) {
        const threeDigitNumber = validFirst[i] + " " + validSecond[j] + " " + validThird[k];
        console.log(threeDigitNumber);
      }
    }
  }

}

pin(["8","2","8"])