// * Spread Operator
const person = {
	name: "John",
	age: 20,
	address: "Rama 2",
};

const updateAddress = (obj, newaddress) => {
	return { ...obj, address: newaddress };
};
const personWithNewAddress = updateAddress(person, "Rama 9");
console.log(personWithNewAddress);
