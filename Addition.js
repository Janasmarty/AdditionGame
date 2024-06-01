let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let firstRandomInteger = parseInt(firstNumberElement.textContent);
let secondRandomInteger = parseInt(secondNumberElement.textContent);

let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;

function checkButton() {
    let userEnteredSum = parseInt(userInputElement.value);

    if (userEnteredSum === sumOfTwoRandomIntegers) {
        gameResultElement.textContent = "Congratulations! You got right";
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = "Please Try again!";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}

function restartButton() {

    let firstRandomInteger = (Math.ceil(Math.random() * 100));
    firstNumberElement.textContent = firstRandomInteger;
    let secondRandomInteger = (Math.ceil(Math.random() * 100));
    secondNumberElement.textContent = secondRandomInteger;
    sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;
    gameResultElement.textContent = "";
    userInputElement.value = "";


}