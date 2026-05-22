import "./About.css";

export const About = () => {
  return (
    <>
        <div className="section-divider" />
        <section className="about-section">
            <div className="about-overlay" />
            <div className="about-container">
            {/* LEFT SIDE */}
                <div className="about-content">

                    <p className="about-label">
                    ABOUT ME
                    </p>

                    <h2 className="about-title">
                    Building interfaces and solving problems.
                    </h2>

                    <p className="about-text">
                    I'm a frontend developer and QA engineer
                    with experience building real-world
                    applications and improving product quality.
                    </p>

                    <p className="about-text">
                    I worked for years developing Roku
                    applications using BrightScript while
                    collaborating with multidisciplinary teams
                    in large-scale projects.
                    </p>

                    <p className="about-text">
                    Currently I'm expanding my frontend skills
                    with React and TypeScript while also
                    exploring interactive experiences and game
                    development.
                    </p>

                    <p className="about-text">
                    I enjoy creating polished user experiences,
                    solving bugs and continuously improving as
                    a developer.
                    </p>

                </div>

            {/* RIGHT SIDE */}
                <div className="about-image-container">

                    <img
                    src="/profile.jpg"
                    alt="Eduardo"
                    className="about-image"
                    />

                </div>
            </div>
        </section>
    </>

  );
};