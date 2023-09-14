const vals = [1, 20, 50, 80, 150];
vals.forEach((v, i, a) => {
	console.log(v, i, a);
});

const nerfvals = vals.map((val, i) => {
	return val / (i + 1);
});
console.log({ nerfvals });

const filtervals = vals.filter((val) => val - 1);
console.log({ filtervals });

const reduceval = vals.reduce((prev, curr) => {
	console.log({ prev, curr });
	prev += curr;
	return prev;
});
console.log({ reduceval });

const someval = vals.some((val) => {
	return val > 50;
});
console.log({ someval });

const everyval = vals.every((val) => {
	return val > 50;
});
console.log({ everyval });
