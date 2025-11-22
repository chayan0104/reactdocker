import { useState } from "react";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ background: "#f5f7fa", minHeight: "100vh" }}>
      <Header />

      <div style={{ textAlign: "center", padding: "30px" }}>
        <h2>Hello Chayan, Customize & Dockerize This React App</h2>
        <p>You clicked the button {count} times.</p>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Click Me
        </button>

        {/* HTML LIST */}
        <div style={{ marginTop: "40px" }}>
          <h3>Topics Covered</h3>
          <ul style={{ listStyle: "square", textAlign: "left", maxWidth: "400px", margin: "auto" }}>
            <li>React Components</li>
            <li>JavaScript Hooks</li>
            <li>Basic Layout</li>
            <li>Dockerfile Setup</li>
            <li>Git & Branching</li>
          </ul>
        </div>

        {/* HTML TABLE */}
        <div style={{ marginTop: "40px" }}>
          <h3>Build Information</h3>
          <table
            border="1"
            cellPadding="10"
            style={{ margin: "auto", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Version</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React</td>
                <td>Running</td>
              </tr>
              <tr>
                <td>Docker</td>
                <td>Ready to Build</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* HTML IMAGE */}
        <div style={{ marginTop: "40px" }}>
          <h3>Sample Image</h3>
          <img
            src="https://via.placeholder.com/250"
            alt="Sample"
            style={{ borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}
          />
        </div>

        {/* Info cards */}
        <InfoCard
          title="React Learning"
          text="This project helps you learn components, state, and layouts."
        />
        <InfoCard
          title="Docker Ready"
          text="You now have the correct Dockerfile for production builds."
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
