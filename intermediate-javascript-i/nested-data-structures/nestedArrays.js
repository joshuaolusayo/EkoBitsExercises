/*
Write a function called rotate which takes an array and a number, and moves each element
however many spaces the number is to the right. For the value at the end of the array,
rotate should move it back to the beginning.
*/

function rotate(arr, num) {
	let amt = num % arr.length;
	for (let i = 0; i < amt; i++) {
		arr.unshift(arr.pop());
	}
	return arr;
}

rotate([1, 2, 3], 1);

/*
Write a function called makeXOGrid which takes in two parameters, rows and columns, and
returns an array of arrays with the number of values in each subarray equal to the columns
parameter and the number of subarrays equal to the rows parameter. The values in the
sub-arrays should switch between "X" and "O".
*/

function makeXOGrid(rows, amount) {
	let newArr = [];
	let beginX = true;
	for (let i = 0; i < rows; i++) {
		let newRow = [];
		for (let j = 0; j < amount; j++) {
			if (beginX) {
				newRow.push("X");
			} else {
				newRow.push("O");
			}
			beginX = !beginX;
		}
		newArr.push(newRow);
	}
	return newArr;
}
