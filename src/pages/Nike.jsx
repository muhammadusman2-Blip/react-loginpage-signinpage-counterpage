import '../App.css';

function Nike() {
  return (
    <div>
      <nav className="nike-nav">
        <div className="nike-logo-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5eFtuYgX33AuaSyBieaT4K_nuahtyHyiavA&s"
            alt="Nike Logo"
            className="nike-logo"
          />
        </div>
        <div>
          <ul className="nike-menu">
            <li>
              <button className="nav-link-btn">Menu</button>
            </li>
            <li>
              <button className="nav-link-btn">Location</button>
            </li>
            <li>
              <button className="nav-link-btn">About</button>
            </li>
            <li>
              <button className="nav-link-btn">Contact</button>
            </li>
          </ul>
        </div>
        <div>
          <button className="navbar-button">Login</button>
        </div>
      </nav>
    </div>
  );
}

export default Nike;