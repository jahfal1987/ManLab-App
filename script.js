document.getElementById("switchToRegister").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("registerSection").style.display = "block";
});

document.getElementById("switchToLogin").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("loginSection").style.display = "block";
  document.getElementById("registerSection").style.display = "none";
});
