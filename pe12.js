const GetTriangleNumber = index => ( (index * (index + 1)) / 2)

const GetDivisors = dividend => {
    let divisors = [] //dividend and 1 always divide
    for(let i = 1; i <= Math.sqrt(dividend); i++) {
        if(dividend % i === 0) {
            divisors.push(i)
            divisors.push(dividend/i)
        }
    }
    divisors.sort((a,b) => a-b)
    return divisors
}

const GetFirstTriangleNumberWithOver = divisorCount => {
    let candidate = 1
    let triangle = GetTriangleNumber(candidate)
    while(GetDivisors(triangle).length < divisorCount) {
        candidate ++
        triangle = GetTriangleNumber(candidate)
    }
    return triangle
}

console.log(GetFirstTriangleNumberWithOver(500))