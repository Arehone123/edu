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
        <div
            style={{
                border: "2px solid rgba(0,109,119,0.3)",
                borderRadius: "clamp(20px, 4vw, 40px)",
                background: "transparent",
                padding: "clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(1rem, 3vw, 2rem)",
                margin: "2rem 0",
                maxWidth: "100%",
                boxSizing: "border-box"
            }}
        >
            {/* Top Row: Titles */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    gap: "2rem",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                    color: "#006d77",
                    textAlign: "center",
                }}
            >
                {items.map((item, idx) => (
                    <div key={idx} style={{ flex: 1 }}>
                        <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                            {item.title}
                        </div>
                        <p
                            style={{
                                fontSize: "0.95rem",
                                fontWeight: "500",
                                color: "#64748b",
                            }}
                        >
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KeyBenefits;
