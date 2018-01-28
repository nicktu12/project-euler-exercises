// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const findPrimes = (numUpTo) => {
    const primeArray = [];
    for (let i = 2; i < numUpTo; i++) {
        if (isPrime(i)) {
            primeArray.push(i)
        }
    }
    return primeArray
  }
  
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}

const adder = (arrayToBeAdded) => {
    var total=0;
        for (var i in arrayToBeAdded) { total += arrayToBeAdded[i]; }
    return total;
}


console.log(adder(findPrimes(2000000)))