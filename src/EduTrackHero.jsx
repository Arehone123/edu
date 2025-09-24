import React from 'react';
import StatsSection from "./statssection.jsx";

function EduTrackHero() {
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: '1rem',
            background: '#f9f9f9',
            color: '#333'
        }}>
            {/* Extra CSS for responsiveness */}
            <style>
                {`
                @media (max-width: 1024px) {
                    .hero-text h1 {
                        font-size: 2rem;
                        max-width: 400px;
                    }
                }
                @media (max-width: 100%) {
                    .hero-overlay {
                        padding: 1.5rem;
                        padding-left: 2rem;
                        align-items: center;
                        text-align: center;
                    }
                    .hero-text h1 {
                        font-size: 1.75rem;
                        max-width: 100%;
                    }
                    .bottom-section {
                        flex-direction: column;
                    }
                    .bottom-section img {
                        height: 200px;
                    }
                }
                @media (max-width: 480px) {
                    .hero-text h1 {
                        font-size: 1.5rem;
                    }
                    .hero-overlay button {
                        width: 100%;
                        font-size: 0.9rem;
                        padding: 0.6rem;
                    }
                }
                `}
            </style>

            {/* Hero Section */}
            <section style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1900px',
                overflow: 'hidden',
                borderRadius: '12px',
                marginBottom: '1rem'
            }}>
                <img
                    src="src/top%20here.png"
                    alt="Classroom"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
                {/* Gradient Overlay */}
                <div className="hero-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 40%, transparent 70%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: '2rem',
                    paddingLeft: '4rem'
                }}>
                    <div className="hero-text">
                        <h1 style={{
                            fontSize: '2.5rem',
                            margin: '1rem 0',
                            color: '#045c5c',
                            fontWeight: 'bold',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                            maxWidth: '500px'
                        }}>
                            SMART EDUCATION MANAGEMENT
                        </h1>
                        <button
                            className="cta-btn"
                            style={{
                                backgroundColor: '#045c5c',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                fontSize: '1rem',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#034b4b';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#045c5c';
                            }}
                        >
                            Get Started For Free
                        </button>
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="bottom-section" style={{
                display: 'flex',
                width: '100%',
                maxWidth: '1900px',
                gap: '1rem',
                minHeight: '300px'
            }}>
                {/* Left Image */}
                <div style={{
                    flex: '1',
                    overflow: 'hidden',
                    borderRadius: '12px'
                }}>
                    <img
                        src="src/bottom%20right.png"
                        alt="Students working together"
                        style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'cover',
                            borderRadius: '12px'
                        }}
                    />
                </div>

                {/* Right Image */}
                <div style={{
                    flex: '1',
                    overflow: 'hidden',
                    borderRadius: '12px'
                }}>
                    <img
                        src="src/bottom%20here%20left.png"
                        alt="Team collaboration and learning"
                        style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'cover',
                            borderRadius: '12px'
                        }}
                    />
                </div>
            </section>

            <StatsSection />
        </div>
    );
}

export default EduTrackHero;
