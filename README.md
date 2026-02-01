# Mastering JavaScript

Welcome to **Mastering JavaScript** — a curated, evolving repository focused on revisiting, strengthening, and deepening my understanding of JavaScript.

---

## Purpose of This Repository

The goal of this repository is to serve as a **living knowledge base** for JavaScript, covering everything from fundamentals to advanced concepts.

Over time, this repository will include:

- Clear explanations of JavaScript concepts  
- Personal notes and insights  
- Code examples and experiments  
- Practice problems and challenges  
- Mini-projects  
- Advanced patterns, internals, and best practices  

This is **not a finished product**, but an evolving one — reflecting continuous learning and refinement.

---

## Who Is This For?

- Beginners starting their JavaScript journey  
- Developers revisiting fundamentals with deeper clarity  
- Learners who believe in **learning by building and revising**  
- Anyone interested in how JavaScript works under the hood  

---

## Lesson 01: Variables in JavaScript

 **Source File:**  
[`01basics/01_variables.js`](./01basics/01_variables.js)

---

### Environment Setup
To begin working with JavaScript locally, **Node.js** was installed. This allows JavaScript code to be executed outside the browser and sets up the foundation for all upcoming lessons in this repository.

---

### What This Lesson Focuses On

This lesson revisits the fundamentals of **variable declaration in JavaScript** and clarifies how different keywords behave.

Concepts covered include:

- `const` for values that should not be reassigned  
- `let` for block-scoped variables  
- `var` and why it is generally discouraged  
- Declaring variables without any keyword  
- Understanding `undefined` for uninitialized variables  

---

### Key Takeaways

- `const` prevents reassignment and should be the default choice when values are not expected to change.
- `let` allows reassignment and respects block scope, making it safer and more predictable than `var`.
- `var` is function-scoped and can introduce subtle bugs due to scope leakage.
- Declaring a variable without a keyword implicitly creates a global variable, which is not recommended.
- Variables declared without an initial value are assigned `undefined` by default.

---

## Lesson 02: Data Types in JavaScript

 **Source File:**  
[`01basics/02_dataTypes.js`](./01basics/02_dataTypes.js)

---

### What This Lesson Covers

This lesson revisits **JavaScript data types** and emphasizes writing clear, readable, and standards-compliant code.

The `use strict` directive is introduced to ensure that JavaScript is executed in **strict mode**, helping catch common mistakes and encouraging better coding practices.

---

### Concepts Explored

- Enabling strict mode using `"use strict"`
- Differences between browser and Node.js environments
- Primitive data types in JavaScript
- Special values like `null` and `undefined`
- Using `typeof` to inspect data types
- Importance of code readability

---

### Data Types Overview

JavaScript supports the following core data types:

- **number** – numeric values  
- **bigint** – large integers  
- **string** – textual data (`""`)  
- **boolean** – `true` or `false`  
- **null** – standalone value representing intentional absence  
- **undefined** – variable declared but not assigned  
- **symbol** – unique and immutable identifiers  
- **object** – collections of key–value pairs  

---

### Key Observations

- `"use strict"` enforces modern JavaScript behavior.
- `alert()` works in browsers but not in Node.js.
- `typeof null` returns `"object"`, which is a long-standing JavaScript quirk.
- `typeof undefined` returns `"undefined"` as expected.
- Writing readable and well-structured code is essential for maintainability.

---

## Lesson 03: Data Type Conversion (Type Casting)

 **Source File:**  
[`01basics/03_conversionOperation.js`](./01basics/03_conversionOperation.js)

---

### What This Lesson Covers

This lesson revisits **data type conversion in JavaScript**, focusing on how values are explicitly converted between types and how JavaScript behaves in edge cases.

Understanding type conversion is critical to avoiding bugs and writing predictable JavaScript code.

---

### Concepts Explored

- Converting values to `Number`
- Handling invalid numeric conversions
- Converting values to `Boolean`
- Converting numbers to `String`
- Using `typeof` to verify conversions
- Understanding `NaN` and its behavior

---

### Number Conversion

JavaScript provides the `Number()` function to convert values into numbers.

Key observations:

- `"45"` → `45`
- `"45ab"` → `NaN`
- `null` → `0`
- `true` → `1`, `false` → `0`

Even when conversion fails, the result is still of type `number` (`NaN`).

---

### Boolean Conversion

Using `Boolean()` to convert values:

- `1` → `true`, `0` → `false`
- `""` (empty string) → `false`
- Non-empty strings (e.g. `"superman"`) → `true`

---

### String Conversion

Values can be converted to strings using `String()`:

- `35` → `"35"`
- Resulting type is `string`

---

### Key Takeaways

- JavaScript allows explicit type conversion, but results may not always be intuitive.
- `NaN` represents an invalid number but still has the `number` type.
- Always validate and verify conversions when working with user input or external data.
- Using `typeof` helps confirm expected data types after conversion.

---

## Lesson 03 (Continued): Operations & Type Coercion

 **Source File:**  
[`01basics/03_conversionOperation.js`](./01basics/03_conversionOperation.js)

---

### What This Section Covers

This section builds on data type conversion by exploring **JavaScript operations and implicit type coercion**. It highlights how JavaScript evaluates expressions based on operand order and operator behavior.

---

### Unary & Arithmetic Operations

- Unary minus (`-`) converts a value into its negative form.
- Arithmetic expressions follow standard operator precedence.
- Parentheses can be used to explicitly control evaluation order.

Example concepts demonstrated:
- Negating numeric values
- Combining arithmetic operators
- Using modulo (`%`) in expressions

---

### String Concatenation & Coercion

JavaScript automatically converts values during operations involving strings.

Key observations:

- `"1" + 2` → `"12"`
- `1 + "2"` → `"12"`
- `"1" + 2 + 2` → `"122"`
- `1 + 2 + "2"` → `"32"`

 **Rule of thumb:**  
When a string is involved, the `+` operator prioritizes **string concatenation**, evaluated from left to right.

---

### Implicit Type Conversion (Unary Plus)

- `+true` → `1`
- `+""` → `0`

While valid, this style of conversion is **rarely used in production code** due to readability concerns.

---

### Increment Operators

- Prefix increment (`++variable`) increases the value **before** usage.
- This lesson demonstrates prefix incrementation for counters.

Example use case:
- Tracking state changes or counters in logic flows.

---

### Key Takeaways

- JavaScript performs implicit type coercion during operations.
- Expression order significantly affects results.
- Readability should be prioritized over clever shortcuts.
- Understanding coercion helps prevent subtle bugs in real-world code.

---

### References

- ECMAScript Specification – Type Conversion  
  https://tc39.es/ecma262/#sec-type-conversion
- MDN – Increment Operator  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

---

## Lesson 04: Data Type Comparison

  Source File:  
[`01basics/04_comparison.js`](./01basics/04_comparison.js)

---

### What This Lesson Covers

This lesson revisits comparison operators in JavaScript and explains how comparisons behave when different data types are involved.

It focuses on common pitfalls and unintuitive results caused by JavaScript’s implicit type coercion rules.

---

### Basic Comparisons

JavaScript provides standard comparison operators such as:

- `>` greater than  
- `>=` greater than or equal to  
- `<` less than  
- `==` loose equality  
- `!=` loose inequality  

These operators behave predictably when comparing values of the same data type.

---

### Comparisons with Type Coercion

When different data types are compared, JavaScript may automatically convert values:

- `"2" > 1` evaluates to `true`
- `"02" > 1` evaluates to `true`

In relational comparisons, string values are converted to numbers before evaluation.

---

### `null` Comparison Pitfalls

Comparisons involving `null` can lead to confusing results:

- `null > 0` → `false`
- `null == 0` → `false`
- `null >= 0` → `true`

This happens because `null` is handled differently in equality checks and relational comparisons, sometimes converting to `0` and sometimes behaving like `NaN`.

---

### `undefined` in Comparisons

Comparisons involving `undefined` consistently return false:

