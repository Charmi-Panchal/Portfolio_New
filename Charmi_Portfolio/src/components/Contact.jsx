export default function Contact() {
  return (
    <>
      {/* Contact Section — lavender background throughout, no white gap */}
      <section
        id="contact"
        style={{
          backgroundColor: "#e3e3ff",
          padding: "150px 30px 0",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1140px", display: "flex", flexDirection: "column", alignItems: "center", gap: "90px", paddingBottom: "0" }}>
          {/* Card — white on lavender, no hidden layers underneath */}
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              border: "2px solid #1d1d1d",
              borderRadius: "20px",
              backgroundColor: "#fff",
              padding: "clamp(50px, 8vw, 90px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "50px",
              position: "relative",
            }}
          >
            {/* Text */}
            <div style={{ maxWidth: "500px", display: "flex", flexDirection: "column", alignItems: "center", gap: "25px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "5px 15px", border: "2px solid #1d1d1d", borderRadius: "20px", backgroundColor: "#e3f2ff", fontSize: "13px", fontWeight: 900, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d1d1d" }}>
                <span>✦</span> Contact
              </div>
              <h2 style={{ fontFamily: "'Cabinet Grotesk', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: "1.14", letterSpacing: "-0.01em", color: "#1d1d1d", margin: 0, textAlign: "center" }}>
                Got a project in mind? Let's get in touch.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", lineHeight: "30px", color: "#1d1d1d", margin: 0, textAlign: "center" }}>
                I'm always open to exciting opportunities, collaborations, and creative projects. Reach out and let's build something great together!
              </p>
            </div>
 
            {/* Contact Links */}
            <div style={{ display: "flex", flexDirection: "row", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <ContactLink href="mailto:charmipanchal56@gmail.com" label="📧 charmipanchal56@gmail.com" bg="#f3ffe3" />
              <ContactLink href="https://www.linkedin.com/in/charmi-panchal-123959257/" label="💼 linkedin.com/in/charmi-panchal" bg="#e3e3ff" external />
              <ContactLink href="https://github.com/Charmi-Panchal" label="🐙 github.com/Charmi-Panchal" bg="#fde4f9" external />
            </div>
 
            {/* Decoration */}
            <span style={{ position: "absolute", top: "-28px", right: "-16px", fontSize: "42px", userSelect: "none", color: "#1d1d1d" }}>✦</span>
          </div>
        </div>
      </section>
 
      {/* Footer — same lavender, no white gap */}
      <footer style={{ backgroundColor: "#e3e3ff", padding: "70px 30px 120px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "900px", display: "flex", flexDirection: "column", gap: "30px" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <a href="#home" style={{ fontFamily: "'Cabinet Grotesk', serif", fontSize: "40px", fontWeight: 900, color: "#1d1d1d", textDecoration: "none" }}>Charmi</a>
            <nav style={{ display: "flex", gap: "30px" }}>
              {[{ label: "About", href: "#about" }, { label: "Work", href: "#portfolio" }, { label: "Contact", href: "#contact" }].map((l) => (
                <a key={l.href} href={l.href}
                  style={{ fontFamily: "'Cabinet Grotesk', serif", fontSize: "17px", fontWeight: 700, color: "#1d1d1d", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.target.style.color = "#7575c8")}
                  onMouseLeave={(e) => (e.target.style.color = "#1d1d1d")}
                >{l.label}</a>
              ))}
            </nav>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            {/* <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#1d1d1d", margin: 0 }}>© 2025 Charmi Panchal. All rights reserved.</p> */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { href: "mailto:charmipanchal56@gmail.com", label: "📧" },
                { href: "https://github.com/Charmi-Panchal", label: "🐙" },
                { href: "https://www.linkedin.com/in/charmi-panchal-123959257/", label: "💼" },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: "42px", height: "38px", border: "2px solid #1d1d1d", borderRadius: "10px", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e3e3ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                >{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
 
function ContactLink({ href, label, bg, external }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
      style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "18px 24px", border: "2px solid #1d1d1d", borderRadius: "10px", backgroundColor: bg, fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 600, color: "#1d1d1d", textDecoration: "none", letterSpacing: "-0.02em", transition: "transform 0.15s" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >{label}</a>
  );
}
 
// ── NAV ───────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: "#fff", borderBottom: "2px solid #1d1d1d", display: "flex", justifyContent: "center", padding: "0 30px", height: "70px" }}>
      <div style={{ width: "100%", maxWidth: "1140px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#home" style={{ fontFamily: "'Cabinet Grotesk', serif", fontSize: "22px", fontWeight: 900, color: "#1d1d1d", textDecoration: "none" }}>Charmi</a>
        <nav style={{ display: "flex", gap: "30px" }}>
          {["About", "Portfolio", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, color: "#1d1d1d", textDecoration: "none" }}
              onMouseEnter={(e) => (e.target.style.color = "#7575c8")}
              onMouseLeave={(e) => (e.target.style.color = "#1d1d1d")}
            >{item}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
