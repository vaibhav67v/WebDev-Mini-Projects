// handle when to show the warning message
const tasks = document.querySelectorAll('.task input[type="text"]')
const warningMessage = document.querySelector(".warning-message")

function checkTasks() {
    let allFilled = true;
    
    tasks.forEach(input => {
        if(input.value.trim() === "") {
            allFilled = false;
        }
    });

    if(allFilled) {
        warningMessage.classList.add("hidden");
    } else {
        warningMessage.classList.remove ("hidden");
    }
}


tasks.forEach((input) => {
    input.addEventListener("input", checkTasks);
})


// handle the progress bar
window.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.complete-checkbox');
  const progressBar = document.querySelector('.progress');

  function updateProgress() {
    let total = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        total++;
      }
    });

    let percentage = (total / 3) * 100;
    progressBar.style.width = `${percentage}%`;
  }

  // Call once at start to sync progress
  updateProgress();

  // Listen for changes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
  });
});
