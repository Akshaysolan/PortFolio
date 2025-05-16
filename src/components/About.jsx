import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container About">

                <div className="about-title-wrapper">
                    <h2>About Me</h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a passionate Full-Stack Developer with expertise in building web applications
                            using modern technologies. Currently pursuing my Bachelor's degree in Computer
                            Engineering at Indira College of Engineering and Management.
                        </p>
                        <p>
                            My journey in web development started when I built my first website. Since then,
                            I've worked on various projects including a Hospital Management System, Video
                            Streaming Application, and professional Emailing System.
                        </p>
                        <p>
                            When I'm not coding, you can find me contributing to open-source projects,
                            solving problems on LeetCode, or exploring new technologies.
                        </p>
                        <div className="skills">
                            <h3>Technical Skills</h3>
                            <div className="skills-grid">
                                <div className="skill-category">
                                    <h4>Frontend</h4>
                                    <ul>
                                        <li>React</li>
                                        <li>JavaScript</li>
                                        <li>HTML/CSS</li>
                                        <li>Tailwind CSS</li>
                                    </ul>
                                </div>
                                <div className="skill-category">
                                    <h4>Backend</h4>
                                    <ul>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                        <li>Spring Boot</li>
                                        <li>Django</li>
                                    </ul>
                                </div>
                                <div className="skill-category">
                                    <h4>Tools</h4>
                                    <ul>
                                        <li>Git/GitHub</li>
                                        <li>Postman</li>
                                        <li>VS Code</li>
                                        <li>Docker</li>
                                    </ul>
                                </div>
                                <div className="skill-category">
                                    <h4>Databases</h4>
                                    <ul>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="placeholder-image"></div>
                    </div>
                </div>
            </div>
            <hr className="resume-end-line" />
        </section>
    );
};

export default About;