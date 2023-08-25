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
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>Results!</h1>
        <h2>Your Pokemon Personality is...  </h2>
        <h1>{pokemon.name}</h1>
        <img className="api-pic" src={pokemon.sprites.front_default} alt="pokemon image" />
        <p>You seem to have a lot in common with {pokemon.name}! See below for a few fun facts about your pokemon.</p>
        <ul>
          <li>{pokemon.name} is a {pokemon.types[0].type.name} type pokemon</li>
          <li> It's PokeDex # is {pokemon.id} </li>
          <li>It knows {pokemon.moves.length} different moves</li>
        </ul> 
      </div>
    );
  }
  const loading = () => {
    return <h1>Loading... Please wait</h1>
  }

 return pokemon ? loaded() : loading();
}
