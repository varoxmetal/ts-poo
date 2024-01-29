export class MyDate {

  constructor(
    private _year : number = 1984,
    private _month : number = 4,
    private _day : number = 10) {}

  printFormat() {
    return `${this.addPadding(this._day)}/${this.addPadding(this._month)}/${this._year}`
  }

  get day() {
    return (this.addPadding(this._day))
  }

  get month() {
    return (this._month)
  }

  get year() {
    return (this._year)
  }

  get isLeapYear() : boolean {
    if(this._year % 400 === 0) return true
    if(this._year % 100 === 0) return false
    return this.year % 4 === 0
  }

  set month(value: number) {
    if (value >= 1 && value <= 12) {
      this._month = value
    }
    else {
      throw new Error('Month out of range')
    }
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
mydate.month = 4
console.log(mydate)
mydate.month = 20
console.log(mydate);



