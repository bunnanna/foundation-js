// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items

function filterArray(arr, cb) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const isKeeping = cb(arr[i]);
		if (isKeeping) result.push(arr[i]);
	}

	return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
	return item > 0;
});
console.log(afterFilter);
