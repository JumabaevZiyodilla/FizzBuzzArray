var elForm = document.querySelector(".box__form");
var elInputNumber = document.querySelector(".box__input-number");
var elBtn = document.querySelector(".btn");
var elFizz = document.querySelector(".fizz");
var elBuzz = document.querySelector(".buzz");
var elFizzbuzz = document.querySelector(".fizzbuzz");
var alertText = document.querySelector(".alert-js");
var  elFizzArray = [];
var  elBuzzArray = [];
var  elFizzbuzzArray = [];

function removeClass(){
    alertText.classList.remove("add");
    alertText.classList.add("remove");
}
function addClass(){
    alertText.classList.add("add");
    alertText.classList.remove("remove");
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var elInputNumberValue = elInputNumber.value;
    if(elInputNumberValue.trim()){
        if (elInputNumberValue % 3 == 0) {
            elFizzArray.push(elInputNumberValue);
            elFizz.textContent = elFizzArray;
            elInputNumber.value = "";
            removeClass();
        }
        if(elInputNumberValue % 5 == 0){
            elBuzzArray.push(elInputNumberValue);
            elBuzz.textContent = elBuzzArray;
            elInputNumber.value = "";
            removeClass();
        }
        if (elInputNumberValue % 3 == 0 && elInputNumberValue % 5 == 0){
            elFizzbuzzArray.push(elInputNumberValue);
            elFizzbuzz.textContent = elFizzbuzzArray;
            elInputNumber.value = "";
            removeClass();
        }
        if(elInputNumberValue % 3 != 0 && elInputNumberValue % 5 != 0){
            addClass();
            elInputNumber.value = "";
        }
    }
})
