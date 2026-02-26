import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="outer-box">

        <Header />

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <main className="container">
          <About />
          <Skills />
          <Education />
          <Contact />
        </main>

        <footer>
          <p>&copy; 2026 Vanley John B. Monares</p>
        </footer>

      </div>
    </div>
  );
}

export default App;