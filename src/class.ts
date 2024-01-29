const date = new Date()
const date2 = new Date(2020, 0, 20)

console.log(date)
console.log(date2);

export class MyDate {
  year : number
  month: number
  day: number
  constructor(year : number, month : number, day : number) {
    this.year = year
    this.month = month
    this.day = day
  }
}

const mydate = new MyDate(2021, 3, 10)
console.log(mydate);
