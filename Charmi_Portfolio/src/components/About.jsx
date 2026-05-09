import { useState, useEffect, useRef } from "react";

const timeline = [
  {
    date: "DEC 2024 – MAY 2025",
    title: "Frontend Developer at LOCAL",
    desc: "Developing responsive web pages in React based on Figma designs, optimizing performance and responsiveness across devices.",
  },
  {
    date: "JUN 2024 – OCT 2024",
    title: "Frontend Developer at Career Girl Global",
    desc: "Built a fully functional startup website with responsive design, dynamic animations, and seamless performance using React.",
  },
  {
    date: "JAN 2024 – APR 2024",
    title: "Technical Educator at The Barabari Project",
    desc: "Transformed access to quality tech education through hands-on teaching, mentoring, and curriculum design.",
  },
];

const testimonials = [
  {
    text: "I've been using this website for months now, and the UI, smooth performance, and overall development have made the user experience exceptional. The results have been incredible, and I couldn't be happier. Highly recommend!",
    name: "Kunal Mestry",
    role: "Web Developer",
  },
  {
    text: "Working with this service for my ecommerce jewellery store has been an amazing experience. The website design, smooth user experience, and overall quality exceeded my expectations. I'm truly impressed with the results. Highly recommended!",
    name: "Evanshi Soni",
    role: "Web Developer",
  },
  {
    text: "The website created for our hotel perfectly matched our vision. The clean design, smooth experience, and professional look have helped us showcase our services beautifully. Truly happy with the overall development and support.",
    name: "Soham Oswal",
    role: "Designer and Developer",
  },
];

const projects = [
  {
    title: "Brotherhood Of Mumbai Website",
    excerpt:
      "A modern ride-booking website developed for a riding club client, focused on smooth booking experiences, responsive design, and seamless user interaction.",
    bg: "#e3f2ff",
    href: "https://www.brotherhoodofmumbai.com",
    imageUrl: null, // auto-fetch
  },
  {
    title: "Restaurant Website",
    excerpt:
      "A responsive restaurant website with online ordering, table reservations, and a seamless mobile-first dining experience.",
    bg: "#fde4f9",
    href: "https://hotel-cyan-psi.vercel.app/",
    imageUrl: null, // auto-fetch
  },
  {
    title: "AI_Powered Content Creator",
    excerpt:
      "An AI-powered content generation platform built with React and OpenAI API for creating real-time marketing and SEO content with a smooth editing experience.",
    bg: "#e3e3ff",
    href: "https://auto-content-silk.vercel.app/",
    imageUrl: null, // auto-fetch
  },
  {
    title: "YouTube Comment Analyzer",
    excerpt:
      "A Streamlit NLP app that extracts and analyzes YouTube comments in real-time — sentiment, toxicity, keyword trends, and audience insights.",
    bg: "#e3f2ff",
    href: "https://github.com/Charmi-Panchal/YoutubeCommentAnalysis",
    imageUrl: "https://i.pinimg.com/736x/60/a8/63/60a863936f0b8a587f11e77bf1d313cd.jpg", // ← replace with your image URL
  },
  {
    title: "SmartCity Data Streaming Pipeline",
    excerpt:
      "Real-time IoT data pipeline for Smart City using Apache Kafka, Spark, and AWS (S3, Glue, Athena, Redshift) with Power BI dashboards.",
    bg: "#f3ffe3",
    href: "https://github.com/Charmi-Panchal",
    imageUrl: "https://i.pinimg.com/1200x/a8/5d/36/a85d36856c497a6a64a7d498d5a72096.jpg",
  },
];

// ── SVG Doodles ───────────────────────────────────────────────────────────────

