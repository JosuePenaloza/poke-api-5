import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonCard = () => {

    const {id_name} = useParams();
    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id_name}/`)
        .then(res => setPokemon(res.data));
    },[id_name])

    console.log('un pokemon',pokemon)

    return (
        <div className='pokemonCard'>

            <button onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left"></i></button>
            <button onClick={() => navigate('/config')}>Config</button>

            <div>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                <h1>{pokemon.name}</h1>
            </div>
            
            <div>
                <b>weight:</b> {pokemon.weight}
                <b>height:</b> {pokemon.height}
            </div>
            <div>
                <b>Type:</b>
                <section>
                    {pokemon.types?.[0]?.type.name}
                </section>
                <section>
                    {pokemon.types?.[1]?.type.name}
                </section>
            </div>
            <div>
                <b>Abilities:</b> 
                <section>
                    {pokemon.abilities?.[0]?.ability.name}
                </section>
                <section>
                    {pokemon.abilities?.[1]?.ability.name}
                </section>
            </div>

            <section className='energy'>
                <h3>Energy</h3>
                <b>HP: {pokemon.stats?.[0].base_stat}</b>
                <b>Attack: {pokemon.stats?.[1].base_stat}</b>
                <b>Defense: {pokemon.stats?.[2].base_stat}</b>
                <b>Speed: {pokemon.stats?.[5].base_stat}</b>
                <b>Special attack: {pokemon.stats?.[3].base_stat}</b>
                <b>Special defense: {pokemon.stats?.[4].base_stat}</b>
            </section>


            <section className='movements'>
                <h3>Movements</h3>
                {
                    pokemon.moves?.map(move => (
                        <ul key={move.move.name}><li>{move.move.name}</li></ul>
                    ))
                }
            </section> 
        </div>
    );
};

export default PokemonCard;