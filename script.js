document.addEventListener("DOMContentLoaded", function () {
    // Show popup on load
    setTimeout(() => {
        document.getElementById("welcomePopup").style.display = "flex";
    }, 500);

    // Close popup function
    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("welcomePopup").style.display = "none";
    });

    // Floating chatbot toggle
    document.getElementById("chatbotToggle").addEventListener("click", function () {
        let chatbox = document.getElementById("chatbox");
        chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Section fade-in animation
    let sections = document.querySelectorAll("section");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});
