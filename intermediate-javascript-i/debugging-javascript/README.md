Part I


What does the throw keyword do?
    It is used to return an error and stop the code execution when something goes wrong in the code.

What does the finally keyword do?
    It is used as a callback which runs eveytime the code inside the try..catch block finish executing.
    
What is the difference between a TypeError and ReferenceError?
    TypeError occurs when we make incorrect use of certain types while ReferenceError occurs when we make an attempt to access a variable that is not defined within the scope.

How do you create a snippet in the Chrome dev tools?
    Open the source tab. Click on the Snippets located at the left panel. Then, click on "New Snippet" to create a new one

In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
    Exception is an error that occur during the execution of the instructions given to the computer as code.

How do we "catch" errors in JavaScript? Give an example with code for what that might look like.
    By wrapping the code in a try..catch block
    try {
        // code to run
    } catch (e) {
        // code to run if the error occur
    }


Types of Error

1. person
    ReferenceError because it is only declared not initialized.

2. let data = {};
data.displayInfo();
    TypeError. displayInfo is undefined in the data object. Therefore, it will be a type error.

3. let data = {};
data.displayInfo.foo = "bar";
    TypeError. It is not possible to give a value ("bar") to an undefined key ("displayInfo")

4. function data(){
    let thing = "foo";
}
data();
thing;
    ReferenceError. thing does not exist in the global scope but in the local scope of the funciton data()




Part II

Fix the broken code and explain what was wrong:

Wrong:
for(let i=0; i > 5; i++){
    console.log(i);
}

Correct:
fir (let i = 0; i < 5; i++) {
    console.log(i);
}

Explanation: The condition given is wrong. i is supposed to stop when it reaches 4.


Wrong:
function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}

Correct:
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}

Explanation: The assignment operator '=' is used instead of the comparison operator '==='


Wrong:
function loopToFive(){
    for(let i=0, i < 5, i++){
        console.log(i);
    }
}

Correct:
function loopToFive(){
    for(let i=0, i <= 5, i++){
        console.log(i);
    }
}

Explanation: The condition does not allow us to reach 5. It is supposed to be '<=' instead of being '<'


Wrong:
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i = 0; i < numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}

Correct:
function displayEvenNumbers() {
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

Explanation: The condition in the for...loop is not correct. i++ is not supposed to have ';' The entire if block is wrong also. The return evenNumbers is supposed to be outside the loop also

