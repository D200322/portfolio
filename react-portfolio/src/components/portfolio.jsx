import React from "react";
import "./portfolio.css";
import profilePic from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useState } from "react";



export default function Portfolio() {
 
  const [showCertificates, setShowCertificates] = useState(false);
const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Durangi</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      {/*<section className="hero">
        <div className="hero-content">
          <img src={profilePic} alt="Durangi Sudasingha" className="profile-pic" />
          <div>
            <h1>Hi, I'm <span>Durangi Sudasingha</span></h1>
            <p>Software Engineering Undergraduate</p>
          </div>
        </div>
      </section>*/}
      {/* Hero Section */}
<section className="hero">
  <div className="hero-content fade-in">
    <img
      src={profilePic}
      alt="Durangi Sudasingha"
      className="profile-pic"
    />

    <h1>
      Hi, I'm <span>Durangi Sudasingha</span>
    </h1>

    <p className="typing-text">
      Software Engineering Undergraduate
    </p>

    <a
      href="/Durangi_Sudasingha_CV.pdf"
      download
      className="cv-button"
    >
      Download CV
    </a>
  </div>
</section>


      {/* About Me */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Software Engineering undergraduate currently pursuing a Bachelor of Software Engineering at The Open University of Sri Lanka, 
          seeking an IT-related internship to gain practical industry experience and develop skills to become a competent and well-regarded IT professional.
        </p>
      </section>

      {/* Skills */}
      {/* Skills */}
<section id="skills" className="section dark">
  <h2>Skills</h2>

  <div className="skills-container">

    <div className="skills-category">
      <h3>Frontend Development</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li><strong>React.js</strong></li>
      </ul>
    </div>

    <div className="skills-category">
      <h3>Backend Development</h3>
      <ul>
        <li>Node.js</li>
        <li><strong>Express.js</strong></li>
        <li>Java</li>
      </ul>
    </div>

    <div className="skills-category">
      <h3>Databases</h3>
      <ul>
        <li>MySQL</li>
        <li><strong>MongoDB</strong></li>
      </ul>
    </div>

    <div className="skills-category">
      <h3>Tools & Technologies</h3>
      <ul>
        <li>Git & GitHub</li>
        <li>Postman</li>
        <li>VS Code</li>
      </ul>
    </div>

    <div className="skills-category">
      <h3>AI & Data</h3>
      <ul>
        <li>Machine Learning Fundamentals</li>
        <li>AI Tools & Prompt Engineering</li>
      </ul>
    </div>

    <div className="skills-category">
      <h3>Soft Skills</h3>
      <ul>
        <li>Teamwork & Communication</li>
        <li>Problem Solving</li>
        <li>Time Management</li>
        <li>Adaptability</li>
      </ul>
    </div>

  </div>
</section>


      {/* Education */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="card">
          <h3>Bachelor of Software Engineering</h3>
          <p>Faculty of Engineering Technology</p>
          <p>The Open University of Sri Lanka</p>
          <small>2024 – Present</small>
        </div>
        <div className="card">
          <h3>Diploma in Information Technology</h3>
          <p>Esoft Metro Campus - Piliyandala</p>
          <small>2023 - 2024</small>
        </div>
        <div className="card">
          <h3>Diploma in English</h3>
          <p>Esoft Metro Campus - Piliyandala</p>
          <small>2023 - 2024</small>
        </div>
        <div className="card">
          <h3>G.C.E Advanced Level</h3>
          <p>Physical Science Stream</p>
          <p>Combined Mathematics - S</p>
          <p>physics - S</p>
          <p>Chemistry - s</p>
          <p>General English - S</p>
          <p>General Information Technology - B</p>
          <p>Anula Vidyalaya - Nugegoda</p>
          <small>2022</small>
        </div>
        <div className="card">
          <h3>G.C.E Ordinary Level</h3>
          <p>Anula Vidyalaya - Nugegoda</p>
          <p>9 A's</p>
          <small>2019</small>
        </div>
        <div className="card">
          <h3>Certification Course in Information Technology</h3>
          <p>Ranaviru Information TechnologyTraining Institute</p>
          <p>Completed</p>
          <small>2017</small>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section dark">
  <h2>Projects</h2>

  <div className="project-grid">
    
    <div className="project-card">
      <h3>Portfolio</h3>
      <p>
        My portfolio website built with React.js to ahowcase my skills, projects, and contact information.
      
      </p>

      <div className="project-tech">
        <span>React</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/your-repo" className="github" target="_blank">GitHub</a>
        <a href="#" className="live">Live Demo</a>
      </div>
    </div>

    <div className="project-card">
      <h3>Gamified E-Learning Platform for O/L ICT Students -Group Project(2025-Ongoing)</h3>
      <p>
        Developed a full-stack web application that provides interactive lessons, quizzes, progress tracking, and role-based access to enhance student engagement and learning outcomes.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>MongoDB</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/your-repo" className="github" target="_blank">GitHub</a>
        <a href="#" className="live">Live Demo</a>
      </div>
    </div>

    <div className="project-card">
      <h3>Lab - Student Assessment Analysis(2025)</h3>
      <p>
       Analyzed student performance data to identify trends and patterns, enabling better insights into academic outcomes. Focused on data cleaning, exploratory analysis, and visualization to support decision-making.
       
      </p>

      <div className="project-tech">
        <span>Machine Learning</span>
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-learn</span>
        <span>Matplotlib</span>
        <span>Jupyter Notebook</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/your-repo" className="github" target="_blank">GitHub</a>
        <a href="#" className="live">Live Demo</a>
      </div>
    </div>
    <div className="project-card">
      <h3>Lab - Phone Price Predictor(2025)</h3>
      <p>
       Built a machine learning model to predict mobile phone prices using historical specifications and user ratings. Included data preprocessing, model training, and performance evaluation.
      </p>

      <div className="project-tech">
        <span>Machine Learning</span>
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-learn</span>
        <span>Matplotlib</span>
        <span>Jupyter Notebook</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/your-repo" className="github" target="_blank">GitHub</a>
        <a href="#" className="live">Live Demo</a>
      </div>
    </div>
    <div className="project-card">
      <h3>Lab - Heart Failure Prediction(2025)</h3>
      <p>
       Developed a predictive model to assess the risk of heart failure using clinical datasets. Focused on feature selection, classification modeling, and evaluation of model accuracy and reliability.
       
      </p>

      <div className="project-tech">
        <span>Machine Learning</span>
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-learn</span>
        <span>Matplotlib</span>
        <span>Jupyter Notebook</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/your-repo" className="github" target="_blank">GitHub</a>
        <a href="#" className="live">Live Demo</a>
      </div>
    </div>

    <div className="project-card">
      <h3>Hospital Database Management System (2025)</h3>
      <p>
        Designed and implemented a hospital database management system to efficiently store and manage patient, doctor, and treatment records.
      </p>

      <div className="project-tech">
        <span>ER diagrams</span>
        <span>MySQL</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/your-repo" className="github" target="_blank">GitHub</a>
        <a href="#" className="live">Live Demo</a>
      </div>
    </div>
    <div className="project-card">
      <h3>Eco-Peace – Website (2024)</h3>
      <p>
        Developed a responsive and interactive website to promote environmental awareness and sustainable practices.
      </p>

      <div className="project-tech">
        <span>HTML5</span>
        <span>CSS</span>
         <span>JavaScript</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/D200322/eco-peace-website" className="github" target="_blank" rel="noopener noreferrer">GitHub</a>

        <a href="#" className="live">Live Demo</a>
      </div>
    </div>

    <div className="project-card">
      <h3>The Banking System</h3>
      <p>
        Developed a Python console application to manage bank accounts with functionalities for account creation, deposits, withdrawals, balance checking, and transfers between accounts, including input validation and error handling.
      </p>

      <div className="project-tech">
        <span>Python</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/your-repo" className="github" target="_blank">GitHub</a>
        <a href="#" className="live">Live Demo</a>
      </div>
    </div>
    <div className="project-card">
      <h3>A Mindful Grama Niladari Digital Platform-Group Mini Project </h3>
      <p>
        Designed a digital platform prototype to check Grama Niladhari availability, conducting UX research and enhancing usability through team collaboration.
      </p>
      <div className="project-tech">
        <span>Figma</span>
        <span>Prototyping</span>
        <span>Group Project Collaboration</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/your-repo" className="github" target="_blank">GitHub</a>
        <a href="#" className="live">Live Demo</a>
      </div>
    </div>

  </div>
</section>


      {/* Certificates */}
      {/* Certificates Section */}
<section id="certificates" className="section">
  <h2>Certificates</h2>

  <ul className="list">
    {[
      {
        title: "Google AI Essentials (5 Courses – Introduction to AI, Maximize Productivity With AI Tools, Discover the Art of Prompting, Use AI Responsibility, Stay Ahead of the AI Curve)",
        image: "/certificates/google-ai.jpg",
      },
      { title: "Machine Learning – Kaggle", image: "/certificates/kaggle-ml.jpg" },
      { title: "Intro to Programming – Kaggle", image: "/certificates/pro.jpg" },
      { title: "Web Element Locator Strategies-Test Automation University(online learning program)", image: "/certificates/api_a.jpg" },
      { title: "API Test Automation with Postman-Test Automation University(online learning program)", image: "/certificates/api_b.jpg" },
      { title: "Codeless Test Automation with Selenium IDE-Test Automation University(online learning program)", image: "/certificates/api_c.jpg" },
      { title: "Setting a Foundation for Successful Test Automation-Test Automation University(online learning program)", image: "/certificates/api_d.jpg" },
      { title: "The Whole Team Approach to Continuous Testing-Test Automation University(online learning program)", image: "/certificates/api_e.jpg" },
      { title: "Python Programming-Test Automation University(online learning program)", image: "/certificates/api_p.jpg" },

      { title: "Web Design for Beginners - University of Moratuwa (Open Distance Learning)", image: "/certificates/web.jpg" },
      { title: "Python for Beginners - University of Moratuwa (Open Distance Learning)", image: "/certificates/py.jpg" },

      { title: "Introduction to CL – Sololearn", image: "/certificates/sololearn.jpg" },
      { title: "Introduction to Javascript", image: "/certificates/sololearn.jpg" },
      { title: "Introduction to Python – Sololearn", image: "/certificates/sololearn.jpg" },
      { title: "Python Intermediate, Introduction to SQL – Sololearn", image: "/certificates/sololearn.jpg" },
      { title: "Introduction to SQL – Sololearn", image: "/certificates/sololearn.jpg" },
      
      
    ].map((cert, index) => (
      <li key={index} style={{ marginBottom: "12px" }}>
        {cert.title}
        <button
          className="btn-primary"
          onClick={() => {
            setSelectedCertificate(cert.image); // store which certificate to show
            setShowCertificates(true); // open modal
          }}
          style={{ marginLeft: "12px" }}
        >
          View Certificate
        </button>
      </li>
    ))}
  </ul>

  {/* Modal */}
  {showCertificates && selectedCertificate && (
    <div className="modal-overlay" onClick={() => setShowCertificates(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Certificate</h3>
        <img
          src={selectedCertificate}
          alt="Certificate"
          style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
        />
        <button
          className="btn-secondary"
          onClick={() => setShowCertificates(false)}
        >
          Close
        </button>
      </div>
    </div>
  )}
</section>



      {/* Extra-Curricular Activities */}
      <section id="activities" className="section dark">
        <h2>Extra-Curricular Activities</h2>
        <ul className="list">
          <li>Member – SESoc - Software Engineering Society of OUSL</li>
          <li>Workshops – <ul>
                         <li>Introduction to Machine Learning Workshop</li>
                         <li>Full-Stack Bootcamp(React + Mock) Workshop</li>
                         <li>Cloud-Native Development and Ballerina Workshop</li>
                         </ul>
                         </li>
                         
        </ul>
      </section>

      {/* Contact */}
      {/* Contact Section */}
<section id="contact" className="section">
  <h2>Contacts</h2>

  <p><strong>Phone:</strong> 0764697718</p>
  <p><strong>Email:</strong> durangi@email.com</p>

  <div className="contact-icons">
    <a href="https://github.com/D200322" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://linkedin.com/in/durangi" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://instagram.com/durangi_profile" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://wa.me/94764697718" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </a>
    <a href="mailto:nirmanidurangi@gmail.com">
      <FaEnvelope />
    </a>
  </div>
</section>
      <footer>
        © 2026 Durangi Sudasingha | Software Engineering Undergraduate
      </footer>
    </div>
  );
}
