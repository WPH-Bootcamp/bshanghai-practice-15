// union type

let id: string | number | boolean = 7;
id = "7";
id = true;

type TodoListType = {
  name: string;
  status?: "completed" | "pending"; //literal union
};

const todoList: TodoListType = {
  name: "belajar typescript",
  status: "completed",
};

const todoList2: TodoListType = {
  name: "belajar typescript",
  //   status: "pendinh", //error
};

type TodoComplete = {
  status: "completed";
  completedAt: Date;
};

type TodoPending = {
  status: "pending";
  reason: string;
};

type TodoStatus = TodoComplete | TodoPending;

const todoStatus1: TodoStatus = {
  status: "completed",
  completedAt: new Date(),
};

const todoStatus2: TodoStatus = {
  status: "pending",
  reason: "I forgot to buy it",
};
