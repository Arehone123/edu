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
                    border: '1px solid rgba(0,139,139,0.12)',
                    borderRadius: '10px',
                    padding: '1.2rem 0.8rem',
                    margin: '2rem auto',
                    maxWidth: '1200px',
                    width: '100%',
                    boxSizing: 'border-box',
                    backdropFilter: 'blur(6px)',
                    boxShadow: '0 2px 10px rgba(0,139,139,0.06)',
                }}
            >
                <div
                    className="stats-grid"
                    style={{
                        display: 'grid',
                        gap: '1rem',
                        textAlign: 'center'
                    }}
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-item"
                            style={{
                                transition: 'transform 0.2s ease',
                                cursor: 'default',
                                padding: '0.6rem',
                                borderRadius: '8px',
                                background: 'rgba(255, 255, 255, 0.5)',
                                border: '1px solid rgba(255, 255, 255, 0.25)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.75)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,139,139,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                    fontWeight: '700',
                                    color: '#008B8B',
                                    marginBottom: '0.25rem',
                                    lineHeight: '1'
                                }}
                            >
                                {stat.number}
                            </div>
                            <div
                                style={{
                                    fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)',
                                    color: '#4a5568',
                                    fontWeight: '500',
                                    lineHeight: '1.2',
                                    maxWidth: '160px',
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
                }

                /* Tablets */
                @media (min-width: 640px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                /* Desktop - 4 columns */
                @media (min-width: 768px) {
                    .stats-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                /* Very small screens */
                @media (max-width: 480px) {
                    .stats-section {
                        margin: 1rem;
                        padding: 1rem;
                        border-radius: 8px;
                    }
                    .stat-item {
                        padding: 0.5rem !important;
                    }
                }
            `}</style>
        </>
    );
}

export default StatsSection;
