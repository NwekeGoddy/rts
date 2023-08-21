import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const onChange = () => {
    setCode(input);
  };

  return (
    <div>
      <main>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          onChange={handleChange}
          value={input}
        >
          Type here...
        </textarea>

        <div>
          <button onClick={onChange}>Submit</button>
        </div>

        <pre>{code}</pre>
      </main>
    </div>
  );
}

export default App;
