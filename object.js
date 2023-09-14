const person = {
	name: "Dave",
	age: 20,
	pet: {
		type: "hollow",
		age: 542,
	},
};

// console.log(person.age);
// console.log(person["age"]);

// person.age++;
// console.log(person.age);

const data = [
	{
		name: "John",
		age: 22,
		job: "software engineer",
	},
	{
		name: "Johny",
		age: 26,
		job: "web designer",
	},
	{
		name: "Watson",
		age: 36,
		job: "marketing",
	},
];
// data.forEach(({ name, age, job }, idx) => {
// 	console.log("Person", idx + 1);
// 	console.log("Name:", name);
// 	console.log("Age:", age);
// 	console.log("Job:", job);
// 	console.log("------------------");
// });

console.log(
	data.reduce((prev, { name, age, job }, idx) => {
		return (
			prev +
			`Person ${
				idx + 1
			}\nName: ${name}\nAge: ${age}\nJob: ${job}\n------------------\n`
		);
	}, "")
);
