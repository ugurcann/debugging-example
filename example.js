function appendResult(result) {
    document.querySelector('#result')?.remove(); // Set breakpoint here

    const resultText = document.createElement('div');

    resultText.innerText = 'Result: ' + result;
    resultText.id = 'result';

    document.body.appendChild(resultText);
    console.log(result);

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}

function add() {
    var num1 = document.getElementById('input1').value;
    var num2 = document.getElementById('input2').value;

    appendResult(Number(num1) + Number(num2));
}

function subtract() {
    var num1 = document.getElementById('input1').value;
    var num2 = document.getElementById('input2').value;

    appendResult(Number(num1) - Number(num2));
}

function multiply() {
    var num1 = document.getElementById('input1').value;
    var num2 = document.getElementById('input2').value;

    appendResult(Number(num1) * Number(num2));
}

function divide() {
    var num1 = document.getElementById('input1').value;
    var num2 = document.getElementById('input2').value;

    if (num2 != 0) {
        appendResult(Number(num1) / Number(num2));
    } else {
        appendResult('Cannot divide by zero');
    }
}