// for my account 
function confirmDiscard() {
    // Show the discard confirmation modal
    document.getElementById('discardModal').style.display = 'flex';
  }
  
  function discardChanges() {
    // Redirect or clear the form to discard the changes
    document.getElementById('accountForm').reset(); // Clear the form
    closeModal();
  }
  
  function closeModal() {
    // Close the modal
    document.getElementById('discardModal').style.display = 'none';
  }
  
  // Prevent form submission for demonstration
  document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Information updated successfully!');
  });
  function confirmLogOut() {
    document.getElementById('errorModal').style.display = 'flex';
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById('errorModal').style.display = 'none';
  }
  
  // Function to log the user out (for demonstration purposes)
  function logOut() {
    alert("You have logged out!");
    // Here, you can add logic to handle actual log-out functionality, such as clearing cookies or redirecting to a login page.
    closeModal();
  }
  
  /*for my addresses page */
  // Function to show the "Add New Address" form
function openAddAddressForm() {
    document.getElementById('add-address-form').style.display = 'block';
  }
  
  // Function to hide the "Add New Address" form
  function closeAddAddressForm() {
    document.getElementById('add-address-form').style.display = 'none';
  }
  
//   for my wallet page
// Function to show the "Add New Payment Method" form
function openAddPaymentMethodForm() {
    document.getElementById('add-payment-method-form').style.display = 'block';
  }
  
  // Function to hide the "Add New Payment Method" form
  function closeAddPaymentMethodForm() {
    document.getElementById('add-payment-method-form').style.display = 'none';
  }
// my cart page
// Update the total price based on quantity and note input
function updateTotal() {
    let quantity = document.querySelector('.quantity').value;
    let price = 15.00; // Price of a single item
    let total = price * quantity;
  
    // Apply promo code (example)
    let promoCode = document.getElementById('promo-code').value;
    if (promoCode === 'DISCOUNT10') {
      total = total * 0.9; // 10% discount
    }
  
    // Update the total displayed
    document.querySelector('.cart-total p').innerText = `Total: $${total.toFixed(2)}`;
  }
  
  // Remove item from cart
  function removeItem(button) {
    let cartItem = button.parentElement;
    cartItem.remove();
  
    // If no items left, show "cart is empty"
    if (document.querySelectorAll('.cart-item').length === 0) {
      document.getElementById('empty-cart').style.display = 'block';
    }
  }
  
  // Apply promo code (example function)
  function applyPromoCode() {
    updateTotal();
  }
  
  // Checkout function (for demonstration purposes)
  function checkout() {
    // Redirect to a specific URL
    window.location.href = 'thankyou.html'; // Replace with your checkout URL
  }
  const cartData = JSON.parse(localStorage.getItem('cart'));
console.log(cartData); // You can now display the cart on the mycart.html page


// something


  