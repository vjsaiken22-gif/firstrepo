import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message); // 👈 comes from PHP
    })
    .catch(() => {
      alert("Server error");
    });
  };

  return (
    <section className="box">

      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input type="email" name="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>

        <button type="submit">Send</button>
      </form>

    </section>
  );
}

export default Contact;