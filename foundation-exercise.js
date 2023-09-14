// 1. Write a function mapRevertSign(arr)
// mapRevertSign(arr) takes in an array of numbers, and returns a new array of numbers containing opposite signs of the original array.
const mapRevertSign = (arr) => {
	return arr.map((i) => i * -1);
};

console.log("1.", mapRevertSign([1, -4, 2, 0])); // [-1, 4, -2, 0]

// 2.Write a function reverse(arr)
// reverse(arr) returns a new array which is arr reversed.
// You are not allowed to use Array.reverse method.
const reverse = (arr) => {
	return arr.map((v, i) => {
		return arr[arr.length - i - 1];
	});
};
console.log("2.", reverse([1, 2, 3, 4, 5]));

// 3.Write a function isMember(mem, arr)
// isMember(mem, arr) returns a boolean indicating whether mem is a member of arr
// Do not use Array helper methods - use a simple for loop
const isMember = (mem, arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === mem) return true;
	}
	return false;
};
console.log(isMember(5, [1, 3, 7, 12])); // false
console.log(isMember("john", ["jane", "jim", "john"])); // true

// 4.Write a function unique(arr)
// unique(arr) takes in an array of numbers arr and returns a new array whose elements are unique.
// You can use isMember implemented above.
const unique = (arr) => {
	return arr.reduce((prev, curr) => {
		if (isMember(curr, prev)) {
			return prev;
		} else {
			prev.push(curr);
			return prev;
		}
	}, []);
};
console.log(unique([10, 20, 10, 20, 30, 50, 60, 100])); // [10, 20, 30, 50, 60, 100]

// 5.Write a function draw(n)
// draw(n) takes in a number n, and prints the stars (*) into the console in this pattern:
// Hint: Use nested loop, using assignment operator “=+”, and “\n” which is new line character (read “back-slash-N”)
const draw = (n) => {
	let a = "";
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			a += "*";
		}
		a += "\n";
	}
	console.log(a);
};
draw(5);

// 6.Re-write draw(n) as drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n) prints this pattern:
// Hint: Use nested loop, using assignment operator “=+”, and “\n” which is new line character (read “back-slash-N”)
const drawNg = (n) => {
	let a = "";
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i + 1; j++) {
			a += "*";
		}
		a += "\n";
	}
	console.log(a);
};
drawNg(5);

// 7.Write a function mutual(arr1, arr2)
// mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2
const mutual = (arr1, arr2) => {
	return arr1.filter((mem) => arr2.includes(mem));
};
console.log(
	mutual(
		["Alice", "Bob", "John", "Jane"],
		["John", "Foobar", "Barbaz", "Foobaz", "Bob"]
	)
);

// 8.Write a fizzBuzz(n) function
// fizzBuzz(n) iterates over inclusive range [1, n], and for each element in the range, fizzBuzz(n) prints Fizz if the element is divisible by 3, Buzz if the element is divisible by 5, and FizzBuzz if the element is divisible by 3 and 5.
// If no conditions are met, fizzBuzz(n) prints the element.
const fizzBuzz = (n) => {
	for (let i = 1; i <= n; i++) {
		if (i % 15 === 0) {
			console.log("FizzBuzz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else {
			console.log(i);
		}
	}
};
fizzBuzz(20);

// 9.Write a GCD function gcd(a, b)
// gcd(a, b) returns greatest common divisor (GCD / หรม.) between the pair a, b
const gcd = (a, b) => {
	while (a != b) {
		if (a > b) {
			a -= b;
		} else {
			b -= a;
		}
	}
	return a;
};
console.log(gcd(10, 15)); // 5
console.log(gcd(18, 12)); // 6
console.log(gcd(3, 2)); // 1

// 10.Write a function filterLt(n, arr)
// filterLt(n, arr) takes in an a number n and an array of numbers arr, and returns a new array containing all elements of arr that is lesser than (lt) n.
// Do not use Array helper methods - use a simple for loop
const filterLt = (n, arr) => {
	const re = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < n) {
			re.push(arr[i]);
		}
	}
	return re;
};
console.log(filterLt(0, [120, 112, 111, 130, 169, 101]));
console.log(filterLt(112, [120, 112, 111, 130, 169, 101]));

// 11.Write a function filterGt(n, arr)
// filterGt(n, arr) performs similar business logic to filterLt(n, arr) above, but instead of doing a lesser-than test, it does a greater-than test
// Do not use Array helper methods - use a simple for loop
const filterGt = (n, arr) => {
	const re = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > n) {
			re.push(arr[i]);
		}
	}
	return re;
};
console.log(filterGt(0, [120, 112, 111, 130, 169, 101]));
console.log(filterGt(112, [120, 112, 111, 130, 169, 101]));

// ! 12.Implement a programmable logic to compute compounded return
// Compounded returns are an investment strategy in which the interest income earned from the previous period is also invested into the current period.
// This is like how we earn interests from savings accounts.
// The interface (function signature) to this logic should be as simple as compoundedReturn(amount, interest, n) where amount is the amount of fund invested in the 1st period, interest is an interest percentage per period, and n is the number of periods of the investment.
const compoundedReturn = (amount, interest, n) => {
	for (let i = 0; i < n; i++) {
		amount *= 1 + interest / 100;
	}
	return amount;
};

