import React from "react";
import { useParams, Link } from "react-router-dom";

function Pokemon() {
  const [pokemon, setPokemon] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPokemon() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
        const paddedIndex = ("00" + id).slice(-3);
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
        const pokemon = {
          ...data,
          image,
        };
        setPokemon(pokemon);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemon();
  }, [id]);
  // link was clicked to get here
  // call pokemon api with id from url

  // we need
  // state, useEffect, and logic
  return (
    <>
      <Link to="/">Home</Link>
      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
          <h4>Height: {pokemon.height}</h4>
          <h4>Weight: {pokemon.weight}</h4>
        </div>
      ) : null}
    </>
  );
}

export default Pokemon;
