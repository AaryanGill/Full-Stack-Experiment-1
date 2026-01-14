import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
  <div className="card">
    <h1>Theme Toggle SPA</h1>
    <p>Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}</p>
    <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
  </div>
</div>
  );
}

export default App;