console.log(compoundedReturn(100, 1, 1));
console.log(compoundedReturn(100, 10, 1));
console.log(compoundedReturn(100, 10, 2));

// 13.Write a function mean(arr)
// mean(arr) returns the mean average value of arr dataset (represented as an array).
// If any one of arr members are of non-number type, mean(arr) returns null
const mean = (arr) => {
	const result = arr.reduce((prev, curr) => {
		if (typeof prev != "number" || typeof curr != "number") return null;
		return prev + curr;
	});
	if (result == null) return result;
	return result / arr.length;
};
console.log(mean([1, 2, 3]));
console.log(mean([1, "foo", 3]));

// 14.Write a function mid(arr)
// mid(arr) returns the array containing middle element(s) of array arr.
// If the array length is an even number, mid returns the 2 middle elements.
const mid = (arr) => {
	const len = arr.length;
	const idx = Math.floor(len / 2);
	if (len % 2 === 0) {
		return [arr[idx - 1], arr[idx]];
	} else {
		return [arr[idx]];
	}
};
console.log(mid(["john"]));
console.log(mid(["foo", "bar", "baz"])); // ["bar"]
console.log(mid([1, 2, 3, 4])); // [2, 3]

// 15.Try learning Array.sort method (function) with this snippet:
// The sort method does now work as we expect. Instead of sorting by numeric value, it seems the sort method sorts elements as strings (hence it did not produce [1, 2, 3, 11, 12, 13]).
// After learning the root cause, try fixing this problem/implementing on your own.
// Hint: a callback function can be sent to Array.sort

console.log([3, 2, 1, 12, 13, 11].sort((a, b) => a - b)); // [1, 11, 12, 13, 2, 3]

// 16.Write a function median(arr)
// median(arr) returns the statistical median from the dataset arr (represented as an array).
// A dataset's median is the element at the middle of the sorted list. You are allowed to use Array.sort method for this implementation
// Hint: You can use mid() and mean() implemeted above to solve this problem.
const median = (arr) => {
	return mean(mid(arr.sort((a, b) => b - a)));
};
console.log(median([2, 1, 5, 3, 4]));

// 17.Write a function initArr(val, len)
// initArr(val, len) returns an array of length len with all members initialized to val.
const initArr = (val, len) => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr[i] = val;
	}
	return arr;
};
console.log(initArr(0, 5));

// 18.Write a function flatMap(arr)
// flatMap(arr) takes in an array of arrays, and returns the flattened array.
const flatMap = (arr) => {
	const flatArr = [];
	arr.forEach((i1) => {
		i1.forEach((i2) => flatArr.push(i2));
	});
	return flatArr;
};
console.log(
	flatMap([
		[1, 2, 3],
		[100, 200],
		[10, 20],
	])
);

// 19.Write a function mapMean(arr)
// mapMean(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the mean average value of arr[i].
// You are allowed to use mean(arr) written above.
const mapMean = (arr) => {
	return arr.map((i1) => mean(i1));
};
console.log(
	mapMean([
		[1, 2, 3],
		[100, 200],
		[10, 20],
	])
);

// 20.Write a function fib(n)
// fib(n) prints the Fibonacci series up to n terms.
// The series look like this:
const fib = (n) => {
	const fibArr = [0, 1];
	for (let i = 2; i < n; i++) {
		fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
	}
	return fibArr.toString();
};
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));

// 21.Write a function toBytes(s)
// toBytes(s) takes in a string s and returns an array of ASCII bytes formed by s.
// If a character in s is invalid ASCII, the character is omitted from the returned array.
// Hint: JavaScript strings have method s.charCodeAt(i) which returns the ASCII code of the character at index i of string s
const toBytes = (s) => {
	return [...s]
		.map((val, idx) => {
			return s.charCodeAt(idx);
		})
		.filter((val) => val < 255);
};
console.log(toBytes("Bar"));
console.log(toBytes("Foo"));
console.log(toBytes("Foo🔥"));

// 1.Write a function maxNegMinPos(arr)
// maxNegMinPos(arr) takes in an array arr, and it prints the max negative value (maxNeg) as well as the min positive value (minPos)
const maxNegMinPos = (arr) => {
	console.log("MaxNeg is", arr.filter((v) => v < 0).sort((a, b) => b - a)[0]);
	console.log("MinPos is", arr.filter((v) => v > 0).sort((a, b) => a - b)[0]);
};
maxNegMinPos([12, -13, 14, 4, 2, -1, -18]);

// 2.Write a function prime(n)
// prime(n) returns an array of first n prime numbers
// Hint: keep a list of prime numbers, and check subsequent number iterations against the list.
const prime = (n) => {
	const result = [2];
	let a = 3;
	while (result.length < n) {
		if (!result.some((pri) => a % pri === 0)) result.push(a);
		a++;
	}
	return result;
};
console.log(prime(4));
console.log(prime(5));

// 3.Write a function drawDown(chart)
// drawDown(chart) returns the biggest downward movement within the chart points
// Where chart is points in a chart, represented as an array of numbers: [110, 105, 95, 9, 80, 17, 120, 115, 11]
// Hint: you must keep states
const drawDown = (chart) => {
	return chart
		.map((point, idx) => {
			return point - chart.slice(idx + 1).sort((a, b) => a - b)[0];
		})
		.sort((a, b) => b - a)[0];
};
console.log(drawDown([110, 105, 95, 9, 80, 17, 120, 115, 11]));
