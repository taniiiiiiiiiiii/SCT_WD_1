function subscribe() {
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");

  if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
    message.style.color = "lightgreen";
    message.textContent = "Thank you for joining our mission! 🐾";
    emailInput.value = "";
  } else {
    message.style.color = "lightcoral";
    message.textContent = "Please enter a valid email address.";
  }
}
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});