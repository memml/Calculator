let num1 = 0
let num2
let operator

let step = 1

// 1: entering first number
// 2: entering operator
// 3: entering second number

let canCalculate = false

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

const updateDisplay = (value) => {
    document.getElementById("display").innerText = value
}

const clearDisplay = () => {
    num1 = 0
    num2 = null
    operator = null
    step = 1
    canCalculate = false

    document.getElementById("display").innerText = "0"
}

const reset = () => {
    num1 = 0
    num2 = null
    operator = null
    step = 1
    canCalculate = false
}

const press = (value) => {
    let type

    if (!isNaN(value)) {
        type = "number"
    } else if (operators[value]) {
        type = "operator"
    }

    if (type == "number" && step == 1) {
        if (num1 == 0 || num1 == null) {
            num1 = value
        } else {
            num1 = num1.toString() + value.toString()
        }

        updateDisplay(num1)
    }

    if (type == "operator" && step == 1) {
        operator = value
        step = 2

        updateDisplay(num1 + " " + operator)
    }

    if (type == "number" && step == 2) {
        if (num2 == null || num2 == 0) {
            num2 = value
        } else {
            num2 = num2.toString() + value.toString()
        }

        updateDisplay(num1 + " " + operator + " " + num2)

        canCalculate = true
    }
}

const calculate = () => {
    if (canCalculate) {
        const result = operators[operator](parseFloat(num1), parseFloat(num2))
        updateDisplay(result)
        reset()
    }
}