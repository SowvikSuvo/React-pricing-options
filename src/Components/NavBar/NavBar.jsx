import React from "react";
import Link from "../../Link/Link";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center ">
        {navData.map((nav) => (
          <Link nav={nav}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
