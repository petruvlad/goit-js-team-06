let counterValue = 0;

// Get the elements for the counter and buttons
const counterElement = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

// Function to update the interface with the current counter value
function updateCounter() {
  counterElement.textContent = counterValue;
}

// Add click event listeners to the buttons
incrementButton.addEventListener("click", function () {
  counterValue++;
  updateCounter();
});

decrementButton.addEventListener("click", function () {
  counterValue--;
  updateCounter();
});

// Initial update of the counter interface
updateCounter();
