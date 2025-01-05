import { Link } from "react-router-dom";
import { pageData } from "./data/pageData";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("User");
    navigate("/");
  };

  return (
    <div className="navbar">
      {pageData.map((page) => {
        return (
          <Link to={page.path} key={page.name} className="navItem">
            <button>{page.name}</button>
          </Link>
        );
      })}
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Navbar;
