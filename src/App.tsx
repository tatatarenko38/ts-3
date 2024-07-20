import React from "react";

import "./App.css";

// function App() {
//   let age: number = 25;
//   let height: number = 1.75;

//   const name: string = "Vacya";
//   const message: string = "hello";

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{name} {message}</p>

//         <p>
//           {age} {height}
//         </p>
//       </header>
//     </div>
//   );
// }

//коли другий аргумент необов'язковий, а функція не стрілкова
// function getSpace2(
//   name: string,
//   callback: (value: string, test?: number) => string): string {
//   return callback(name);
// }

// function App() {
//   const getSpace = (num: number): string => `${num * 4}px`;

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{getSpace(4)}</p>
//       </header>
//     </div>
//   )
// }

// void - відсутність повернення значення функції
// function App() {
//   const handleChange = (value: number): void => {

//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>hrllo</p>
//       </header>
//     </div>
//   )
// }

//об'єкт
function App() {
  let data: object = {};

  let person: { name: string; age: number; isStudent: boolean } = {
    name: "fffff",
    age: 25,
    isStudent: true,
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{person.name}</p>
      </header>
    </div>
  );
}

export default App;
