// Get all elements with the class "rating-group"
const ratingGroups = document.querySelectorAll(".rating-group");

// Add click event listener to each rating group
ratingGroups.forEach((ratingGroup) => {
  ratingGroup.addEventListener("click", () => {
    // Remove the "active" class from all rating groups
    ratingGroups.forEach((group) => group.classList.remove("active"));

    // Add the "active" class to the clicked rating group
    ratingGroup.classList.add("active");

    // Hide the error message when a rating is clicked
    document.querySelector(".error-message").style.display = "none";
  });
});

function submitRating() {
  // Get the selected rating value
  const selectedRating = document
    .querySelector(".rating-group.active")
    ?.getAttribute("data-value");

  // Check if a rating is selected
  if (!selectedRating) {
    // Show the error message
    document.querySelector(".error-message").style.display = "inline-block";
    return; // Stop the function execution
  }

  document.querySelector(".container").style.display = "none";
  document.querySelector(".thank-you-container").style.display = "block";
  // Update the thank you message
  const ratingSelected = document.querySelector(".rating-selected");
  ratingSelected.innerHTML = `You selected ${selectedRating} out of 5`;
}
