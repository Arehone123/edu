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
                className="navbar-container"
                style={{
                    width: "100%",
                    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
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
                        padding: "1rem 1rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        width: "100%"
                    }}
                >
                    {/* Logo */}
                    <div style={{ display: "flex", alignItems: "center", zIndex: 1001 }}>
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
                                fontSize: "1.2rem",
                                flexShrink: 0
                            }}
                        >
                            ET
                        </div>
                        <div>
                            <div
                                style={{
                                    fontWeight: 700,
                                    fontSize: "1.25rem",
                                    color: "#2D3748",
                                    lineHeight: "1.2",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                EduTrack
                            </div>
                            <div
                                style={{
                                    fontSize: "0.75rem",
                                    color: "#008B8B",
                                    fontWeight: 500,
                                    lineHeight: "1",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                AI SOFTWARE
                            </div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div
                        className="desktop-menu"
                        style={{
                            display: "none",
                            alignItems: "center",
                            gap: "2rem"
                        }}
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
                                    cursor: "pointer",
                                    whiteSpace: "nowrap"
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
                                    transition: "all 0.2s ease",
                                    whiteSpace: "nowrap"
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
                                    transition: "all 0.2s ease",
                                    whiteSpace: "nowrap"
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
                        className="mobile-menu-button"
                        style={{
                            display: "flex",
                            width: "30px",
                            height: "24px",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            cursor: "pointer",
                            zIndex: 1001,
                            position: "relative"
                        }}
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
                    className="mobile-dropdown"
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.98)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                        transform: menuOpen ? "translateY(0)" : "translateY(-20px)",
                        opacity: menuOpen ? 1 : 0,
                        visibility: menuOpen ? "visible" : "hidden",
                        transition: "all 0.3s ease",
                        zIndex: 999,
                        maxHeight: menuOpen ? "500px" : "0",
                        overflow: "hidden"
                    }}
                >
                    <div style={{ padding: "1rem 0" }}>
                        {menuItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    display: "block",
                                    padding: "1rem 1.5rem",
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
                                    e.target.style.paddingLeft = "2rem";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#4A5568";
                                    e.target.style.paddingLeft = "1.5rem";
                                }}
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Mobile Action Buttons */}
                        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <button
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    backgroundColor: "#008B8B",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontSize: "1rem",
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
                                onClick={() => setMenuOpen(false)}
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
                                    borderRadius: "8px",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.2s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#008B8B";
                                    e.target.style.color = "white";
                                    e.target.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#008B8B";
                                    e.target.style.transform = "translateY(0)";
                                }}
                                onClick={() => setMenuOpen(false)}
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
                        zIndex: 998,
                        backdropFilter: "blur(2px)"
                    }}
                ></div>
            )}



            {/* Responsive CSS */}
            <style>{`
                /* Mobile First - Base styles for mobile */
                .navbar-container {
                    padding: 0;
                }
                
                .desktop-menu {
                    display: none !important;
                }
                
                .mobile-menu-button {
                    display: flex !important;
                }
                
                .mobile-dropdown {
                    display: block;
                }

                /* Tablet styles */
                @media (min-width: 640px) {
                    .navbar-container nav {
                        padding: 1rem 1.5rem;
                    }
                }

                /* Desktop styles */
                @media (min-width: 1024px) {
                    .navbar-container nav {
                        padding: 1rem 2rem;
                    }
                    
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

                /* Large desktop adjustments */
                @media (min-width: 1200px) {
                    .desktop-menu {
                        gap: 2.5rem;
                    }
                }

                /* Very small screens */
                @media (max-width: 480px) {
                    .navbar-container nav {
                        padding: 0.75rem 1rem;
                    }
                    
                    .navbar-container nav > div:first-child > div:first-child {
                        width: 35px;
                        height: 35px;
                        margin-right: 0.5rem;
                    }
                    
                    .navbar-container nav > div:first-child > div:last-child > div:first-child {
                        font-size: 1.1rem;
                    }
                }

                /* Smooth scrolling for anchor links */
                html {
                    scroll-behavior: smooth;
                }

                /* Prevent horizontal scroll on small screens */
                body {
                    overflow-x: hidden;
                }
            `}</style>
        </>
    );
}

export default Navbar;