class Person {
  name: string;
  surname: string;
  readonly id: number;
  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
    this.id = Math.random() * 10;
  }
}

const person = new Person("Santiago", "Cubas")
