import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pageNumber } from '../store/slices/numberPage.slice';

const Config = () => {

    const navigate = useNavigate();
    const dispach = useDispatch();

    const for4 = () => {
        dispach(pageNumber(4))
    };

    const for8 = () => {
        dispach(pageNumber(8))
    };

    const for12 = () => {
        dispach(pageNumber(12))
    };

    const for16 = () => {
        dispach(pageNumber(16))
    };

    const for20 = () => {
        dispach(pageNumber(20))
    };
    
    return (
        <div>
            <b>CONFIG</b>
            <button onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left"></i></button>
            <button onClick={() => navigate('/')}>Sign off</button>  


            <nav>
                <button onClick={for4}>4</button>
                <button onClick={for8}>8</button>
                <button onClick={for12}>12</button>
                <button onClick={for16}>16</button>
                <button onClick={for20}>20</button>
            </nav>
        </div>
    );
};

export default Config;