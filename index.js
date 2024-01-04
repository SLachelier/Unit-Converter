
//Creates <p> elements for each result
let firstResult = document.createElement("p");
let secondResult = document.createElement("p");
let thirdResult = document.createElement("p");

//Sets id for each <p> element
firstResult.setAttribute("id", "paragraph");
secondResult.setAttribute("id", "paragraph");
thirdResult.setAttribute("id", "paragraph");

//Appends <p> elements to the divs
document.getElementById('first-result').appendChild(firstResult);
document.getElementById('second-result').appendChild(secondResult);
document.getElementById('third-result').appendChild(thirdResult);

//obtains the button element to attach the event listener
let button = document.getElementById('convert-btn');

button.addEventListener("click", function conversion(){   //converts the input value to the other units of measurement on button click
    
  let inputVal = document.getElementById('userInput').value; //gets value

      //calculated variables:
  let feetCalc = (inputVal * 3.281).toFixed(3);
  let metersCalc = (inputVal / 3.281).toFixed(3);

  let gallonsCalc = (inputVal * .264).toFixed(3);
  let litersCalc = (inputVal / .264).toFixed(3);

  let lbsCalc = (inputVal * 2.204).toFixed(3);
  let kilosCalc = (inputVal / 2.204).toFixed(3);

//sets the innerHTML of each <p> element to the result of the conversion
firstResult.innerHTML = `${inputVal} meters = ${feetCalc} feet | ${inputVal} feet = ${metersCalc} meters`;
secondResult.innerHTML = `${inputVal} Liters = ${gallonsCalc} gallons | ${inputVal} gallons = ${litersCalc} Liters`;
thirdResult.innerHTML = `${inputVal} kilograms = ${lbsCalc} pounds | ${inputVal} kilograms = ${kilosCalc} kilograms`;
});

