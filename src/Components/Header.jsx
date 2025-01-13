import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header d-flex justify-content-between">
      <Link to="/">
        <p className="logo">SHOP</p>
        <p className="logo joy">JOY</p>
      </Link>
      <Link to="/cart" className="d-flex align-items-center">
        <i className="bi bi-cart"></i>
      </Link>
    </div>
  );
}

export default Header;
