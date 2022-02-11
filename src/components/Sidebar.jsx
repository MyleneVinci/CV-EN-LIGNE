import React from 'react';
import User from './User';
import {Carousel} from '3d-react-carousal';
import CSS from '../assets/CSS.png';
import express from '../assets/express.png';
import Github from '../assets/Github.png';
import html from '../assets/html.png';
import Javascript from '../assets/Javascript.png';
import mysql from '../assets/mysql.png';
import nodejs from '../assets/nodejs.png';
import react from '../assets/react.png';

import './Sidebar.css'

const Sidebar = () => {

    let slides = [
        <img  className="slide-icon" src={html} alt="html-icon" />,
        <img  className="slide-icon"   src={CSS} alt="css-icon" />  ,
        <img  className="slide-icon"   src={Javascript} alt="javascript-icon" />  ,
        <img  className="slide-icon"   src={react} alt="react-icon" />  ,
        <img  className="slide-icon"   src={express} alt="express-icon" />  ,
        <img  className="slide-icon"   src={nodejs} alt="nodejs-icon" />  ,
        <img  className="slide-icon"   src={mysql} alt="mysql-icon" />  ,
        <img  className="slide-icon"  src={Github} alt="github-icon" />   
    ];


    return (
    <div className='Sidebar-container'>
        <User />
        <div className="sidebar-contents">
            <h4 className='h4-title'>HARD SKILLS</h4>
            <Carousel slides={slides} autoplay={false} interval={1000} />
        </div>
        <div className="sidebar-contents">
            <h4 className='h4-title'>SOFT SKILLS</h4>
                <p>Travail d'équipe - autonomie - organisation</p>
                <p>Adaptabilité - prise de décision</p>
                <p>Sens pédagogique - vulgarisation</p>
                <p>Créativité - patience - précision</p>
        </div>
        <div className="sidebar-contents">
            <h4 className='h4-title'>LOISIRS</h4>
            <p>Culture scientifique</p>
            <p>Loisirs créatifs</p>
            <p>Macrophotographie</p>
        </div>
    </div>
    );
};

export default Sidebar;
