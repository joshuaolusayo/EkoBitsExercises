// Part 1

// this function takes in two parameters and returns the difference of the two;
function difference(x, y) {
	return x - y;
}

difference(2, 2); // 0
difference(0, 2); // -2

// this function takes in two parameters and returns the product of the two;
function product(x, y) {
	return x * y;
}

product(2, 2); // 4
product(0, 2); // 0

// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday,
// 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay(num) {
	if (num < 1 || num > 7) return undefined;
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
	return daysOfWeek[num - 1];
}

printDay(4); // "Wednesday"
printDay(41); // undefined

// this function takes in one parameter (an array) and returns the last value in the array. It should return
// undefined if the array is empty.
function lastElement(arr) {
	if (!arr) return undefined;
	return arr[arr.length - 1];
}

lastElement([1, 2, 3, 4]); // 4
lastElement([]); // undefined

// this function takes in two parameters (both numbers). If the first is greater than the second, this function
// returns "First is greater". If the second number is greater than the first, the function returns "Second is
// greater". Otherwise the function returns "Numbers are equal"

function numberCompare(x, y) {
	if (x > y) {
		return "First is greater";
	} else if (x < y) {
		return "Second is greater";
	} else {
		return "Numbers are equal";
	}
}

numberCompare(1, 1); // "Numbers are equal"
numberCompare(2, 1); // "First is greater"
numberCompare(1, 2); // "Second is greater"

// this function takes in two parameters (two strings). The first parameter should be a word and the second
// should be a letter. The function returns the number of times that letter appears in the word. The function
// should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not
// found in the word, the function should return 0.

function singleLetterCount(str, word) {
	str = str.toLowerCase();
	word = word.toLowerCase();

	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === word) count++;
	}
	return count;
}

singleLetterCount("amazing", "A"); // 2

// Part 2

// this function takes in one parameter (a string) and returns an object with the keys being the letters and
// the values being the count of the letter.
function multipleLetterCount(str) {
	let obj = {};
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) in obj) {
			obj[str.charAt(i)] += 1;
		} else {
			obj[str.charAt(i)] = 1;
		}
	}
	return obj;
}

/*
this function should take in at most four parameters (an array, command, location, and value).
If the command is "remove" and the location is "end", the function should remove the last value in the array
and return the value removed. (In this case, the function only needs three arguments.)
If the command is "remove" and the location is "beginning", the function should remove the first value in the
array and return the value removed. (In this case, the function only needs three arguments.)
If the command is "add" and the location is "beginning", the function should add the value (fourth parameter)
to the beginning of the array and return the array.
If the command is "add" and the location is "end", the function should add the value (fourth parameter) to
the end of the array and return the array
*/

function arrayManipulation(arr, cmd, loc, val) {
	if (cmd.toLowerCase() === "remove" && loc.toLowerCase() === "end") {
		return arr.pop();
	} else if (cmd.toLowerCase() === "remove" && loc.toLowerCase() === "beginning") {
		return arr.shift();
	} else if (cmd.toLowerCase() === "add" && loc.toLowerCase() === "beginning") {
		arr.unshift(val);
		return arr;
	} else if (cmd.toLowerCase() === "add" && loc.toLowerCase() === "end") {
		arr.push(val);
		return arr;
	}
}

/*
A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward
or forward. This function should take in one parameter and returns true or false if it is a palindrome.
As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a
plan a canal Panama'); returns true
*/

function isPalindrome(word) {
    if (word.length === 0) return false;
    word = word.split(" ").join("").toLowerCase();
	let i = 0;
	let j = word.length - 1;
	for (let i = 0; i < word.length; i++) {
		if (word[i] !== word[j]) {
            return false;
        }
		j--;
	}
	return true;
}

isPalindrome('a man a plan a canal Panama'); // true
isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome('hannah'); // true
isPalindrome('robert'); // false