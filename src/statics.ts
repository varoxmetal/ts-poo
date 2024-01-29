console.log('Math.PI', Math.PI)

class MyMath {
  static readonly PI = 3.14

  static max(...numbers : number[]) {
    console.log(numbers)
    return numbers.reduce((max, item) => max >= item ? max : item)
  }
}

console.log('MyMath.PI', MyMath.PI)
console.log(MyMath.max(3,-56,7,8,54,3,-65,7,7,45,-3,32))

