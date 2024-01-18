// Assuming you have HTML elements like <div id="slider"> with images inside
const header = document.getElementById('slider');
let currentIndex = 0;

function showNextSlide() {
  const header = header.children;
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.display = 'block';
}


setInterval(showNextSlide, 5000);

// Assuming you have buttons to increase/decrease quantities and remove items
const quantity = document.querySelectorAll('.quantity-input');
const Buttons = document.querySelectorAll('.remove-button');

quantityInputs.forEach(input => {
  input.addEventListener('change', () => {
    // Update the total price or perform other relevant actions
  });
});

removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the corresponding item from the cart
    const item = button.closest('.cart-item');
    item.remove();
  });
});

// Assuming you have buttons to increase/decrease quantities and remove items
const quantityInputs = document.querySelectorAll('.quantity-input');
const removeButtons = document.querySelectorAll('.remove-button');

quantityInputs.forEach(input => {
  input.addEventListener('change', () => {
    // Update the total price or perform other relevant actions
  });
});

removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the corresponding item from the cart
    const item = button.closest('.cart-item');
    item.remove();
  });
});

// Assuming you have a button to toggle the chat box and the chat box itself
const chatToggleButton = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');

chatToggleButton.addEventListener('click', () => {
  chatBox.classList.toggle('open');
});



