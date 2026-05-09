// import React from "react";

// const projects = [
//   {
//     title: "YouTube Comment Analyzer",
//     excerpt: "A Streamlit NLP app that extracts and analyzes YouTube comments in real-time — sentiment, toxicity, keyword trends, and audience insights.",
//     img: null,
//     bg: "#e3f2ff",
//     href: "https://github.com/Charmi-Panchal",
//   },
//   {
//     title: "SmartCity Data Streaming Pipeline",
//     excerpt: "Real-time IoT data pipeline for Smart City using Apache Kafka, Spark, and AWS (S3, Glue, Athena, Redshift) with Power BI dashboards.",
//     img: null,
//     bg: "#f3ffe3",
//     href: "https://github.com/Charmi-Panchal",
//   },
//   {
//     title: "Hotel Revenue Dashboard",
//     excerpt: "Power BI dashboard analyzing hotel bookings, ADR, occupancy rates, and revenue per room with DAX measures and multi-dimensional slicers.",
//     img: null,
//     bg: "#fde4f9",
//     href: "https://github.com/Charmi-Panchal",
//   },
//   {
//     title: "Career Girl Global Website",
//     excerpt: "Fully functional startup website built with React, responsive design, dynamic animations aligned perfectly to Figma designs.",
//     img: null,
//     bg: "#e3e3ff",
//     href: "https://github.com/Charmi-Panchal",
//   },
// ];

// const emojis = ["🧠", "🏙️", "📊", "💼"];

// export default function Portfolio() {
//   return (
//     <section
//       id="portfolio"
//       style={{
//         backgroundColor: "#fff",
//         borderBottom: "2px solid #1d1d1d",
//         padding: "150px 30px",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1140px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "50px",
//         }}
//       >
//         {/* Header */}
//         <div
//           style={{
//             maxWidth: "750px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "25px",
//           }}
//         >
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "6px",
//               padding: "5px 15px",
//               border: "2px solid #1d1d1d",
//               borderRadius: "20px",
//               backgroundColor: "#e3f2ff",
//               fontSize: "13px",
//               fontWeight: 900,
//               fontFamily: "'DM Sans', sans-serif",
//               letterSpacing: "0.05em",
//               textTransform: "uppercase",
//               color: "#1d1d1d",
//             }}
//           >
//             <span>✦</span> My Works
//           </div>
//           <h2
//             style={{
//               fontFamily: "'Cabinet Grotesk', serif",
//               fontSize: "clamp(30px, 4vw, 44px)",
//               fontWeight: 700,
//               lineHeight: "1.14",
//               letterSpacing: "-0.01em",
//               color: "#1d1d1d",
//               margin: 0,
//               textAlign: "center",
//             }}
//           >
//             Check out some of my awesome projects with creative ideas.
//           </h2>
//         </div>

//         {/* Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "40px 40px",
//             width: "100%",
//           }}
//         >
//           {projects.map((p, i) => (
//             <article
//               key={p.title}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "20px",
//               }}
//             >
//               {/* Image card */}
//               <a
//                 href={p.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   display: "block",
//                   border: "2px solid #1d1d1d",
//                   borderRadius: "20px",
//                   overflow: "hidden",
//                   textDecoration: "none",
//                   aspectRatio: "1.34",
//                   backgroundColor: p.bg,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "72px",
//                   transition: "transform 0.2s",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
//                 onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
//               >
//                 {emojis[i]}
//               </a>

//               {/* Text */}
//               <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "0" }}>
//                 <h3
//                   style={{
//                     fontFamily: "'Cabinet Grotesk', serif",
//                     fontSize: "22px",
//                     fontWeight: 700,
//                     lineHeight: "28px",
//                     color: "#1d1d1d",
//                     margin: 0,
//                   }}
//                 >
//                   <a
//                     href={p.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ color: "#1d1d1d", textDecoration: "none" }}
//                     onMouseEnter={(e) => (e.target.style.color = "#7575c8")}
//                     onMouseLeave={(e) => (e.target.style.color = "#1d1d1d")}
//                   >
//                     {p.title}
//                   </a>
//                 </h3>
//                 <p
//                   style={{
//                     fontFamily: "'DM Sans', sans-serif",
//                     fontSize: "18px",
//                     lineHeight: "30px",
//                     color: "#1d1d1d",
//                     margin: 0,
//                   }}
//                 >
//                   {p.excerpt}
//                 </p>
//                 <a
//                   href={p.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: "7px",
//                     fontFamily: "'Cabinet Grotesk', serif",
//                     fontSize: "19px",
//                     fontWeight: 700,
//                     color: "#1d1d1d",
//                     textDecoration: "none",
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#7575c8")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "#1d1d1d")}
//                 >
//                   View on GitHub →
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* CTA */}
//         <a
//           href="https://github.com/Charmi-Panchal"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{
//             marginTop: "20px",
//             display: "inline-block",
//             padding: "18px 30px",
//             border: "2px solid #1d1d1d",
//             borderRadius: "10px",
//             backgroundColor: "#fff",
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: "18px",
//             fontWeight: 600,
//             color: "#1d1d1d",
//             textDecoration: "none",
//             letterSpacing: "-0.04em",
//             transition: "background 0.2s",
//           }}
//           onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e3e3ff")}
//           onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
//         >
//           See All Works
//         </a>
//       </div>

