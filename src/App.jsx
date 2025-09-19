import './App.css'
import Navbar from "./navbar.jsx";
import Footer from "./Footer.jsx";
import KeyBenefits from "./KeyBenefits.jsx";
import EduTrackPricing from "./pricing.jsx";
import EduTrackHero from "./EduTrackHero.jsx";
import ContactSection from "./contact us.jsx";

function App() {
    return (
        <>
            <Navbar/>

            {/* Banner / Landing Page */}
           <EduTrackHero />
            {/* About Us Section */}
            <div style={{
                width: "1500px",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                padding: "5rem 1.25rem",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                color: "#1e293b",
                display: "flex",
                justifyContent: "center",
            }}>
                <div style={{
                    maxWidth: "1500px",
                    width: "1500",
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
                            EduTrack AI Software, proudly brought to you by Disane Technologies, is dedicated to
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
                    <EduTrackPricing />
                    <ContactSection />




                </div>
            </div>
            <Footer/>

        </>


    )
}

export default App