import axios from "axios";
import { useEffect, useState } from "react";
import pokemonArray from "../data"

export default function Pokemon (props) {
  const [pokemon, setPokemon] = useState([]);
  // this is the API base url
  const baseUrl = "https://pokeapi.co/api/v2/";
  const endPoint = "pokemon/";
  let selected = "bulbasaur";

  // let url = "https://pokeapi.co/api/v2/pokemon/bulbasaur"
  let url = baseUrl + endPoint + selected;
  // console.log(url);

  const getPokemon = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setPokemon(data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);

//   const loadad = () => {
    return(
      <div>{pokemon.name}
      </div>
    )
//   }
};