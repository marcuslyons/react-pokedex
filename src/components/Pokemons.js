import React from "react";
import { Link } from "react-router-dom";

function Pokemons() {
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    async function fetchPokemonData() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const { results } = await res.json();
        const pokemon = results.map((result, index) => {
          const id = index + 1;
          const paddedIndex = ("00" + id).slice(-3);
          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
          return {
            ...result,
            image,
            id,
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
    <div>
      {pokemon
        ? pokemon.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/${item.id}`}>
                  <img src={item.image} alt={item.name} />
                  <h4>{item.name}</h4>
                </Link>
              </li>
            );
          })
        : null}
    </div>
  );
}

export default Pokemons;
