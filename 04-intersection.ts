// pada type
type PersonType = {
  name: string;
  age: number;
};
type PersonWithIdType = PersonType & { id: string };

const person: PersonWithIdType = {
  name: "kyra",
  age: 20,
  id: "123",
};

// type lebih dari 1 penggabungan
type PersonWithAddressType = PersonWithIdType &
  PersonType & { address: string };

// pada interface
interface PersonInterface {
  name: string;
  age: number;
}

interface PersonWithIdInterface extends PersonInterface {
  id: string;
}

const person2: PersonWithIdInterface = {
  name: "kyra",
  age: 20,
  id: "123",
};

// extends lebih dari 1 interface

interface PersonWithAddressInterface
  extends PersonInterface,
    PersonWithIdInterface {
  address: string;
}

// batasan type intersection
// 1. ga bisa gabung tipe primitif dengan intersection(cth: number & {id: string})
// 2. tidak bisa gabung tipe bertabrakan (cth: {id: string} & {id: number})

// batassan interface intersection
// 1. tidak bisa menggabung yang anggota interface nya sama (seperti nomor 2 di type)
