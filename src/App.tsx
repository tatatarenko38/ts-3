import React from "react";

import "./App.css";

interface Person {
  name: string;
  age: number;
}

// функція для перевірки типу даних та
//наявність необх властивостей
// true або false
function isPerson(obj: any): obj is Person {
  return typeof obj === "object" && "name" in obj && "age" in obj;
}

function greet(person: any) {
  if (isPerson(person)) {
    alert(`Hello, ${person.name}`);
  } else {
    alert("Invalid person object.");
  }
}

greet({ name: "Tata", age: 34 });

///////////////////////////////////////////////////////////////
//

interface Car {
  type: string;
  model: string;
  year: number;
}

function isCar(obj: any): obj is Car {
  if (typeof obj !== "object") return false;

  if ("type" in obj === false || obj.type === "custom") return false;

  if ("model" in obj === false || obj.model === "BMW") return false;

  if ("year" in obj === false || obj.year < 2000) return false;

  return true;
}

function getCar(obj: any) {
  if (isCar(obj)) {
    alert(obj.model);
  } else {
    alert("not car");
  }
}

getCar({ type: "car", model: "BMW", year: 1999 });

getCar({ type: "car", model: "Audi", year: 2000 });

/////////////////////////////////////////////////////////////
//  власний тип данних type

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 3456789,
  name: "Vasya",
};

////////////////////////////////////////////////////////////
///  об'єднання type - комбінування &

type Circle = {
  radius: number;
};

type Rectangle = {
  width: number;
  height: number;
};

// // Circle або Rectangle
// type Shape = Circle | Rectangle;

// const object: Shape = { radius: 10, height: 10, width: 40 };

// // перевірка
// function getObject(object: Shape) {
//   if ("radius" in object) {
//     console.log(object.radius);
//   }

//   if ("width" in object) {
//     console.log(object.width);
//   }
// }

//getObject(object);

///////////////////////////////////////////////////////////
// Circle та Rectangle   &
type Shape = Circle & Rectangle;

const object: Shape = { radius: 10, height: 10, width: 40 };

console.log(object.height);

//////////////////////////////////////////////////////////////
// Generic
//загальні типи для функцій, класів та ін. конструкцій

class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

let numberBox = new Box<number>(10);
let stringBox = new Box<string>("TypeScript");

/////////////////////////////////////////////////////////////////
//  Conditional
//  умовні типи - спосіб визначення типів на основі умов
// extends - слово для створення

type Users = {
  id: number;
  email: string;
};

type Robot = {
  code: number;
  version: string;
};

//по факту Users і додатк поле role
type Admin = Users & {
  role: number;
};

// певний тип - перевіряє чи є він Users або Admin
//якщо ні - повертає  Robot
//якщо так - то повертає цей тип (Т)
type Entity<T> = T extends Users | Admin ? T : Robot;

// Admin - спрацює
const contentEditor: Entity<Admin> = {
  id: 3456,
  email: "test@mail.com",
  role: 2,
};

//невідомий  - буде помилка - дало type Robot(code: number;
// version: string;)
// const unknowUser: Entity<{ test: 123 }> = {
//   id: 3656,
//   email: "test@mail.com",
//   role: 2,
// };

////////////////////////////////////////////////////////////////
// Mixin

class Counter {
  count: number = 0;

  increment() {
    this.count++;
  }
}

//параметр Т, який повинен бути класом, в якому має бути
//реалізован метод increment та властивість count
function IncrementMixin<
  T extends new (...args: any[]) => {
    increment: (...args: any[]) => any;
    count: number;
  }
>(Base: T) {
  // повертає новий клас Base ( а Base це Т, який прийшов в аргументі )
  //додаємо incrementAndLog - метод, який використовує
  //this.increment() та count- як ми визначили в умові(180,181)
  return class extends Base {
    incrementAndLog() {
      this.increment();
      console.log(`Count is now: ${this.count}`);
    }
  };
}

//extends new (...args: any[]) - це анонімус клас
const CountingCounter = IncrementMixin(Counter);

const counter = new CountingCounter();
counter.incrementAndLog();

function App() {
  return (
    <div className="App">
      <header className="App-header">hello, {user.name}</header>
    </div>
  );
}

export default App;
