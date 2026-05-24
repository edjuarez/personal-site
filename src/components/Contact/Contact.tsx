import { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Acá luego conectamos EmailJS, Resend o tu backend
  //   console.log("Enviando...", form);
  // };

  return (
    // <section
    //   style={{
    //     padding: "120px 20px",
    //     maxWidth: "700px",
    //     margin: "0 auto",
    //   }}
    // >
    //   <h2
    //     style={{
    //       fontSize: "2.5rem",
    //       marginBottom: "40px",
    //       fontWeight: "600",
    //     }}
    //   >
    //     Contacto
    //   </h2>

    //   <form
    //     onSubmit={handleSubmit}
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       gap: "20px",
    //     }}
    //   >
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Tu nombre"
    //       value={form.name}
    //       onChange={handleChange}
    //       required
    //       style={{
    //         padding: "14px",
    //         fontSize: "1.1rem",
    //         border: "1px solid #ccc",
    //         borderRadius: "6px",
    //       }}
    //     />

    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Tu email"
    //       value={form.email}
    //       onChange={handleChange}
    //       required
    //       style={{
    //         padding: "14px",
    //         fontSize: "1.1rem",
    //         border: "1px solid #ccc",
    //         borderRadius: "6px",
    //       }}
    //     />

    //     <textarea
    //       name="message"
    //       placeholder="Tu mensaje"
    //       value={form.message}
    //       onChange={handleChange}
    //       required
    //       rows="5"
    //       style={{
    //         padding: "14px",
    //         fontSize: "1.1rem",
    //         border: "1px solid #ccc",
    //         borderRadius: "6px",
    //       }}
    //     />

    //     <button
    //       type="submit"
    //       style={{
    //         padding: "14px",
    //         fontSize: "1.2rem",
    //         background: "#111",
    //         color: "#fff",
    //         border: "none",
    //         borderRadius: "6px",
    //         cursor: "pointer",
    //       }}
    //     >
    //       Enviar mensaje
    //     </button>
    //   </form>
    // </section>
    <>
      <div className="section-divider" />
      <section id="contact" className="contact-section">

        <div className="contact-container">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <p className="contact-label">
              CONTACT
            </p>

            <h2 className="contact-title">
              Let's <span style={{ color: "#3a0eed" }}>Talk</span>
            </h2>

            <p className="contact-description">
              I'm always interested in new projects,
              frontend opportunities and creative ideas.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <span>Email</span>
                <p>eduardo@email.com</p>
              </div>

              <div className="contact-item">
                <span>Phone</span>
                <p>+54 9 351 xxx xxxx</p>
              </div>

              <div className="contact-item">
                <span>Location</span>
                <p>Córdoba, Argentina</p>
              </div>

            </div>

            {/* SOCIALS */}

            <div className="contact-socials">

              <a
                href="https://github.com/"
                target="_blank"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="contact-form-wrapper">

            <form className="contact-form">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <textarea
                placeholder="Your Message"
                rows={7}
              />

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>
    </>

  );
}
