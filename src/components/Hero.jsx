import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/image2.jpg';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Hi, I'm <span>Akshay Solanke</span>
                </h1>
                <h2 className="hero-subtitle">Full-Stack Web Developer</h2>
                <p className="hero-description">
                    I build exceptional digital experiences with modern web technologies.
                </p>
                <div className="hero-buttons">
                    <button
                        onClick={() => navigate('/#projects')}
                        className="btn btn-primary"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => navigate('/#contact')}
                        className="btn btn-outline"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
            <div className="hero-image">
                <div className="image-wrapper">
                   <img src={image} alt="Akshay Solanke" className="hero-img" />
                </div>
            </div>
            <hr className="resume-end-line" />
        </section>
    );
};

export default Hero;