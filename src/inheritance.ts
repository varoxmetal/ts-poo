export abstract class Animal {
  constructor(private _name: string){}

  move() {
    console.log('moving')
  }

  greeting() {
    return `Hello I am ${this._name}`
  }
}

export class Dog extends Animal {
  constructor(
    _name: string,
    public _owner: string) {
      super(_name)
    }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('Woof!');

    }
  }
}

/*const tom = new Animal('Tom')
tom.move()
console.log(tom.greeting())*/

const cheis = new Dog('Cheis', 'Varox')
cheis.move()
console.log(cheis.greeting())
cheis.woof(5)
console.log(cheis._owner)
