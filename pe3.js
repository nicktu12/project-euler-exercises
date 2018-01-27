// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// find all factors
// for loop, if num modulo i === 0, it is a factor
// for each factor, if any num i between 1 and factor has modulo 0
// return largest factor

const findFactors = (num) => {
    let factors = [];
    for (let i = 0; i <= num; i++) {
      num % i === 0 ? factors.push(i) : null
    }
    return returnLargest(getPrimes(factors));
  };
  
  const getPrimes = (array) => {
    let primes = [];
    return array.filter(num => {
      for (let i = 2; i <= num - 1; i++) {
        if (num % i === 0) {
          return false
        }
      }
      return true
    })
  };
  
  const returnLargest = (array) => {
    return array[array.length - 1]
  };
  
  console.log(findFactors(10000000000000))