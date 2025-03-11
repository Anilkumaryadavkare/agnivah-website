<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agnivah - Empowering Careers</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">Agnivah</div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#cv-builder">CV Builder</a></li>
                <li><a href="#solutions">AI Solutions</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <h1>Empowering Careers with AI</h1>
        <p>Your journey to a better career starts here. Enroll in courses, build your CV, or explore AI-driven solutions.</p>
        <button onclick="openChatbot()">Get Career Guidance</button>
    </section>

    <section id="courses">
        <h2>Explore Our Courses</h2>
        <p>Enhance your skills with our industry-relevant courses.</p>
    </section>

    <section id="cv-builder">
        <h2>Build Your CV</h2>
        <p>Our AI-powered CV builder helps you craft the perfect resume.</p>
    </section>

    <section id="solutions">
        <h2>AI Solutions for Corporates</h2>
        <p>We build AI solutions tailored for corporate use cases.</p>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>Reach out to us for any queries or support.</p>
    </section>

    <!-- Chatbot Popup -->
    <div class="chatbot" id="chatbot">
        <div class="chat-header">
            <h3>Chat with us</h3>
            <button onclick="closeChatbot()">X</button>
        </div>
        <div class="chat-body">
            <p>Hello! How can we assist you today?</p>
        </div>
    </div>

    <!-- Popup on Page Load -->
    <div class="popup" id="popup">
        <div class="popup-content">
            <h2>Welcome to Agnivah</h2>
            <p>We are here to boost your career with AI-driven solutions.</p>
            <button onclick="closePopup()">Get Started</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
