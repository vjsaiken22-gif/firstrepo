import { useState } from "react";
import Card from "./Card";

function Skills() {

  const [visible, setVisible] = useState(true);

  return (
    <Card title="Skills">

      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>

      {visible && (
        <>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <ul>
            <li>
              Web Development
              <ul>
                <li>Frontend</li>
                <li>Backend</li>
              </ul>
            </li>
          </ul>
        </>
      )}

    </Card>
  );
}

export default Skills;