import Pokemon from "../components/Pokemon";

function Results({total}) {
    const results = [
        { id: 1, name: "bulbasaur", type: "Grass"},
        { id: 2, name: "pikachu", type: "Electric"},
        { id: 3, name: "charmander", type: "Fire"},
        { id: 4, name: "squirtle", type: "Water"},
        { id: 5, name: "eevee", type: "Normal" },
        { id: 6, name: "croagunk", type: "Poison"},
      ];
    //   const finalScore = 6
    const finalScore = Math.floor(total / 10)
    console.log(finalScore)
    let finalPokemon = results.find((pokemon) => pokemon.id === finalScore)
  return (
    <div>
        <div>
            <Pokemon finalPokemon={finalPokemon.name} />
        </div>
    </div>
    
  )
}

export default Results