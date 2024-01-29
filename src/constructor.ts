export class MyDate {

  constructor(
    private year : number = 1984,
    private month : number = 4,
    private day : number = 10) {}

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

const mydate2 = new MyDate()
console.log(mydate2)
console.log(mydate2.printFormat());

