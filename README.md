# PW_practice

A hands-on JavaScript fundamentals practice repository built alongside Playwright learning. This repo covers core JavaScript concepts through organized, topic-based folders — serving as a reference and sandbox for anyone starting out with JavaScript and Playwright automation.

---

## 📁 Repository Structure

```
PW_practice/
├── datatype/               # JavaScript data types (string, number, boolean, etc.)
├── conditionalstatements/  # if/else, switch, ternary operator examples
├── variable_scope/         # var, let, const — scope and hoisting
├── Redeclaratin/           # Variable redeclaration behavior across var/let/const
├── hosting/                # JavaScript hoisting concepts
├── test.js                 # Practice test/script file
└── monitor.js              # Monitoring/utility script
```

---

## 🧠 Topics Covered

### 1. Data Types (`datatype/`)
Exploration of JavaScript's primitive and reference data types:
- `string`, `number`, `boolean`, `null`, `undefined`
- `object`, `array`
- Type checking with `typeof`

### 2. Conditional Statements (`conditionalstatements/`)
Flow control using:
- `if / else if / else`
- `switch` statements
- Ternary (shorthand) operators

### 3. Variable Scope (`variable_scope/`)
Understanding how JavaScript scoping works:
- Block scope (`let`, `const`)
- Function scope (`var`)
- Global vs local variables

### 4. Redeclaration (`Redeclaratin/`)
Behavior differences when redeclaring variables:
- `var` allows redeclaration; `let` and `const` throw errors
- Practical examples and edge cases

### 5. Hoisting (`hosting/`)
How JavaScript moves declarations to the top of their scope:
- Function hoisting
- Variable hoisting with `var`
- Why `let` and `const` are not hoisted the same way

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm

### Clone the Repository
```bash
git clone https://github.com/omgutty/PW_practice.git
cd PW_practice
```

### Run a Script
```bash
node test.js
node monitor.js
```

---

## 🎭 About Playwright

This repository is part of a Playwright learning journey. [Playwright](https://playwright.dev/) is a powerful end-to-end testing framework by Microsoft that supports Chromium, Firefox, and WebKit.

To get started with Playwright:
```bash
npm init playwright@latest
npx playwright install
npx playwright test
```

---

## 🛠️ Tech Stack

- **Language:** JavaScript (100%)
- **Runtime:** Node.js
- **Testing Framework:** Playwright (in progress)

---

## 📌 Notes

- This is a practice/learning repository — code is intentionally simple and educational.
- Folder names reflect the JS concept being explored.
- More topics and Playwright test examples may be added over time.

---

## 📄 License

This project is open source and available for learning purposes.
