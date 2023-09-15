console.log("Easy");
// 1. Write a function mapRevertSign(arr)
// mapRevertSign(arr) takes in an array of numbers, and returns a new array of numbers containing opposite signs of the original array.
const mapRevertSign = (arr) => {
	return arr.map((i) => i * -1);
};
console.log("1.", mapRevertSign([1, -4, 2, 0])); // [-1, 4, -2, 0]
console.log("-".repeat(20));

// 2.Write a function reverse(arr)
// reverse(arr) returns a new array which is arr reversed.
// You are not allowed to use Array.reverse method.
const reverse = (arr) => {
	return arr.map((v, i) => {
		return arr[arr.length - i - 1];
	});
};
console.log("2.", reverse([1, 2, 3, 4, 5]));
console.log("-".repeat(20));

// 3.Write a function isMember(mem, arr)
// isMember(mem, arr) returns a boolean indicating whether mem is a member of arr
// Do not use Array helper methods - use a simple for loop
const isMember = (mem, arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === mem) return true;
	}
	return false;
};
console.log("3.1", isMember(5, [1, 3, 7, 12])); // false
console.log("3.2", isMember("john", ["jane", "jim", "john"])); // true
console.log("-".repeat(20));

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
console.log("4.", unique([10, 20, 10, 20, 30, 50, 60, 100])); // [10, 20, 30, 50, 60, 100]
console.log("-".repeat(20));

// 5.Write a function draw(n)
// draw(n) takes in a number n, and prints the stars (*) into the console in this pattern:
// Hint: Use nested loop, using assignment operator “=+”, and “\n” which is new line character (read “back-slash-N”)
const draw = (n) => {
	const a = "*".repeat(n);
	p = "";
	for (let i = 0; i < n; i++) {
		p += a + "\n";
	}
	console.log(p);
};
console.log("5.");
draw(5);
console.log("-".repeat(20));

// 6.Re-write draw(n) as drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n) prints this pattern:
// Hint: Use nested loop, using assignment operator “=+”, and “\n” which is new line character (read “back-slash-N”)
const drawNg = (n) => {
	let a = "";
	let p = "";
	for (let i = 0; i < n; i++) {
		p += "*";
		a += p + "\n";
	}
	console.log(a);
};
console.log("6.");
drawNg(5);
console.log("-".repeat(20));

// 7.Write a function mutual(arr1, arr2)
// mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2
const mutual = (arr1, arr2) => {
	return arr1.filter((mem) => arr2.includes(mem));
};
console.log(
	"7.",
	mutual(
		["Alice", "Bob", "John", "Jane"],
		["John", "Foobar", "Barbaz", "Foobaz", "Bob"]
	)
);
console.log("-".repeat(20));

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
console.log("8.");
fizzBuzz(20);
console.log("-".repeat(20));

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
console.log("9.", gcd(10, 15)); // 5
console.log("9.", gcd(18, 12)); // 6
console.log("9.", gcd(3, 2)); // 1
console.log("-".repeat(20));

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
console.log("10.", filterLt(0, [120, 112, 111, 130, 169, 101]));
console.log("10.", filterLt(112, [120, 112, 111, 130, 169, 101]));
console.log("-".repeat(20));

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
console.log("11.", filterGt(0, [120, 112, 111, 130, 169, 101]));
console.log("11.", filterGt(112, [120, 112, 111, 130, 169, 101]));
console.log("-".repeat(20));

// 12.Implement a programmable logic to compute compounded return
// Compounded returns are an investment strategy in which the interest income earned from the previous period is also invested into the current period.
// This is like how we earn interests from savings accounts.
// The interface (function signature) to this logic should be as simple as compoundedReturn(amount, interest, n) where amount is the amount of fund invested in the 1st period, interest is an interest percentage per period, and n is the number of periods of the investment.
const compoundedReturn = (amount, interest, n) => {
	amount *= (1 + interest / 100) ** n;
	return amount;
};

console.log("12.", compoundedReturn(100, 1, 1));
console.log("12.", compoundedReturn(100, 10, 1));
console.log("12.", compoundedReturn(100, 10, 2));
console.log("-".repeat(20));

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
console.log("13.", mean([1, 2, 3]));
console.log("13.", mean([1, "foo", 3]));
console.log("-".repeat(20));

// 14.Write a function mid(arr)
// mid(arr) returns the array containing middle element(s) of array arr.
// If the array length is an even number, mid returns the 2 middle elements.
const mid = (arr) => {
	const len = arr.length;
	if (len <= 1) return arr;
	const idx = Math.floor(len / 2);
	if (len % 2 === 0) {
		return [arr[idx - 1], arr[idx]];
	} else {
		return [arr[idx]];
	}
	// const newArr = [...arr];
	// while (newArr.length > 2) {
	// 	newArr.pop();
	// 	newArr.shift();
	// }
	return newArr;
};
console.log("14.", mid(["john"]));
console.log("14.", mid(["foo", "bar", "baz"])); // ["bar"]
console.log("14.", mid([1, 2, 3, 4])); // [2, 3]
console.log("-".repeat(20));

