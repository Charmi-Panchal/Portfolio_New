import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 809);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const linkStyle = {
    fontFamily: "'Cabinet Grotesk', serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#1d1d1d",
    textDecoration: "none",
    lineHeight: "21px",
    transition: "color 0.2s",
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        zIndex: 10,
        backgroundColor: "#fff",
        borderBottom: "2px solid #1d1d1d",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: isMobile ? "80px" : "100px",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "'Cabinet Grotesk', serif",
            fontSize: "50px",
            fontWeight: 900,
            color: "#1d1d1d",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Charmi
        </a>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: "35px", alignItems: "center" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} style={linkStyle}
                onMouseEnter={e => e.target.style.color = "#7575c8"}
                onMouseLeave={e => e.target.style.color = "#1d1d1d"}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "2px solid #1d1d1d",
              borderRadius: "10px",
              width: "42px",
              height: "38px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "0",
            }}
          >
            <span style={{ display: "block", width: "20px", height: "2px", backgroundColor: "#1d1d1d", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "20px", height: "2px", backgroundColor: "#1d1d1d", borderRadius: "2px" }} />
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            borderBottom: "2px solid #1d1d1d",
            borderLeft: "2px solid #1d1d1d",
            borderRight: "2px solid #1d1d1d",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            padding: "30px 30px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 9,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ ...linkStyle, fontSize: "21px" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;900&display=swap');
      `}</style>
    </header>
  );
}