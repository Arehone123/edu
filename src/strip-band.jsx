import React from 'react';
import StatsSection from "./statssection.jsx";

function StripBand() {
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
                        font-size: 1rem; /* smaller for tablets */
                        max-width: 400px;
                    }
                }
                @media (max-width: 768px) {
                    .hero-overlay {
                        padding: 1.rem;
                        padding-left: 2rem;
                        align-items: center;
                        text-align: center;
                    }
                    .hero-text h1 {
                        font-size: 0.9rem; /* smaller on mobile */
                        max-width: 100%;
                    }
                }
                @media (max-width: 480px) {
                    .hero-text h1 {
                        font-size: 0.8rem; /* very small on phones */
                    }
                    .hero-overlay button {
                        width: 100%;
                        font-size: 0.8rem;
                        padding: 0.5rem;
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
                        height: '250px',
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
                    background: 'linear-gradient(to right, rgba(4,92,92,0.95) 0%, rgba(4,92,92,0.8) 40%, transparent 70%)', // swapped to teal gradient
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: '2rem',
                    paddingLeft: '4rem'
                }}>
                    <div className="hero-text">
                        <h1 style={{
                            fontSize: '1.25rem', // half of 2.5rem
                            margin: '1rem 0',
                            color: '#fff', // white text
                            fontWeight: 'bold',
                            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
                            maxWidth: '500px'
                        }}>
                            SMART EDUCATION MANAGEMENT
                        </h1>
                        <button
                            className="cta-btn"
                            style={{
                                backgroundColor: '#fff',
                                color: '#045c5c', // reversed contrast
                                padding: '0.5rem 1rem',
                                fontSize: '0.9rem',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                                fontWeight: "600"
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#f1f1f1';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#fff';
                            }}
                        >
                            Get Started For Free
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StripBand;
