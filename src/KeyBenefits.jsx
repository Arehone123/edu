function KeyBenefits() {
    const items = [
        {
            title: "Relief",
            desc: "No more manual tracking; instantly see where learners are excelling or struggling.",
        },
        {
            title: "Confidence",
            desc: "Make informed decisions that truly improve results.",
        },
        {
            title: "Empowerment",
            desc: "Take control of your school's performance effortlessly.",
        },
        {
            title: "Satisfaction",
            desc: "Witness tangible improvements in learner outcomes without extra stress.",
        },
    ];

    return (
        <>
            <div
                className="key-benefits-container"
                style={{
                    border: "1px solid rgba(0,109,119,0.15)",
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, rgba(0,139,139,0.02) 0%, rgba(0,109,119,0.05) 100%)",
                    padding: "2rem 1.5rem",
                    display: "grid",
                    gap: "2rem",
                    margin: "2rem auto",
                    maxWidth: "1100px",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                {/* Header */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "1rem",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                            fontWeight: "700",
                            color: "#006d77",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Key Benefits
                    </h2>
                    <p
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.1rem)",
                            color: "#475569",
                            fontWeight: "400",
                            maxWidth: "600px",
                            margin: "0 auto",
                        }}
                    >
                        Transform your educational management experience
                    </p>
                </div>

                {/* Benefits Grid */}
                <div
                    className="benefits-grid"
                    style={{
                        display: "grid",
                        gap: "1.5rem",
                        width: "100%",
                    }}
                >
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="benefit-card"
                            style={{
                                background: "#fff",
                                border: "1px solid rgba(0,109,119,0.12)",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                textAlign: "center",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.boxShadow =
                                    "0 12px 30px rgba(0,109,119,0.15)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                    "0 4px 20px rgba(0,0,0,0.05)";
                            }}
                        >
                            {/* Title */}
                            <h3
                                style={{
                                    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                                    fontWeight: "600",
                                    color: "#006d77",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: "0.95rem",
                                    fontWeight: "400",
                                    color: "#475569",
                                    lineHeight: "1.5",
                                    margin: 0,
                                }}
                            >
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive CSS */}
            <style>{`
                /* Mobile First */
                .benefits-grid {
                    grid-template-columns: 1fr;
                }

                /* Tablets */
                @media (min-width: 640px) {
                    .benefits-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                /* Desktops */
                @media (min-width: 1024px) {
                    .benefits-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
            `}</style>
        </>
    );
}

export default KeyBenefits;