function ArrowDoodle({ style }) {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" style={style}>
      <path
        d="M 20 10 C 20 10 15 35 25 55 C 30 65 38 72 45 78"
        stroke="#1d1d1d"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 38 72 L 45 82 L 54 74"
        stroke="#1d1d1d"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartDoodle({ style }) {
  return (
    <svg width="60" height="55" viewBox="0 0 60 55" fill="none" style={style}>
      <path
        d="M30 50 C15 38, 2 28, 2 18 C2 10, 8 4, 16 4 C22 4, 27 8, 30 12 C33 8, 38 4, 44 4 C52 4, 58 10, 58 18 C58 28, 45 38, 30 50Z"
        stroke="#1d1d1d"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmallHeartDoodle({ style }) {
  return (
    <svg width="36" height="33" viewBox="0 0 36 33" fill="none" style={style}>
      <path
        d="M18 30 C9 22, 1 16, 1 10 C1 5, 5 2, 10 2 C13 2, 16 4, 18 7 C20 4, 23 2, 26 2 C31 2, 35 5, 35 10 C35 16, 27 22, 18 30Z"
        stroke="#1d1d1d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WaveDoodle({ style }) {
  return (
    <svg width="80" height="50" viewBox="0 0 80 50" fill="none" style={style}>
      <path
        d="M4 12 Q16 4, 28 12 Q40 20, 52 12 Q64 4, 76 12"
        stroke="#1d1d1d"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M4 26 Q16 18, 28 26 Q40 34, 52 26 Q64 18, 76 26"
        stroke="#1d1d1d"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M4 40 Q16 32, 28 40 Q40 48, 52 40 Q64 32, 76 40"
        stroke="#1d1d1d"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SwirlDoodle({ style }) {
  return (
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none" style={style}>
      <path
        d="M 40 10 C 55 10, 65 22, 58 34 C 51 46, 32 46, 28 34 C 24 22, 36 16, 44 22 C 52 28, 50 40, 40 44"
        stroke="#1d1d1d"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 40 44 L 38 56 L 44 62"
        stroke="#1d1d1d"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarDoodle({ style }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={style}>
      <path
        d="M18 2 L20 14 L32 12 L22 20 L28 32 L18 24 L8 32 L14 20 L4 12 L16 14 Z"
        stroke="#1d1d1d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Star Rating ───────────────────────────────────────────────────────────────

function StarRating() {
  return (
    <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="26"
          height="26"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            fill="#e3f2ff"
          />
          <path
            d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Z"
            stroke="#1d1d1d"
            strokeWidth="14"
            fill="none"
          />
        </svg>
      ))}
    </div>
  );
}

// ── Arrow Button ──────────────────────────────────────────────────────────────

function ArrowButton({ onClick, direction = "right", disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        border: "2px solid #1d1d1d",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.3 : 1,
        flexShrink: 0,
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.background = "#e3e3ff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
        <circle cx="9.5" cy="9.5" r="8.125" stroke="#1d1d1d" strokeWidth="1.58" />
        {direction === "right" ? (
          <>
            <line x1="6.333" y1="9.5" x2="12.667" y2="9.5" stroke="#1d1d1d" strokeWidth="1.58" strokeLinecap="round" />
            <polyline points="9.5,6.333 12.667,9.5 9.5,12.667" stroke="#1d1d1d" strokeWidth="1.58" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            <line x1="12.667" y1="9.5" x2="6.333" y2="9.5" stroke="#1d1d1d" strokeWidth="1.58" strokeLinecap="round" />
            <polyline points="9.5,6.333 6.333,9.5 9.5,12.667" stroke="#1d1d1d" strokeWidth="1.58" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    </button>
  );
}

// ── Badge ─────────────────────────────────────────────────────────────────────

function Badge({ label }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 15px",
        border: "2px solid #1d1d1d",
        borderRadius: "20px",
        backgroundColor: "#e3f2ff",
        fontSize: "13px",
        fontWeight: 900,
        fontFamily: "'DM Sans', sans-serif",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#1d1d1d",
        width: "fit-content",
      }}
    >
      <span>✦</span> {label}
    </div>
  );
}

// ── Auto Screenshot Thumbnail (Microlink API) ─────────────────────────────────

function AutoThumbnail({ href, bg, title }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.microlink.io?url=${encodeURIComponent(href)}&screenshot=true&meta=false`
    )
      .then((r) => r.json())
      .then((data) => {
        const url = data?.data?.screenshot?.url;
        if (url) setImgSrc(url);
      })
      .catch(() => {});
  }, [href]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        border: "2px solid #1d1d1d",
        borderRadius: "20px",
        overflow: "hidden",
        aspectRatio: "1.34",
        backgroundColor: bg,
        transition: "transform 0.2s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <svg
            width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="#1d1d1d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ opacity: 0.35 }}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#1d1d1d", opacity: 0.45 }}>
            Loading preview…
          </span>
        </div>
      )}
    </a>
  );
}

// ── Custom Image URL Thumbnail ────────────────────────────────────────────────

function CustomImageThumbnail({ href, bg, title, imageUrl }) {
  const isPlaceholder =
    !imageUrl || imageUrl === "PASTE_YOUR_IMAGE_URL_HERE" || imageUrl.trim() === "";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        border: "2px solid #1d1d1d",
        borderRadius: "20px",
        overflow: "hidden",
        aspectRatio: "1.34",
        backgroundColor: bg,
        transition: "transform 0.2s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {!isPlaceholder ? (
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <svg
            width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="#1d1d1d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ opacity: 0.4 }}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              color: "#1d1d1d",
              opacity: 0.5,
              textAlign: "center",
              padding: "0 16px",
            }}
          >
            Add image URL in projects array
          </span>
        </div>
      )}
    </a>
  );
}

// ── About Section ─────────────────────────────────────────────────────────────
function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#e3e3ff",
        padding: "100px 30px 120px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflow: "visible",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;900&family=Cabinet+Grotesk:wght@700;900&display=swap');
        @keyframes rotateBadge { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .about-top-wrapper {
          display: flex; flex-direction: row; gap: 70px;
          align-items: center; flex-wrap: wrap;
          position: relative; width: 100%;
        }
        .about-image-col {
          position: relative; flex-shrink: 0;
          width: clamp(260px, 42%, 480px);
        }
        .about-circle {
          width: 100%; aspect-ratio: 1; border-radius: 50%;
          border: 2px solid #1d1d1d; overflow: hidden;
          background-color: #c9c9ff; display: flex;
          align-items: center; justify-content: center;
        }
        .about-image {
          width: 100%; height: 100%; object-fit: cover;
        }
        .about-text-col {
          flex: 1 1 280px; display: flex; flex-direction: column; gap: 25px;
        }
        .about-bottom-wrapper {
          display: flex; flex-direction: row; gap: 80px; flex-wrap: wrap; width: 100%;
        }
        .about-exp-left {
          flex: 1 1 260px; display: flex; flex-direction: column; gap: 30px;
          position: relative;
        }
        .about-timeline-col {
          flex: 1 1 300px; display: flex; flex-direction: column; gap: 0; position: relative;
        }
        .arrow-doodle {
          position: absolute;
          bottom: -60px;
          right: -10px;
          opacity: 0.85;
          pointer-events: none;
        }

        @media (max-width: 767px) {
          #about {
            padding: 60px 20px 40px !important;
          }
            #about-div{
            gap: 30px !important}
          .about-top-wrapper { flex-direction: column; gap: 30px; }
          .about-image-col { width: 70%; max-width: 280px; margin: 0 auto; }
          .about-bottom-wrapper { flex-direction: column; gap: 24px; }
          .about-exp-left { align-items: center; text-align: center; gap: 16px; }
          .arrow-doodle { display: none; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-top-wrapper { gap: 50px; }
          .about-image-col { width: clamp(240px, 38%, 380px); }
          .about-bottom-wrapper { gap: 50px; }
        }
      `}</style>

      <div style={{ width: "100%", maxWidth: "1140px", display: "flex", flexDirection: "column", gap: "70px" }}>
        {/* TOP: image + text */}
        <div className="about-top-wrapper">
          <div className="about-image-col">
            {/* Removed broken rotating badge SVG — it had no text content */}
            <WaveDoodle
              style={{ position: "absolute", left: "-60px", top: "50%", transform: "translateY(-50%)", zIndex: 2, opacity: 0.85, pointerEvents: "none" }}
            />
            <div className="about-circle">
              <img src="/New_Aboutme.jpg" alt="Profile" className="about-image" />
            </div>
          </div>

          <HeartDoodle style={{ position: "absolute", top: "-30px", right: "0px", zIndex: 2, pointerEvents: "none" }} />
          <SmallHeartDoodle style={{ position: "absolute", top: "10px", right: "55px", zIndex: 2, pointerEvents: "none" }} />

          <div className="about-text-col">
            <Badge label="About" />
            <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: "1.14", letterSpacing: "-0.01em", color: "#1d1d1d", margin: 0 }}>
              More about me
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(17px, 2vw, 22px)", fontWeight: 400, lineHeight: "36px", color: "#1d1d1d", margin: 0 }}>
              I'm Charmi Panchal, a Web Developer &amp; Data Science engineer based in Mumbai. I'm very passionate about crafting meaningful user experiences every day.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", fontWeight: 400, lineHeight: "30px", color: "#1d1d1d", margin: 0 }}>
              My journey spans modern React development, machine learning pipelines, and real-time data streaming systems. I thrive on transforming complex ideas into intuitive, impactful products.
            </p>
          </div>
        </div>

        {/* BOTTOM: experiences + timeline */}
        <div className="about-bottom-wrapper">
          <div className="about-exp-left">
            <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, lineHeight: "44px", color: "#1d1d1d", margin: 0 }}>
              My experiences
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", lineHeight: "30px", color: "#1d1d1d", margin: 0 }}>
              "I've had the pleasure of working with freelance clients, startups, nonprofits, and tech companies — always seeking new and challenging adventures."
            </p>
            {/* Arrow doodle hidden on mobile via CSS class */}
            {/* <ArrowDoodle className="arrow-doodle" style={{}} /> */}
          </div>

          <div className="about-timeline-col">
            <div style={{ position: "absolute", left: "8px", top: "20px", bottom: "20px", width: "2px", backgroundColor: "#1d1d1d", zIndex: 0 }} />
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{ display: "flex", flexDirection: "row", gap: "20px", paddingBottom: i < timeline.length - 1 ? "36px" : "0", position: "relative", zIndex: 1 }}
              >
                <div style={{ flexShrink: 0, width: "18px", height: "18px", borderRadius: "50%", border: "2px solid #1d1d1d", background: i === 0 ? "#b3b3ff" : "#e3e3ff", marginTop: "2px", zIndex: 2 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d1d1d" }}>
                    {t.date}
                  </span>
                  <h4 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "20px", fontWeight: 700, lineHeight: "26px", color: "#1d1d1d", margin: 0 }}>
                    {t.title}
                  </h4>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", lineHeight: "28px", color: "#1d1d1d", margin: 0 }}>
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section
      style={{
        backgroundColor: "#e3e3ff",
        padding: "0 30px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <style>{`
        .testimonials-bg-top {
          height: 50%;
          background-color: #e3e3ff;
          border-bottom: 2px solid #1d1d1d;
        }
        .testimonials-bg-bottom {
          height: 50%;
          background-color: #fff;
        }
        .testimonials-card {
          border: 2px solid #1d1d1d;
          border-radius: 20px;
          background-color: #fff;
          padding: clamp(30px, 5vw, 80px) clamp(20px, 5vw, 40px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          position: relative;
        }
        .testimonials-wrapper {
          position: relative;
          zIndex: 1;
          width: 100%;
          max-width: 900px;
          padding: 0 0 60px;
        }
        .testimonials-arrow {
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
        }

        @media (max-width: 767px) {
          .testimonials-section {
            padding: 0 16px !important;
            margin-top: -20px;
          }
          .testimonials-bg-top {
            height: 55%;
          }
          .testimonials-wrapper {
            padding: 0 0 30px;
          }
          .testimonials-arrow {
            right: -14px;
          }
        }
      `}</style>

      {/* Split background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div className="testimonials-bg-top" />
        <div className="testimonials-bg-bottom" />
      </div>

      {/* Card wrapper */}
      <div className="testimonials-wrapper" style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "900px", padding: "0 0 60px" }}>
        <div className="testimonials-card">
          <StarRating />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(17px, 2vw, 24px)", lineHeight: "36px", color: "#1d1d1d", textAlign: "center", margin: 0, maxWidth: "580px" }}>
            "{testimonials[current].text}"
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <strong style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "22px", fontWeight: 700, color: "#1d1d1d" }}>
              {testimonials[current].name}
            </strong>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#1d1d1d" }}>
              {testimonials[current].role}
            </span>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{ width: 10, height: 10, borderRadius: "50%", border: "none", cursor: "pointer", padding: 0, background: "#1d1d1d", opacity: i === current ? 0.5 : 0.1, transition: "opacity 0.2s" }}
              />
            ))}
          </div>
          <div className="testimonials-arrow">
            <ArrowButton
              direction="right"
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Portfolio Section ─────────────────────────────────────────────────────────

function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{ backgroundColor: "#fff", borderBottom: "2px solid #1d1d1d", padding: "100px 30px 120px", display: "flex", justifyContent: "center", position: "relative", overflow: "visible" }}
    >
      <style>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 40px;
          width: 100%;
        }
        @media (max-width: 600px) {
          .portfolio-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <SwirlDoodle style={{ position: "absolute", left: "clamp(10px, 4vw, 60px)", top: "80px", opacity: 0.85, pointerEvents: "none" }} />
      <StarDoodle style={{ position: "absolute", right: "clamp(10px, 4vw, 60px)", top: "70px", opacity: 0.85, pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: "1140px", display: "flex", flexDirection: "column", alignItems: "center", gap: "50px" }}>
        {/* Header */}
        <div style={{ maxWidth: "750px", display: "flex", flexDirection: "column", alignItems: "center", gap: "25px" }}>
          <Badge label="My Works" />
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: "1.14", letterSpacing: "-0.01em", color: "#1d1d1d", margin: 0, textAlign: "center" }}>
            Check out some of my awesome projects with creative ideas.
          </h2>
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <article key={i} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Thumbnail: custom URL for YouTube & SmartCity, auto-fetch for others */}
              {p.imageUrl !== null ? (
                <CustomImageThumbnail
                  href={p.href}
                  bg={p.bg}
                  title={p.title}
                  imageUrl={p.imageUrl}
                />
              ) : (
                <AutoThumbnail
                  href={p.href}
                  bg={p.bg}
                  title={p.title}
                />
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "22px", fontWeight: 700, lineHeight: "28px", color: "#1d1d1d", margin: 0 }}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1d1d1d", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.target.style.color = "#7575c8")}
                    onMouseLeave={(e) => (e.target.style.color = "#1d1d1d")}
                  >
                    {p.title}
                  </a>
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", lineHeight: "30px", color: "#1d1d1d", margin: 0 }}>
                  {p.excerpt}
                </p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "19px", fontWeight: 700, color: "#1d1d1d", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7575c8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1d1d1d")}
                >
                  View here →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
      `}</style>
      <About />
      <Testimonials />
      <Portfolio />
    </>
  );
}