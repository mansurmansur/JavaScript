# Data structures & algorithms 
When storing data in memory there are many types of data structures for this task. there is no right one for each situation but there are possible trade-offs that can help
choose one.

This section will focus on linear data structures: <br />
a) array <br />
b) lists <br />
c) maps <br /> 
d) sets <br />
e) stacks & queues

## Array
arrays are collections of elements. <br/>
Different programming languages arrays have some differences. in dynamic language like JavaScript, array can contain different data types: numbers,string,objects & etc. <br />
in type safe languages such as C#, Java,C & C++ arrays have predefined size and data type, while in JavaScript, it would automatically increase the size of the Array when needed.

### Arrays built-in operations
- different programming language have slightly different implementation.

| Function | Runtime | Description |
|--------|---------|------------------------------------------|
| array.push | O(1)  | inserts element at the end of array |
| array.pop  | O(1)  | removes element at the end of array |
| array.shift | O(n) | removes element from the beginning of array|
| array.unshift | O(n) | inserts element(s) to the beginning of the array |
| array.slice | O(n) | returns a copy of the array from beginning to end |
| array.splice | O(n) | changes (add/remove) the array |

- array insertions
```JavaScript
arr = []; //initializing empty array

//insert items using push
arr.push("JavaScript");
arr.push("Java");

//print to console
console.log(arr); //=> ["JavaScript", "Java"]

arr = []; //reinitialize array

//insert items using unshift
arr.unshift("C#");
arr.unshift("C++");

//print to console
console.log(arr); //=> ["C#","C++"]
```

## HashMaps
maps, dictionaries, and associative arrays all describe the same abstract data type. but hash map implementations are distinct treemap implementations in that one <br />
uses a hash table and one uses a binary search tree. <br />
HashMaps uses labels to reference data, which could a string, number, object or anything. internally it uses an array, and it maps the labes to array indexes using a hash function.
There are 2 ways to implement hashmap:
 1. Array
 2. Binary Search Tree