# Introduction to JavaScript

## Q: What is JavaScript?

JavaScript is a lightweight, interpreted/just-in-time compiled & multi-paradigm programming language. it is a high-level, prototypebased, object-oriented, and first-class functions.

JavaScript can get executed on web browsers. Web browsers have imbeded JavaScript engine. JavaScript engine has different names in different browsers. such as
- V8 - in Chrome and Opera
- SpiderMonkey - in Firefox
- Chakra - IE
- SquirrelFish - Safari

JavaScript had relation to java to help it as a new language since Java was popular that time. Since then JavaScript has evolved and now has its own standards called ECMAScript Specification. ECMAScript standards does not include any I/O like:             
- Networking
- Storage
- Graphics
browsers provide APIs that provide I/O.

## JavaScript Fundamentals

### Variables 
- A variable is a container used for storing data. In JavaScript there are 2 ways of declaring a variable:
  a) using the keyword **let**
   ```javascript
   let username = 'mansursaid'
   let x = 5
   ```
  b) using the keyword **var**
   ```javascript
   var id = 12567
   var y = 'Missed u'
   ```
   **note:**
   - let declares a blocked scoped or local variable while var is a function scoped

- There is also contant which creates a read-only.
### Data types
- there are 8 basic data types in javascript.
 - number - numbers of any kind: integer, flaoting-points.
 ```JavaScript
 //nor error
 //This is called dynamically typed
 let message = "hello";
 message = 123445;
 
 //Numbers
 let n = 1234
 n= 12.568
 ```
 - String - must be surrounded by quotes.
 ```JavaScript
 let name = "John"
 ``` 
 - Boolean - it has 2 values: true and false
 - null type - a null is reference to a non-existing object.
 - undefined - value not assigned
 -> object is a more complex data structure
### Type conversions
- Many times, operators and functions automatically convert the values given to them to the right type.
- String conversion
```JavaScript
let temp = false
alert(typeof value) //boolean

result = String(temp);
alert(typeof value) //string
```
- Numeric Conversion
```JavaScript
let str = 345
let num = Number(str) //becomes a number

let size = "Seventy two"
let temp = Number(size) //NaN conversion failed
```
- Boolean Conversion <br />
 a) Values that are intuitively "empty", like 0, an empty string, null, undefined , and NaN become false. <br />
 b) Other values become true.
 
 ```JavaSCcipt
 let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) { 
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```

### Conditional branching 
- we can use if statement and the conditional operator '?' which is called a block of code.
- if statements analizes the condition  in the parentheses and, if the result is true,the code block of code.
- ternary. the operrand
### Basic operators, maths
### Logiacl operators
### Nullish coalescing operator '??'
### Loops & Iteration
- loops offer a way to do an action repeatedly. there are different kinds of loops but they all do the same thing. 
- each loop offer different ways to determine the start and end points of the loop. there are some situations that are more served by one type of a loop over the other.
- examples of loops in javascript: <br />
  #### a) for loop 
  for loop has 3 parts: {start/initialExpression, condition, steps/incrementExpression}. 
  - the initial experession usually initializes one or more loop counters.
  - the condition expression is evaluated each time the loop repeats. if the condition expression is *true* the loop executes and stops if it is *false*.
  - then increment expression is executed.
  ``` javascript
    for([initialExpression]; [conditionExpression]; [incrementExpression]){
      statement //body of the loop
    }

    //example
    for(let i = 0; i < 3; i++>)
       alert(i);

    //in the above example
    //i = 0 executes once upon entering the loop
    //i < 3 checked before every loop iteration. uf false, the loop stops
    //alert(i) runs again and again while the conditions is truthy
    //i++ executes after the body on each iteration
  ```
 #### b) while loop 
 - a while loop executes statement as long as a specified conditon evaluated to true.
 ```JavaScript
 let n = 0;
 let x = 0;

 while (n < 3){
   n++;
   x += n;
 }
 ```
 #### c) do...while loop 
 - it repeats until a specified condition evaluates to false. <br />
 syntax
 ``` JavaScript
 do 
   statement
 while (condition)

 //statement is always executed once before the condition is checked. 
 //if condition is true, the statement executes again. at the end of every execution, the condtion is checked.
 //when the condtion is false, execution stops, and control passes to the statement following do...while.
 ```
 #### d) for...in loop 
 - it iterates a specified variable over all the enumerable properties of an object.
 ```JavaScript
 for (variable in object)
   statement

 //example 
 //a function that takes argument as an object nad object's name
 //iterates all the object's properties and return a string that lists the property names and their values.
 function dump_props(obj, obj_name) {
  let result = '';
  for (let i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}

 ```
 #### e) for...of loop 
 - it creates a loop iterating over iterable objects (including array, map, set, arguments object and so on)
 - the following shows difference btwn for...in and for...of. for...in iterates over property names, for...of iterates over property values:
 ```JavaScript
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}

 ```

 <br />

there are some statements used in loop that are also important e.g.
  #### a) labeled statement
  - a label provides a statement with an identifier that lets you refer to it else where in your program.
  - The syntax for label
  ```JavaScript
  label :
      statement
  ```
  the value of label may be any JavaScript identifier that is not a reserved word. The statement that you identify with a label may be any statement.
  - for example sometimes we need to break out from multiple nested loops at once.
  - the normal break statment will only break the inner loop and that is when the lebel come in handy. a label is an identifier with a colon before a loop.
  #### b) break statement 
  - normaly a loop breaks when its conditions becomes falsy.
  - we can also force it to exit at any time using speacial *break* statement.
  ```JavaScript
  let sum = 0;
  
  while (true){
    let value =+ prompt("Enter a number", '');

    if(!value) break; //(*)

    sum += value;
  }
  alert('sum: '+sum);
  ``` 
  - The break statement is acitvated at line (*) if the user enters an empty line or cancels the input. it stops the loop imediately, by passing <br />
  the controller to the next line alert.
  #### c) continue statement 
  - it is a lighter version of break. it doesn't stop the loop, instead it stops the current iteration and forces the loop to start a new one (if the condition allows).
  ```JavaScript
  for (let i = 0; i < 10>; i++){
    //if true skip the remainin part of the body
    if(i % 2 == 0)continue; 

    alert(i); //1, then 3, 5, 7, 9
  }
  ```
### swich 
### Functions && Function expressions
### Arrow functions
### JavaScrip specials

## References
1. JavaScript.info
2. MDN documentation
3. Wikipedia
