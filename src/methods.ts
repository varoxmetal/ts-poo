export class MyDate {
  year : number
  month: number
  day: number
  constructor(year : number, month : number, day : number) {
    this.year = year
    this.month = month
    this.day = day
  }
  printFormat() {
    return `${this.day}/${this.month}/${this.year}`
  }
}

const mydate = new MyDate(2022,2,20)
console.log(mydate)
console.log(mydate.printFormat());

