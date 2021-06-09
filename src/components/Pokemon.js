import { React } from "react";
import { useLocation } from "react-router-dom";

function Pokemon() {
  const [pokemon, setPokemon] = React.useState();
  const { location } = useLocation();

  React.useEffect(() => {
    async function fetchPokemon(id) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const { results } = await res.json();

        const pokemon = results.map((result, index) => {
          const paddedIndex = ("00" + (index + 1)).slice(-3);
          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
          return {
            ...result,
            image,
          };
        });

        return pokemon;
      } catch (error) {
        console.error(error);
      }
    }

    setPokemon(fetchPokemon(location));
  }, [location]);
  // link was clicked to get here
  // call pokemon api with id from url

  // we need
  // state, useEffect, and logic
  return <></>;
}

export default Pokemon;
