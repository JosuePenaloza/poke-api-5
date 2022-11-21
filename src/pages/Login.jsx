import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userName } from '../store/slices/user.slice';

const Login = () => {

    const [name, setName] = useState('');

    const dispach = useDispatch();
    const navigate = useNavigate();

    const handlerUser = () => {
        dispach(userName(name));
        navigate('/pokedex')
    }


    
    return (
        <div>
            <h2>Login</h2>
            <button onClick={() => navigate('/config')}>Config</button>
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id='name'
                    onChange={e => setName(e.target.value)}
                    value={name}        
                />
                <button onClick={handlerUser}>click</button>
            </form>
        </div>
    );
};

export default Login;