// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const sequenceCounter = (startingNum, counter = 1) => {
  if (startingNum === 1) {
    return counter;
  }
  if (startingNum % 2 === 0) {
    counter++;
    return sequenceCounter(ifEvenDivideByTwo(startingNum), counter);
  } else {
    counter++;
    return sequenceCounter(ifOddTimesThreePlusOne(startingNum), counter)
  }
}

const ifEvenDivideByTwo = (evenNum) => evenNum / 2;

const ifOddTimesThreePlusOne = (oddNum) => 3 * oddNum + 1;

const longestChain = () => {
  const start = clock();
  let numWithLongestChain;
  let longestChain = 0;
  for (let i = 1; i < 1000000; i++) {
    if (sequenceCounter(i) > longestChain) {
      longestChain = sequenceCounter(i);
      numWithLongestChain = i;
    }
  }
  const duration = clock(start);
  return `The number with the largest chain is ${numWithLongestChain}, calculated in ${duration} ms.`;
}

function clock(start) {
  if ( !start ) return process.hrtime();
  var end = process.hrtime(start);
  return Math.round((end[0]*1000) + (end[1]/1000000));
}


console.log(longestChain())
