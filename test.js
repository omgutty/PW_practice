let arr = [10, 20, 30];
arr.push(40);
console.log(arr.length);

let browsers = ['chrome', 'firefox', 'safari'];
let removed = browsers.pop();
console.log(removed)



for (let i = 0; i < 3; i++) {
    if (i === 1) {
        break;
    }
    console.log(i);
}
//0


let colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}


let message = 'Playwright Selenium Cypress';
let tools = message.split(' ');
console.log(tools); 


let fruits = ['apple', 'banana', 'orange'];

for (let index in fruits) {
    console.log(index + ': ' + fruits[index]);
}

let numbers = [5, 10, 15];
numbers.shift();
numbers.push(20);
numbers.unshift(1);
console.log(numbers);