//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// find fibonacci numbers
// if even, reduce and sum those values

const findFibs = (max) => {
    const myFibs = [1,2,3];
    while (myFibs[myFibs.length-1] < max) {
      let nextFib = myFibs[myFibs.length - 2] + myFibs[myFibs.length - 1];
      myFibs.push(nextFib);
    }
    return myFibs;
  }
  
  const sumOfEven = (fibArray) => {
    const onlyEvens = fibArray.filter(num => !(num % 2));
    return onlyEvens.reduce((accu, currentValue, index, array) => {
      accu += currentValue;
      return accu;
    }, 0)
  };
  
  console.log(sumOfEven(findFibs(4000000)))