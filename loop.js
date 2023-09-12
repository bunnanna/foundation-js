// Normal For Loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log();

// Reverse For Loop
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

console.log();

// Array For Loop
const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log();

// Break & Continue Keywords
for (let i = 0; i < arr.length; i++) {
  if (i % 3 === 0) continue;
  if (i === 7) break;
  console.log(arr[i]);
}

console.log();
let a = 500;
// While Loop
while (a !== 4) {
  if (a % 2 === 0) {
    a = a / 2;
  } else {
    a = 3 * a + 1;
  }
}

// Odd Or Even
for (let i = 0; i < 16; i++) {
  console.log(`${i} is ${!(i % 2) ? "even" : "odd"}`);
}
