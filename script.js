document.addEventListener('DOMContentLoaded', function() {
    // Show the welcome popup automatically
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Open Chatbot after 5 seconds of page load
    setTimeout(() => {
        openChatbot();
    }, 5000);
});

// Function to open the chatbot
function openChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = 'block';
}

// Function to close the chatbot
function closeChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = 'none';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Interactive Chatbot Functionality
const chatBody = document.querySelector('.chat-body');

function simulateBotReply(message) {
    const reply = document.createElement('p');
    reply.textContent = `Bot: ${message}`;
    chatBody.appendChild(reply);
}

function sendMessage() {
    const userInput = prompt('How can we assist you today?');
    if (userInput) {
        const userMessage = document.createElement('p');
        userMessage.textContent = `You: ${userInput}`;
        chatBody.appendChild(userMessage);

        setTimeout(() => {
            simulateBotReply('Thank you for reaching out! Our team will connect with you shortly.');
        }, 1000);
    }
}
