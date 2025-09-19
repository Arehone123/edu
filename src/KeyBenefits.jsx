import { useState } from "react";

function KeyBenefits() {
    const [active, setActive] = useState(null);

    const items = [
        {
            title: "Relief",
            desc: "No more manual tracking; instantly see where learners are excelling or struggling.",
            icon: "🌟",
        },
        {
            title: "Confidence",
            desc: "Make informed decisions that truly improve results.",
            icon: "💪",
        },
        {
            title: "Empowerment",
            desc: "Take control of your school's performance effortlessly.",
            icon: "🚀",
        },
        {
            title: "Satisfaction",
            desc: "Witness tangible improvements in learner outcomes without extra stress.",
            icon: "✨",
        },
    ];

    return (
        <div
            style={{
                border: "2px solid rgba(0,109,119,0.3)",
                borderRadius: "40px",
                background: "transparent",
                padding: "1.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
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
                    cursor: "pointer",
                }}
            >
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        onMouseEnter={() => setActive(idx)}
                        onMouseLeave={() => setActive(null)}
                        style={{
                            position: "relative",
                            textAlign: "center",
                            flex: 1,
                        }}
                    >
            <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>
              {item.icon}
            </span>
                        {item.title}

                        {/* Show description only on hover */}
                        {active === idx && (
                            <p
                                style={{
                                    marginTop: "0.5rem",
                                    fontSize: "0.95rem",
                                    fontWeight: "500",
                                    color: "#64748b",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {item.desc}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KeyBenefits;
