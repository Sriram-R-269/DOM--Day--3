document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let firstOperand = "";

    document.querySelectorAll(".number").forEach(button => {
        button.addEventListener("click", function() {
            currentInput += button.textContent;
            display.textContent = currentInput;
        });
    });

    document.querySelectorAll(".operator").forEach(button => {
        button.addEventListener("click", function() {
            if (currentInput !== "") {
                if (firstOperand === "") {
                    firstOperand = currentInput;
                    currentInput = "";
                    operator = button.textContent;
                } else {
                    const result = calculate(firstOperand, currentInput, operator);
                    firstOperand = result;
                    currentInput = "";
                    operator = button.textContent;
                    display.textContent = result;
                }
            }
        });
    });

    document.getElementById("clear").addEventListener("click", function() {
        currentInput = "";
        operator = "";
        firstOperand = "";
        display.textContent = "0";
    });

    document.getElementById("calculate").addEventListener("click", function() {
        if (currentInput !== "" && firstOperand !== "" && operator !== "") {
            const result = calculate(firstOperand, currentInput, operator);
            display.textContent = result;
            currentInput = result;
            operator = "";
            firstOperand = "";
        }
    });

    function calculate(num1, num2, op) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (op) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                if (num2 === 0) {
                    alert("Cannot divide by zero!");
                    return "";
                }
                return num1 / num2;
            case "%":
                return num1 % num2;
        }
    }

    document.addEventListener("keydown", function(event) {
        const key = event.key;
        if (!isNaN(key)) {
            currentInput += key;
            display.textContent = currentInput;
        } else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
            if (currentInput !== "") {
                if (firstOperand === "") {
                    firstOperand = currentInput;
                    currentInput = "";
                    operator = key;
                } else {
                    const result = calculate(firstOperand, currentInput, operator);
                    firstOperand = result;
                    currentInput = "";
                    operator = key;
                    display.textContent = result;
                }
            }
        } else if (key === "Enter") {
            if (currentInput !== "" && firstOperand !== "" && operator !== "") {
                const result = calculate(firstOperand, currentInput, operator);
                display.textContent = result;
                currentInput = result;
                operator = "";
                firstOperand = "";
            }
        } else {
            alert("Only numbers are allowed");
        }
    });
});
