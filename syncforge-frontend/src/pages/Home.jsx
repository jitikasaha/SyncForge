import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="hero">
        <h1 className="title">
          Build Together.
          <br />
          Code Together.
          <br />
          Ship Faster.
        </h1>

        <p className="subtitle">
          A collaborative cloud IDE with live coding, team chat,
          version history and GitHub integration.
        </p>

        <div className="buttons">
          <button
            className="btn"
            onClick={() => navigate("/login")}
          >
            Start Workspace
          </button>

          <button className="btn">
            Watch Demo
          </button>
        </div>
      </div>

      <section className="features">
        <div className="feature-card">
          <h3>⚡ Real-Time Collaboration</h3>
          <p>Multiple developers editing code simultaneously.</p>
        </div>

        <div className="feature-card">
          <h3>💬 Team Chat</h3>
          <p>Communicate directly inside coding rooms.</p>
        </div>

        <div className="feature-card">
          <h3>🔗 GitHub Integration</h3>
          <p>Push and manage repositories seamlessly.</p>
        </div>

        <div className="feature-card">
          <h3>▶ Code Execution</h3>
          <p>Run Java, Python and JavaScript instantly.</p>
        </div>

        <div className="feature-card">
          <h3>🕒 Version History</h3>
          <p>Track and restore previous versions.</p>
        </div>

        <div className="feature-card">
          <h3>👥 Live Presence</h3>
          <p>See who is online and editing in real time.</p>
        </div>
      </section>
    </>
  );
}

export default Home;