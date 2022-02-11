import React from 'react';
import {Carousel} from '3d-react-carousal';
import "./Skills.css";
import CSS from '../assets/CSS.png';
import express from '../assets/express.png';
import Github from '../assets/Github.png';
import html from '../assets/html.png';
import Javascript from '../assets/Javascript.png';
import mysql from '../assets/mysql.png';
import nodejs from '../assets/nodejs.png';
import react from '../assets/react.png';

const Skills = () => {
    // let slides = [
    //     <img  className="slide-icon" src={html} alt="html-icon" />,
    //     <img  className="slide-icon"   src={CSS} alt="css-icon" />  ,
    //     <img  className="slide-icon"   src={Javascript} alt="javascript-icon" />  ,
    //     <img  className="slide-icon"   src={react} alt="react-icon" />  ,
    //     <img  className="slide-icon"   src={express} alt="express-icon" />  ,
    //     <img  className="slide-icon"   src={nodejs} alt="nodejs-icon" />  ,
    //     <img  className="slide-icon"   src={mysql} alt="mysql-icon" />  ,
    //     <img  className="slide-icon"  src={Github} alt="github-icon" />   
    // ];

    let slides = [
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];


    return (
    <div>
        <div className="sidebar-contents">
            <h4>HARD SKILLS</h4>
            <Carousel slides={slides} autoplay={true} interval={1000} />
        </div>
        <div className="sidebar-contents">
            <h4>SOFT SKILLS</h4>
                <p>Travail d'équipe - autonomie - organisation</p>
                <p>Adaptabilité - prise de décision</p>
                <p>Sens pédagogique - vulgarisation</p>
                <p>Créativité - patience - précision</p>
        </div>
        <div className="sidebar-contents">
            <h4>LOISIRS</h4>
            <p>Culture scientifique</p>
            <p>Loisirs créatifs</p>
            <p>Macrophotographie</p>
        </div>
        <div className="sidebar-contents">
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex tempore nemo hic sapiente neque laboriosam necessitatibus odio, consectetur ullam. Rerum, commodi debitis mollitia et reprehenderit inventore hic nam illum soluta perferendis totam. Modi iusto quos, repellendus architecto distinctio quibusdam vero eveniet totam id ad, est numquam quod et animi repudiandae laborum rem earum alias delectus, officiis ullam eaque ex? Facere nobis architecto mollitia ea nulla deleniti fugiat? Numquam accusamus tempora quisquam asperiores. Similique non molestiae quaerat delectus amet animi?</p> */}
        </div>
    </div>
    );
};

export default Skills;
