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

    //console.log('un pokemon',pokemon)

    return (
        <div>
            <button onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left"></i></button>

            <div>
                <b>height: {pokemon.height}</b>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                <h1>{pokemon.name}</h1>
            </div>
            
        </div>
    );
};

export default PokemonCard;