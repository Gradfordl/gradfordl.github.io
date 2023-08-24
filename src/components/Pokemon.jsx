import axios from "axios";
import { useEffect, useState } from "react";

export default function Pokemon({ finalPokemon }) {
  const [pokemon, setPokemon] = useState(null);
  // this is the API base url
  const url = `https://pokeapi.co/api/v2/pokemon/${finalPokemon}`;
  // console.log(url);

  function getPokemon() {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setPokemon(data));
    } catch (error) {
      console.log("ERROR", error);
    }
  }
  useEffect(() => {
    getPokemon();
    // console.log(pokemon.sprites.front_default)
    console.log(pokemon.name)
    console.log(pokemon.types[0].type.name)
  }, []);



  return (
    <div>
      <h1>Results!</h1>
      <h2>Your Pokemon Personality is...  </h2>
      <h3>{pokemon.name}</h3>
      <p>You have a lot in common with {pokemon.name}! See below for a few fun facts about your pokemon.</p>
      <ul>
        <li>{pokemon.name} is a {pokemon.types[0].type.name} type pokemon</li>
        <li> It's PokeDex # is {pokemon.id} </li>
        <li>It knows {pokemon.moves.length} different moves</li>
      </ul>
      {/* <img src="" /> */}

      {/* {pokemon.weight} */}
    </div>
  );
  //   }
}
