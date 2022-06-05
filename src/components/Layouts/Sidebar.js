import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
  <div
    className="offcanvas offcanvas-start sidebar-nav bg-dark"
    tabIndex="-1"
    id="sidebar"
  >
    <div className="offcanvas-body p-0">
      <nav className="navbar-dark">
        <ul className="navbar-nav">
          <li className="my-4"><hr className="dropdown-divider bg-light" /></li>
          <li>
            <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
              Dashboard
            </div>
          </li>
          <li>
            <Link to='/' className="nav-link px-3">
              <span className="me-2"><i className="bi bi-speedometer2"></i></span>
              <span>Statistic</span>
            </Link>
          </li>
          <li className="my-4"><hr className="dropdown-divider bg-light" /></li>
          <li>
            <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
              Site Manager
            </div>
          </li>
          <li>
            <Link to='/client' className="nav-link px-3">
              <span className="me-2"><i className="bi bi-speedometer2"></i></span>
              <span>Client</span>
            </Link>
          </li>
          <li>
            <Link to='/contact' className="nav-link px-3">
              <span className="me-2"><i className="bi bi-speedometer2"></i></span>
              <span>Contact</span>
            </Link>
          </li>
          {/* <li>
            <Link to='/information' className="nav-link px-3">
              <span className="me-2"><i className="bi bi-speedometer2"></i></span>
              <span>Information</span>
            </Link>
          </li> */}
          <li>
            <Link to='/product' className="nav-link px-3">
              <span className="me-2"><i className="bi bi-speedometer2"></i></span>
              <span>Product</span>
            </Link>
          </li>
          <li>
            <Link to='/team' className="nav-link px-3">
              <span className="me-2"><i className="bi bi-speedometer2"></i></span>
              <span>Team</span>
            </Link>
          </li>
          <li>
            <Link to='/testimonial' className="nav-link px-3">
              <span className="me-2"><i className="bi bi-speedometer2"></i></span>
              <span>Testimonial</span>
            </Link>
          </li>
          <li>
            <Link to='/portfolio' className="nav-link px-3">
              <span className="me-2"><i className="bi bi-speedometer2"></i></span>
              <span>Portfolio</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  );
}

export default Sidebar;