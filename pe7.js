const primerA = () => {
    let primeArray = [];
    let i = 2;
    while (primeArray.length < 10001) {
      if (isPrimeA(i) === true) {
        primeArray.push(i)
      }
      i++;
    }
    console.log(primeArray)
    return primeArray[primeArray.length - 1]
  }
  
  const isPrimeA = (value) => {
      for(var i = 2; i < value; i++) {
          if(value % i === 0) {
              return false;
          }
      }
      return value > 1;
  }
  
  console.log(primerA())