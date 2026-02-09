# JavaScript Projects

This document tracks the hands-on projects built as part of the **Mastering JavaScript** journey.

These projects focus on applying JavaScript concepts to real DOM interactions and building small, practical applications.

---

## Project 1: Color Changer (Background Color Switcher)

**Project Folder:**  
[`07_projects/1-colorChanger`](./1-colorChanger)

**Files:**
- [`index.html`](./1-colorChanger/index.html)
- [`style.css`](./1-colorChanger/style.css)
- [`script.js`](./1-colorChanger/script.js)

---

### Project Objective

Build a simple web page where clicking on different colored boxes changes the **background color** of the entire page.

This project reinforces understanding of:

- DOM selection using `querySelectorAll`
- Event handling using `addEventListener`
- Working with `event.target`
- Manipulating styles dynamically with JavaScript
- Iterating over NodeLists using `forEach`

---

### Key Concepts Practiced

| Concept                     | Implementation                                   |
|----------------------------|---------------------------------------------------|
| Selecting multiple elements| `document.querySelectorAll('.button')`           |
| Selecting body             | `document.querySelector('body')`                 |
| Event Listener             | `click` event on each color button               |
| Event Object               | Using `e.target.id`                             |
| DOM Style Manipulation     | `body.style.backgroundColor = ...`               |
| Iteration                  | `forEach` over NodeList                          |

---

### How It Works

Each colored `<span>` has a unique `id`:

```html
<span class="button" id="grey"></span>
<span class="button" id="white"></span>
<span class="button" id="blue"></span>
<span class="button" id="yellow"></span>
```

JavaScript listens for click events on these elements and uses the id to set the background color of the page dynamically.

---

### JavaScript Logic

1. Select all elements with class `.button`
2. Select the `<body>` element
3. Loop through each button
4. Attach a click event listener
5. Detect which button was clicked using `e.target.id`
6. Change the background color of the page using that id

---

---

## Project 2: BMI Calculator

**Project Folder:**  
[`07_projects/2-BMICalculator`](./2-BMICalculator)

**Files:**
- [`index.html`](./2-BMICalculator/index.html)
- [`style.css`](./2-BMICalculator/style.css)
- [`script.js`](./2-BMICalculator/script.js)

---

### Project Objective

Build a **BMI (Body Mass Index) Calculator** that takes user input for height and weight, validates the inputs, and calculates BMI dynamically using JavaScript.

This project focuses heavily on:

- Handling **form submission**
- Preventing default browser behavior
- Validating user input
- Performing calculations
- Displaying dynamic results in the DOM

---

### Key Concepts Practiced

| Concept                     | Implementation                                      |
|----------------------------|------------------------------------------------------|
| Form selection             | `document.querySelector('form')`                    |
| Submit event handling      | `addEventListener('submit', ...)`                   |
| Prevent page reload        | `e.preventDefault()`                                |
| Reading input values       | `.value` from input fields                          |
| Type conversion            | `parseInt()`                                        |
| Input validation           | `isNaN()`, value checks                             |
| DOM manipulation           | Updating `innerHTML` of results                     |
| Mathematical calculation   | BMI formula using height and weight                 |

---

### How It Works

The user enters:

- Height in centimeters
- Weight in kilograms

On clicking **Calculate**, JavaScript:

1. Stops the form from reloading the page.
2. Reads and converts the input values into numbers.
3. Validates whether inputs are correct.
4. Calculates BMI using the formula:

```BMI = weight / ((height * height) / 10000)```

5. Displays the result dynamically inside the page.

---

### Validation Logic

The script ensures:

- Height and weight are numbers
- Values are positive
- Users are prompted when invalid input is provided

---
