import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";



const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonId, setPokemonId] = useState();

  //   API CALL
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
      .then((res) => {
        if (res.status === 200) {
          setPokemonList(res.data.results);
          // console.log(res.data.results.map((pokemon) => pokemon.name));
        }
      });
  }, []);


  return (
    <div className="container-fluid my-5">
      <div className="row gy-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mx-5 px-5">
        {pokemonList.map((item) => (
          <Cards key={item.id} name={item.name}/>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
