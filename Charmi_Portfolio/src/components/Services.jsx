// import React from "react";

// const services = [
//   {
//     icon: "⚛️",
//     title: "Web Development",
// desc: "Building responsive full-stack web applications with React, Next.js, and modern frontend technologies for seamless user experiences.",    bg: "#e3e3ff",
//   },
//   {
//     icon: "📊",
//     title: "Data Science & ML",
//     desc: "Designing end-to-end ML pipelines, NLP solutions, and real-time data streaming systems using Python, Kafka, and AWS.",
//     bg: "#f3ffe3",
//   },
//   {
//     icon: "🎨",
//     title: "UI/UX Design",
//     desc: "Translating ideas into clean interfaces with Figma and Canva — combining aesthetic sensibility with usability principles.",
//     bg: "#fde4f9",
//   },
//   {
//     icon: "☁️",
//     title: "Cloud & Data Engineering",
//     desc: "Architecting scalable ETL pipelines and analytics dashboards using AWS, Docker, and Power BI.",
//     bg: "#e3f2ff",
//   },
// ];

// export default function Services() {
//   return (
//     <section
//       id="services"
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
//         {/* Text block */}
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
//             <span>✦</span> My Services
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
//             The service I offer is specifically designed to meet your needs.
//           </h2>
//         </div>

//         {/* Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "30px",
//             width: "100%",
//           }}
//         >
//           {services.map((s) => (
//             <div
//               key={s.title}
//               style={{
//                 backgroundColor: s.bg,
//                 border: "2px solid #1d1d1d",
//                 borderRadius: "20px",
//                 padding: "30px",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "25px",
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//                 <div
//                   style={{
//                     width: "74px",
//                     height: "74px",
//                     borderRadius: "50px",
//                     border: "2px solid #1d1d1d",
//                     backgroundColor: "#fff",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "32px",
//                     flexShrink: 0,
//                   }}
//                 >
//                   {s.icon}
//                 </div>
//               </div>
//               <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//                 <h3
//                   style={{
//                     fontFamily: "'Cabinet Grotesk', serif",
//                     fontSize: "24px",
//                     fontWeight: 700,
//                     lineHeight: "30px",
//                     color: "#1d1d1d",
//                     margin: 0,
//                   }}
//                 >
//                   {s.title}
//                 </h3>
//                 <p
//                   style={{
//                     fontFamily: "'DM Sans', sans-serif",
//                     fontSize: "18px",
//                     fontWeight: 400,
//                     lineHeight: "30px",
//                     color: "#1d1d1d",
//                     margin: 0,
//                   }}
//                 >
//                   {s.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;900&display=swap');`}</style>
//     </section>
//   );
// }

import React from "react";

const services = [
  {
    icon: "⚛️",
    title: "Web Development",
    desc: "Building responsive full-stack web applications with React, Next.js, and modern frontend technologies for seamless user experiences.",
    bg: "#e3e3ff",
  },
  {
    icon: "📊",
    title: "Data Science & ML",
    desc: "Designing end-to-end ML pipelines, NLP solutions, and real-time data streaming systems using Python, Kafka, and AWS.",
    bg: "#f3ffe3",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Translating ideas into clean interfaces with Figma and Canva — combining aesthetic sensibility with usability principles.",
    bg: "#fde4f9",
  },
  {
    icon: "☁️",
    title: "Cloud & Data Engineering",
    desc: "Architecting scalable ETL pipelines and analytics dashboards using AWS, Docker, and Power BI.",
    bg: "#e3f2ff",
  },
  {
    icon: "📈",
    title: "Data Analysis",
    desc: "Transforming raw data into actionable insights through statistical analysis, interactive visualizations, and business intelligence reporting with Python, SQL, and Power BI.",
    bg: "#fff5c9",
  },
  {
    icon: "🤖",
    title: "LLM & AI Integration",
    desc: "Building intelligent applications powered by large language models — from prompt engineering and fine-tuning to RAG pipelines and production-ready AI feature integration.",
    bg: "#ffeeeb",
  },

];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#fff",
        borderBottom: "2px solid #1d1d1d",
        padding: "150px 30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;900&display=swap');

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
        }

        /* Last row: if 1 card alone → center it; if 2 cards → center them */
        .services-grid .service-card:nth-child(7) {
          grid-column: 2 / 3;
        }

        @media (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .services-grid .service-card:nth-child(7) {
            grid-column: 1 / -1;
            max-width: 480px;
            justify-self: center;
          }
        }

        @media (max-width: 600px) {
        #services{
        padding: 60px 20px !important
        }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .services-grid .service-card:nth-child(7) {
            grid-column: auto;
            max-width: 100%;
            justify-self: auto;
          }
        }

        .service-card {
          background-color: var(--card-bg);
          border: 2px solid #1d1d1d;
          border-radius: 20px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 25px;
          transition: transform 0.2s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: "1140px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "50px",
        }}
      >
        {/* Header */}
        <div
          style={{
            maxWidth: "750px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
          }}
        >
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
            <span>✦</span> My Services
          </div>
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              fontWeight: 700,
              lineHeight: "1.14",
              letterSpacing: "-0.01em",
              color: "#1d1d1d",
              margin: 0,
              textAlign: "center",
            }}
          >
            The service I offer is specifically designed to meet your needs.
          </h2>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card"
              style={{ "--card-bg": s.bg }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "74px",
                  height: "74px",
                  borderRadius: "50px",
                  border: "2px solid #1d1d1d",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>

              {/* Text */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "30px",
                    color: "#1d1d1d",
                    margin: 0,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    color: "#1d1d1d",
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}