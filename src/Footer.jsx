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
                width: "100%",
                backgroundColor: "#006d77",
                color: "white",
                padding: "2rem 1rem",
                bottom: 0,
                left: 0
            }}
        >
            <footer>
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "2rem"
                    }}
                >
                    {/* Logo + Info */}
                    <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                            <div
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    backgroundColor: "white",
                                    borderRadius: "8px",
                                    marginRight: "0.75rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <img
                                    src="src/assets/edutrackai%20logo.jpeg"
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
                                <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "700" }}>
                                    EduTrack AI Software
                                </h3>
                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#b3d9db", fontStyle: "italic" }}>
                                    Empowering Education Through Intelligence
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
                                padding: "0.5rem 1rem",
                                border: "1px solid rgba(255,255,255,0.3)",
                                borderRadius: "6px",
                                fontSize: "0.9rem"
                            }}
                        >
                            <Linkedin size={18} />
                            Follow us on LinkedIn
                        </a>
                    </div>

                    {/* Services */}
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#b3d9db" }}>Our Services</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {services.map((s, i) => (
                                <li key={i} style={{ fontSize: "0.9rem", marginBottom: "0.4rem" }}>
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#b3d9db" }}>Quick Links</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {["Home", "About us", "Products & Services", "Contact us"].map((item, idx) => (
                                <a
                                    key={idx}
                                    href="/"
                                    style={{
                                        color: "white",
                                        fontSize: "0.9rem",
                                        textDecoration: "none",
                                        transition: "0.3s"
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
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#b3d9db" }}>Contact Us</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <Mail size={18} style={{ color: "#b3d9db" }} />
                                info@edutrack-ai.com
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <Phone size={18} style={{ color: "#b3d9db" }} />
                                +27 (0) 21 123 4567
                            </div>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                                <MapPin size={18} style={{ color: "#b3d9db", marginTop: "0.1rem" }} />
                                Cape Town, Western Cape, South Africa
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
                        margin: "2rem 0 1rem"
                    }}
                ></div>

                {/* Copyright */}
                <div style={{ textAlign: "center", fontSize: "0.85rem", color: "#b3d9db" }}>
                    © {new Date().getFullYear()} <strong>EduTrack AI Software</strong>. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Footer;
