const myString = "hello";
const myNumber = 123;
const myObj = { name: "kyra", age: 25 };

type StringType = typeof myString;
const string2: StringType = "hello";

type NumberType = typeof myNumber;
const number2: NumberType = 123;

function greet(person: typeof myObj) {
  console.log(`hello ${person.name}`);
}

// batasan typeof
// 1. untuk tipe data primitif akan menghasilkan literal type
// 2. untuk tipe data non-primitif akan menghasilkan type sesuai bentuknya
