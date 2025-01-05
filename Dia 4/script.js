const CToF = (temp) => (temp * 9/5) + 32

function FToC(temp) {
  return (temp - 32) * (5/9)
}

console.log(CToF(100))
console.log(FToC(212))

