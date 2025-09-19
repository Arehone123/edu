import './App.css'
import Navbar from "./navbar.jsx";
import Footer from "./Footer.jsx";
import KeyBenefits from "./KeyBenefits.jsx";

function App() {
    return (
        <>
            <Navbar/>

            {/* Banner / Landing Page */}
            <div style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #006d77 0%, #2E8B8B 25%, #4ECDC4 50%, #45B7B8 75%, #006d77 100%)",
                backgroundSize: "400% 400%",
                animation: "gradientBG 15s ease infinite",
                color: "white",
                textAlign: "center",
                overflow: "hidden",
                position: "relative"
            }}>
                {/* Animated background logos */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('src/edutrackai logo.jpeg')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "150px",
                    opacity: 0.08,
                    zIndex: 0
                }}></div>

                {/* Floating particles effect */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 0%, transparent 50%)",
                    zIndex: 1
                }}></div>

                {/* Title */}
                <h1 style={{
                    fontSize: "clamp(2.5rem, 6vw, 4rem)",
                    fontWeight: "700",
                    margin: "0",
                    zIndex: 2,
                    textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    letterSpacing: "-0.02em"
                }}>
                    EduTrack AI Software
                </h1>

                {/* Subtitle */}
                <p style={{
                    fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                    marginTop: "1rem",
                    maxWidth: "600px",
                    zIndex: 2,
                    opacity: 0.95,
                    fontWeight: "300"
                }}>
                    Smart Education Management
                </p>

                {/* Call-to-action button */}
                <a
                    href="#get-started"
                    style={{
                        marginTop: "2.5rem",
                        padding: "1rem 2.5rem",
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "50px",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                        zIndex: 2,
                        transition: "all 0.3s ease",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                    onMouseOver={(e) => {
                        e.target.style.background = "rgba(255,255,255,0.25)";
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.background = "rgba(255,255,255,0.15)";
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
                    }}
                >
                    Get Started
                </a>

                {/* Enhanced animations */}
                <style>
                    {`
                      @keyframes gradientBG {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                      }
                
                      @keyframes popOut {
                        0% { transform: scale(0.6); opacity: 0.2; }
                        50% { transform: scale(1.2); opacity: 0.05; }
                        100% { transform: scale(2.0); opacity: 0; }
                      }
                    `}
                </style>
            </div>

            {/* About Us Section */}
            <div style={{
                width: "100%",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                padding: "5rem 1.25rem",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                color: "#1e293b",
                display: "flex",
                justifyContent: "center",
            }}>
                <div style={{
                    maxWidth: "1200px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4rem",
                }}>
                    {/* Header */}
                    <div style={{textAlign: "center"}}>
                        <h2 style={{
                            fontSize: "clamp(2rem, 5vw, 2.5rem)",
                            background: "linear-gradient(135deg, #006d77, #2E8B8B)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontWeight: "800",
                            marginBottom: "1rem",
                            letterSpacing: "-0.02em"
                        }}>
                            Overview
                        </h2>
                        <div style={{
                            height: "4px",
                            width: "100px",
                            background: "linear-gradient(90deg, #006d77, #2E8B8B)",
                            margin: "0 auto 2rem auto",
                            borderRadius: "2px"
                        }}/>
                        <p style={{
                            fontSize: "1.2rem",
                            maxWidth: "800px",
                            margin: "0 auto",
                            lineHeight: "1.7",
                            color: "#475569",
                            fontWeight: "500"
                        }}>
                            EduTrack AI, proudly brought to you by EduTrack AI Software, is dedicated to
                            making school management and learner success effortless. We empower educators and school
                            leaders with real-time insights into learner performance.
                        </p>
                    </div>

                    {/* CEO & Mission/Vision Section */}
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "3rem",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(10px)",
                        padding: "3rem",
                        borderRadius: "24px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
                    }}>
                        {/* CEO Image */}
                        <div style={{
                            flex: "1 1 250px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                        }}>
                            <div style={{
                                padding: "6px",
                                background: "linear-gradient(135deg, #006d77, #2E8B8B)",
                                borderRadius: "50%",
                                marginBottom: "1rem"
                            }}>
                                <img
                                    src="src\eagle logo.jpeg"
                                    alt="Avuyile Disane"
                                    style={{
                                        width: "220px",
                                        height: "220px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        border: "4px solid white"
                                    }}
                                />
                            </div>
                            <h3 style={{
                                fontSize: "1.5rem",
                                background: "linear-gradient(135deg, #006d77, #2E8B8B)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                fontWeight: "700",
                                margin: "0 0 0.5rem 0"
                            }}>
                                Avuyile Disane
                            </h3>
                            <p style={{
                                fontStyle: "italic",
                                color: "#64748b",
                                fontSize: "1.1rem",
                                fontWeight: "500"
                            }}>CEO & Founder</p>
                        </div>

                        {/* Mission & Vision */}
                        <div style={{
                            flex: "2 1 500px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem"
                        }}>
                            <div style={{
                                padding: "1.5rem",
                                background: "rgba(255,255,255,0.8)",
                                borderRadius: "16px",
                                border: "1px solid rgba(0,109,119,0.1)"
                            }}>
                                <h3 style={{
                                    color: "#006d77",
                                    fontSize: "1.4rem",
                                    fontWeight: "700",
                                    marginBottom: "0.75rem"
                                }}>Our Mission</h3>
                                <p style={{
                                    lineHeight: "1.6",
                                    color: "#475569",
                                    fontWeight: "500",
                                    margin: 0
                                }}>
                                    To create peace of mind and confidence for educators and school leaders by
                                    transforming data into actionable insights that improve learner outcomes.
                                </p>
                            </div>
                            <div style={{
                                padding: "1.5rem",
                                background: "rgba(255,255,255,0.8)",
                                borderRadius: "16px",
                                border: "1px solid rgba(0,109,119,0.1)"
                            }}>
                                <h3 style={{
                                    color: "#006d77",
                                    fontSize: "1.4rem",
                                    fontWeight: "700",
                                    marginBottom: "0.75rem"
                                }}>Our Vision</h3>
                                <p style={{
                                    lineHeight: "1.6",
                                    color: "#475569",
                                    fontWeight: "500",
                                    margin: 0
                                }}>
                                    To be Africa's most trusted AI-powered education partner, where every school feels
                                    empowered to achieve excellence and every learner thrives.
                                </p>
                            </div>
                        </div>
                    </div>

                    <KeyBenefits />


                    {/* Business Profile Section */}
                    <div
                        style={{
                            border: "2px solid rgba(0,109,119,0.3)",
                            borderRadius: "40px",
                            background: "transparent",
                            padding: "2.5rem 3rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                            alignItems: "center",
                            textAlign: "center",
                            boxShadow: "0 12px 40px rgba(0,0,0,0.05)",
                        }}
                    >
                        <h3
                            style={{
                                background: "linear-gradient(135deg, #006d77, #2E8B8B)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                fontSize: "1.8rem",
                                fontWeight: "800",
                                margin: 0,
                            }}
                        >
                            Business Profile
                        </h3>

                        {/* Buttons */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "1.5rem",
                                flexWrap: "wrap",
                            }}
                        >
                            {/* View PDF */}
                            <a
                                href="/path-to-business-profile.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: "1rem 2rem",
                                    background: "linear-gradient(135deg, #006d77, #2E8B8B)",
                                    color: "#fff",
                                    textDecoration: "none",
                                    borderRadius: "50px",
                                    fontWeight: "600",
                                    fontSize: "1rem",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 8px 30px rgba(0,109,119,0.3)",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 12px 40px rgba(0,109,119,0.4)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 8px 30px rgba(0,109,119,0.3)";
                                }}
                            >
                                View PDF
                            </a>

                            {/* Download PDF */}
                            <a
                                href="EduTrack_AI_Software_Company_Profile.pdf"
                                download="EduTrackAI_BusinessProfile.pdf"
                                style={{
                                    padding: "1rem 2rem",
                                    background: "linear-gradient(135deg, #10B981, #059669)",
                                    color: "#fff",
                                    textDecoration: "none",
                                    borderRadius: "50px",
                                    fontWeight: "600",
                                    fontSize: "1rem",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 8px 30px rgba(16,185,129,0.3)",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 12px 40px rgba(16,185,129,0.4)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 8px 30px rgba(16,185,129,0.3)";
                                }}
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>


                    {/* Dashboard Section */}
                    <div style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.5)",
                        padding: "4rem 0",
                        borderRadius: "32px",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <div style={{
                            maxWidth: "1200px",
                            width: "100%",
                            padding: "0 2rem",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "2rem",
                        }}>
                            {[
                                {
                                    title: "Student Dashboard",
                                    desc: "Track your progress, view assignments, and interact with teachers.",
                                    img: "src/student.jpeg"
                                },
                                {
                                    title: "Teacher Dashboard",
                                    desc: "Monitor student performance, submit grades, and manage classes efficiently.",
                                    img: "src/principal.jpeg"
                                },
                                {
                                    title: "Principal Dashboard",
                                    desc: "Get insights into school-wide performance and make strategic decisions.",
                                    img: "src/teacher.jpeg"
                                }
                            ].map((dashboard, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        background: "rgba(255,255,255,0.9)",
                                        backdropFilter: "blur(10px)",
                                        padding: "2rem",
                                        borderRadius: "20px",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = "translateY(-5px)";
                                        e.currentTarget.style.boxShadow = "0 25px 70px rgba(0,109,119,0.12)";
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.08)";
                                    }}
                                >
                                    <h3 style={{
                                        color: "#006d77",
                                        marginBottom: "1rem",
                                        fontSize: "1.3rem",
                                        fontWeight: "700",
                                        textAlign: "center"
                                    }}>{dashboard.title}</h3>
                                    <p style={{
                                        color: "#64748b",
                                        textAlign: "center",
                                        lineHeight: "1.6",
                                        marginBottom: "1.5rem",
                                        fontWeight: "500"
                                    }}>{dashboard.desc}</p>
                                    <img
                                        src={dashboard.img}
                                        alt={dashboard.title}
                                        style={{
                                            width: "100%",
                                            borderRadius: "12px",
                                            boxShadow: "0 8px 30px rgba(0,0,0,0.1)"
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pricing Section */}
                    <div
                        style={{
                            width: "100%",
                            border: "2px solid rgba(0,109,119,0.3)",
                            borderRadius: "40px",
                            background: "transparent",
                            padding: "3.5rem 2rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "3rem",
                            boxShadow: "0 12px 40px rgba(0,0,0,0.05)",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                                background: "linear-gradient(135deg, #006d77, #2E8B8B)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                fontWeight: "800",
                                textAlign: "center",
                                margin: 0,
                            }}
                        >
                            Pricing
                        </h2>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: "2rem",
                                width: "100%",
                                maxWidth: "800px",
                            }}
                        >
                            {[
                                {
                                    title: "Village Schools",
                                    price: "R80 per learner per year",
                                    desc: "Affordable rates to support education in village schools",
                                    gradient: "linear-gradient(135deg, #10B981, #059669)",
                                },
                                {
                                    title: "Other Schools",
                                    price: "R200 per learner per year",
                                    desc: "Comprehensive package for all other schools",
                                    gradient: "linear-gradient(135deg, #006d77, #2E8B8B)",
                                },
                            ].map((plan, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        border: "2px solid rgba(0,109,119,0.2)",
                                        borderRadius: "24px",
                                        background: "transparent",
                                        padding: "2.5rem",
                                        textAlign: "center",
                                        transition: "all 0.3s ease",
                                        position: "relative",
                                        overflow: "hidden",
                                        boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = "translateY(-6px)";
                                        e.currentTarget.style.boxShadow =
                                            "0 18px 50px rgba(0,109,119,0.15)";
                                        e.currentTarget.style.borderColor = "rgba(0,109,119,0.4)";
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.05)";
                                        e.currentTarget.style.borderColor = "rgba(0,109,119,0.2)";
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: "4px",
                                            background: plan.gradient,
                                        }}
                                    ></div>
                                    <h3
                                        style={{
                                            fontSize: "1.5rem",
                                            color: "#006d77",
                                            marginBottom: "1rem",
                                            fontWeight: "700",
                                        }}
                                    >
                                        {plan.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "1.3rem",
                                            fontWeight: "700",
                                            marginBottom: "1rem",
                                            background: plan.gradient,
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        {plan.price}
                                    </p>
                                    <p
                                        style={{
                                            color: "#64748b",
                                            lineHeight: "1.6",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {plan.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Contact Section */}
                    <div style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(20px)",
                        padding: "3rem",
                        borderRadius: "24px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                        gap: "3rem",
                        alignItems: "start"
                    }}>
                        {/* Left Column - Contact Details */}
                        <div>
                            <h2 style={{
                                fontSize: "1.8rem",
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
                                fontSize: "1.1rem",
                                color: "#64748b",
                                lineHeight: "1.6",
                                fontWeight: "500"
                            }}>
                                We'd love to hear from you! Whether you have a question, need support,
                                or just want to say hi, feel free to reach out.
                            </p>

                            <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                                {[
                                    {icon: "📞", text: "073 545 0541 / 072 422 0801"},
                                    {icon: "✉️", text: "admin@edutrack-ai.com"},
                                    {icon: "🌍", text: "www.edutrack-ai.com", isLink: true},
                                    {icon: "🔗", text: "Follow us on LinkedIn"}
                                ].map((contact, idx) => (
                                    <div key={idx} style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "0.75rem",
                                        background: "rgba(0,109,119,0.05)",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(0,109,119,0.1)"
                                    }}>
                                        <span style={{fontSize: "1.2rem"}}>{contact.icon}</span>
                                        {contact.isLink ? (
                                            <a
                                                href={`http://${contact.text}`}
                                                style={{
                                                    color: "#006d77",
                                                    textDecoration: "none",
                                                    fontWeight: "600",
                                                    fontSize: "1rem"
                                                }}
                                            >
                                                {contact.text}
                                            </a>
                                        ) : (
                                            <span style={{
                                                fontSize: "1rem",
                                                color: "#475569",
                                                fontWeight: "500"
                                            }}>{contact.text}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div>
                            <form style={{display: "flex", flexDirection: "column", gap: "1.5rem"}}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    style={{
                                        padding: "1rem",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(0,109,119,0.2)",
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                        background: "rgba(255,255,255,0.8)",
                                        backdropFilter: "blur(10px)",
                                        transition: "all 0.3s ease"
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
                                    placeholder="Your Email"
                                    style={{
                                        padding: "1rem",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(0,109,119,0.2)",
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                        background: "rgba(255,255,255,0.8)",
                                        backdropFilter: "blur(10px)",
                                        transition: "all 0.3s ease"
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
                                    placeholder="Your Message"
                                    rows="5"
                                    style={{
                                        padding: "1rem",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(0,109,119,0.2)",
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                        background: "rgba(255,255,255,0.8)",
                                        backdropFilter: "blur(10px)",
                                        resize: "none",
                                        transition: "all 0.3s ease"
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = "#006d77";
                                        e.target.style.boxShadow = "0 0 0 3px rgba(0,109,119,0.1)";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = "rgba(0,109,119,0.2)";
                                        e.target.style.boxShadow = "none";
                                    }}
                                ></textarea>
                                <button
                                    type="submit"
                                    style={{
                                        padding: "1rem 2rem",
                                        background: "linear-gradient(135deg, #006d77, #2E8B8B)",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "12px",
                                        fontSize: "1rem",
                                        fontWeight: "700",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 8px 30px rgba(0,109,119,0.3)"
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
                </div>
            </div>
            <Footer/>

        </>


    )
}

export default App