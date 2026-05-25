import "./Contact.css";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";

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
<section id="contact" className="contact-section">

  <div className="contact-container">

    {/* LEFT SIDE */}

    <div className="contact-info">
      <h2 className="about-title">
        Let's Talk
      </h2>

      <div className="about-divider" />

      <p className="contact-description">
        I'm always interested in new projects,
        frontend opportunities and creative ideas.
      </p>

      <div className="contact-details">

        <div className="contact-item">
          <div className="contact-icon">
            <FiMail />
          </div>
          <div>
            <p>edujuarezcba@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FiPhone />
          </div>

          <div>
            <p>+34 617913802</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FiMapPin />
          </div>

          <div>
            <p>Barcelona, Spain</p>
          </div>
        </div>

      </div>

      {/* <div className="contact-socials">

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

      </div> */}

    </div>

    {/* RIGHT SIDE */}

    <div className="contact-form-wrapper">

      <form className="contact-form">

        <div className="input-group">

          <div className="input-icon">
            <FiUser />
          </div>

          <input
            type="text"
            placeholder="Your Name"
          />

        </div>

        <div className="input-group">

          <div className="input-icon">
            <FiMail />
          </div>

          <input
            type="email"
            placeholder="Your Email"
          />

        </div>

        <div className="input-group textarea-group">

          <div className="input-icon">
            <FiMessageSquare />
          </div>

          <textarea
            placeholder="Your Message"
            rows={6}
          />

        </div>

        <button type="submit">
          <span>Send</span>
          {/* <FiSend /> */}
        </button>

      </form>

    </div>

  </div>

</section>
  );
}
