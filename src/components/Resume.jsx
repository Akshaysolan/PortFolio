import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section id="resume" className='container Resume'>
            <div>
                <h2>My Resume</h2>
            </div>
            <div className="resume-container">
                <div className="resume-header">
                    <h1>Akshay Solanke</h1>
                    <p>Full-Stack Web Developer</p>
                    <div className="contact-info">
                        <span>akshaysolan804@gmail.com</span>
                        <span>8855878880</span>
                        <span>Pune, Maharashtra, India</span>
                    </div>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://leetcode.com/yourprofile" target="_blank" rel="noopener noreferrer">LeetCode</a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://hackerrank.com/yourprofile" target="_blank" rel="noopener noreferrer">HackerRank</a>
                    </div>
                </div>

                <div className="resume-section">
                    <h3>Education</h3>
                    <div className="resume-item">
                        <h4>Indira College Of Engineering and Management</h4>
                        <p>Computer Engineering Bachelor Of Engineering(Computer Engineering)</p>
                        <div className="resume-meta">
                            <span>Pune, Maharashtra, India</span>
                            <span>2021 - 2025</span>
                            <span>CGPA: 8.2</span>
                        </div>
                    </div>
                </div>

                <div className="resume-section">
                    <h3>Experience</h3>
                    <div className="resume-item">
                        <h4>Full-Stack Web Developer Internship</h4>
                        <div className="resume-meta">
                            <span>Dec 2023 - Feb 2024</span>
                        </div>
                        <ul>
                            <li>Completed a dynamic internship focused on full-stack web development</li>
                            <li>Designed and developed multiple projects including a professional Emailing System</li>
                            <li>Implemented a feature that automatically generates personalized folders for new Gmail users</li>
                        </ul>
                    </div>
                </div>

                <div className="resume-section">
                    <h3>Skills</h3>
                    <div className="skills-grid">
                        <div>
                            <h4>Programming Languages:</h4>
                            <p>Java, Python, J2SE, J2EE, JavaScript</p>
                        </div>
                        <div>
                            <h4>Libraries/Frameworks:</h4>
                            <p>Django, SpringBoot, Nodejs, React</p>
                        </div>
                        <div>
                            <h4>Tools / Platforms:</h4>
                            <p>VSCode, Eclipse, Git/Github, Selenium, Postman, PyTorch, TensorFlow</p>
                        </div>
                        <div>
                            <h4>Databases:</h4>
                            <p>MySQL, MongoDB</p>
                        </div>
                    </div>
                </div>

                <div className="resume-section">
                    <h3>Projects</h3>
                    <div className="resume-item">
                        <h4>Hospital Management System</h4>
                        <p>Java, Bootstrap, MySQL, HTML, CSS</p>
                        <ul>
                            <li>Developed a comprehensive system to streamline administrative workflows</li>
                            <li>Integrated patient registration, appointment scheduling, and medical records</li>
                            <li>Implemented role-based access control (RBAC) for data security</li>
                            <li>Conducted automated testing using Selenium</li>
                        </ul>
                    </div>

                    <div className="resume-item">
                        <h4>Video Streaming Application</h4>
                        <p>React, Tailwind, Java, Spring Boot, FFmpeg library</p>
                        <ul>
                            <li>Built a full-stack platform for uploading, processing, and streaming videos</li>
                            <li>Implemented video chunking and encoding using FFmpeg</li>
                        </ul>
                    </div>
                </div>

                <div className="resume-section">
                    <h3>Certifications</h3>
                    <ul className="certifications">
                        <li>Mastering Java + SpringBoot - Udemy</li>
                        <li>IGIS HACKATHON 2024 - IGIS</li>
                        <li>Selenium WebDriver Java + Advance Selenium - Udemy</li>
                    </ul>
                </div>

                <div className="resume-download">
                    <a href="/resume.pdf" download className="btn">
                        Download PDF Version
                    </a>
                </div>
            </div>
            <hr className="resume-end-line" />
        </section>
    );
};

export default Resume;