import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div className='pokemon-detail'> 
      {pokemon.map((poke, i) => <div key={`${poke}-${i}`}>
        <p>{poke.pokemon}</p>
        <img src={poke.url_image} style={{ width: '150px' }} />
      </div>)}
    </div>
  );
}
