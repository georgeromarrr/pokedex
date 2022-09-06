import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
const redirectTo = useNavigate();
  return (
    <div className="container-fluid p-3 pb-4 bg-color-red fixed-top">
      <h2 className="px-5 text-white pokemon-font cursor-pointer" onClick={() => redirectTo('/')}>Pokédex</h2>
    </div>
  );
};

export default Navbar;