- `undefined == 0` → `false`
- `undefined > 0` → `false`
- `undefined < 0` → `false`
- `undefined >= 0` → `false`

`undefined` does not convert into a meaningful numeric value during comparisons.

---

### Strict Equality (`===`)

- `"2" === 2` → `false`

Strict equality checks both value and data type, making it safer and more predictable than loose equality.

---

### Key Takeaways

- Prefer strict equality (`===`) over loose equality (`==`).
- Avoid comparisons involving `null` and `undefined` when possible.
- Be explicit in comparisons to prevent unexpected behavior.
- Clean and readable code is more reliable than relying on implicit coercion.

---

## Lesson 05: Data Type Summary

Source File:  
[`01basics/datatypes-summary.js`](./01basics/datatypes-summary.js)

---

### What This Lesson Covers

This lesson provides a high-level **summary of JavaScript data types**. Detailed exploration of each individual data type will be covered in later lectures. The focus here is to clearly understand the difference between primitive and non-primitive types and how to inspect them using `typeof`.

---

### Primitive Data Types

JavaScript has **7 primitive data types**:

- String  
- Number  
- Boolean  
- Null  
- Undefined  
- Symbol  
- BigInt  

Primitive values are immutable and are stored directly in memory. This lesson demonstrates practical examples of all primitive types, including:

- Numeric values (both integers and decimals)  
- Boolean flags  
- `null` as a standalone value  
- Variables declared without assignment resulting in `undefined`  
- `Symbol` for uniqueness  
- `BigInt` for very large integers  

An important observation from the code is that two Symbols created with the same description are still different values, and strict comparison between them returns false.

---

### Non-Primitive (Reference) Types

Reference types in JavaScript include:

- Arrays  
- Objects  
- Functions  

These are stored by reference rather than by value. The lesson illustrates simple examples of each:

- An array containing multiple string elements  
- An object with named properties  
- A function expression assigned to a variable  

Understanding this distinction is essential before moving on to topics like memory behavior, copying objects, and advanced JavaScript internals.

---

### Inspecting Data Types

The `typeof` operator is used throughout this lesson to determine the type of different variables. Viewing the results in a structured table format helps compare how JavaScript classifies primitive and reference values.

---

### Key Takeaways

- Clear separation between primitive and non-primitive data types  
- Symbols provide uniqueness even with identical descriptions  
- BigInt is represented using the `n` suffix  
- Arrays, objects, and functions are all reference types  
- `typeof` is the standard way to inspect variable types  
- Using `console.table` improves readability of output

---

## Lesson 05 (Continued): Memory Behavior in JavaScript

Source File:  
[`01basics/datatypes-summary.js`](./01basics/datatypes-summary.js)

---

### What This Lesson Covers

This section continues the previous Data Type Summary lesson by focusing on **how JavaScript manages memory** for different kinds of values.

The concept of memory storage is divided into:

- **Stack Memory** – used for primitive data types  
- **Heap Memory** – used for non-primitive (reference) types  

Understanding this distinction explains why some variables behave independently while others reflect shared changes.

---

### Stack Memory with Primitive Types

Primitive values are stored directly in the stack.  
When one variable is assigned to another, JavaScript creates a **copy of the value**, not a reference.

Key observations from the code:

- Assigning a string variable to a new variable copies the original value.
- Reassigning the new variable does not affect the original variable.
- Each primitive variable maintains its own separate data in memory.

This demonstrates that primitives are passed and assigned **by value**.

---

### Heap Memory with Reference Types

Objects and other reference types are stored in the heap.  
When an object variable is assigned to another variable, both variables point to the **same memory location**.

Important outcomes shown:

- `userTwo = userOne` does not create a copy of the object.
- Modifying a property through one variable changes the object itself.
- Both variables reflect the updated value because they share the same reference.

This confirms that objects are handled **by reference**.

---

### Key Takeaways

- Primitives use stack memory and are assigned by value.
- Reference types use heap memory and are assigned by reference.
- Copying primitives results in independent variables.
- Copying objects results in shared data unless explicitly cloned.
- Understanding stack and heap is essential for writing predictable JavaScript code.

---

## Lesson 06: Strings in JavaScript

Source File:  
[`01basics/05_strings.js`](./01basics/05_strings.js)

---

### What This Lesson Covers

This lesson focuses on **strings in JavaScript** and introduces commonly used string operations and methods.  
It also emphasizes the importance of referring to **MDN documentation** to understand available methods, their behavior, and edge cases.

---

### String Creation and Interpolation

JavaScript supports both traditional string declarations and template literals.

Key points covered:

