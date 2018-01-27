//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

// reduce?
// take in numBelow
// for loop up to num below
// if num is multOf
// ** add multOf input
// add to reducer
// return reducer

const multipleArray = (numBelow) => {
    let i = 1;
    let multipleArray = [];
    while (i < numBelow) {
      if (!(!!(i % 5)) || !(!!(i % 3))) {
        // this is very ugly
        multipleArray.push(i)
      }
      i++;
    }
    return multipleArray;
  }
  
  const sumOfMultiples = (numBelow) => {
    return multipleArray(numBelow).reduce((accu, currentValue, index, array) => {
      accu += currentValue;
      return accu;
    }, 0);
  }; 
  
  console.log(sumOfMultiples(10000000))