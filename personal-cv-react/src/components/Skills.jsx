import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <section className="box">

      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>

      {visible && (
        <>
          <h2>Skills</h2>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <ul>
            <li>Web Development
              <ul>
                <li>Frontend</li>
                <li>Backend</li>
              </ul>
            </li>
          </ul>
        </>
      )}

    </section>
  );
}

export default Skills;