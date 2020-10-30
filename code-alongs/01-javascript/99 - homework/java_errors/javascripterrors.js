// // # JS Errors Practice
// // In the spaces below, **write down what each error message means.** Try coming up with an answer on your own first, based solely on the error message. You can then use Google to confirm your answer.
// // If your answer needs some code context, feel free to provide an example code snippet in the spaces provided. This, however, is not required!
// // The prompts get progressively more difficult. If you get stuck, check the solution branch of this repo!
// // **Hint:** In a few of the spaces below, rather than just putting stuff inside the `<script>` tags you may need to edit the tags themselves.
// // ### learn to love error messages
// // Try generating these errors yourself! You can edit the `<script>` element of the enclosed [index.html](./index.html) as your scratch pad.

// 1. `Uncaught SyntaxError: Unexpected token {`
//   > When there is an incorrectly placed "{" in your code
//   // let add = 1 + 2 {

// - `Uncaught ReferenceError: greeting is not defined`
//   > Using greeting as a variable when it hasn't been previously defined
//   // let add = 1 + greeting

// - `GET file:///scripts.js net::ERR_FILE_NOT_FOUND`
//   > The path could be wrong or the file could be missing

// - `GET http://maxcdn.com/bootstrap.css 400 (Not Found)`
//   > The url could be wrong as the file was not found there

// - `Uncaught TypeError: "hello".push is not a function`
//   > ("hello".push") is trying to be used as a function but is not
//   // ("hello".push)()

// - `Uncaught TypeError: this.greet is not a function`
//   > there is no function greet on the object this
//   // this.greet()

// - `Uncaught TypeError: Cannot read property 'name' of undefined`
//   > trying to read the property of key "name" for an object that is undefined
//   // let bob
//   // bob.name

// - `Uncaught SyntaxError: missing ) after argument list`
//   > There is an error with how a function is called
//   // console.log('PI: ' Math.PI);

// - `Uncaught ReferenceError: Invalid left-hand side in assignment`
//   > There is an unexpected assignment. Possibly a "=" was used instead of "=="
//   // if (Math.PI = 3 || Math.PI = 4) { 
//  // console.log('no way!');
//  // }

// - `Uncaught SyntaxError: Unexpected number`
//   > A number is being passed somewhere that it is expecting a different type of variable

// - `Uncaught SyntaxError: Unexpected string`
//   > A string is being passed somewhere that it is expecting a different type of variable

// - `Uncaught SyntaxError: Unexpected identifier`
//   > An identifier is being passed somewhere that it is expecting a different type of variable

// - `Uncaught RangeError: Maximum call stack size exceeded`
//   > when you call such a large number of functions that you hit the limit of how many you can call
//   // Optional some sort of recurisive code