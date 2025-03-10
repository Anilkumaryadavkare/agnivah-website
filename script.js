document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Floating Chatbot Button
    const chatbotBtn = document.createElement('div');
    chatbotBtn.innerHTML = '💬 Chat with us';
    chatbotBtn.classList.add('chatbot-btn');
    document.body.appendChild(chatbotBtn);

    chatbotBtn.addEventListener('click', function () {
        alert('Chatbot Coming Soon! Integrate OpenAI API here.');
    });

    // Dynamic Section Animation
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Course Card Hover Animation
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        card.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Smooth Load Effect
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

});
