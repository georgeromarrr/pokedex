import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PokemonIndex = () => {
  const [pokemonId, setPokemonId] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [pokemonImage, setPokemonImage] = useState();
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonStatVal, setPokemonStatsVal] = useState([]);
  const { name } = useParams();
  const redirectTo = useNavigate();

  //   API CALL
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      if (res.status === 200) {
        setPokemonId(res.data.id);
        setPokemonName(res.data.name);
        setPokemonImage(res.data.sprites.other.home.front_default);
        setPokemonAbilities(res.data.abilities.map((ability) => ability.ability.name));
        setPokemonType(res.data.types.map((type) => type.type.name))
        setPokemonStatsVal(res.data.stats.map((stat) => stat.base_stat))
      }
    });
  }, []);
  
  return (
    <div className="container">
      <div className="row m-5">
        
        <div className="col d-flex justify-content-between">
        <button type="button" className="btn btn-outline-success" onClick={() => redirectTo('/')}>Go Back</button>
          <h4>#{pokemonId}</h4>
        </div>
      </div>
      <div className="row m-5">
        <div className="col d-flex justify-content-center mb-auto">
          <img
            src={pokemonImage}
            style={{ height: "24rem" }}
          />
        </div>
        <div className="col">
          <div className="row mt-4">
            <div className="d-flex justify-content-center p-3">
              <h1>{pokemonName}</h1>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="row mt-4">
              <div className="col m-1">
                <h4>abilities:</h4>
              </div>
              <div className="col m-1">
                {pokemonAbilities.map((ability, i) => (<div className="row" key={i}><h5>{ability}</h5></div>))}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="row mt-4">
              <div className="col m-1">
                <h4>type:</h4>
              </div>
              <div className="col m-1">
                <div className="row">
                {pokemonType.map((type, i) => <h5 key={i}>{type}</h5>)}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="row mt-4">
              <div className="col m-1">
                <h3>Stats</h3>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between my-3">
            <div className="col-8 ms-5 ps-5">
              <h5>hp:</h5>
              <h5>attack:</h5>
              <h5>defence:</h5>
              <h5>special-attack:</h5>
              <h5>special-defence:</h5>
              <h5>speed:</h5>
            </div>
            <div className="col text-start">
            {pokemonStatVal.map((val, i) => <h5 key={i}>{val}</h5>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonIndex;
