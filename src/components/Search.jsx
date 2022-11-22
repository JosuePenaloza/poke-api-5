import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <button>Search</button>
        </form>
    );
};

export default Search;