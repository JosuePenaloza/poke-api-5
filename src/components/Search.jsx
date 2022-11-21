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
            <h2>Search</h2>
            <label htmlFor="name">name</label>
            <input 
                type="text" 
                id="name" 
                onChange={e => setSearch(e.target.value)}
                value={search}    
                placeholder='Name'
            />
            <button>Search</button>
        </form>
    );
};

export default Search;