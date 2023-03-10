// Get the input elements
const nameInput = document.getElementById("name-input");
const jobTitleInput = document.getElementById("job-title-input");
const birthyearInput = document.getElementById("birthyear-input");
const phoneInput = document.getElementById("phone-input");
const bgColorSelect = document.getElementById("bg-color-select");
const fontSelect = document.getElementById("font-select");
const textColorSelect = document.getElementById("text-color-select");

// Get the reset button
const resetButton = document.getElementById("reset-button");

// Add an event listener to the reset button
resetButton.addEventListener("click", resetForm);
// Get the show results button
const showResultsButton = document.getElementById("show-results-button");

// Add an event listener to the show results button to display the results
showResultsButton.addEventListener("click", function () {
  // Get the values from the form inputs
  const name = nameInput.value;
  const jobTitle = jobTitleInput.value;
  const birthYear = birthyearInput.value;
  const phone = phoneInput.value;
  const bgColor = bgColorSelect.value;
  const font = fontSelect.value;
  const textColor = textColorSelect.value;

  // Create a div to display the results
  const resultsContainer = document.createElement("div");
  resultsContainer.id = "results-container";
  resultsContainer.style.background = bgColor;
  resultsContainer.style.color = textColor;
  resultsContainer.style.fontFamily = font;
  resultsContainer.style.padding = "20px";
  resultsContainer.style.display = "none";

  // Create the results content
  const nameElement = document.createElement("p");
  nameElement.innerText = "Name: " + name;
  const jobTitleElement = document.createElement("p");
  jobTitleElement.innerText = "Job Title: " + jobTitle;
  const birthYearElement = document.createElement("p");
  birthYearElement.innerText = "Birth Year: " + birthYear;
  const phoneElement = document.createElement("p");
  phoneElement.innerText = "Phone: " + phone;

  // Append the results content to the results container
  resultsContainer.appendChild(nameElement);
  resultsContainer.appendChild(jobTitleElement);
  resultsContainer.appendChild(birthYearElement);
  resultsContainer.appendChild(phoneElement);

  // Append the results container to the body
  document.body.appendChild(resultsContainer);

  // Show the results container
  resultsContainer.style.display = "block";
  resetButton.addEventListener("click", resetForm);
  // Hide the form inputs and options
  document.getElementById("form").style.display = "none";
});

function resetForm() {
  // Clear the values of all the input and select elements
  nameInput.value = "";
  jobTitleInput.value = "";
  birthyearInput.value = "";
  phoneInput.value = "";
  bgColorSelect.value = "red";
  fontSelect.value = "Arial";
  textColorSelect.value = "black";

  // Reset the background color, font family, and text color of the container element
  const container = document.getElementById("container");
  container.style.backgroundColor = "white";
  container.style.fontFamily = "sans-serif";
  container.style.color = "black";
}
resetButton.addEventListener("click", function () {
  // remove the results container from the body
  document.body.removeChild(document.getElementById("results-container"));
  // Clear the values of all the input and select elements
  nameInput.value = "";
  jobTitleInput.value = "";
  birthyearInput.value = "";
  phoneInput.value = "";
  bgColorSelect.value = "red";
  fontSelect.value = "Arial";
  textColorSelect.value = "black";
  // Reset the background color, font family, and text color of the container element
  const container = document.getElementById("container");
  container.style.backgroundColor = "white";
  container.style.fontFamily = "sans-serif";
  container.style.color = "black";
  // Show the form inputs and options
  document.getElementById("form").style.display = "block";
});
