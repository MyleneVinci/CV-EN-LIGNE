import React from 'react';
import User from './User'

import './Sidebar.css'

const Sidebar = () => {
    return (
    <div className='Sidebar-container'>
        <User />
        <div className="sidebar-contents">
            <h4>HARD SKILLS</h4>
            <p>CAROUSEL</p>
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
        
    </div>
    );
};

export default Sidebar;