// 15.Try learning Array.sort method (function) with this snippet:
// The sort method does now work as we expect. Instead of sorting by numeric value, it seems the sort method sorts elements as strings (hence it did not produce [1, 2, 3, 11, 12, 13]).
// After learning the root cause, try fixing this problem/implementing on your own.
// Hint: a callback function can be sent to Array.sort

console.log(
	"15.",
	[3, 2, 1, 12, 13, 11].sort((a, b) => a - b)
); // [1, 11, 12, 13, 2, 3]
console.log("-".repeat(20));

// 16.Write a function median(arr)
// median(arr) returns the statistical median from the dataset arr (represented as an array).
// A dataset's median is the element at the middle of the sorted list. You are allowed to use Array.sort method for this implementation
// Hint: You can use mid() and mean() implemeted above to solve this problem.
const median = (arr) => {
	return mean(mid(arr.sort((a, b) => b - a)));
};
console.log("16.", median([2, 1, 5, 3, 4]));

// 17.Write a function initArr(val, len)
// initArr(val, len) returns an array of length len with all members initialized to val.
const initArr = (val, len) => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr[i] = val;
	}
	return arr;
};
console.log("17.", initArr(0, 5));
console.log("-".repeat(20));

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
	"18.",
	flatMap([
		[1, 2, 3],
		[100, 200],
		[10, 20],
	])
);
console.log("-".repeat(20));

// 19.Write a function mapMean(arr)
// mapMean(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the mean average value of arr[i].
// You are allowed to use mean(arr) written above.
const mapMean = (arr) => {
	return arr.map((i1) => mean(i1));
};
console.log(
	"19.",
	mapMean([
		[1, 2, 3],
		[100, 200],
		[10, 20],
	])
);
console.log("-".repeat(20));

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
console.log("20.", fib(2));
console.log("20.", fib(3));
console.log("20.", fib(4));
console.log("20.", fib(5));
console.log("20.", fib(6));
console.log("-".repeat(20));

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
console.log("21.", toBytes("Bar"));
console.log("21.", toBytes("Foo"));
console.log("21.", toBytes("Foo🔥"));
console.log("&".repeat(20));

console.log("Medium");
// 1.Write a function maxNegMinPos(arr)
// maxNegMinPos(arr) takes in an array arr, and it prints the max negative value (maxNeg) as well as the min positive value (minPos)
const maxNegMinPos = (arr) => {
	console.log(
		"1. MaxNeg is",
		arr.filter((v) => v < 0).reduce((prev, curr) => (prev > curr ? prev : curr))
	);
	console.log(
		"1. MinPos is",
		arr.filter((v) => v > 0).reduce((prev, curr) => (prev < curr ? prev : curr))
	);
};
maxNegMinPos([12, -13, 14, 4, 2, -1, -18]);
console.log("-".repeat(20));

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
console.log("2.", prime(4));
console.log("2.", prime(5));
console.log("-".repeat(20));

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
console.log("3.", drawDown([110, 105, 95, 9, 80, 17, 120, 115, 11]));
console.log("&".repeat(20));

console.log("Challenge");
// 1.Write a function summarize(text, trail, len)
// summarize(text, trail, len) returns the shortest preview of text.
// If text fits within len, then summarize returns the whole text.
// If text is longer than len, then summarize will truncate text and appends trail (e.g.  ... with a whitespace at the front) to the return string.
// The whole return string must fit into len, i.e. its length must not exceed len.
// The returned text must contain only whole words (i.e. words are separated by whitespace  ). Partial words are not allowed.
// If len is smaller than 3, and text does not fit len, summarize returns an empty string "".
const summarize = (text, trail, len) => {
	if (text.length <= len) return text;
	const splittext = text.split(" ");
	if (len < 3 && splittext[0].length > len) return "";
	let result = "";
	const trailWithSpace = " " + trail;
	const emptySpace = len - trailWithSpace.length;
	for (let i = 0; i < splittext.length; i++) {
		if (!(splittext[i].length < emptySpace - result.length)) {
			break;
		}
		result += " " + splittext[i];
	}
	return result + trailWithSpace;
};
const articleFoo = "Good morning ladies and gentlemen";

console.log("1.", summarize(articleFoo, " ...", 2)); // ""
console.log("1.", summarize(articleFoo, " ...", 10)); // "Good ..."
console.log("1.", summarize(articleFoo, " ...", 20)); // "Good morning ..."
console.log("1.", summarize(articleFoo, " ...", 25)); // "Good morning ladies ..."
console.log("-".repeat(20));

