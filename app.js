// Clear the input field
function clearInput() {
    document.getElementById("MyResult").value = "";
}

// Append the provided value to the input field
function addToInput(NewValue) {
    document.getElementById("MyResult").value += NewValue;
}

// Remove the last character from the input field
function backspace() {
    var input = document.getElementById("MyResult");
    input.value = input.value.slice(0, -1);
}

// Calculate and display the result
function calculateResult() {
    var input = document.getElementById("MyResult");
    var expression = input.value;
    
    try {
        var result = eval(expression);
        input.value = result;
    } catch (error) {
        // Handle invalid expressions here
        input.value = "Error";
    }
}
