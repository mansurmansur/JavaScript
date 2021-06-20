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
### Conditional branching
### Basic operators, maths
### Logiacl operators
### Nullish coalescing operator '??'
### Loops
### swich 
### Functions && Function expressions
### Arrow functions
### JavaScrip specials




## References
1. JavaScript.info
2. MDN documentation
3. Wikipedia
