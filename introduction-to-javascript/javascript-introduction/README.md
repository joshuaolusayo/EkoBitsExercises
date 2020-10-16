Part I

1. 2 == "2" (true)
2. 2 === 2 (true)
3. 10 % 3 (1)
4. 10 % 3 === 1 (true)
5. true && false (false)
6. false || true (true)
7. true || false (true)



Part II

let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}

1. What should the above code console.log?
    It will console.log "Keep it up!"
2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
    Because the condition will evaluate to either true or false



let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}

1. What should the above code console.log? Why?
    It will console.log "third" because the 'firstvariable' is not defined, it is only initialised. Therefore, the condition will return false. The 'secondvariable' is an empty string and will therefore return false. The 'thirdvariable' has been declared and initialized with a non-zero number, therefore, it will return true. Hence, the console.log will print out 'third'
2. What is the value of firstvariable when it is initialized?
    The value is undefined
3. Is the value of firstvariable a "truthy" value? Why?
    No. It is a falsy value because it is undefined.
4. Is the value of secondvariable a "truthy" value? Why?
    No. It is a falsy value because it is an empty string.
5. Is the value of thirdvariable a "truthy" value? Why?
    Yes. It is a truthy value because it is a non-zero number.




Part III

1. Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".
    if (Math.random() > .5) {
        console.log("Over 0.5")
    } else {
        console.log("Under 0.5")
    }

2. What is a falsey value? List all the falsey values in JavaScript.
    A falsey value is a value that returns false when used in a context where JavaScript expects boolean value. They are:
    0
    ""
    null
    undefined
    false
    NaN