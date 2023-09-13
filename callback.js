let a = 1;

// const callMe = () => console.log("callback");
const greeting = (callback) => {
	a += 5;
	// console.log("greeting");
	callback(a);
};

// greeting(callMe);
a = 3;
greeting((a) => {
	// console.log("annonymous", a); // b = 8
});

const oriArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const loopArr = (arr, cb) => {
	for (let i = 0; i < arr.length; i++) {
		cb(arr, i);
	}
};
// loopArr(oriArr, (arr, i) => console.log(arr[i]));

const mapArr = (arr, cb) => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(cb(arr, i));
	}
	return newArr;
};

// console.log(mapArr(oriArr, (arr, i) => arr[i ?? 0] ** 2));
oriArr.forEach((e, i, arr) => {
	arr[i + 1] = e;
	// console.log(e, i, arr);
});
