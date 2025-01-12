import { Link } from "react-router-dom";
import { pageData } from "./data/pageData";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("User");
    navigate("/");
  };

  return (
    <NavigationMenu className="bg-primary w-full fixed top-0 left-0 h-20 p-2">
      <NavigationMenuList>
        {pageData.map((page) => {
          return (
            <NavigationMenuItem>
              <Link to={page.path} key={page.name}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {page.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
      <Button onClick={handleLogout}>Log out</Button>
    </NavigationMenu>
  );
};

export default Navbar;
