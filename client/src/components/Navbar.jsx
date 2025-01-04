import { Link } from "react-router-dom";
import { pageData } from "./data/pageData";

const Navbar = () => {
  return (
    <div className="navbar">
      {pageData.map((page) => {
        return (
          <Link to={page.path} key={page.name} className="navItem">
            <button>{page.name}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
