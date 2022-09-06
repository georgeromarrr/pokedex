import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PokemonIndex from "../../components/PokemonIndex/PokemonIndex";

const Pokemon = () => {
  return (
    <div>
      <Navbar />
      <div className="my-2 py-2">
        <div className="mt-5 pt-2">
        
          <PokemonIndex />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pokemon;
