const display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstnumber = "";

document .querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C"){
            currentInput = "";
            operator = "";
            firstnumber = "";
            display.textContent = "0";
        }
        else if (value === "=") {
            if (firstnumber && operator && currentInput) {
                const secondNumber = parseFloat(currentInput);
                let result;

                switch (operator) {
                    case "+":
                        result = parseFloat(firstnumber) + secondNumber;
                        break;
                    case "-":
                        result = parseFloat(firstnumber) - secondNumber;
                        break;
                    case "*":
                        result = parseFloat(firstnumber) * secondNumber;
                        break;
                    case "/":
                        result = parseFloat(firstnumber) / secondNumber;
                        break;
                }

                display.textContent = result;
                currentInput = "";
                operator = "";
                firstnumber = "";
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
                firstnumber = currentInput;
                operator = value;
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
});
});