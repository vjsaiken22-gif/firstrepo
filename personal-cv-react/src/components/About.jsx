import Card from "./Card";

function About() {
  return (
    <Card title="About Me">

      <img
        src={`${import.meta.env.BASE_URL}images/profile.jpg`}
        alt="Profile photo"
        width="150"
      />

      <p>
        I am a BSIT student at USTP who enjoys building clean and modern web layouts.
      </p>

      <p>
        Email: <a href="mailto:vanley@email.com">vanley@email.com</a><br />
        GitHub: <a href="https://github.com" target="_blank">github.com</a>
      </p>

    </Card>
  );
}

export default About;