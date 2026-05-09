import React, { useState } from "react";

// ── HERO ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#e3e3ff",
        borderBottom: "2px solid #1d1d1d",
        padding: "60px 30px 0",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "80px",
          width: "100%",
          maxWidth: "1140px",
          padding: "120px 0",
          flexWrap: "wrap",
        }}
      >
        {/* Left Content */}
        <div
          style={{
            flex: "1 1 400px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            minWidth: "280px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {/* Badge */}
            <div style={{ display: "flex", alignItems: "center" }}>
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
                }}
              >
                <span style={{ fontSize: "10px" }}>✦</span> Hello!
              </div>
            </div>
 
            {/* Heading block */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h1
                style={{
                  fontFamily: "'Cabinet Grotesk', 'Georgia', serif",
                  fontSize: "clamp(36px, 5vw, 62px)",
                  fontWeight: 700,
                  lineHeight: "1.1",
                  letterSpacing: "-0.01em",
                  color: "#1d1d1d",
                  margin: 0,
                }}
              >
                I'm Charmi Panchal, a Web Developer.
              </h1>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 400,
                  lineHeight: "36px",
                  color: "#1d1d1d",
                  margin: 0,
                }}
              >
Freelance web developer & data science engineer building fast, beautiful web experiences and AI-powered solutions.              </p>
            </div>
          </div>
 
          {/* CTA Button */}
          {/* <div>
            <a
              href="#portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "18px 30px",
                border: "2px solid #1d1d1d",
                borderRadius: "10px",
                backgroundColor: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#1d1d1d",
                textDecoration: "none",
                letterSpacing: "-0.04em",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e3e3ff")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
            >
              See My Works
            </a>
          </div> */}
        </div>
 
        {/* Right Image */}
        <div
          style={{
            flex: "0 0 auto",
            width: "clamp(280px, 40%, 465px)",
            aspectRatio: "0.845",
            position: "relative",
          }}
        >
          {/* FIX 1: Rotating "I AM AVAILABLE FOR FREELANCE" badge */}
          <div
            style={{
              position: "absolute",
              top: "-30px",
              right: "20px",
              width: "140px",
              height: "140px",
              zIndex: 10,
            }}
          >
            <svg
              viewBox="0 0 120 120"
              width="120"
              height="120"
              style={{ animation: "rotateBadge 8s linear infinite" }}
            >
              <defs>
                <path
                  id="circle-path"
                  d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
              {/* White circle background */}
              <circle cx="60" cy="60" r="50" fill="white" stroke="#1d1d1d" strokeWidth="2" />
              {/* Curved text */}
              <text
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fill: "#1d1d1d",
                }}
              >
                <textPath href="#circle-path" startOffset="0%">
                  ✦ I AM AVAILABLE ✦ FOR FREELANCE  
                </textPath>
              </text>
              {/* Arrow in center */}
              <g transform="translate(60,60)">
                <circle r="16" fill="#1d1d1d" />
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontSize="18"
                  fontWeight="bold"
                  style={{ transform: "rotate(-45deg)", display: "inline-block" }}
                >
                  ↗
                </text>
              </g>
            </svg>
          </div>
 
          <div
            style={{
              width: "100%",
              height: "100%",
              border: "2px solid #1d1d1d",
              borderRadius: "300px 300px 10px 10px",
              overflow: "hidden",
              backgroundColor: "#c9c9ff",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(160deg, #b3b3ff 0%, #e3e3ff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "80px",
              }}
            >
               <img
    src="/public/Hero.png"
    alt="Profile"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
            </div>
          </div>
 
          {/* Sparkle decoration */}
          <span
            style={{
              position: "absolute",
              bottom: "10%",
              right: "-24px",
              fontSize: "28px",
              color: "#1d1d1d",
              userSelect: "none",
            }}
          >
            ✦
          </span>
        </div>
      </div>
 
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;900&display=swap');
 
        @keyframes rotateBadge {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
 
        @media (max-width: 809px) {
        section{
        padding-top: 20px !important
        }
          section > div {
            flex-direction: column !important;
            align-items: center !important;
            padding: 30px 0 40px !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
