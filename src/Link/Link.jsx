import React from "react";

const Link = ({ nav }) => {
  return (
    <li className="mr-5 text-white text-lg hover:bg-amber-400 rounded px-4">
      <a href={nav.path}>{nav.name}</a>
    </li>
  );
};

export default Link;
