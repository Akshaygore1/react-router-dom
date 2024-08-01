import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import "../styles/menupage.css";

function Menupage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login")
  };
  return (
    <div className="menupage-container">
      <nav className="navbar">
        <h1>YourApp</h1>
        <div className="nav-icons">
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle" onClick={handleLogout}></i>
        </div>
      </nav>
      <div className="content-container">
        <aside className="sidebar">
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/home">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/archive">
            <i className="fas fa-archive"></i>
            <span>Archive</span>
          </NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/trash">
            <i className="fas fa-trash-alt"></i>
            <span>Trash</span>
          </NavLink>
        </aside>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Menupage;