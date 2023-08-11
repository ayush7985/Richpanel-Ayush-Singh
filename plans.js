const arrowButton = document.getElementById("arrowButton");
const arrow = document.getElementById("arrow");

arrowButton.addEventListener("click", () => {
  arrow.classList.toggle("arrow-down");
});