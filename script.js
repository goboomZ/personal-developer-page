let goalsVisible = true;

const toggleBtn = document.getElementById("toggle-goals");
const goalsSection = document.getElementById("goals-section");

toggleBtn.addEventListener("click", function() {
  if (goalsVisible) {
    goalsSection.style.display = "none";
    toggleBtn.textContent = "Show goals";
    goalsVisible = false;
  } else {
    goalsSection.style.display = "block";
    toggleBtn.textContent = "Hide goals";
    goalsVisible = true;
  }
});