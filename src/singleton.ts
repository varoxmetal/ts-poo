export class MyService {

  static instance: MyService | null = null

  private constructor(private _name: string){}

  getName() {
    return this._name
  }

  static create(name: string) {
    if(MyService.instance === null) {
      console.log('deberia entrar una sola vez')
      MyService.instance = new MyService(name)
    }
    return MyService.instance
  }
}

const myservice1 = MyService.create('service 1')
console.log(myservice1.getName())

const myservice2 = MyService.create('service 2')
console.log(myservice2.getName())

console.log(myservice1 === myservice2);
