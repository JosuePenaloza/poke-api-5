import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardPoke from '../components/CardPoke';
import Search from '../components/Search';
import Img from '../components/Img';
//import TypeSelec from '../components/TypeSelec';
//import useData from '../store/hooks/useData';
//import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const nameUser = useSelector(state => state.user);
    const navigate = useNavigate();

    const [pokemons, setpokemons] = useState([]);
    
    //const {data: pokemons, setData: setpokemons} = useData();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then(res => setpokemons(res.data.results))
        .catch(error => console.log(error.dat))
    }, []);

       console.log('data',pokemons);


    //////////////////////
            //por tipos
    const [type, setType] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setType(res.data.results))
    },[]);

    const handlerType = (url) => {
        console.log('url',url)
        axios.get(url).then(res => setpokemons(res.data.pokemon.map(p => p.pokemon)))
        console.log('click', pokemons)

    }

    ///////////////////////////////
    ////////paginacion////////////

    const numberPage = useSelector(state => state.numberPage)

    const [pages, setpage] = useState(1);
    
    const pokePrePage = numberPage;
    const lastIndex = pages * pokePrePage;
    const firstIndex = lastIndex - pokePrePage; 

    const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(pokemons.length / pokePrePage);

    const numbers = [];
    for(let i = 1; i <= totalPages; i++){
        numbers.push(i);
    };


    return (
        <div >
            <div>
                <img src={Img.img4} className='logo'/>
                <Search />
                <button onClick={() => navigate('/config')}>Config</button>
            </div>
            
            <div className='pokedex'>
                <h1>welcome coach {nameUser}</h1>
                
                <select name="type" onChange={e => handlerType(e.target.value)}>
                    <option value="">Type</option>
                    {
                        type?.map(t => (
                            <option 
                            key={t.url}
                            value={t.url}
                            >
                                {t.name}
                            </option>
                        ))
                    }    
                </select>

                <div className='pokeLis' key={pokemons?.url}>
                    {
                        pokemonPaginated?.map(poke => (
                            <ul key={poke.url}>
                                <CardPoke url={poke?.url} key={poke?.url} />                         
                            </ul>                
                        ))
                    }
                </div>

                <section className='buttonPage'>
                    <button 
                    disabled={pages === 1} 
                    onClick={() => setpage(pages-1)}
                    >
                        <i className="fa-solid fa-circle-arrow-left"></i>
                    </button>

                    {
                        numbers.map(number => (
                            <button key={number} onClick={() => setpage(number)} >{number}</button>
                        ))
                    }

                    <button 
                    disabled={pages === totalPages} 
                    onClick={() => setpage(pages+1)}
                    >
                        <i className="fa-solid fa-circle-arrow-right"></i>
                    </button>
                </section>
            </div>   
        </div>
    );
};

export default Pokedex;