// 2.Write a function mode(arr)
// mode(arr) returns the statistical mode from the dataset arr (represented as an array).
// A dataset's mode is the value which appears most frequently in a dataset. If none is found, or if there are no clear winner, mode(arr) returns null
// A dataset's mode is the value which appears most frequently in a dataset. If none is found, or if there are no clear winner, mode(arr) returns null

const mode = (arr) => {
	// const countNum = arr.reduce((prev, curr) => {
	// 	if (!prev[curr]) prev[curr] = 0;
	// 	prev[curr] += 1;
	// 	return prev;
	// }, {});
	// const modenum = {};
	// Object.keys(countNum).forEach((key) => {
	// 	if (!modenum[countNum[key]]) modenum[countNum[key]] = [];
	// 	modenum[countNum[key]].push(key);
	// });

	// const modeidx =
	// 	modenum[Math.max(...Object.keys(modenum).map((v) => Number(v)))];
	// return modeidx.length == 1 ? Number(modeidx[0]) : null;

	const countNum = arr.reduce((prev, curr) => {
		if (!prev.get(curr)) prev.set(curr, 0);
		prev.set(curr, prev.get(curr) + 1);
		return prev;
	}, new Map());
	const modenum = new Map();
	countNum.forEach((val, key) => {
		if (!modenum.get(val)) modenum.set(val, []);
		modenum.set(val, [...modenum.get(val), key]);
	});
	const modeidx = modenum.get(Math.max(...Array.from(modenum.keys())));
	return modeidx.length == 1 ? Number(modeidx[0]) : null;
};
console.log("2.", mode([1, 2, 1, 4, 5, 6, 2, 1]));
console.log("2.", mode([2, 5, 2, 4, 5]));
console.log("-".repeat(20));

// 2.1 Write a function mapMode(arr)
// mapMode(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the statistical mode of arr[i].
// You are allowed to use mode(arr) written above.
const mapMode = (arr) => {
	return arr.map((ar) => mode(ar));
};
console.log(
	"2.1",
	mapMode([
		[1, 2, 3, 1],
		[100, 200],
		[10, 20],
	])
);
console.log("-".repeat(20));

// 3.Write a function transpose(bits, w, h)
// transpose(bits, w, h) transposes an array bits into arrays of arrays, based on the value of w, h, and to some extent bits.
// For example, consider this scenario: we are working on a image processing engine.
// The image files are represented on disks or in memory as just a long list (array) of bytes, much like any files:
const transpose = (bits, w, h) => {
	const img = [];
	for (let i = 0; i < h; i++) {
		img[i] = bits.slice(i * w, (i + 1) * w);
		// for (let j = 0; j < w; j++) {
		// 	img[i][j] = bits[idx];
		// 	idx++;
		// }
	}
	return img;
};
const imageBytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
console.log("3.", transpose(imageBytes, 8, 2));
console.log("3.", transpose(imageBytes, 2, 8));
console.log("-".repeat(20));

// 4.Write a function transposable(arr, w, h)
// Related to transpose(arr, w, h) above
// transposable(arr, w, h) returns a boolean, indicating whether the array arr could be transposed with w and h. It is considered transposable if the resulting 2D array can form a rectangle (all rows have uniform length).
const transposable = (arr, w, h) => arr.length == w * h;
const image = [1, 0, 1, 0, 1, 1];
console.log("4.", transposable(image, 2, 3)); // true
console.log("4.", transposable(image, 6, 1)); // true
console.log("4.", transposable(image, 4, 2)); // false
console.log("-".repeat(20));

// 5.Write a function markdownToHTML(md)
// markdownToHTML(md) takes in a Markdown string md and returns a HTML string parsed from md.
// You can just parse the header tags (<h1>, <h2>, and so on) and the paragraph tag <p> and ignore the rest of Markdown standard.
// Hint: JavaScript strings have method s.startsWith(p) which returns a boolean indicating whether s is prefixed with p
const markdownToHTML = (md) => {
	const mdsplit = md.split("\n").filter((i) => i);
	return mdsplit
		.map((mds) => {
			if (mds.startsWith("# ")) {
				return `<h1>${mds.replace("# ", "")}</h1>`;
			} else if (mds.startsWith("## ")) {
				return `<h2>${mds.replace("## ", "")}</h2>`;
			} else {
				return `<p>${mds}</p>`;
			}
		})
		.reduce((prev, curr) => prev + curr + "\n", "");
};
console.log(
	"5.",
	markdownToHTML(`
# This is H1

## This is H2

This is a paragraph
`)
);
