import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userName } from '../store/slices/user.slice';
import Img from '../components/Img';

const Login = () => {

    const [name, setName] = useState('');

    const dispach = useDispatch();
    const navigate = useNavigate();

    const handlerUser = () => {
        dispach(userName(name));
        navigate('/pokedex')
    }


    
    return (
        <div className='login'>
            <button onClick={() => navigate('/config')}>Config</button>
            <form>
                <label htmlFor="name"></label>
                <input 
                    type="text"
                    id='name'
                    onChange={e => setName(e.target.value)}
                    value={name}        
                    placeholder='name'
                />
                <button onClick={handlerUser}><img src={Img.img3} className='iconButton'/></button>
            </form>
            <img src={Img.img2} />
        </div>
    );
};

export default Login;