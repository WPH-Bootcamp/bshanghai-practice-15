type PersonType = {
  name: string;
  age: number;
  address?: string;
};

type PersonKeys = keyof PersonType; // name | age | address

function getPropertyValue(obj: PersonType, key: PersonKeys) {
  return obj[key];
}

const personVariable: PersonType = {
  name: "kyra",
  age: 20,
};

const firstName = getPropertyValue(personVariable, "name");
// const firstName = personVariable.name;

// gabung dengan index signature
type DataListType = {
  [index: number]: string;
  length: number;
};

type DataListKeys = keyof DataListType;

function getItem(
  list: DataListType,
  key: DataListKeys
): string | number | undefined {
  return list[key];
}

const myList: DataListType = ["apple", "banana"];
myList.length = 2;

const firstItem = getItem(myList, 0);
