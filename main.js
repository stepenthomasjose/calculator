function displayContent(content) {
    result.value +=content
    
}

function clearDisplay() {
    result.value= " ";
    
}

function calculateResult(content) {
    result.value=eval(result.value)
}

function percentageDisplay(content) {
    result.value=eval(result.value)/100
}