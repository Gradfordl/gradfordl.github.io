import { useNavigate } from "react-router";

import Pokemon from "../components/Pokemon";

function Results({ total, setTotal }) {
  const navigate = useNavigate();

  function restart() {
    navigate("/");
    setTotal(0);
  }
  const results = [
    { id: 1, name: "bulbasaur" },
    { id: 2, name: "pikachu" },
    { id: 3, name: "charmander" },
    { id: 4, name: "squirtle" },
    { id: 5, name: "eevee" },
    { id: 6, name: "croagunk" },
  ];
  // const finalScore = 6
  const finalScore = Math.floor(total / 10);
  console.log(finalScore);
  let finalPokemon = results.find((pokemon) => pokemon.id === finalScore);
  return (
    <div>
      <div>
        <Pokemon finalPokemon={finalPokemon.name} />
        <button className="restart" onClick={restart}>
          RESTART
        </button>
      </div>
    </div>
  );
}

export default Results;
