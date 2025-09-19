import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = ["Home", "About us", "Products & Services", "Contact"];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div
                style={{
                    width: "100%",
                    backgroundColor: scrolled ? "transparent" : "white",
                    boxShadow: scrolled ? "none" : "0 2px 6px rgba(0,0,0,0.2)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                    mixBlendMode: scrolled ? "multiply" : "normal",
                    backdropFilter: scrolled ? "blur(10px)" : "none"
                }}
            >
                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.5rem 2rem"
                    }}
                >
                    {/* Logo */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: "60px",
                                height: "60px",
                                backgroundColor: "#006d77",
                                borderRadius: "8px",
                                marginRight: "0.5rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontWeight: "bold"
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
                        <span
                            style={{
                                fontWeight: 700,
                                fontSize: "1.2rem",
                                color: scrolled ? "white" : "inherit",
                                textShadow: scrolled ? "0 1px 2px rgba(0,0,0,0.5)" : "none",
                                transition: "color 0.3s ease, text-shadow 0.3s ease"
                            }}
                        >
                            EduTrack AI Software
                        </span>
                    </div>

                    {/* Hamburger Menu */}
                    <div
                        onClick={toggleMenu}
                        style={{
                            width: "30px",
                            height: "24px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            cursor: "pointer",
                            transform: menuOpen ? "rotate(0deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease"
                        }}
                    >
                        {[1, 2, 3].map((line, index) => (
                            <span
                                key={line}
                                style={{
                                    display: "block",
                                    height: "4px",
                                    width: "100%",
                                    backgroundColor: scrolled ? "white" : "#006d77",
                                    borderRadius: "2px",
                                    transition: "all 0.3s ease",
                                    filter: scrolled ? "drop-shadow(0 1px 1px rgba(0,0,0,0.5))" : "none",
                                    transform: menuOpen
                                        ? index === 0
                                            ? "rotate(45deg) translate(5px, 5px)"
                                            : index === 1
                                                ? "opacity(0)"
                                                : "rotate(-45deg) translate(7px, -6px)"
                                        : "none",
                                    transformOrigin: "center"
                                }}
                            ></span>
                        ))}
                    </div>
                </nav>

                {/* Dropdown Menu */}
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
                        opacity: menuOpen ? 1 : 0,
                        visibility: menuOpen ? "visible" : "hidden",
                        transition: "all 0.3s ease",
                        zIndex: 999
                    }}
                >
                    {menuItems.map((item, index) => (
                        <div
                            key={item}
                            onClick={() => {
                                console.log(`Clicked on ${item}`);
                                setMenuOpen(false); // Close menu after click
                            }}
                            style={{
                                padding: "1rem 2rem",
                                borderBottom: index < menuItems.length - 1 ? "1px solid rgba(229, 229, 229, 0.6)" : "none",
                                cursor: "pointer",
                                fontSize: "1rem",
                                fontWeight: 500,
                                color: "#333",
                                transition: "background-color 0.2s ease, color 0.2s ease",
                                ":hover": {
                                    backgroundColor: "rgba(248, 249, 250, 0.8)",
                                    color: "#006d77"
                                }
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "rgba(248, 249, 250, 0.8)";
                                e.target.style.color = "#006d77";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "#333";
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay to close menu when clicking outside */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "transparent",
                        zIndex: 998
                    }}
                ></div>
            )}
        </>
    );
}

export default Navbar;