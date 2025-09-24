import React, { useState } from 'react';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { text: "+27 (0) 21 123 4567", type: "phone" },
        { text: "info@edutrack-ai.com", type: "email" },
        { text: "www.edutrack-ai.com", isLink: true, type: "website" },
        { text: "Follow us on LinkedIn", isLinkedIn: true, type: "social" }
    ];

    return (
        <div style={{
            width: "100%",
            maxWidth: "100%",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
            padding: "clamp(2rem, 5vw, 3rem)",
            borderRadius: "clamp(16px, 3vw, 24px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(2rem, 5vw, 3rem)",
            alignItems: "start",
            boxSizing: "border-box",
            margin: "2rem 0"
        }}>
            {/* Left Column - Contact Details */}
            <div>
                <h2 style={{
                    fontSize: "clamp(1.5rem, 4vw, 1.8rem)",
                    marginBottom: "1.5rem",
                    background: "linear-gradient(135deg, #006d77, #2E8B8B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: "800"
                }}>
                    Contact Us
                </h2>

                <p style={{
                    marginBottom: "2rem",
                    fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                    color: "#64748b",
                    lineHeight: "1.6",
                    fontWeight: "500"
                }}>
                    We'd love to hear from you! Whether you have a question, need support,
                    or just want to say hi, feel free to reach out.
                </p>

                <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                    {contactInfo.map((contact, idx) => (
                        <div key={idx} style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            padding: "clamp(0.6rem, 2vw, 0.75rem)",
                            background: "rgba(0,109,119,0.05)",
                            borderRadius: "12px",
                            border: "1px solid rgba(0,109,119,0.1)",
                            flexWrap: "wrap",
                            transition: "all 0.3s ease"
                        }}
                             onMouseOver={(e) => {
                                 e.currentTarget.style.background = "rgba(0,109,119,0.1)";
                             }}
                             onMouseOut={(e) => {
                                 e.currentTarget.style.background = "rgba(0,109,119,0.05)";
                             }}
                        >
                            {contact.isLink ? (
                                <a
                                    href={contact.type === 'website' ? `http://${contact.text}` : '#'}
                                    target={contact.type === 'website' ? "_blank" : "_self"}
                                    rel={contact.type === 'website' ? "noopener noreferrer" : ""}
                                    style={{
                                        color: "#006d77",
                                        textDecoration: "none",
                                        fontWeight: "600",
                                        fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                                        wordBreak: "break-word",
                                        transition: "color 0.3s ease"
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.color = "#2E8B8B";
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.color = "#006d77";
                                    }}
                                >
                                    {contact.text}
                                </a>
                            ) : (
                                <span style={{
                                    fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                                    color: "#475569",
                                    fontWeight: "500",
                                    wordBreak: "break-word"
                                }}>{contact.text}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
                <form onSubmit={handleSubmit} style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem"
                }}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        style={{
                            padding: "clamp(0.8rem, 2.5vw, 1rem)",
                            borderRadius: "12px",
                            border: "1px solid rgba(0,109,119,0.2)",
                            fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                            fontWeight: "500",
                            background: "rgba(255,255,255,0.8)",
                            backdropFilter: "blur(10px)",
                            transition: "all 0.3s ease",
                            width: "100%",
                            boxSizing: "border-box"
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = "#006d77";
                            e.target.style.boxShadow = "0 0 0 3px rgba(0,109,119,0.1)";
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = "rgba(0,109,119,0.2)";
                            e.target.style.boxShadow = "none";
                        }}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        style={{
                            padding: "clamp(0.8rem, 2.5vw, 1rem)",
                            borderRadius: "12px",
                            border: "1px solid rgba(0,109,119,0.2)",
                            fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                            fontWeight: "500",
                            background: "rgba(255,255,255,0.8)",
                            backdropFilter: "blur(10px)",
                            transition: "all 0.3s ease",
                            width: "100%",
                            boxSizing: "border-box"
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = "#006d77";
                            e.target.style.boxShadow = "0 0 0 3px rgba(0,109,119,0.1)";
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = "rgba(0,109,119,0.2)";
                            e.target.style.boxShadow = "none";
                        }}
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows="5"
                        required
                        style={{
                            padding: "clamp(0.8rem, 2.5vw, 1rem)",
                            borderRadius: "12px",
                            border: "1px solid rgba(0,109,119,0.2)",
                            fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                            fontWeight: "500",
                            background: "rgba(255,255,255,0.8)",
                            backdropFilter: "blur(10px)",
                            resize: "vertical",
                            transition: "all 0.3s ease",
                            width: "100%",
                            boxSizing: "border-box",
                            minHeight: "120px",
                            fontFamily: "inherit"
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = "#006d77";
                            e.target.style.boxShadow = "0 0 0 3px rgba(0,109,119,0.1)";
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = "rgba(0,109,119,0.2)";
                            e.target.style.boxShadow = "none";
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: "clamp(0.8rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem)",
                            background: "linear-gradient(135deg, #006d77, #2E8B8B)",
                            color: "white",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                            fontWeight: "700",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: "0 8px 30px rgba(0,109,119,0.3)",
                            width: "100%",
                            boxSizing: "border-box"
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow = "0 12px 40px rgba(0,109,119,0.4)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "0 8px 30px rgba(0,109,119,0.3)";
                        }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactSection;