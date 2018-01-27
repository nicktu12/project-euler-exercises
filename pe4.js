// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// to check if palindrome, see if string === string.reverse()
// find all palindromes of (900 through 999) times (900 through 999), find largest

const largestPal = () => {
    let palArray = [];
    for (let i = 900; i <= 999; i++) {
      for (let j = 900; j <= 999; j++) {
        let res = (i * j).toString();
        if (res === [...res].reverse().join('')) {
          palArray.push(res)
        }
      }
    }
    return palArray
  }
  
  console.log(largestPal()[largestPal().length - 1])