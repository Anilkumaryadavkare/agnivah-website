// CV Analyzer Function
function analyzeCV() {
    const fileInput = document.getElementById('cvUpload');
    if (fileInput.files.length === 0) {
        alert('Please upload a CV to analyze.');
        return;
    }
    alert('Your CV is being analyzed! Stay tuned for insights.');
}

// Chatbot Pop-up Control
document.addEventListener("DOMContentLoaded", function () {
    const chatBtn = document.getElementById("chatbot-btn");
    const chatPopup = document.getElementById("chat-popup");
    const closeChat = document.getElementById("close-chat");

    // Show Chatbot Pop-up
    chatBtn.addEventListener("click", () => {
        chatPopup.style.display = "block";
    });

    // Close Chatbot Pop-up
    closeChat.addEventListener("click", () => {
        chatPopup.style.display = "none";
    });

    // Pop-up greeting on site visit
    setTimeout(() => {
        alert("Welcome to Agnivah! How can we assist you today?");
    }, 1000);
});

