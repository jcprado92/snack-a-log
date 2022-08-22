import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <Link to="/" className="title">Good Gulps</Link>
      <Link to="/snacks/new"><button>New Snack</button></Link>
    </div>
  );
}

export default Nav;
