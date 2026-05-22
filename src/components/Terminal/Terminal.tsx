import "./Terminal.css";

export const Terminal = () => {
  return (
    <div className="terminal">

      <div className="terminal-header">

        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>

      </div>

      <div className="terminal-body">

        <p>
          <span className="prompt">$</span>
          npm run dev
        </p>

        <p>
          Starting development server...
        </p>

        <p className="typing">
          Building portfolio...
        </p>

      </div>

    </div>
  );
};