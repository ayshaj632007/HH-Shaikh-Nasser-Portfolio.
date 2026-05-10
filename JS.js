
// Function for Correct Answer
function showSuccess(btn) {
    const status = document.getElementById('quiz-status');
    resetButtons(); // Clear previous colors
    
    btn.style.backgroundColor = "#28a745"; // Green
    btn.style.color = "white";
    btn.style.borderColor = "#28a745";
    
    status.innerText = "Correct Answer! Well done.";
    status.style.color = "#28a745";
    status.style.marginTop = "20px";
    status.style.fontWeight = "bold";
}

// Function for Wrong Answer
function showError(btn) {
    const status = document.getElementById('quiz-status');
    resetButtons(); // Clear previous colors
    
    btn.style.backgroundColor = "#dc3545"; // Red
    btn.style.color = "white";
    btn.style.borderColor = "#dc3545";
    
    status.innerText = "Wrong choice, please try again.";
    status.style.color = "#dc3545";
    status.style.marginTop = "20px";
    status.style.fontWeight = "bold";
}

// Helper to reset all buttons to white
function resetButtons() {
    const allBtns = document.querySelectorAll('.quiz-btn');
    allBtns.forEach(function(b) {
        b.style.backgroundColor = "white";
        b.style.color = "#8B0000";
        b.style.borderColor = "#8B0000";
    });
}