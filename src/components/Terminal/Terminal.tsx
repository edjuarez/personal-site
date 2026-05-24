import React, { useState, useEffect } from 'react';
import './Terminal.css';

interface CodeToken {
  text: string;
  type: 'keyword' | 'variable' | 'string' | 'property' | 'function' | 'plain';
  line: number;
  indent?: 'standard' | 'extra';
}

// 1. SACAMOS LOS TOKENS FUERA DEL COMPONENTE para que nunca causen re-renders infinitos
const FULL_CODE_TOKENS: CodeToken[] = [
  { text: 'const ', type: 'keyword', line: 1 },
  { text: 'developer ', type: 'variable', line: 1 },
  { text: '= {', type: 'plain', line: 1 },
  
  { text: 'name: ', type: 'property', line: 2, indent: 'standard' },
  { text: "'Eduardo Juárez',", type: 'string', line: 2 },
  
  { text: 'role: ', type: 'property', line: 3, indent: 'standard' },
  { text: "'Frontend Developer & QA Engineer',", type: 'string', line: 3 },
  
  { text: 'skills: ', type: 'property', line: 4, indent: 'standard' },
  { text: "[", type: 'plain', line: 4 },
  { text: " 'JavaScript', ", type: 'string', line: 4,  indent: 'standard' },
  { text: "'TypeScript', ", type: 'string', line: 5, indent: 'extra' },
  { text: "'BrightScript',", type: 'string', line: 6, indent: 'extra' },
  
  { text: "'React', ", type: 'string', line: 7, indent: 'extra' },
  { text: "'Angular', ", type: 'string', line: 8, indent: 'extra' },
  { text: "'HTML', ", type: 'string', line: 9, indent: 'extra' },
  { text: "'CSS', ", type: 'string', line: 10, indent: 'extra' },
  { text: "'SASS' ", type: 'string', line: 11, indent: 'extra' },
  { text: '],', type: 'plain', line: 11, indent: 'extra'},
  
  // { text: 'passion: ', type: 'property', line: 6, indent: 'standard' },
  // { text: "'Crear productos de calidad", type: 'string', line: 6 },
  
  // { text: "y experiencias increíbles',", type: 'string', line: 7, indent: 'extra' },
  
  // { text: 'challenge: ', type: 'property', line: 8, indent: 'standard' },
  // { text: "'Seguir aprendiendo y", type: 'string', line: 8 },
  
  // { text: "superar nuevos desafíos'", type: 'string', line: 9, indent: 'extra' },
  
  // { text: '};', type: 'plain', line: 13 },
  
  // { text: 'function ', type: 'keyword', line: 14 },
  // { text: 'buildAmazingThings', type: 'function', line: 14 },
  // { text: '() {', type: 'plain', line: 14 },
  
  // { text: 'return ', type: 'keyword', line: 13, indent: 'standard' },
  // { text: "'Siempre mejorando 🚀'", type: 'string', line: 13 },
  // { text: ';', type: 'plain', line: 13 },
  
  // { text: '}', type: 'plain', line: 14 }
];

// Calculamos el total de caracteres de nuestro código
const TOTAL_CHARS = FULL_CODE_TOKENS.reduce((acc, token) => acc + token.text.length, 0);

export const Terminal = () => {
  const [currentCharCount, setCurrentCharCount] = useState(0);

  useEffect(() => {
    if (currentCharCount < TOTAL_CHARS) {
      const timer = setTimeout(() => {
        setCurrentCharCount((prev) => prev + 1);
      }, 35); // Velocidad de escritura (en milisegundos)
      return () => clearTimeout(timer);
    }
  }, [currentCharCount]);

  // Lógica declarativa: filtramos cuántos caracteres mostrar de cada token basado en el contador global
  let charsProcessed = 0;
  
  const linesData: { [key: number]: { tokens: CodeToken[], indent?: 'standard' | 'extra' } } = {};
  
  // Inicializamos las 14 líneas fijas para que la estructura exista desde el inicio
  for (let i = 1; i <= 14; i++) {
    linesData[i] = { tokens: [] };
  }

  FULL_CODE_TOKENS.forEach((token) => {
    const tokenLength = token.text.length;
    
    if (currentCharCount > charsProcessed) {
      const visibleLength = Math.min(tokenLength, currentCharCount - charsProcessed);
      const visibleText = token.text.slice(0, visibleLength);
      
      if (visibleText.length > 0) {
        linesData[token.line].tokens.push({
          ...token,
          text: visibleText
        });
        if (token.indent) {
          linesData[token.line].indent = token.indent;
        }
      }
    }
    charsProcessed += tokenLength;
  });

  return (
    <div className="vscode-typed-profile">
      <div className="window-header">
        <div className="window-controls">
          <span className="control-dot purple"></span>
          <span className="control-dot blue"></span>
          <span className="control-dot indigo"></span>
        </div>
      </div>

      <div className="window-body">
        <div className="code-content">
          {Object.keys(linesData).map((lineNumStr) => {
            const lineNum = Number(lineNumStr);
            const { tokens, indent } = linesData[lineNum];
            
            let lineClass = 'code-line';
            if (indent === 'standard') lineClass += ' indent';
            if (indent === 'extra') lineClass += ' indent-extra';

            return (
              <div key={lineNum} className={lineClass}>
                <span className="line-number">{String(lineNum).padStart(2, '0')}</span>
                <span className="line-text">
                  {tokens.map((token, index) => (
                    <span key={index} className={`token ${token.type}`}>
                      {token.text}
                    </span>
                  ))}
                  {/* El cursor se muestra solo en la última línea que se está escribiendo activamente */}
                  {currentCharCount < TOTAL_CHARS && 
                   tokens.length > 0 && 
                   lineNum === tokens[tokens.length - 1].line && 
                   // Validamos si es el último token procesado visible
                   tokenNumIsActive(lineNum, tokens[tokens.length - 1].text, currentCharCount) && (
                    <span className="typing-cursor">|</span>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Función auxiliar para saber exactamente dónde poner el cursor parpadeante
function tokenNumIsActive(lineNum: number, currentText: string, totalCount: number): boolean {
  let count = 0;
  let lastActiveLine = 1;
  for (const t of FULL_CODE_TOKENS) {
    count += t.text.length;
    if (totalCount <= count) {
      lastActiveLine = t.line;
      break;
    }
  }
  return lineNum === lastActiveLine;
}
