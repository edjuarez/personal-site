import { useState, useEffect } from "react";

export const Skills = () => {
  const skills = [
    "javascript",
    "react",
    "vue",
    "html",
    "css",
    "git",
    "testing",
    "qa",
  ];

  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (lineIndex >= skills.length) return;

    const skill = skills[lineIndex];
    const command = `$ git add ${skill}`;

    if (charIndex < command.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(command.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, command]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex(lineIndex + 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <section
      style={{
        padding: "120px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >

      <div
        style={{
          background: "#111",
          color: "#0f0",
          borderRadius: "10px",
          overflow: "hidden",
          fontFamily: "monospace",
          fontSize: "1.2rem",
        }}
      >
        {/* HEADER DE LA CONSOLA */}
        <div
          style={{
            background: "#222",
            padding: "10px 15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#ccc",
            fontSize: "0.9rem",
          }}
        >
          {/* ICONOS */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginRight: "15px",
            }}
          >
            <span style={{ color: "#ff5f56" }}>●</span>
            <span style={{ color: "#ffbd2e" }}>●</span>
            <span style={{ color: "#27c93f" }}>●</span>
          </div>

          {/* DIRECTORIO */}
          <span>eduardo.juarez\skills</span>
        </div>

        {/* CUERPO DE LA CONSOLA */}
        <div style={{ padding: "20px" }}>
          {lines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}

          <div>
            {currentLine}
            <span className="cursor">█</span>
          </div>
        </div>
      </div>
    </section>
  );

}