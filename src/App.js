import React from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    async function fetchPokemonData() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const { results } = await res.json();
        const pokemon = results.map((result, index) => {
          const paddedIndex = ("00" + (index + 1)).slice(-3);
          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
          return {
            ...result,
            image,
          };
        });

        setPokemon(pokemon);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemonData();
  }, []);

  return (
    <div className="App">
      <main>
        <header>
          <h1>Welcome to the Pokedex!</h1>
          <p>View the original 151 Pokemon below:</p>
        </header>
        <section>
          <ul>
            {pokemon
              ? pokemon.map((item, index) => {
                  return (
                    <li key={index}>
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </li>
                  );
                })
              : null}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
