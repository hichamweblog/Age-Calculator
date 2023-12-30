// Get references to DOM elements
const inputEl = document.querySelector(".birth-date");
const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");
const resultEl = document.createElement("p");

// Get the current date in ISO format
const currentDate = new Date().toISOString().split("T")[0];

// Set the maximum allowed date for the input field
inputEl.setAttribute("max", currentDate);

// Event listener to check if the selected date is valid
inputEl.addEventListener("input", function () {
  let selectedDate = this.value;
  if (selectedDate > currentDate) {
    alert("Please select a date on or before the current date.");
    this.value = currentDate;
  }
});

// Function to calculate and display the age
const calculateAge = () => {
  if (inputEl.value) {
    const birthDate = new Date(inputEl.value);
    if (isNaN(birthDate)) {
      alert("Please enter a valid date format.");
      return;
    }
    const currentDate = new Date();
    const yourAge = Math.floor(
      (currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365.25),
    );
    resultEl.textContent = `Your Age is ${yourAge} years old`;
    resultEl.classList.add("result");
    containerEl.appendChild(resultEl);
  }
};

// Event listener for the button click to trigger age calculation
btnEl.addEventListener("click", calculateAge);
