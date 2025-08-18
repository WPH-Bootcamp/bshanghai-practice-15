type Person = {
  readonly id: number;
  name: string;
  age: number;
};
const person: Person = {
  id: 1,
  name: "kyra",
  age: 20,
};
person.name = "john"; //tidak error
// person.id = 2 //error

// readonly pada array
type NumberArray = readonly number[];
const nums: NumberArray = [1, 2, 3];
// nums.push(4) //error
// nums[2] = 1
// nums[4] = 4

// operasi yang diizinkan array readonly
// map & reduce
const doubleNums = nums.map((num) => num * 2);
const sum = nums.reduce((acc, num) => acc + num, 0);
