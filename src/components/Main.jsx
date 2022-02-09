import React from 'react';
import Training from './Training';
import Experiencies from './Experiencies';
import './Main.css';



const Main = () => {
    return (
    <div className='Main-container'>
        <div className='title-container'>
            <h1 className='h1-title'>Développeur web et web mobile junior</h1>
        </div>
        <div className='cursus-container'>
            <div className='experiencies-container'>
                <h3 className='h3-title'>EXPERIENCE PROFESSIONNELLE</h3>
                <Experiencies />
            </div>
            <div className='training-container'>
                <h3 className='h3-title'>FORMATION</h3>
                <Training />
            </div>
        </div>
    </div>
    );
};

export default Main;
