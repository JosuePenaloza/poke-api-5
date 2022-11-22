import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from './Img';


const Search = () => {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handlerSubmit = () => {
        navigate(`/pokedex/${search}`)
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input 
                type="text" 
                id="name" 
                onChange={e => setSearch(e.target.value)}
                value={search}    
                placeholder='Pokemon name'
            />
            <button><img src={Img.img5} alt="Search" className='iconSearch' /></button>
        </form>
    );
};

export default Search;