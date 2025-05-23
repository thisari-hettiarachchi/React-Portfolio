import React from "react";
import ParticlesBackground from "./components/Background/ParticlesBackground";

function App() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <ParticlesBackground />
      <div style={{ position: "absolute", top: 0, width: "100%", color: "white", zIndex: 1 }}>
        <h1>Welcome to My App</h1>
      </div>
    </div>
  );
}

export default App;
