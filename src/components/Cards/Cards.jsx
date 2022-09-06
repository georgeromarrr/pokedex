import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cards = (props) => {
  const [isBgColor, setBgColor] = useState();
  const redirectTo = useNavigate();
  const [pokemonImage, setPokemonImage] = useState();
  const [pokemonType, setPokemonType] = useState([]);
  const poketype = pokemonType;

  useEffect(() => {
    switch (poketype) {
      case "normal":
        setBgColor(`poke-type-normal`);
        break;
      case "fighting":
        setBgColor(`poke-type-fighting`);
        break;
      case "flying":
        setBgColor(`poke-type-flying`);
        break;
      case "poison":
        setBgColor(`poke-type-poison`);
        break;
      case "ground":
        setBgColor(`poke-type-ground`);
        break;
      case "rock":
        setBgColor(`poke-type-rock`);
        break;
      case "bug":
        setBgColor(`poke-type-bug`);
        break;
      case "ghost":
        setBgColor(`poke-type-ghost`);
        break;
      case "steel":
        setBgColor(`poke-type-steel`);
        break;
      case "fire":
        setBgColor(`poke-type-fire`);
        break;
      case "water":
        setBgColor(`poke-type-water`);
        break;
      case "electric":
        setBgColor(`poke-type-electric`);
        break;
      case "ice":
        setBgColor(`poke-type-ice`);
        break;
      case "dragon":
        setBgColor(`poke-type-dragon`);
        break;
      case "dark":
        setBgColor(`poke-type-dark`);
        break;
      case "fairy":
        setBgColor(`poke-type-fairy`);
        break;
      case "unknown":
        setBgColor(`poke-type-unknown`);
        break;
      case "shadow":
        setBgColor(`poke-type-shadow`);
        break;
      default:
        setBgColor(`poke-type-unknown`);
    }
  }, []);

  //   API CALL
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`).then((res) => {
      if (res.status === 200) {
        setPokemonImage(res.data.sprites.other.home.front_default);
        setPokemonType(res.data.types.map((type) => type.type.name)[0])
      }
    });
  }, []);

  return (
    <div
      className="col d-flex justify-content-center cursor-pointer"
      key={props.id}
      onClick={() => redirectTo(`/pokemon/${props.name}`)}
    >
      <Card className={isBgColor} style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={pokemonImage}
          style={{ width: "14rem" }}
          className="mx-auto p-5"
        />
        <Card.Body>
          <Card.Title className="text-center">{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
