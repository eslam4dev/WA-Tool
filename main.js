document.getElementById("form").addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the values from the phone input and message input fields
  let phoneInput = document.querySelector("#phone").value;
  let message = document.querySelector("#message").value;

  // Build the WhatsApp URL
  let url = "https://wa.me/+";
  url += phoneInput.trim(); // Add the phone number to the URL
  url += "?text=" + encodeURIComponent(message.trim()); // Add the message to the URL, ensuring it's URL-encoded

  // Redirect to the generated URL
  window.location.href = url;
});
