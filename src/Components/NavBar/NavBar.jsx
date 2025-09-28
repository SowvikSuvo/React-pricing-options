import React, { useState } from "react";
import Link from "../../Link/Link";
import { Menu, X } from "lucide-react";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = navData.map((nav) => <Link key={nav.id} nav={nav}></Link>);

  return (
    <nav
      className="flex justify-between mx-10 mt-4 "
      onClick={() => setOpen(!open)}
    >
      <span className="flex">
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul
          className={`md:hidden absolute duration-1000 text-black
            ${open ? " top-10" : "-top-40"}
            bg-amber-200 rounded-lg`}
        >
          {links}
        </ul>

        <h3 className="ml-4">My NavBar</h3>
      </span>
      <ul className="md:flex hidden  items-center ">{links}</ul>
      <button>Sign in</button>
    </nav>
  );
};
export default NavBar;
