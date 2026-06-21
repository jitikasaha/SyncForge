import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1 className="title">Welcome Back</h1>

      <p className="subtitle">
        Sign in to continue to SyncForge
      </p>

      <div className="buttons">
        <button
          className="btn"
          onClick={() => navigate("/workspace")}
        >
          Continue with GitHub
        </button>
      </div>
    </div>
  );
}

export default Login;