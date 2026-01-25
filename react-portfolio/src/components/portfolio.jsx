import React from "react";
import "./portfolio.css";
import profilePic from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaJava, FaPython } from "react-icons/fa";

import { useState } from "react";



export default function Portfolio() {

  const [showCertificates, setShowCertificates] = useState(false);
const [selectedCertificate, setSelectedCertificate] = useState(null);
const [visibleCertificates, setVisibleCertificates] = useState({});
const [educationAnimated, setEducationAnimated] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

  const toggleCertificates = (category) => {
    setVisibleCertificates(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Durangi Sudasingha</h2>
        

  <ul className={menuOpen ? "nav-links open" : "nav-links"}>
    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
    <li><a href="#education" onClick={() => { setEducationAnimated(true); setMenuOpen(false); }}>Education</a></li>
    <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
    <li><a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a></li>
    <li><a href="#activities" onClick={() => setMenuOpen(false)}>Activities</a></li>
    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
  </ul>
  <div
    className="hamburger"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </div>
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
          Software Engineering undergraduate currently pursuing a Bachelor of Software Engineering at The Open University of Sri Lanka, seeking a software engineering or software-related internship to apply academic knowledge, gain practical industry experience, and further develop technical skills toward becoming a competent and well-regarded software professional.
        </p>
      </section>

      {/* Skills */}
      {/* Skills */}
<section id="skills" className="section dark">
  <h2>Skills</h2>

  <h3>Technical Skills</h3>
  <div className="skills-icons-grid">
  <div className="skill-icon-card">
    <FaHtml5 />
    <span>HTML5</span>
  </div>

  <div className="skill-icon-card">
    <FaCss3Alt />
    <span>CSS3</span>
  </div>

  <div className="skill-icon-card">
    <FaJs />
    <span>JavaScript</span>
  </div>

  <div className="skill-icon-card">
    <FaPython />
    <span>Python</span>
  </div>

  <div className="skill-icon-card">
    <FaDatabase />
    <span>Databases (MySQL, MongoDB)</span>
  </div>

  <div className="skill-icon-card">
    <FaReact />
    <span>React</span>
  </div>

  <div className="skill-icon-card">
    <FaJava />
    <span>Java</span>
  </div>


  <div className="skill-icon-card">
    <FaNodeJs />
    <span>Node.js</span>
  </div>

  

  <div className="skill-icon-card">
    <FaGithub />
    <span>GitHub</span>
  </div>
  
  <div className="skill-icon-card">
    <span><h3>AI(Artificial Intelligence) </h3></span>
  </div>

  <div className="skill-icon-card">
    <span><h2>Machine Learning </h2></span>
  </div>
  <div className="skill-icon-card">
    <span><h2>Data Science </h2></span>
  </div>

  {/*<div className="skill-icon-card">
    <SiMongodb />
    <span>MongoDB</span>
  </div>

  <div className="skill-icon-card">
    <SiVisualstudiocode />
    <span>VS Code</span>
  </div>*/}
 </div>
 

    <h3>Soft Skills</h3>
  <div className="skills-container">
    <div className="skills-category">
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
      <section
  id="education"
  className={`section ${educationAnimated ? "animate-education" : ""}`}
>

        
        <h2>Education</h2>
        <div className="card slide-in-1">
          <h3>Bachelor of Software Engineering</h3>
          <p>Faculty of Engineering Technology</p>
          <p>The Open University of Sri Lanka</p>
          <small>2024 – Present</small>
        </div>
        <div className="card slide-in-2">
          <h3>Diploma in Information Technology</h3>
          <p>Esoft Metro Campus - Piliyandala</p>
          <small>2023 - 2024</small>
        </div>
        <div className="card slide-in-3">
          <h3>Diploma in English</h3>
          <p>Esoft Metro Campus - Piliyandala</p>
          <small>2023 - 2024</small>
        </div>
        <div className="card slide-in-4">
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
        <div className="card slide-in-5">
          <h3>G.C.E Ordinary Level</h3>
          <p>Anula Vidyalaya - Nugegoda</p>
          <p>9 A's</p>
          <small>2019</small>
        </div>
        <div className="card slide-in-6">
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
      <h3>Portfolio (January 2026)</h3>
      <p>
        My portfolio website built with React.js to showcase my skills, projects, and contact information.
      
      </p>

      <div className="project-tech">
        <span>React.js</span>
        <span>CSS</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/D200322/portfolio" className="github" target="_blank">GitHub</a>
        {/*<a href="#" className="live">Live Demo</a>*/}
      </div>
    </div>

    <div className="project-card">
      <h3>Gamified E-Learning Platform for O/L ICT Students -Group Project(2025-Present)</h3>
      <p>
        Developed a full-stack web application that provides interactive lessons, quizzes, progress tracking, and role-based access to enhance student engagement and learning outcomes.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>MongoDB</span>
        <span>Teamwork</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/D200322/Gamified-E-Learning-Platform-for-O-L-ICT-Students-Group-Project" className="github" target="_blank">GitHub</a>
        {/*<a href="#" className="live">Live Demo</a>*/}
      </div>
    </div>

    <div className="project-card">
      <h3>Lab - Student Assessment Analysis (June 2025)</h3>
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
        <a href="https://github.com/D200322/Student-Assessment-Analysis-Lab" className="github" target="_blank">GitHub</a>
        {/*<a href="#" className="live">Live Demo</a>*/}
      </div>
    </div>
    <div className="project-card">
      <h3>Phone Price Predictor  (June 2025)</h3>
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
        <a href="https://github.com/D200322/Smartphones" className="github" target="_blank">GitHub</a>
        {/*<a href="#" className="live">Live Demo</a>*/}
      </div>
    </div>
    <div className="project-card">
      <h3>Heart Failure Prediction  (June 2025)</h3>
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
        <a href="https://github.com/D200322/Heart-Failure-Prediction" className="github" target="_blank">GitHub</a>
        {/*<a href="#" className="live">Live Demo</a>*/}
      </div>
    </div>

    <div className="project-card">
      <h3>Hospital Database Management System (December 2025 )</h3>
      <p>
        Designed and implemented a hospital database management system to efficiently store and manage patient, doctor, and treatment records.
      </p>

      <div className="project-tech">
        <span>ER diagrams</span>
        <span>MySQL</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/D200322/Hospital-Database" className="github" target="_blank">GitHub</a>
        {/*<a href="#" className="live">Live Demo</a>*/}
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

        {/*<a href="#" className="live">Live Demo</a>*/}
      </div>
    </div>

    <div className="project-card">
      <h3>The Banking System (2024)</h3>
      <p>
        Developed a Python console application to manage bank accounts with functionalities for account creation, deposits, withdrawals, balance checking, and transfers between accounts, including input validation and error handling.
      </p>

      <div className="project-tech">
        <span>Python</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/D200322/Bank-Account-Management-System" className="github" target="_blank">GitHub</a>
        {/*<a href="#" className="live">Live Demo</a>*/}
      </div>
    </div>
    <div className="project-card">
  <h3>A Mindful Grama Niladari Digital Platform – Group Mini Project ( October 2025)</h3>

  <p>
    Designed a digital platform prototype to check Grama Niladhari availability,
    conducting UX research and enhancing usability through team collaboration.
  </p>

  <div className="project-tech">
    <span>Figma</span>
    <span>Prototyping</span>
    <span>Group Project Collaboration</span>
     <span>Teamwork</span>
  </div>

  <div className="project-actions">
    <a
      href="https://www.figma.com/proto/UANxAXZjce7K53h5paMu2C/EEI4361---GN_Quickcheck--Phone-?node-id=2-7&t=lqJ9iNeOyIXFHZFW-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
      className="figma mobile"
      target="_blank"
      rel="noopener noreferrer"
    >
      📱 Mobile App (Figma)
    </a>

    <a
      href="https://www.figma.com/proto/0M1Cxo4gHu21dAd2I2ux6e/EEI4361---GN_Quickcheck--Web-?node-id=8-4&p=f&t=kaHrMCk7rmkLLLlS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
      className="figma web"
      target="_blank"
      rel="noopener noreferrer"
    >
      🌐 Web App (Figma)
    </a>
    <div className="project-actions">
        <a href="https://github.com/D200322/GN_QuickCheck-" className="github" target="_blank">GitHub</a>
        {/*<a href="#" className="live">Live Demo</a>*/}
    </div>
    
  </div>
</div>

<div className="project-card">
      <h3>JMeter Test Report  (June 2025)</h3>
      <p>
       Test Case </p>  <p>Load Performance Testing
      </p>

      <div className="project-tech">
        <span>Apache JMeter</span>
      </div>

      <div className="project-actions">
        <a href="https://github.com/D200322/Software-Testing-and-Quality-Assurance-Case-Study-" className="github" target="_blank">GitHub</a>
        {/*<a href="#" className="live">Live Demo</a>*/}
      </div>
    </div>

    <div className="project-card">
      <h3>Smart Parental Controls – Smart Parenting and Family Management App (July 2025)</h3>
      <p>
        Created an IEEE-standard Software Requirements Specification (SRS) 
      </p>


      <div className="project-actions">
        <a href="https://github.com/D200322/Smart-Parental-Controls-SRS" className="github" target="_blank">GitHub</a>
        {/*<a href="#" className="live">Live Demo</a>*/}
      </div>
    </div>


  </div>
</section>


      {/* Certificates */}
      {/* Certificates Section */}
<section id="certificates" className="section">
  <h2>Certificates</h2>

  {Object.entries({
    "Google AI Essentials": {
      skills: ["AI Fundamentals", "Productivity with AI Tools", "Prompt Engineering", "AI Responsibility", "Staying Ahead in AI"],
      certificates: [
        {
          title: "Google AI Essentials (5 Courses – Introduction to AI, Maximize Productivity With AI Tools, Discover the Art of Prompting, Use AI Responsibility, Stay Ahead of the AI Curve)",
          image: "/certificates/google-ai.jpg",
        }
      ]
    },
    "Kaggle": {
      skills: ["Machine Learning", "Programming Fundamentals"],
      certificates: [
        { title: "Machine Learning – Kaggle", image: "/certificates/kaggle-ml.jpg" },
        { title: "Intro to Programming – Kaggle", image: "/certificates/pro.jpg" }
      ]
      
    },
    "University of Moratuwa (Open Distance Learning)": {
      skills: ["Web Design", "Python Programming"],
      certificates: [
        { title: "Web Design for Beginners - University of Moratuwa (Open Distance Learning)", image: "/certificates/web.jpg" },
        { title: "Python for Beginners - University of Moratuwa (Open Distance Learning)", image: "/certificates/py.jpg" }
      ]
    },
    "Test Automation University (Online Learning Program)": {
      skills: ["Test Automation", "API Testing", "Selenium IDE", "Continuous Testing", "Python Programming"],
      certificates: [
        { title: "Web Element Locator Strategies - Test Automation University (Online Learning Program)", image: "/certificates/api_a.jpg" },
        { title: "API Test Automation with Postman - Test Automation University (Online Learning Program)", image: "/certificates/api_b.jpg" },
        { title: "Codeless Test Automation with Selenium IDE - Test Automation University (Online Learning Program)", image: "/certificates/api_c.jpg" },
        { title: "Setting a Foundation for Successful Test Automation - Test Automation University (Online Learning Program)", image: "/certificates/api_d.jpg" },
        { title: "The Whole Team Approach to Continuous Testing - Test Automation University (Online Learning Program)", image: "/certificates/api_e.jpg" },
        { title: "Python Programming - Test Automation University (Online Learning Program)", image: "/certificates/api_p.jpg" }
      ]
    },
    "SoloLearn": {
      skills: ["C Programming", "JavaScript", "Python", "SQL"],
      certificates: [
        { title: "Introduction to C – SoloLearn", image: "/certificates/c.jpg" },
        { title: "Introduction to JavaScript – SoloLearn", image: "/certificates/j.jpg" },
        { title: "Introduction to Python – SoloLearn", image: "/certificates/py.jpg" },
        { title: "Python Intermediate, Introduction to SQL – SoloLearn", image: "/certificates/pyd.jpg" },
        { title: "Introduction to SQL – SoloLearn", image: "/certificates/sql.jpg" }
      ]
    }
  }).map(([category, data]) => (
    <div key={category} className="certificate-category" style={{ marginBottom: "40px" }}>
      <h3>{category}</h3>
      <div className="skills-list" style={{ marginBottom: "20px" }}>
        <h4>Skills Acquired:</h4>
        <ul>
          {data.skills.map((skill, idx) => (
            <li key={idx} onClick={() => toggleCertificates(category)} style={{ cursor: "pointer", color: "#00b4ff" }}>{skill}</li>
          ))}
        </ul>
      </div>
      {visibleCertificates[category] && (
        <div className="certificates-list">
          <h4>Certificates:</h4>
          <ul className="list">
            {data.certificates.map((cert, index) => (
              <li key={index} style={{ marginBottom: "12px" }}>
                {cert.title}
                <button
                  className="btn-primary"
                  onClick={() => {
                    setSelectedCertificate(cert.image);
                    setShowCertificates(true);
                  }}
                  style={{ marginLeft: "12px" }}
                >
                  View Certificate
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}

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
  <p><strong>Email:</strong> nirmanidurangi2003@gmail.com</p>

  <div className="contact-icons">
    <a href="https://github.com/D200322" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/durangi-nirmani" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://www.instagram.com/invites/contact/?igsh=1u28dnj6lq5sc&utm_content=r141yau" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://wa.me/94764697718" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </a>
    <a href="mailto:nirmanidurangi2003@gmail.com">
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
