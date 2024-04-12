var number1 = document.getElementById("num1");
var printButton = document.getElementById("printBtn");
var printValue = document.getElementById("enteredNumber");
var clearButton = document.getElementById("clearBtn");
function printEnteredValue() {
    var numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();
}
function clearEnterdValue() {
    printValue.textContent = "";
}
printButton.addEventListener('click', printEnteredValue);
clearButton.addEventListener('click', clearEnterdValue);