//       <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;900&display=swap');`}</style>
//     </section>
//   );
// }


const projects = [
  { title: "YouTube Comment Analyzer", excerpt: "A Streamlit NLP app that extracts and analyzes YouTube comments in real-time — sentiment, toxicity, keyword trends, and audience insights.", bg: "#e3f2ff", emoji: "🧠", href: "https://github.com/Charmi-Panchal" },
  { title: "SmartCity Data Streaming Pipeline", excerpt: "Real-time IoT data pipeline for Smart City using Apache Kafka, Spark, and AWS (S3, Glue, Athena, Redshift) with Power BI dashboards.", bg: "#f3ffe3", emoji: "🏙️", href: "https://github.com/Charmi-Panchal" },
  { title: "Hotel Revenue Dashboard", excerpt: "Power BI dashboard analyzing hotel bookings, ADR, occupancy rates, and revenue per room with DAX measures and multi-dimensional slicers.", bg: "#fde4f9", emoji: "📊", href: "https://github.com/Charmi-Panchal" },
  { title: "Career Girl Global Website", excerpt: "Fully functional startup website built with React, responsive design, dynamic animations aligned perfectly to Figma designs.", bg: "#e3e3ff", emoji: "💼", href: "https://github.com/Charmi-Panchal" },
];
 
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: "#fff",
        borderBottom: "2px solid #1d1d1d",
        padding: "150px 30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1140px", display: "flex", flexDirection: "column", alignItems: "center", gap: "50px" }}>
        <div style={{ maxWidth: "750px", display: "flex", flexDirection: "column", alignItems: "center", gap: "25px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "5px 15px", border: "2px solid #1d1d1d", borderRadius: "20px", backgroundColor: "#e3f2ff", fontSize: "13px", fontWeight: 900, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d1d1d" }}>
            <span>✦</span> My Works
          </div>
          <h2 style={{ fontFamily: "'Cabinet Grotesk', serif", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, lineHeight: "1.14", letterSpacing: "-0.01em", color: "#1d1d1d", margin: 0, textAlign: "center" }}>
            Check out some of my awesome projects with creative ideas.
          </h2>
        </div>
 
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", width: "100%" }}>
          {projects.map((p, i) => (
            <article key={i} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <a href={p.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", border: "2px solid #1d1d1d", borderRadius: "20px", overflow: "hidden", textDecoration: "none", aspectRatio: "1.34", backgroundColor: p.bg, alignItems: "center", justifyContent: "center", fontSize: "72px", transition: "transform 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {p.emoji}
              </a>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <h3 style={{ fontFamily: "'Cabinet Grotesk', serif", fontSize: "22px", fontWeight: 700, lineHeight: "28px", color: "#1d1d1d", margin: 0 }}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ color: "#1d1d1d", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.target.style.color = "#7575c8")}
                    onMouseLeave={(e) => (e.target.style.color = "#1d1d1d")}
                  >{p.title}</a>
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", lineHeight: "30px", color: "#1d1d1d", margin: 0 }}>{p.excerpt}</p>
                <a href={p.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontFamily: "'Cabinet Grotesk', serif", fontSize: "19px", fontWeight: 700, color: "#1d1d1d", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7575c8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1d1d1d")}
                >View on GitHub →</a>
              </div>
            </article>
          ))}
        </div>
 
        <a href="https://github.com/Charmi-Panchal" target="_blank" rel="noopener noreferrer"
          style={{ marginTop: "20px", display: "inline-block", padding: "18px 30px", border: "2px solid #1d1d1d", borderRadius: "10px", backgroundColor: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: "18px", fontWeight: 600, color: "#1d1d1d", textDecoration: "none", letterSpacing: "-0.04em", transition: "background 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e3e3ff")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
        >See All Works</a>
      </div>
    </section>
  );
}
 
