let displayValue = "";

function appendSymbol(symbol) {
    displayValue += symbol;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        // Replace ^ with ** for power calculation
        const result = eval(displayValue.replace('^', '**'));
        displayValue = result.toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
