export const About = () => {
  return (
        <section>
            <h2>About Me</h2>
            <p>I am a passionate frontend developer and QA engineer with experience in building user-friendly interfaces and ensuring high-quality products. I enjoy solving complex problems and continuously learning new technologies to improve my skills.</p>
            <div id="skills">
            <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#skills-icon"></use>
            </svg>


                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Testing (Jest, Cypress)</li>
                    <li>Version Control (Git)</li>
                </ul>  
            </div>
            <div id="experience">
            <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#experience-icon"></use>
            </svg>
            <h2>Experience</h2>  
                <ul>
                    <li><strong>Frontend Developer</strong> at XYZ Company (2020 - Present)</li>
                    <li><strong>QA Engineer</strong> at ABC Corporation (2018 - 2020)</li>
                </ul>
                
            </div>
        </section>
    ); 
};