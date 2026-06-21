function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-mark">SF</div>

        <div className="logo-text">
          <span>SyncForge</span>
          <small>Forge Code Together</small>
        </div>
      </div>

      <div className="nav-links">
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;