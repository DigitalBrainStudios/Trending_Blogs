// script.js
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showAlert() {
  alert("Thank you for subscribing!");
}

<button onclick="scrollToSection('trending')">Read Blogs</button>
<button onclick="scrollToSection('subscribe')">Subscribe Now</button>
<button onclick="showAlert()">Click Me</button>
