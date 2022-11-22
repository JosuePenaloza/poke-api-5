import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CardPoke = ({url}) => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get(url).then(res => setPokemon(res.data));
    },[])

    //console.log('un pokemon',pokemon)
    return (
        <div className='cardPoke'>
            <Link to={`/pokedex/${pokemon.id}/`}>
                <div className='imgCar'>
                    <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                </div>
                <div className='namePokemon'>
                    <h3>{pokemon.name}</h3>
                </div>             
                
            </Link>
        </div>
        
    );
};

export default CardPoke;