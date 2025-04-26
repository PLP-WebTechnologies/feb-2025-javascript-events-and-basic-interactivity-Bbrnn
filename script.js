// This file contains JavaScript for handling events and interactivity on the website.

// Function to change button text and color on click
const button = document.getElementById('changeTextButton');
button.onclick = function() {
  // Change the button text to "Clicked!"
  button.textContent = 'Clicked!';
  button.style.backgroundColor = 'darkblue';
}

// Select the <h3> element
const galleryHeading = document.querySelector('h3');

// Add a mouseover event listener
galleryHeading.addEventListener('mouseover', () => {
  galleryHeading.style.color = 'blue'; // Change text color to blue
  galleryHeading.style.cursor = 'pointer'; // Change cursor to pointer
});

// Add a mouseout event listener to reset the style
galleryHeading.addEventListener('mouseout', () => {
  galleryHeading.style.color = ''; // Reset text color
});
// Get modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close');

// Add event listeners to gallery images
document.querySelectorAll('.gallery-image').forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex'; // Show modal
    modalImage.src = image.src; // Set modal image source
  });
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide modal
});

// Optional: Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission
  if (validateForm()) {
    alert('Form submitted successfully!');
  }
});

// Form validation functions
function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return false;
  }

  alert('Form submitted successfully!');
  return true;
}

// Real-time feedback for email and password fields
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Email validation feedback
emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
      emailInput.style.borderColor = 'red';
      emailInput.setCustomValidity('Please enter a valid email address.');
  } else {
      emailInput.style.borderColor = 'green';
      emailInput.setCustomValidity('');
  }
});

// Password validation feedback
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
      passwordInput.style.borderColor = 'red';
      passwordInput.setCustomValidity('Password must be at least 8 characters long.');
  } else {
      passwordInput.style.borderColor = 'green';
      passwordInput.setCustomValidity('');
  }
});

const tabs = document.querySelectorAll('.tab');
const tabButtons = document.querySelectorAll('.accordion');

// Add click event listeners to each tab button
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove active class from all tabs and buttons
    tabs.forEach((tab) => tab.classList.remove('active'));
    tabButtons.forEach((btn) => btn.classList.remove('active'));

    // Add active class to the clicked button and corresponding tab
    button.classList.add('active');
    tabs[index].classList.add('active');
  });
});

