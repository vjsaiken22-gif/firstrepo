import { useState } from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSkills, setShowSkills] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="container">
        <header>
          <h1>Vanley John B. Monares</h1>
          <p>IT Student | Web Systems and Technologies</p>

          <button
            className="primary-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        <section className="card">
          <h2>About Me</h2>
          <img src={profile} alt="Profile" className="profile" />
          <p>
            I am a BS Information Technology student learning the fundamentals
            of web development.
          </p>
        </section>

        <button
          className="secondary-btn"
          onClick={() => setShowSkills(!showSkills)}
        >
          Show / Hide Skills
        </button>

        {showSkills && (
          <section className="card">
            <h2>Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </section>
        )}

        <section className="card">
          <h2>Education</h2>
          <ul>
            <li>BS Information Technology – USTP (2028)</li>
            <li>GCCNHS – Senior High School (2019)</li>
            <li>MLCS – Elementary (2013)</li>
            <li>G-1 and G-2 (2011)</li>
            <li>P-1 and P-2 (2009)</li>
          </ul>
        </section>

        <footer>
          <p>© 2026 Vanley John B. Monares</p>
        </footer>
      </div>
    </div>
  );
}

export default App;