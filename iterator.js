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
