// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const pyTrip1K = () => {
    let a = 1;
    let b;
    let c;
    let result;
    let pyTrips = [];
    while (a < 1000 && !result) {
      for(let b = a + 1; b < 1000 - a; b++) {
        c= Math.sqrt((a*a) + (b*b));
        let sum = a + b + c;
        if (sum === 1000) {
          result = [a, b, c]
        }
      }
      a++;
    }
    return (result[0] * result[1] * result[2]);
  }
  
  pyTrip1K()