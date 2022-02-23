import React from 'react';
import avatar from '../assets/avatar.png';
import linkedin from '../assets/linkedin.png';
import Github from '../assets/Github.png';
import './User.css';


const User = () => {
    return (
    <div className='User'>
        <div className="User-container">
            <i ></i>
            <div className='User-avatar'>
                <img className='avatar' src={avatar} alt='avatar' />
                <h2 className='h2-title'>Mylène VINCI</h2>
            </div>
            <div className="User-data">
                <h4 className='h4-title'>DONNEES PERSONNELLES</h4>
                <p>35ans</p>
                <p>Marseille</p>
                <p><a href="mailto:mylene.vinci@gmail.com">mylene.vinci@gmail.com</a></p>
                <p><a href="tel:+33620207163">06.20.20.71.63.</a></p>
                <p><img className='logo' src={linkedin} alt="" /><a href="https://www.linkedin.com/in/mylene-vinci/" className="link">https://www.linkedin.com/in/mylene-vinci/</a></p>
                <p><img className='logo' src={Github} alt="" /><a href="https://github.com/MyleneVinci" className="link">https://github.com/MyleneVinci</a></p>
            </div>
        </div>
    </div>
    );
};

export default User;
