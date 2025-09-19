import React from 'react';

export default function EduTrackPricing() {
    return (
        <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem",
            fontFamily: "system-ui, -apple-system, sans-serif",
            color: "#006d77"
        }}>
            {/* Header */}
            <div style={{
                textAlign: "center",
                marginBottom: "3rem"
            }}>
                <h1 style={{
                    fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                    color: "#006d77",
                    fontWeight: "800",
                    margin: "0 0 1rem 0"
                }}>
                    EduTrack AI Software – Subscription Model
                </h1>
                <p style={{
                    fontSize: "1.1rem",
                    color: "#006d77",
                    maxWidth: "800px",
                    margin: "0 auto",
                    lineHeight: "1.6"
                }}>
                    EduTrack AI Software will operate as a subscription-based SaaS model, providing schools with a
                    predictable and scalable pricing structure. Below are the details of the subscription model, payment
                    workflow, and features.
                </p>
            </div>

            {/* Pricing Cards */}
            <div style={{
                width: "100%",
                borderRadius: "24px",
                background: "#f8fafc",
                padding: "3rem 2rem",
                marginBottom: "3rem",
                boxShadow: "0 10px 30px rgba(30, 64, 175, 0.1)"
            }}>
                <h2 style={{
                    fontSize: "2.2rem",
                    color: "#006d77",
                    fontWeight: "700",
                    textAlign: "center",
                    margin: "0 0 2.5rem 0"
                }}>
                    Pricing Structure
                </h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "2rem",
                    width: "100%",
                    maxWidth: "800px",
                    margin: "0 auto"
                }}>
                    {[
                        {
                            title: "Village Schools",
                            price: "R80 per learner per year",
                            monthly: "≈ R6.70",
                            desc: "Affordable rates to support education in village schools"
                        },
                        {
                            title: "Urban Schools",
                            price: "R200 per learner per year",
                            monthly: "≈ R16.70",
                            desc: "Comprehensive package for urban and other schools"
                        }
                    ].map((plan, idx) => (
                        <div
                            key={idx}
                            style={{
                                border: "2px solid #3b82f6",
                                borderRadius: "16px",
                                background: "white",
                                padding: "2rem",
                                textAlign: "center",
                                position: "relative",
                                boxShadow: "0 6px 20px rgba(30, 64, 175, 0.08)"
                            }}
                        >
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "4px",
                                background: "#006d77",
                                borderRadius: "14px 14px 0 0"
                            }}></div>

                            <h3 style={{
                                fontSize: "1.4rem",
                                color: "#006d77",
                                marginBottom: "1rem",
                                fontWeight: "700"
                            }}>
                                {plan.title}
                            </h3>

                            <p style={{
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                marginBottom: "0.5rem",
                                color: "#006d77"
                            }}>
                                {plan.price}
                            </p>

                            <p style={{
                                fontSize: "1rem",
                                color: "#006d77",
                                marginBottom: "1rem",
                                fontWeight: "600"
                            }}>
                                Monthly Equivalent: {plan.monthly}
                            </p>

                            <p style={{
                                color: "#006d77",
                                lineHeight: "1.5",
                                fontSize: "0.95rem"
                            }}>
                                {plan.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}