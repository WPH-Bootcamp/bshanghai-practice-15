const user = {
  name: "kyra",
  age: 20,
};

// user.isAdmin = true; // di js tidak error

type UserType = {
  name: string;
  age: number;
};
const user2: UserType = {
  name: "kyra",
  age: 20,
};

// user2.isAdmin = true;

// untuk mengatasi error
// gunakan index signature

type User2Type = {
  name: string; //untuk yang diketahui
  age: number;
  [key: string]: unknown; //apapun key nya selama key nya string bisa ditambahkan ke dalam object
};

const user3: User2Type = {
  name: "kyra",
  age: 20,
};

user3.isAdmin = true;
