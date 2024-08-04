const display = document.querySelector(".display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay(){
  display.value = ""
}

function calculate (){
  try{
    display.value = eval(display.value)
  } catch (error){
    display.value = "Error"
  }
}

function removeFromDisplay() {
  let displayValue = display.value;
  let slicedChar = displayValue.toString(2).slice(0, -1)
  display.value = `${slicedChar}`
}