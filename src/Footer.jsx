import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
    const services = [
        "AI-Powered Learning Analytics",
        "Student Progress Tracking",
        "Personalized Learning Paths",
        "Educational Data Insights",
        "Smart Assessment Tools",
        "Performance Reporting"
    ];

    return (
        <div
            style={{
                width: "1500px",
                backgroundColor: "#006d77",
                color: "white",
                padding: "clamp(1.5rem, 4vw, 2rem) clamp(1rem, 3vw, 1rem)",
                bottom: 0,
                left: 0,
                boxSizing: "border-box"
            }}
        >
            <footer>
                <div
                    style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: window.innerWidth < 768 ? "column" : "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "clamp(1.5rem, 4vw, 2rem)",
                        boxSizing: "border-box"
                    }}
                >
                    {/* Logo + Info */}
                    <div style={{
                        flex: 1,
                        minWidth: "250px",
                        marginBottom: window.innerWidth < 768 ? "1rem" : "0"
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "1rem",
                            flexWrap: "wrap",
                            gap: "0.75rem"
                        }}>
                            <div
                                style={{
                                    width: "clamp(50px, 8vw, 60px)",
                                    height: "clamp(50px, 8vw, 60px)",
                                    backgroundColor: "white",
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}
                            >
                                <img
                                    src="src/edutrackai%20logo.jpeg"
                                    alt="EduTrack Logo"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "8px"
                                    }}
                                />
                            </div>
                            <div>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                                    fontWeight: "700",
                                    lineHeight: "1.2"
                                }}>
                                    EduTrack AI Software
                                </h3>
                                <p style={{
                                    margin: 0,
                                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                                    color: "#b3d9db",
                                    fontStyle: "italic",
                                    lineHeight: "1.2"
                                }}>
                                    Smart Education Management
                                </p>
                            </div>
                        </div>

                        <a
                            href="#"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                color: "white",
                                textDecoration: "none",
                                padding: "clamp(0.4rem, 1.5vw, 0.5rem) clamp(0.8rem, 2vw, 1rem)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                borderRadius: "6px",
                                fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                                transition: "all 0.3s ease",
                                whiteSpace: "nowrap"
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = "transparent";
                            }}
                        >
                            <Linkedin size={clamp(16, 4, 18)} />
                            Follow us on LinkedIn
                        </a>
                    </div>

                    {/* Services */}
                    <div style={{
                        flex: 1,
                        minWidth: "200px"
                    }}>
                        <h4 style={{
                            fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                            marginBottom: "1rem",
                            color: "#b3d9db",
                            fontWeight: "600"
                        }}>
                            Our Services
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {services.map((s, i) => (
                                <li key={i} style={{
                                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                                    marginBottom: "0.4rem",
                                    lineHeight: "1.4"
                                }}>
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div style={{
                        flex: 1,
                        minWidth: "180px"
                    }}>
                        <h4 style={{
                            fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                            marginBottom: "1rem",
                            color: "#b3d9db",
                            fontWeight: "600"
                        }}>
                            Quick Links
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {["Home", "About us", "Products & Services", "Contact us"].map((item, idx) => (
                                <a
                                    key={idx}
                                    href="/"
                                    style={{
                                        color: "white",
                                        fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                                        textDecoration: "none",
                                        transition: "0.3s",
                                        lineHeight: "1.4"
                                    }}
                                    onMouseOver={(e) => (e.target.style.color = "#b3d9db")}
                                    onMouseOut={(e) => (e.target.style.color = "white")}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div style={{
                        flex: 1,
                        minWidth: "250px"
                    }}>
                        <h4 style={{
                            fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                            marginBottom: "1rem",
                            color: "#b3d9db",
                            fontWeight: "600"
                        }}>
                            Contact Us
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                flexWrap: "wrap"
                            }}>
                                <Mail size={clamp(16, 4, 18)} style={{ color: "#b3d9db", flexShrink: 0 }} />
                                <span style={{
                                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                                    wordBreak: "break-word"
                                }}>
                                    info@edutrack-ai.com
                                </span>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                flexWrap: "wrap"
                            }}>
                                <Phone size={clamp(16, 4, 18)} style={{ color: "#b3d9db", flexShrink: 0 }} />
                                <span style={{
                                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                                    whiteSpace: "nowrap"
                                }}>
                                    +27 (0) 21 123 4567
                                </span>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "0.5rem"
                            }}>
                                <MapPin size={clamp(16, 4, 18)} style={{
                                    color: "#b3d9db",
                                    marginTop: "0.1rem",
                                    flexShrink: 0
                                }} />
                                <span style={{
                                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                                    lineHeight: "1.4"
                                }}>
                                    Cape Town, Western Cape, South Africa
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div
                    style={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        margin: "clamp(1.5rem, 4vw, 2rem) 0 clamp(1rem, 3vw, 1rem)"
                    }}
                ></div>

                {/* Copyright */}
                <div style={{
                    textAlign: "center",
                    fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                    color: "#b3d9db",
                    lineHeight: "1.4"
                }}>
                    © {new Date().getFullYear()} <strong>EduTrack AI Software</strong>. All rights reserved.
                </div>
            </footer>

            {/* Add responsive CSS */}
            <style>{`
                @media (max-width: 767px) {
                    .footer-container {
                        flex-direction: column !important;
                    }
                    .footer-section {
                        margin-bottom: 1.5rem;
                    }
                }
                @media (max-width: 480px) {
                    .footer-logo-text {
                        text-align: center;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}

// Helper function for clamp values (since we can't use CSS clamp in inline styles perfectly)
function clamp(min, preferred, max) {
    if (typeof window !== 'undefined') {
        const vw = window.innerWidth;
        if (vw < 480) return min;
        if (vw > 1200) return max;
        return preferred + (vw / 100);
    }
    return preferred;
}

export default Footer;