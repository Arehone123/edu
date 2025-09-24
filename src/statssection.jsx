import React from 'react';

function StatsSection() {
    const stats = [
        { number: "+25k", label: "Students trusted our app" },
        { number: "+153", label: "Schools using our app" },
        { number: "+13K", label: "Teachers and Administrators" },
        { number: "+46", label: "Programs available" }
    ];

    return (
        <>
            {/* Stats Section */}
            <section
                className="stats-section"
                style={{

                    border: '1px solid rgba(0,139,139,0.15)',
                    borderRadius: 'clamp(12px, 2vw, 16px)',
                    padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)',
                    margin: 'clamp(2rem, 4vw, 3rem) auto',
                    maxWidth: '1650px',
                    width: '100%',
                    boxSizing: 'border-box',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 20px rgba(0,139,139,0.08)',

                }}
            >
                <div
                    className="stats-grid"
                    style={{
                        display: 'grid',
                        gap: 'clamp(1.5rem, 4vw, 3rem)',
                        textAlign: 'center'
                    }}
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-item"
                            style={{
                                transition: 'transform 0.3s ease',
                                cursor: 'default',
                                padding: '1rem',
                                borderRadius: '12px',
                                background: 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(5px)',
                                border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,139,139,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                    fontWeight: '800',
                                    color: '#008B8B',
                                    marginBottom: '0.5rem',
                                    textShadow: '0 2px 4px rgba(0,139,139,0.2)',
                                    lineHeight: '0.8'
                                }}
                            >
                                {stat.number}
                            </div>
                            <div
                                style={{
                                    fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
                                    color: '#4a5568',
                                    fontWeight: '600',
                                    lineHeight: '1',
                                    maxWidth: '200px',
                                    margin: '0 auto'
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Responsive CSS */}
            <style>{`
                /* Mobile First - 2x2 Grid */
                .stats-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }

                /* Small tablets */
                @media (min-width: 640px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 2rem;
                    }
                }

                /* Large tablets and desktop - 4 columns */
                @media (min-width: 768px) {
                    .stats-grid {
                        grid-template-columns: repeat(4, 1fr);
                        gap: 2rem;
                    }
                }

                /* Large desktop - more spacing */
                @media (min-width: 1200px) {
                    .stats-grid {
                        gap: 3rem;
                    }
                }

                /* Very small screens optimization */
                @media (max-width: 480px) {
                    .stats-section {
                        margin: 1rem;
                        padding: 1.5rem 1rem;
                        border-radius: 12px;
                    }
                    
                    .stats-grid {
                        gap: 1rem;
                    }
                    
                    .stat-item {
                        padding: 0.75rem !important;
                    }
                }

                /* Touch device optimizations */
                @media (hover: none) and (pointer: coarse) {
                    .stat-item:active {
                        transform: scale(0.95);
                    }
                }

                /* High contrast mode support */
                @media (prefers-contrast: high) {
                    .stats-section {
                        background: rgba(248, 250, 252, 0.95) !important;
                        border: 2px solid #008B8B !important;
                    }
                    
                    .stat-item {
                        background: rgba(255, 255, 255, 0.9) !important;
                        border: 1px solid #008B8B !important;
                    }
                }

                /* Reduced motion support */
                @media (prefers-reduced-motion: reduce) {
                    .stat-item {
                        transition: none !important;
                    }
                }

                /* Print styles */
                @media print {
                    .stats-section {
                        background: white !important;
                        border: 1px solid #ccc !important;
                        box-shadow: none !important;
                    }
                    
                    .stat-item {
                        background: white !important;
                        border: 1px solid #ddd !important;
                        box-shadow: none !important;
                    }
                }
            `}</style>
        </>
    );
}

export default StatsSection;