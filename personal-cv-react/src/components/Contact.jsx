function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="box">

      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>

    </section>
  );
}

export default Contact;