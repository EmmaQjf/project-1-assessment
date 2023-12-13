   /*----- state variables -----*/
let sum;

   /*----- cached elements  -----*/
const displayEl = document.getElementById("display-container")
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn")
const inputEl = document.getElementById("input-field")


init();

   /*----- event listeners -----*/
minusBtn.addEventListener("click", () => {
    let inputAmount = parseInt(inputEl.value);
    if (!inputAmount) {
        displayEl.innerHTML = "You need to type in a number";
        sum += 0;
    } else {
    sum -= inputAmount;
    render();
   }
  })
  
plusBtn.addEventListener("click", () => { 
    let inputAmount = parseInt(inputEl.value);
    if (!inputAmount) {
        displayEl.innerHTML = "You need to type in a number";
        sum += 0;
    } else {
    sum += inputAmount;
    render();
  }
  })
  
	/*----- functions -----*/
function init() {
  displayEl.innerHTML = "0";
  inputEl.innerHTML = "";
  sum = 0;
}

function render() {
  displayEl.innerHTML = sum;
  displayEl.style.color = sum < 0? "red" : "black";
}