- Using template literals with backticks (`` ` ``) for readable string interpolation
- Embedding variables directly inside strings using `${}`

Template literals improve readability and are preferred in modern JavaScript.

---

### String Objects and Properties

Strings can also be created using the `String` object.

Concepts demonstrated:

- Accessing characters using index notation
- Inspecting the string prototype
- Checking string length
- Converting strings to uppercase
- Finding characters and their positions

These examples highlight that strings, while primitive, behave like objects when accessing methods.

---

### Substring and Slice Methods

Two commonly used methods for extracting parts of strings are revisited:

- `substring(start, end)`
- `slice(start, end)`

Important differences noted:

- `substring` does not accept negative indices
- `slice` supports negative values, allowing more flexible slicing

---

### Trimming Whitespace

- `trim()` removes leading and trailing whitespace
- Useful when working with user input or formatted strings

---

### URL and String Utilities

Additional practical string methods explored:

- `replace()` for modifying parts of a string
- `includes()` to check substri

---

## Lesson 07: Numbers and Math in JavaScript

Source File:  
[`01basics/06_nums_maths.js`](./01basics/06_nums_maths.js)

---

### What This Lesson Covers

This lesson revisits how **numbers are handled in JavaScript** and explores commonly used **Number methods** and the built-in **Math object**. The focus is on understanding numeric formatting, precision, and mathematical utilities used in everyday development.

---

### Working with Numbers

JavaScript supports both primitive numbers and the `Number` object.

Key concepts covered:

- Declaring numbers as primitive values
- Creating numbers using the `Number` object
- Converting numbers to strings
- Formatting numbers using fixed decimal precision
- Controlling numeric precision with `toPrecision()`

These methods are especially useful when working with calculations, prices, and display formatting.

---

### Locale-Based Number Formatting

- `toLocaleString()` formats numbers according to regional conventions
- Useful for displaying large numbers in a readable, user-friendly format

This is commonly used in financial and data-driven applications.

---

### The Math Object

JavaScript provides the global `Math` object for performing mathematical operations.

Key methods explored:

- `Math.abs()` for absolute values  
- `Math.round()` for rounding to the nearest integer  
- `Math.ceil()` for rounding up  
- `Math.floor()` for rounding down  
- `Math.min()` and `Math.max()` for value comparison  

The `Math` object itself is not a constructor but a utility object containing static methods.

---

### Random Number Generation

Random values are generated using `Math.random()`.

Concepts demonstrated:

- Generating a random decimal between 0 and 1
- Scaling random values to a desired range
- Generating random integers between a minimum and maximum value

This technique is commonly used in games, simulations, and probabilistic logic.

---

### Key Takeaways

- JavaScript numbers provide multiple formatting and precision utilities
- The `Number` object exposes useful helper methods
- The `Math` object offers essential mathematical operations
- Random number generation requires proper scaling for realistic ranges
- Understanding numeric behavior helps avoid rounding and precision issues

---

## Lesson 08: Date and Time in JavaScript

Source File:  
[`01basics/07_datesinJS.js`](./01basics/07_datesinJS.js)

---

### What This Lesson Covers

This lesson explores **date and time handling in JavaScript** using the built-in `Date` object. It focuses on creating dates, formatting them in different ways, working with timestamps, and extracting specific date components.

Understanding how JavaScript manages dates is essential for logging, scheduling, time-based calculations, and user-facing applications.

---

### Creating Date Objects

A `Date` object can be created in multiple ways:

- Current date and time using `new Date()`
- By passing individual components (year, month, day, time)
- Using date strings in different formats

JavaScript months are **zero-based** when using numeric parameters, which is an important detail to remember.

---

### Date Formatting Methods

Several methods are used to represent dates in readable formats:

- `toString()`  
- `toDateString()`  
- `toISOString()`  
- `toJSON()`  
- `toLocaleDateString()`  
- `toLocaleString()`  
- `toLocaleTimeString()`  

These methods help format dates depending on use case, locale, and readability requirements.

---

### Working with Timestamps

- `Date.now()` returns the current timestamp in milliseconds
- Dividing by `1000` converts milliseconds to seconds
- Timestamps are useful for comparisons, performance tracking, and time calculations

---

### Extracting Date Information

The lesson demonstrates how to retrieve specific parts of a date:

- `getMonth()` returns the month (zero-based)
- `getDay()` returns the day of the week
- `typeof Date` returns `object`

These methods are commonly used when building calendars or time-based logic.

---

### Locale-Based Date Customization

The `toLocaleDateString()` method can accept configuration options:

- Customizing output such as weekday names
- Adapting date formats to different locales

This approach is useful for internationalized applications.

---

### Key Takeaways

- Dates in JavaScript are represented as objects
- Multiple constructors exist for creating date instances
- Formatting options vary based on locale and method used
- Timestamps are millisecond-based by default
- Locale-aware formatting improves user experience

---

## Lesson 09: Arrays in JavaScript

Source File:  
[`02_basics/01_arrays.js`](./02_basics/01_arrays.js)

---

### What This Lesson Covers

This lesson introduces **arrays in JavaScript** and revisits their core characteristics, common methods, and behavior. Arrays are one of the most widely used data structures in JavaScript and are essential for storing and manipulating collections of data.

Learners are encouraged to refer to **MDN documentation** to explore additional array methods and deeper details.

---

### Creating Arrays

Arrays can store multiple values and are not restricted to a single data type.

Key points covered:

- Arrays can contain mixed data types
- Elements are accessed using zero-based indexing
- Arrays are ordered collections

---

### Accessing Elements

- Array elements are accessed using index notation
- Indexing starts from `0`
- Accessing an invalid index returns `undefined`

---

### Common Array Methods

This lesson demonstrates frequently used array methods:

- `push()` – adds elements to the end of the array  
- `pop()` – removes the last element  
- `unshift()` – adds elements to the beginning of the array  
- `shift()` – removes the first element  
- `includes()` – checks if a value exists in the array  
- `join()` – converts an array into a string  

An important observation is that `join()` returns a string, while the original array remains unchanged.

---

### Understanding Array Types

- Arrays are of type `object` in JavaScript
- Converting arrays to strings changes the data type
- Knowing the type helps prevent logical errors

---

### Slice vs Splice

A key comparison explored in this lesson:

- `slice(start, end)`  
  - Returns a shallow copy of part of an array  
  - Does **not** modify the original array  

- `splice(start, deleteCount)`  
  - Removes elements from the array  
  - **Modifies** the original array  

Understanding the difference between these two methods is critical for writing predictable array logic.

---

### Key Takeaways

- Arrays can store heterogeneous data
- Most array methods mutate the original array
- `slice()` is non-mutating, while `splice()` mutates the array
- `includes()` is useful for validation checks
- Always consult MDN for detailed method behavior

---

## Lesson 10: Arrays in JavaScript (Advanced Operations)

Source File:  
[`02_basics/02_arrays.js`](./02_basics/02_arrays.js)

---

### What This Lesson Covers

This lesson continues the exploration of **arrays in JavaScript**, focusing on combining arrays, flattening nested structures, and using static array methods. These concepts are commonly used when working with real-world data and complex collections.

---

### Combining Arrays

Different ways to merge arrays are explored:

- Using `push()` (commented out) results in a nested array
- Using `concat()` creates a new combined array
- Using the **spread operator (`...`)** merges arrays cleanly and is the preferred modern approach

The spread operator improves readability and avoids unintended nesting.

---

### Flattening Nested Arrays

Arrays can contain nested arrays. To simplify such structures:

- `flat()` is used to flatten nested arrays
- Passing `Infinity` ensures all nested levels are flattened

This is especially useful when handling deeply nested data from APIs or transformations.

---

### Array Identification and Creation

Static methods provided by the `Array` object are introduced:

- `Array.isArray()` checks whether a value is an array
- `Array.from()` creates an array from iterable or array-like objects
- `Array.of()` creates an array from a set of individual values

An important observation is that `Array.from()` requires clear instructions when used with objects; otherwise, it returns an empty array.

---

### Key Takeaways

- The spread operator is the cleanest way to merge arrays
- `flat()` simplifies nested array structures
- `Array.isArray()` is the safest way to verify arrays
- `Array.from()` works well with iterable data like strings
- `Array.of()` provides a clear way to create arrays from values

---

## Lesson 11: Objects in JavaScript (Object Literals)

Source File:  
[`02_basics/03_objects.js`](./02_basics/03_objects.js)

---

### What This Lesson Covers

This lesson introduces **objects in JavaScript** using object literals. Objects are fundamental to JavaScript and are used to group related data and behavior together.

The lesson also touches on symbols, property access patterns, immutability, and methods inside objects.

---

### Creating Objects

Objects can be created in multiple ways. This lesson focuses on **object literals**, which are the most commonly used and readable form.

Key concepts covered:

- Defining key–value pairs
- Using strings as object keys
- Storing arrays and different data types as values
- Using `Symbol` as a unique object key

---

### Accessing Object Properties

Two main ways to access object properties are demonstrated:

- Dot notation (`object.property`)
- Bracket notation (`object["property"]`)

Bracket notation is required when:
- The key contains spaces
- The key is a `Symbol`

---

### Symbols as Object Keys

- Symbols provide guaranteed uniqueness
- Even identical symbol descriptions create different keys
- Symbols must be accessed using bracket notation

This is useful for creating properties that should not clash with regular keys.

---

### Updating and Freezing Objects

- Object properties can be modified after creation
- `Object.freeze()` can be used to make an object immutable
- Once frozen, changes to the object are ignored

This concept is important when working with shared or sensitive data.

---

### Adding Methods to Objects

Objects can contain functions, referred to as **methods**.

Key ideas shown:

- Functions can be added dynamically to objects
- Methods can access object properties using `this`
- `this` refers to the current object context

Using `this` allows methods to work with object data in a flexible way.

---

### Key Takeaways

- Objects store related data and behavior together
- Bracket notation enables advanced property access
- Symbols create unique and collision-free keys
- `Object.freeze()` prevents unintended mutations
- Methods enhance object functionality
- `this` provides access to the object’s own properties

---

## Lesson 12: Objects in JavaScript (Advanced Object Operations)

Source File:  
[`02_basics/04_objects.js`](./02_basics/04_objects.js)

---

### What This Lesson Covers

This lesson continues the study of **objects in JavaScript**, focusing on object creation patterns, nested objects, object merging techniques, and commonly used `Object` utility methods.

It also introduces how objects are commonly structured when data is received from databases or APIs.

---

### Object Creation Patterns

Objects can be created in different ways:

- Using the `Object` constructor (singleton object)
- Using object literals (non-singleton object)

In practice, object literals are more commonly used due to their simplicity and readability.

---

### Working with Nested Objects

Objects can contain other objects as values.

Key points demonstrated:

- Deeply nested object structures
- Accessing nested properties using dot notation
- Common real-world use case: structured user data

Understanding nested objects is essential when working with complex data models.

---

### Combining Objects

Multiple approaches to merge objects are explored:

1. **Direct nesting**  
   Creating an object with other objects as properties, which does not merge values.

2. **`Object.assign()`**  
   Copies properties from source objects into a target object.  
   Using an empty object as the first argument avoids mutating existing objects.

   MDN Reference:  
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

3. **Spread operator (`...`)**  
   A modern and concise way to merge objects.

The spread operator is generally preferred for its readability and simplicity.

---

### Objects from Databases

Data from databases or APIs often arrives as an **array of objects**.

This lesson demonstrates:

- Accessing object properties inside arrays
- Using indexes to retrieve specific records

---

### Object Utility Methods

Common `Object` methods explored:

- `Object.keys()` – returns an array of property names
- `Object.values()` – returns an array of property values
- `Object.entries()` – returns key–value pairs as arrays
- `hasOwnProperty()` – checks if a property exists directly on the object

These methods are frequently used for validation, iteration, and debugging.

---

### Key Takeaways

- Object literals are the most common way to create objects
- Nested objects are common in real-world data
- Use `Object.assign()` or spread syntax to merge objects properly
- Data from databases often comes as arrays of objects
- Object utility methods help inspect and validate object structure

---

## Lesson 13: Object Destructuring and Understanding API Data

Source File:  
[`02_basics/04_objects.js`](./02_basics/04_objects.js)

---

### What This Lesson Covers

This lecture continues the discussion on **JavaScript objects**, focusing on:

- Object destructuring
- Renaming variables during destructuring
- How destructuring is commonly used in React
- Understanding API responses and JSON data structures

It also introduces real-world API data exploration using a public API and a JSON formatting tool.

---

### Object Destructuring in JavaScript

Destructuring allows you to extract values from objects and store them in variables in a clean and readable way.

Key concepts demonstrated:

- Extracting properties directly from objects
- Avoiding repetitive dot notation
- Improving code readability

Example concepts covered:
- Basic destructuring
- Renaming variables while destructuring (aliasing)

This pattern is widely used in modern JavaScript codebases.

---

### Destructuring in React

A common real-world use case of destructuring is in **React components**, especially when working with `props`.

Instead of accessing properties via `props.propertyName`, destructuring allows direct access inside function parameters, resulting in cleaner component code.

---

### Understanding APIs and JSON Data

APIs commonly return data in **JSON format**, which closely resembles JavaScript objects.

This lesson highlights:
- API responses structured as objects
- API responses structured as arrays of objects
- Why understanding object and array nesting is important

These patterns are fundamental when consuming APIs in frontend and backend applications.

---

### Real-World Example: Random User API

To understand real API data, the following tools were used:

- **Random User Generator API**  
  https://randomuser.me/

  This API provides complex, nested JSON data similar to what is encountered in production applications.

- **JSON Formatter**  
  https://jsonformatter.org/

  Used to visualize, format, and understand deeply nested JSON structures returned by APIs.

These tools help in:
- Identifying keys and nested properties
- Planning destructuring strategies
- Avoiding errors when accessing deeply nested data

---

### Key Takeaways

- Object destructuring simplifies property access
- Variable aliasing improves naming clarity
- Destructuring is heavily used in React
- API responses are usually JSON objects or arrays of objects
- Tools like JSON formatters make API exploration easier

---

## Lesson 14: Functions in JavaScript

Source File:  
[`03_basics/01_functions.js`](./03_basics/01_functions.js)

---

### What This Lesson Covers

This lecture introduces **functions in JavaScript**, one of the most fundamental building blocks of the language. It focuses on:

- Defining and calling functions
- Difference between function reference and execution
- Parameters vs arguments
- Return values and their importance
- Handling undefined values
- Default parameters in functions

---

### Defining and Calling Functions

A function is a reusable block of code designed to perform a specific task.

Key ideas demonstrated:
- Writing a function using the `function` keyword
- Understanding the difference between:
  - **Function reference** (just the function name)
  - **Function execution** (calling the function using `()`)

Functions help reduce repetition and make code more organized.

---

### Function Parameters and Arguments

Functions can accept inputs called **parameters**, and the actual values passed during execution are called **arguments**.

Important observations:
- JavaScript does not enforce strict data types for function parameters
- Passing unexpected types (like numbers and strings together) can lead to unexpected results
- Functions without a return statement return `undefined` by default

---

### Return Statements in Functions

This lesson highlights the importance of the `return` keyword:

- `return` sends a value back to the caller
- Any code written after `return` is not executed
- Returned values can be stored in variables and reused

Understanding return values is essential for writing predictable and reusable functions.

---

### Handling Undefined and Missing Arguments

When a function is called without required arguments:
- Parameters become `undefined`
- Template strings may display `undefined` if not handled properly

Techniques shown:
- Explicit checks for `undefined`
- Using logical checks (`if (!username)`) to handle empty or missing values
- Graceful handling of invalid inputs using early returns

---

### Default Function Parameters

Functions can have **default parameter values**, which are used when no argument is passed.

Benefits:
- Prevents `undefined` values
- Makes functions safer and more predictable
- Allows arguments to override defaults when provided

---

### Key Takeaways

- Functions help organize and reuse code
- Parameters are flexible but must be handled carefully
- Always be mindful of return values
- Input validation prevents unexpected behavior
- Default parameters improve function robustness

---

## Lesson 15: Functions with Arrays and Objects in JavaScript

Source File:  
[`03_basics/01_functions.js`](./03_basics/01_functions.js)

---

### What This Lesson Covers

This lecture extends the concept of functions by focusing on how **functions interact with arrays and objects**, which is extremely common in real-world JavaScript applications.

Topics covered include:
- Using the **rest operator** in function parameters
- Passing **objects** to functions
- Passing **arrays** to functions
- Accessing values safely inside functions

All previous code in this file has been commented out, and this lesson focuses only on the new examples below.

---

### Functions with the Rest Operator

The **rest operator (`...`)** allows a function to accept any number of arguments and collect them into an array.

Key points:
- The rest operator groups remaining arguments into an array
- Useful when the number of inputs is unknown (e.g., shopping cart prices)

Example behavior demonstrated:
- When only `...num1` is used, all arguments become part of an array
- When fixed parameters are defined before the rest operator, those parameters take the first values, and the rest are grouped

This pattern is commonly used in e-commerce carts, aggregations, and utility functions.

---

### Passing Objects to Functions

Functions can accept entire objects as arguments, allowing structured data to be processed easily.

Important concepts shown:
- Accessing object properties inside a function
- Using template strings to format object data
- Passing objects directly while calling a function (inline objects)

This pattern is widely used when handling:
- User data
- API responses
- Configuration objects

Note: Property names must match exactly, otherwise values may be `undefined`.

---

### Passing Arrays to Functions

Arrays can also be passed directly into functions and accessed using index positions.

Key ideas:
- Functions can extract specific values from arrays
- Arrays can be passed either as variables or directly as arguments
- Index-based access should be handled carefully to avoid unexpected `undefined` values

This approach is common when working with:
- Lists of prices
- Scores
- API-generated arrays

---

### Key Takeaways

- The rest operator helps handle variable numbers of arguments cleanly
- Functions can work seamlessly with objects and arrays
- Passing structured data improves function flexibility
- Always ensure property names and indexes are correct
- These patterns are foundational for real-world JavaScript and frameworks like React

---

## Lesson 16: Global Scope and Local Scope in JavaScript

Source File:  
[`03_basics/02_scopes.js`](./03_basics/02_scopes.js)

---

### What This Lesson Covers

This lecture focuses on **scope in JavaScript**, which defines **where variables can be accessed or modified** in your code. Understanding scope is critical for writing predictable, bug-free programs.

Topics covered include:
- Global scope
- Block (local) scope
- Differences between `let`, `const`, and `var`
- Scope behavior inside `if` blocks and loops

---

### Global Scope

Variables declared **outside any block or function** belong to the global scope.

Key points demonstrated:
- Global variables can be accessed anywhere in the file
- Overusing global variables can lead to naming conflicts and bugs

In this example:
- Variables declared with `let` outside the `if` block exist in the global scope
- They remain accessible after the block executes

---

### Block (Local) Scope

Variables declared using `let` and `const` inside `{}` are **block-scoped**.

Key observations:
- Variables inside an `if` block are not accessible outside it
- Inner variables can **shadow** global variables with the same name
- The global variable remains unchanged outside the block

This helps prevent accidental overwrites and keeps code modular.

---

### Why `var` Is Avoided

The code intentionally avoids using `var` to highlight best practices.

Important notes:
- `var` does **not respect block scope**
- Variables declared with `var` inside a block are still accessible outside
- This can cause unexpected behavior and hard-to-track bugs

Modern JavaScript prefers `let` and `const` for safer scoping.

---

### Scope Inside Loops

Loops also create block scope when using `let` and `const`.

Key idea:
- Variables declared inside loops are limited to the loop block
- They cannot be accessed outside the loop

This prevents loop variables from leaking into the surrounding scope.

---

### Key Takeaways

- Global scope variables are accessible everywhere
- `let` and `const` are block-scoped
- Variables inside blocks do not affect outer variables with the same name
- Avoid `var` due to its lack of block scoping
- Proper scoping leads to cleaner, safer, and more maintainable code

---

## Lesson 17: Scope Levels and Mini Hoisting in JavaScript

Source File:  
[`03_basics/02_scopes.js`](./03_basics/02_scopes.js)

---

### What This Lesson Covers

This lecture continues the discussion on **JavaScript scopes**, focusing on:
- Scope levels (nested scopes)
- Lexical scoping
- Function scope vs block scope
- Mini hoisting behavior in JavaScript
- Difference between function declarations and function expressions

All previously written scope examples are commented out, and the focus is on **nested functions and execution order**.

---

## Scope Levels and Lexical Scoping

JavaScript follows **lexical scoping**, which means:
- Inner functions can access variables from their parent scopes
- Outer scopes cannot access variables declared inside inner scopes

### Nested Function Scope

In this example:
- A function is defined inside another function
- The inner function can access variables from the outer function
- The outer function cannot access variables declared inside the inner function

This demonstrates how **scope flows inward**, not outward.

---

## Block Scope with `if` Statements

This section reinforces block-level scoping:
- Variables declared using `const` or `let` inside an `if` block exist only within that block
- Nested `if` blocks create their own scopes
- Variables declared inside inner blocks are not accessible in outer blocks

This prevents accidental data leakage and keeps logic isolated.

---

## Function Execution Context

A function must be **called** for its inner logic to execute.
- Inner functions only run when explicitly invoked
- Parent functions control the lifecycle of child functions

This helps in structuring modular and predictable code.

---

## Mini Hoisting in JavaScript

This part introduces **hoisting behavior differences**.

### Function Declarations

- Function declarations are hoisted
- They can be called **before** their definition appears in the file

This works because JavaScript loads function declarations into memory during the creation phase.

---

### Function Expressions

- Function expressions are **not hoisted**
- They behave like variables
- Calling them before initialization results in an error

This happens because:
- Only the variable name is hoisted
- The function assignment happens at runtime

---

## Key Differences Highlighted

| Concept | Function Declaration | Function Expression |
|------|----------------------|---------------------|
| Hoisted | Yes | No |
| Callable before definition | Yes | No |
| Stored as | Function | Variable reference |

---

## Key Takeaways

- JavaScript supports nested scopes
- Inner scopes can access outer scope variables
- Block scope applies to `let` and `const`
- Function declarations are hoisted
- Function expressions follow variable hoisting rules
- Understanding execution order prevents runtime errors

---

## Lesson 18: `this` Keyword and Arrow Functions in JavaScript

Source File:  
[`03_basics/03_arrow.js`](./03_basics/03_arrow.js)

---

### What This Lesson Covers

This lecture focuses on understanding:
- The `this` keyword in different contexts
- How `this` behaves inside objects and functions
- Differences between regular functions and arrow functions
- Arrow function syntax variations
- Implicit returns and returning objects from arrow functions

This is a crucial topic for writing predictable and bug-free JavaScript, especially when working with objects, callbacks, and modern frameworks like React.

---

## Understanding the `this` Keyword

### `this` Inside an Object

When `this` is used inside an object method:
- It refers to the **current object**
- It gives access to other properties of the same object
- The value of `this` depends on **how the function is called**

Changing object properties dynamically also changes the context accessed by `this`.

---

### `this` in the Global Scope

In a Node.js environment:
- `this` in the global scope refers to an empty object
- It does not behave the same way as in browsers

This highlights the importance of understanding the runtime environment.

---

### `this` Inside Regular Functions

When using normal functions:
- `this` does not automatically refer to local variables
- Accessing properties via `this` inside a regular function often results in `undefined`

This behavior is one of the reasons arrow functions were introduced.

---

## Arrow Functions and `this`

Arrow functions behave differently:
- They **do not have their own `this`**
- They inherit `this` from their surrounding (lexical) scope
- This makes them predictable and safer in many use cases

In this lesson:
- Logging `this` inside an arrow function shows that it does not bind its own context
- Arrow functions are ideal for callbacks and functional-style programming

---

## Arrow Function Syntax

### Basic Arrow Function

- Uses `=>` syntax
- Requires `return` when curly braces are used

---

### Implicit Return

- When curly braces are removed, the return value is implicit
- This makes functions concise and readable

---

### Returning Objects

- Objects must be wrapped in parentheses
- Without parentheses, JavaScript confuses the object with a function body

This is a common pitfall and an important syntax rule to remember.

---

## Key Takeaways

- `this` refers to the current execution context
- In object methods, `this` points to the object itself
- In regular functions, `this` can be `undefined`
- Arrow functions do not bind their own `this`
- Arrow functions simplify syntax and avoid context-related bugs
- Parentheses are required when returning objects implicitly

---

## Lesson 19: Immediately Invoked Function Expressions (IIFE) in JavaScript

Source File:  
[`03_basics/04_iife.js`](./03_basics/04_iife.js)

---

### What This Lesson Covers

This lecture introduces **Immediately Invoked Function Expressions (IIFE)** and explains:
- What an IIFE is
- Why IIFEs are used
- How IIFEs help avoid global scope pollution
- Different syntaxes for writing IIFEs
- Named vs unnamed IIFEs
- Using parameters with IIFEs

---

## What Is an IIFE?

An **IIFE** is a JavaScript function that:
- Is defined as an expression
- Executes immediately after its creation
- Does not leave variables in the global scope

This pattern is commonly used to:
- Protect variables from the global scope
- Execute setup or initialization logic
- Avoid naming conflicts in large applications

---

## Basic IIFE Structure

An IIFE consists of:
1. A function wrapped inside parentheses to convert it into an expression
2. An immediate function call using `()`

The semicolon at the end is important to prevent issues when multiple IIFEs are written sequentially.

---

## Named IIFE

A **named IIFE**:
- Has a function name
- Helps in debugging and stack traces
- Still executes immediately and does not pollute the global scope

This pattern is useful when you want clarity during debugging.

---

## Multiple IIFEs

When writing more than one IIFE:
- Each IIFE must be properly terminated with a semicolon
- This avoids unexpected execution errors caused by JavaScript’s automatic semicolon insertion

---

## Arrow Function IIFE

IIFEs can also be written using arrow functions:
- Useful for concise syntax
- Inherits `this` from the surrounding scope
- Commonly used in modern JavaScript codebases

Arrow IIFEs can also accept parameters, making them flexible for dynamic initialization logic.

---

## Key Takeaways

- IIFEs execute immediately after being defined
- They help prevent global scope pollution
- Parentheses are required to convert a function into an expression
- Semicolons are important when chaining multiple IIFEs
- IIFEs can be written using regular functions or arrow functions
- Parameters can be passed to IIFEs for dynamic execution

---

## Lesson 20: How JavaScript Executes Code and How the Call Stack Works

Type: Theory Lecture (No source file uploaded)

---

### What This Lesson Covers

This lecture explains **how JavaScript executes code internally** and builds a mental model around:
- Execution contexts
- The two-phase execution process
- How functions are handled
- How the call stack works

This is a **conceptual lesson**, and the example code discussed here is only for demonstration purposes and is not included as a `.js` file in the repository.

---

## JavaScript Execution Context

An **Execution Context** is an environment where JavaScript code is evaluated and executed.

JavaScript has three types of execution contexts:

1. **Global Execution Context**
   - Created when the program starts
   - `this` is initialized here
   - Exists only once per program

2. **Function Execution Context**
   - Created every time a function is invoked
   - Has its own variable environment and execution thread

3. **Eval Execution Context**
   - Created when code is executed inside `eval()`
   - Rarely used and generally discouraged

---

## Two Phases of JavaScript Execution

Every execution context goes through **two phases**:

### 1. Memory Creation Phase (Creation Phase)

In this phase:
- Memory is allocated for variables and functions
- Variables are initialized with `undefined`
- Function definitions are stored entirely

No code is executed in this phase.

---

### 2. Execution Phase

In this phase:
- Variables are assigned actual values
- Functions are executed
- New execution contexts are created for function calls

---

## Step-by-Step Execution Flow (Conceptual)

### Global Execution Context

**Memory Phase**
- Variables are allocated memory and set to `undefined`
- Functions are stored as definitions

**Execution Phase**
- Variables receive assigned values
- Function calls create new execution contexts

---

### Function Execution Context

Each function call creates:
- A new variable environment
- A new execution thread

Inside a function:
1. Memory Phase  
   - Parameters and local variables are set to `undefined`
2. Execution Phase  
   - Parameters receive values
   - Logic executes
   - Return value is produced
3. Once completed, the function execution context is destroyed

---

## Call Stack

The **Call Stack** manages execution contexts.

- Works on **LIFO (Last In, First Out)** principle
- Global execution context is pushed first
- Each function call is pushed on top of the stack
- Once a function finishes, it is popped off the stack

This ensures JavaScript executes code **one context at a time**, even though it may appear asynchronous in some cases.

---

## Demonstration Code (Conceptual Only)

The following example was used only to explain execution flow and call stack behavior during the lecture:

- Variables are declared in the global scope
- A function is defined
- The function is called multiple times
- Each call creates a new execution context
- The call stack manages entry and exit of these contexts

This code is **not committed** to the repository, as its purpose is explanatory rather than practical.

---

## Key Takeaways

- JavaScript executes code inside execution contexts
- Every context has a memory phase and an execution phase
- Functions create their own execution contexts
- The call stack manages execution order
- JavaScript follows a single-threaded execution model
- Understanding this model helps debug scope, hoisting, and runtime issues

---

## Lesson 21: Control Flow – `if` Conditions in JavaScript

Source File:  
[`04_control_flow/one.js`](./04_control_flow/one.js)

---

### What This Lesson Covers

This lecture marks the transition from JavaScript basics into **control flow**.  
The focus here is on understanding how **`if` conditions** work and how JavaScript evaluates decisions based on different expressions.

Topics covered include:
- Basic `if` and `else` statements
- Comparison operators
- Strict vs loose equality
- Block scope inside conditional statements
- Implicit vs explicit conditional blocks
- Logical operators (`&&`, `||`) for multiple conditions

---

## Comparison Operators

JavaScript provides several comparison operators used inside conditions:

- `<`, `>`, `<=`, `>=`
- `==`, `!=` (loose comparison)
- `===`, `!==` (strict comparison)

Strict comparison (`===`) checks **both value and type**, making it the preferred choice for clean and predictable code.

---

## Basic `if` / `else` Flow

Conditional logic allows code to execute only when a condition evaluates to `true`.

- If the condition is true, the `if` block executes
- Otherwise, the `else` block executes
- Code outside the condition always runs

This structure forms the foundation of decision-making in JavaScript.

---

## Scope Inside `if` Blocks

Variables declared using `const` or `let` inside an `if` block:
- Exist only within that block
- Are not accessible outside the condition

This reinforces the importance of block scope and helps prevent unintended side effects.

---

## Implicit Scope in `if` Statements

JavaScript allows writing single-line `if` statements without curly braces:
- This is known as **implicit scope**
- Only the immediate next statement is controlled by the condition

While valid, this style should be used carefully to avoid readability issues.

---

## Chained Conditions with `else if`

Multiple conditions can be evaluated sequentially using:
- `if`
- `else if`
- `else`

Only the first matching condition is executed, and the rest are skipped.

---

## Logical Operators in Conditions

### AND (`&&`)
- All conditions must be `true`
- Commonly used for permission or validation checks

### OR (`||`)
- At least one condition must be `true`
- Useful when multiple valid paths exist

These operators help build more expressive and realistic decision logic.

---

## Key Takeaways

- Control flow determines how and when code executes
- `if` statements are the foundation of decision-making
- Prefer strict equality (`===`) over loose equality
- Variables inside `if` blocks follow block scope rules
- Logical operators allow combining multiple conditions
- Clean conditional logic improves readability and maintainability

---

## Lesson 22: Control Flow – `switch` Statement in JavaScript

Source File:  
[`04_control_flow/switch.js`](./04_control_flow/switch.js)

---

### What This Lesson Covers

This lecture continues the exploration of **control flow** in JavaScript, focusing on the **`switch` statement**.

Topics covered include:
- Basic `switch` syntax
- How `switch` compares values
- The role of `case`, `break`, and `default`
- Type sensitivity in `switch` statements
- When to use `switch` instead of multiple `if-else` conditions

---

## What Is a `switch` Statement?

A `switch` statement:
- Evaluates an expression once
- Compares the result against multiple `case` values
- Executes the matching case block

It is often used when:
- You are checking one value against many known options
- The logic becomes repetitive with `if-else` chains
- Readability matters

---

## Basic `switch` Structure

A `switch` statement consists of:
- A key (expression to evaluate)
- Multiple `case` labels
- A `default` block for unmatched cases
- `break` statements to stop execution

Without `break`, JavaScript continues executing subsequent cases, a behavior known as **fall-through**.

---

## Type Sensitivity in `switch`

The `switch` statement uses **strict comparison (`===`)** internally.

This means:
- Both value and type must match
- `"3"` and `3` are treated as different values

This makes understanding data types especially important when working with `switch`.

---

## Role of `default`

The `default` case:
- Runs when no `case` matches
- Acts as a fallback or error-handling path
- Is optional but strongly recommended

It helps catch unexpected or invalid inputs.

---

## When to Use `switch`

Use `switch` when:
- A single variable is compared against many values
- Conditions are equality-based
- Code readability improves over long `if-else` chains

Avoid `switch` when:
- Conditions involve ranges or complex logic
- Multiple variables are involved

---

## Key Takeaways

- `switch` is a clean alternative to repetitive `if-else` blocks
- It uses strict equality for comparisons
- `break` prevents fall-through behavior
- `default` handles unexpected cases
- Data type consistency is crucial in `switch` statements

---

## Lesson 23: Control Flow – Truthy Values and the Nullish Coalescing Operator

Source File:  
[`04_control_flow/truthy.js`](./04_control_flow/truthy.js)

---

### What This Lesson Covers

This lecture completes the control flow section by focusing on:
- Truthy and falsy values in JavaScript
- How conditions are evaluated beyond `true` and `false`
- Checking empty arrays and objects
- The Nullish Coalescing Operator (`??`)
- Difference between `??` and the ternary operator

Understanding these concepts is essential for writing defensive and predictable JavaScript code.

---

## Truthy and Falsy Values

In JavaScript, conditions do not always evaluate to explicit `true` or `false`.  
Instead, values are coerced into a boolean context.

### Falsy Values

The following values always evaluate to `false` in a condition:
- `false`
- `0`, `-0`
- `0n` (BigInt)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

---

### Truthy Values

All values not listed as falsy are considered truthy, including:
- `"0"`
- `"false"`
- `" "` (space)
- `[]` (empty array)
- `{}` (empty object)
- `function() {}`

This explains why certain conditions may execute even when data appears “empty”.

---

## Checking Empty Arrays and Objects

Since empty arrays and objects are truthy, explicit checks are required:

- Arrays are checked using their `.length`
- Objects are checked using `Object.keys().length`

These checks help prevent logical bugs when validating data.

---

## Nullish Coalescing Operator (`??`)

The **Nullish Coalescing Operator** returns the right-hand value only when the left-hand value is:
- `null`
- `undefined`

It does **not** trigger on other falsy values like `0` or `""`.

This makes it ideal for:
- Setting default values
- Avoiding unintended overrides

Multiple `??` operators can be chained, and evaluation stops at the first valid value.

---

## Ternary Operator vs Nullish Coalescing

The ternary operator:
- Is a conditional expression
- Executes logic based on a boolean condition

The nullish coalescing operator:
- Handles only `null` and `undefined`
- Is not a replacement for conditional logic

Both serve different purposes and should be used accordingly.

---

## Key Takeaways

- JavaScript evaluates conditions using truthy and falsy rules
- Empty arrays and objects are truthy
- Explicit checks are required for empty data structures
- `??` handles only `null` and `undefined`
- Ternary operators and `??` solve different problems
- Clear checks improve code reliability

---

## Lesson 24: Iterations – `for` Loop, `break`, and `continue` in JavaScript

Source File:  
[`05_iterations/one.js`](./05_iterations/one.js)

---

### What This Lesson Covers

This lecture begins the **iterations** section and focuses on:
- Using the `for` loop in JavaScript
- Loop initialization, condition, and increment
- Nested `for` loops
- Iterating over arrays
- Controlling loop execution using `break` and `continue`

Loops are a fundamental building block for working with repetitive logic and data structures.

---

## Basic `for` Loop

A `for` loop runs as long as a condition evaluates to `true`.

It consists of:
- Initialization (runs once)
- Condition check (before every iteration)
- Increment or update (after every iteration)

This structure is ideal when the number of iterations is known in advance.

---

## Conditional Logic Inside Loops

Conditions can be added inside loops to:
- Detect specific values
- Trigger custom logic at certain iterations

This allows dynamic behavior while iterating.

---

## Nested `for` Loops

A loop inside another loop is called a **nested loop**.

Common use cases include:
- Generating multiplication tables
- Working with matrices
- Comparing multiple data sets

The outer loop controls the number of times the inner loop runs.

---

## Iterating Over Arrays

Arrays are commonly iterated using a `for` loop:
- The loop runs from index `0` to `array.length - 1`
- Each iteration accesses one element of the array

This is one of the most fundamental ways to traverse arrays in JavaScript.

---

## Using `break`

The `break` statement:
- Immediately terminates the loop
- Stops all further iterations
- Transfers control outside the loop

It is useful when a condition has been met and further looping is unnecessary.

---

## Using `continue`

The `continue` statement:
- Skips the current iteration
- Moves directly to the next iteration
- Does not exit the loop

This is useful when certain values should be ignored without stopping the loop entirely.

---

## Key Differences Between `break` and `continue`

| Statement | Effect |
|--------|--------|
| `break` | Exits the loop completely |
| `continue` | Skips the current iteration only |

---

## Key Takeaways

- `for` loops are ideal when iteration count is known
- Nested loops allow multi-level iteration
- Arrays can be traversed using index-based loops
- `break` stops loop execution entirely
- `continue` skips only the current iteration
- Proper loop control improves performance and readability

---

## Lesson 25: Iterations – `while` and `do...while` Loops in JavaScript

Source File:  
[`05_iterations/two.js`](./05_iterations/two.js)

---

### What This Lesson Covers

This lecture continues the **iterations** topic and focuses on:
- The `while` loop
- The `do...while` loop
- Differences between `for`, `while`, and `do...while`
- Situations where `while`-based loops are more suitable

These loops are especially useful when the number of iterations is **not known in advance**.

---

## `while` Loop

A `while` loop runs as long as a given condition remains `true`.

Key characteristics:
- Condition is checked **before** each iteration
- The loop may not run at all if the condition is initially `false`
- Manual control of the loop variable is required

This makes it useful when loop execution depends on a dynamic condition.

---

## Updating Values Inside a `while` Loop

Inside the loop:
- The loop variable must be updated explicitly
- Failure to update it correctly can lead to infinite loops

Incrementing or modifying the variable ensures that the loop eventually terminates.

---

## Iterating Over Arrays Using `while`

Arrays can also be traversed using a `while` loop:
- Start with an index variable
- Continue looping until the index reaches the array length
- Increment the index manually

This approach is useful when array traversal needs more flexible control.

---

## `do...while` Loop

A `do...while` loop is similar to a `while` loop, with one key difference:
- The loop body executes **at least once**, regardless of the condition

This is because the condition is checked **after** the loop body runs.

---

## When to Use `do...while`

Use a `do...while` loop when:
- You want the code block to run at least once
- The condition depends on logic executed inside the loop
- You are working with menus, user input, or retry logic

---

## Comparison: `while` vs `do...while`

| Loop Type | Condition Check | Guaranteed Execution |
|--------|----------------|---------------------|
| `while` | Before loop starts | No |
| `do...while` | After loop executes | Yes (once) |

---

## Key Takeaways

- `while` loops are ideal when iteration count is unknown
- Conditions are evaluated before each `while` iteration
- `do...while` loops always execute at least once
- Manual control of loop variables is essential
- Choosing the right loop improves clarity and control

---

## Lesson 26: Iterations – High Order Array Loops in JavaScript

Source Files:  
- `05_iterations/three.js`  
- `05_iterations/four.js`  
- `05_iterations/five.js`  

Reference (Maps – MDN):  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

---

### What This Lesson Covers

This lecture dives into **high-order iteration patterns** in JavaScript and focuses on:
- `for...of` loop
- `for...in` loop
- `Map` objects and their iteration behavior
- High Order Functions like `forEach`
- Iterating over arrays, strings, objects, and complex data structures

These concepts are extremely important for **modern JavaScript**, especially when working with data, APIs, and frameworks like React.

---

## `for...of` Loop

The `for...of` loop is used to iterate over **iterable objects**.

Iterable examples:
- Arrays
- Strings
- Maps
- Sets

### Key Points
- Directly gives **values**, not indexes
- Clean and readable syntax
- Works only on iterable data structures

### Common Use Cases
- Looping over arrays
- Iterating character-by-character over strings
- Traversing Maps

---

## Iterating Over Strings

Strings are iterable in JavaScript.  
Each character can be accessed individually using `for...of`.

This is useful for:
- Text processing
- Validation
- Parsing characters

---

## `Map` Object

A `Map` stores **unique key–value pairs** and preserves insertion order.

Why use `Map` instead of plain objects?
- Keys can be of any type
- Maintains insertion order
- Designed specifically for iteration

### Iterating Over Maps

- Iterating directly gives `[key, value]` pairs
- Destructuring can be used for cleaner access

📌 **Important Notes**
- `Map` is iterable using `for...of`
- `Map` is **not iterable** using `for...in`
- Plain objects are **not iterable** using `for...of`

(These limitations are demonstrated in the commented code.)

---

## `for...in` Loop

The `for...in` loop is used to iterate over **keys** of an object.

### Works With
- Objects
- Arrays (but iterates over indexes, not values)

### Key Characteristics
- Returns keys (property names)
- Ideal for objects
- Less preferred for arrays when values are needed

---

## `for...in` with Objects

Using `for...in`:
- Keys can be accessed directly
- Values can be accessed using bracket notation

This pattern is commonly used when dealing with configuration objects or dictionaries.

---

## `for...in` with Arrays

When used on arrays:
- It iterates over **indexes**
- Indexes are returned as strings

⚠️ Because of this behavior, `for...of` or `forEach` is usually preferred for arrays.

---

## High Order Functions

A **High Order Function** is a function that:
- Takes another function as an argument, or
- Returns a function

JavaScript arrays provide built-in high-order methods like:
- `forEach`
- `map`
- `filter`
- `reduce`

This lesson focuses on `forEach`.

---

## `forEach` Method

`forEach` executes a callback function **once for each element** in an array.

### Key Points
- Does not return a value
- Ideal for side effects (logging, DOM updates, mutations)
- Callback receives:
  - current item
  - index
  - entire array

### Callback Styles
- Anonymous function
- Arrow function
- Named function reference

---

## Using `forEach` with Objects Inside Arrays

Arrays of objects are very common in real-world applications (API responses, databases).

Using `forEach`, you can:
- Access object properties
- Extract specific values
- Perform operations on structured data

This pattern is heavily used in frontend development.

---

## Key Takeaways

- `for...of` → values from iterable data structures
- `for...in` → keys of objects (or indexes of arrays)
- Objects are **not iterable** with `for...of`
- Maps are iterable and preserve order
- `forEach` is a powerful high-order function
- Callback functions unlock expressive iteration logic

---

````markdown
## Lesson 27: Iterations – `filter`, `map`, and `reduce` in JavaScript

Source Files:  
- `05_iterations/six.js`  
- `05_iterations/seven.js`  
- `05_iterations/eight.js`  

Reference (Reduce – MDN):  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

---

### What This Lesson Covers

This lecture introduces the **most important High Order Array Methods** in JavaScript:

- `forEach`
- `filter`
- `map`
- `reduce`

These methods are heavily used in **modern JavaScript**, **React**, and while handling **API data**.

---

## `forEach`

`forEach` is used to iterate over arrays, but **it does not return anything**.

### Syntax

```javascript
array.forEach((item, index, arr) => {
    // logic here
});
````

### Key Point

* Used only for side effects (logging, updating values, etc.)
* Does **not** create a new array
* Always returns `undefined`

---

## `filter`

`filter` is used to **extract elements** from an array based on a condition.
It **returns a new array**.

### Syntax

```javascript
const newArray = array.filter((item) => condition);
```

or when using a scope:

```javascript
const newArray = array.filter((item) => {
    return condition;
});
```

### Use Cases Demonstrated

* Filtering numbers greater than a value
* Filtering objects based on properties (books by genre and year)

### Important

If using `{}` in arrow function, you must use `return`.

---

## `filter` vs `forEach`

The same filtering can be done using `forEach`, but it requires:

* Creating an empty array
* Manually pushing values

`filter` does this automatically and is cleaner.

---

## Working with Arrays of Objects using `filter`

A common real-world scenario:

* Filtering data from an array of objects (like books, users, products)

Examples shown:

* Books of genre "History"
* Books published after 1980 and genre "History"

---

## `map`

`map` is used to **transform** every element of an array.
It **returns a new array** of the same length.

### Syntax

```javascript
const newArray = array.map((item) => transformation);
```

or

```javascript
const newArray = array.map((item) => {
    return transformation;
});
```

### Chaining

One of the most powerful features of `map` is **method chaining**:

```javascript
array
  .map(...)
  .map(...)
  .filter(...);
```

This allows multiple transformations in a clean and readable way.

---

## `reduce`

`reduce` is used to **reduce an array to a single value**.

This could be:

* Sum
* Total price
* Combined result
* Aggregated data

### Syntax

```javascript
const result = array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);
```

Arrow function version:

```javascript
const result = array.reduce((acc, currVal) => acc + currVal, 0);
```

### Parameters

* `accumulator` → stores the result of previous computation
* `currentValue` → current item in iteration
* `initialValue` → starting value of accumulator

---

## Real-World Example with `reduce`

Using `reduce` to calculate total cart value:

```javascript
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
```

This pattern is very common in:

* Shopping carts
* Billing systems
* Data aggregation

---

## Key Differences

| Method    | Returns New Array | Purpose                            |
| --------- | ----------------- | ---------------------------------- |
| `forEach` | No                | Perform side effects               |
| `filter`  | Yes               | Select elements based on condition |
| `map`     | Yes               | Transform elements                 |
| `reduce`  | No (single value) | Aggregate into one result          |

---

## Key Takeaways

* Use `forEach` when you just want to loop
* Use `filter` when you want to select elements
* Use `map` when you want to transform elements
* Use `reduce` when you want one final value
* Method chaining makes code powerful and expressive
* These methods are foundational for React and modern JS development



## Lesson 28: DOM Introduction – Visualizing the DOM Tree Properly

Source File:  
- `06_dom/one.html`

---

### What is DOM?

**DOM (Document Object Model)** is the browser’s **object representation** of your HTML page.

When the browser loads an HTML file, it **does not read it as text**.  
It converts the entire document into a **tree of objects (nodes)** that JavaScript can interact with.

---

### The Two Most Important Console Commands

Open the browser console on `one.html` and try:

```javascript
console.log(window);
console.log(document);


Notice that:

* `window` → the global object (contains everything)
* `document` → a property of `window` representing the web page
* All HTML elements exist inside `document` as nodes

---

### 🌳 Visualizing the DOM Tree

Think of your HTML being converted into this structure:

```text
Window
└── Document
    └── html
        ├── head
        │   ├── title
        │   │   └── "text node"
        │   ├── meta [attribute]
        │   └── meta [attribute]
        │
        └── body
            └── div
                ├── @class="bg-black"
                ├── h1
                │   ├── @class="bg-black"
                │   └── "DOM learning - Document Object Model"
                └── p
                    └── "Lorem ipsum..."
```


### Important Understanding from the Diagram

Every part of HTML becomes a **node**:

| HTML Part                  | Becomes in DOM  |
| -------------------------- | --------------- |
| Tags (`div`, `h1`)         | Element Nodes   |
| Text inside tags           | Text Nodes      |
| Attributes (`class`, `id`) | Attribute Nodes |
| Entire page                | Document Node   |

---

### Node Types You Must Remember

1. **Document Node** – entire page
2. **Element Node** – all HTML tags
3. **Text Node** – text inside elements
4. **Attribute Node** – class, id, src, href, etc.

---

### Why This Matters

From now on, JavaScript will **never manipulate HTML directly**.

It will manipulate:

> The DOM representation of HTML

This is the foundation for:

* DOM manipulation
* Event handling
* Dynamic content
* React (Virtual DOM concept)

---

### Very Important: `HTMLCollection` is NOT an Array

When you select elements using methods like:

```javascript
document.getElementsByClassName("bg-black");
document.getElementsByTagName("div");
```

The browser returns an **HTMLCollection**.

#### HTMLCollection Characteristics:

* Looks like an array
* Has index access (`[0]`)
* Has `length`
* **But it is NOT an array**
* You cannot use `.map()`, `.forEach()`, `.filter()` directly

Example:

```javascript
const elements = document.getElementsByClassName("bg-black");
elements.forEach(el => console.log(el)); // ❌ Error
```

---

### How to Convert HTMLCollection to Array

```javascript
const elements = document.getElementsByClassName("bg-black");
const arr = Array.from(elements);

arr.forEach(el => console.log(el)); // ✅ Works
```

---

### Difference Between NodeList and HTMLCollection

| Feature            | HTMLCollection | NodeList         |
| ------------------ | -------------- | ---------------- |
| Returned by        | getElementsBy* | querySelectorAll |
| Is array?          | ❌ No           | ❌ No             |
| forEach available? | ❌ No           | ✅ Yes            |
| Live collection?   | ✅ Yes          | ❌ Usually static |

---

### Live vs Static Collection

* **HTMLCollection is live** → updates automatically if DOM changes
* **NodeList is static** → does not update automatically

---

### Connecting This to Our HTML File

In `one.html`:

```html
<div class="bg-black">
    <h1 class="bg-black">DOM learning - Document Object Model</h1>
    <p>...</p>
</div>
```

If you run:

```javascript
document.getElementsByClassName("bg-black");
```

You get an **HTMLCollection** of 2 elements (`div` and `h1`).

---

### Key Takeaways

* Browser converts HTML into a DOM tree of nodes
* `window` → global object
* `document` → DOM of the page
* Tags → element nodes
* Text → text nodes
* Attributes → attribute nodes
* **HTMLCollection is not an array**
* Convert collections to arrays to use array methods
* Understanding this is mandatory before DOM manipulation





## License

This repository is open for learning and educational purposes.  
License details will be added as the repository evolves.

---

Happy Learning & Coding! 
