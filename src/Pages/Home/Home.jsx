import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PokemonList from "../../components/Cards/PokemonList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="my-5 py-5">
        <div className="mt-5 pt-5">
          <PokemonList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
