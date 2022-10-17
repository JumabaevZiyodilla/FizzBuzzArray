var elForm = document.querySelector(".box__form");
var elInputNumber = document.querySelector(".box__input-number");
var elBtn = document.querySelector(".btn");
var elFizz = document.querySelector(".fizz");
var elBuzz = document.querySelector(".buzz");
var elFizzbuzz = document.querySelector(".fizzbuzz");
var  elFizzArray = [];
var  elBuzzArray = [];
var  elFizzbuzzArray = [];

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var elInputNumberValue = elInputNumber.value;
    if(elInputNumberValue.trim()){
        if (elInputNumberValue % 3 == 0) {
            elFizzArray.push(elInputNumberValue);
            elFizz.textContent = elFizzArray;
            elInputNumber.value = "";
        }
        if(elInputNumberValue % 5 == 0){
            elBuzzArray.push(elInputNumberValue);
            elBuzz.textContent = elBuzzArray;
            elInputNumber.value = "";
        }
        if (elInputNumberValue % 3 == 0 && elInputNumberValue % 5 == 0){
            elFizzbuzzArray.push(elInputNumberValue);
            elFizzbuzz.textContent = elFizzbuzzArray;
            elInputNumber.value = "";
        }
    }
})
