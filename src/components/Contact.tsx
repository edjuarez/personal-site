import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Acá luego conectamos EmailJS, Resend o tu backend
    console.log("Enviando...", form);
  };

  return (
    <section
      style={{
        padding: "120px 20px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "40px",
          fontWeight: "600",
        }}
      >
        Contacto
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: "14px",
            fontSize: "1.1rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: "14px",
            fontSize: "1.1rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          style={{
            padding: "14px",
            fontSize: "1.1rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "14px",
            fontSize: "1.2rem",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
