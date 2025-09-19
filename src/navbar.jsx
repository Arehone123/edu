import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "About us", href: "#about" },
        { name: "Learn More", href: "#learn" }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div
                style={{
                    width: "1500px",
                    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                    transition: "all 0.3s ease",
                    backdropFilter: scrolled ? "blur(10px)" : "none"
                }}
            >
                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1rem 2rem",
                        maxWidth: "1200px",
                        margin: "0 auto"
                    }}
                >
                    {/* Logo */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "#008B8B",
                                borderRadius: "6px",
                                marginRight: "0.75rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "1.2rem"
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
                            <div
                                style={{
                                    fontWeight: 700,
                                    fontSize: "1.25rem",
                                    color: "#2D3748",
                                    lineHeight: "1.2"
                                }}
                            >
                                EduTrack
                            </div>
                            <div
                                style={{
                                    fontSize: "0.75rem",
                                    color: "#008B8B",
                                    fontWeight: 500,
                                    lineHeight: "1"
                                }}
                            >
                                AI SOFTWARE
                            </div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div
                        style={{
                            display: "none",
                            alignItems: "center",
                            gap: "2rem"
                        }}
                        className="desktop-menu"
                    >
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                style={{
                                    color: "#4A5568",
                                    textDecoration: "none",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    transition: "color 0.2s ease",
                                    cursor: "pointer"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = "#008B8B";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = "#4A5568";
                                }}
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Action Buttons */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginLeft: "1rem" }}>
                            <button
                                style={{
                                    padding: "0.5rem 1.25rem",
                                    backgroundColor: "#008B8B",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.2s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#006D6D";
                                    e.target.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#008B8B";
                                    e.target.style.transform = "translateY(0)";
                                }}
                            >
                                Login
                            </button>
                            <button
                                style={{
                                    padding: "0.5rem 1.25rem",
                                    backgroundColor: "transparent",
                                    color: "#008B8B",
                                    border: "2px solid #008B8B",
                                    borderRadius: "6px",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.2s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#008B8B";
                                    e.target.style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#008B8B";
                                }}
                            >
                                Register
                            </button>
                        </div>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div
                        onClick={toggleMenu}
                        style={{
                            display: "flex",
                            width: "30px",
                            height: "24px",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            cursor: "pointer"
                        }}
                        className="mobile-menu-button"
                    >
                        {[1, 2, 3].map((line, index) => (
                            <span
                                key={line}
                                style={{
                                    display: "block",
                                    height: "3px",
                                    width: "100%",
                                    backgroundColor: "#008B8B",
                                    borderRadius: "2px",
                                    transition: "all 0.3s ease",
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

                {/* Mobile Dropdown Menu */}
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.98)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                        transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
                        opacity: menuOpen ? 1 : 0,
                        visibility: menuOpen ? "visible" : "hidden",
                        transition: "all 0.3s ease",
                        zIndex: 999
                    }}
                    className="mobile-dropdown"
                >
                    <div style={{ padding: "1rem 0" }}>
                        {menuItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    display: "block",
                                    padding: "1rem 2rem",
                                    borderBottom: index < menuItems.length - 1 ? "1px solid rgba(229, 229, 229, 0.4)" : "none",
                                    cursor: "pointer",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    color: "#4A5568",
                                    textDecoration: "none",
                                    transition: "all 0.2s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "rgba(0, 139, 139, 0.05)";
                                    e.target.style.color = "#008B8B";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#4A5568";
                                }}
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Mobile Action Buttons */}
                        <div style={{ padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <button
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    backgroundColor: "#008B8B",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.2s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#006D6D";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#008B8B";
                                }}
                            >
                                Login
                            </button>
                            <button
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    backgroundColor: "transparent",
                                    color: "#008B8B",
                                    border: "2px solid #008B8B",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.2s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#008B8B";
                                    e.target.style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#008B8B";
                                }}
                            >
                                Register
                            </button>
                        </div>
                    </div>
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
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        zIndex: 998
                    }}
                ></div>
            )}

            {/* Add CSS for responsive design */}
            <style>{`
                @media (min-width: 768px) {
                    .desktop-menu {
                        display: flex !important;
                    }
                    .mobile-menu-button {
                        display: none !important;
                    }
                    .mobile-dropdown {
                        display: none !important;
                    }
                }
            `}</style>


        </>
    );
}

export default Navbar;