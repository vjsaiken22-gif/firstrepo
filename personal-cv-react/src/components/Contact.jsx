import { useState, useEffect } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);

  // 🔄 Fetch contacts
  const fetchContacts = () => {
    fetch("http://localhost/cv-api/getContacts.php")
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(() => console.log("Error loading data"));
  };

  // 🚀 Load on start
  useEffect(() => {
    fetchContacts();
  }, []);

  // ✏️ Handle edit
  const handleEdit = (contact) => {
    setName(contact.name);
    setEmail(contact.email);
    setMessage(contact.message);
    setEditId(contact.id);
  };

  // ❌ Handle delete
  const handleDelete = (id) => {
    if (!window.confirm("Delete this message?")) return;

    fetch("http://localhost/cv-api/deleteContact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      fetchContacts(); // refresh list
    })
    .catch(() => {
      alert("Delete error");
    });
  };

  // 📤 Submit (CREATE or UPDATE)
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = editId
      ? "http://localhost/cv-api/updateContact.php"
      : "http://localhost/cv-api/process.php";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: editId,
        name: name,
        email: email,
        message: message
      })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);

      fetchContacts();

      // clear form
      setName("");
      setEmail("");
      setMessage("");
      setEditId(null);
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

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">
          {editId ? "Update" : "Send"}
        </button>

      </form>

      {/* 🔥 DISPLAY DATA */}
      <h3>Messages</h3>

      {contacts.map((c) => (
        <div key={c.id}>
          <p><strong>{c.name}</strong> ({c.email})</p>
          <p>{c.message}</p>
          <small>{c.created_at}</small>

          <br />
          <button onClick={() => handleEdit(c)}>Edit</button>
          <button onClick={() => handleDelete(c.id)}>Delete</button>

          <hr />
        </div>
      ))}

    </section>
  );
}

export default Contact;