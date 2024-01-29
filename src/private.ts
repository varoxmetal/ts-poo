export class MyDate {
  private year : number
  private month: number
  private day: number
  constructor(year : number, month : number, day : number) {
    this.year = year
    this.month = month
    this.day = day
  }
  printFormat() {
    return `${this.addPadding(this.day)}/${this.addPadding(this.month)}/${this.year}`
  }

  getDay() {
    return (this.addPadding(this.day))
  }

  getMonth() {
    return (this.addPadding(this.month))
  }

  private addPadding(value: number) {
    if(value < 10) {
      return `0${value}`
    }
    return `${value}`
  }
}

const mydate = new MyDate(2022,2,20)
console.log(mydate)
console.log(mydate.printFormat());
console.log(mydate.getDay())
console.log(mydate.getMonth());

