type Person2Type = {
  name: string;
  age: number;
  address?: string;
};

type PersonNameType = Person2Type["name"];
const firstName2: PersonNameType = "kyra";

// penggunaan keyof dengan index access
type Person3Type = {
  // T
  name: string;
  age: number;
  address?: string;
};

type PersonKeysType = keyof Person3Type; // K

type PersonPropertyType = Person3Type[PersonKeysType];

function getTypePropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person2: Person3Type = {
  name: "kyra",
  age: 20,
};

const personName = getTypePropertyValue(person2, "name");
