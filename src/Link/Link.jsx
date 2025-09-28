import React from "react";

const Link = ({ nav }) => {
  return (
    <li className="lg:mr-10  text-lg hover:bg-amber-400 rounded-lg px-4">
      <a href={nav.path}>{nav.name}</a>
    </li>
  );
};

export default Link;
