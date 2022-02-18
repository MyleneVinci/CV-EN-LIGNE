import React from 'react';
import './Contents.css';


const Contents = (props) => {
    return (
    <div className='Contents'>
            <h4>{props.title}</h4>
            <h5>{props.location} | {props.date}</h5>
            {props.task1 ? <p>{props.task1}</p> : <p>{props.description}</p>}
            {props.task2 ? <p>{props.task2}</p> : null}
            {props.task3 ? <p>{props.task3}</p> : null}
            {props.githubLink ? <a href={props.githubLink}><p>{props.githubLink}</p></a> : null}
            {props.deployedLink ? <p><a href={props.deployedLink}>{props.deployedLink}</a></p> : null}
            {props.technologies ? <p>{props.technologies}</p> : null}
    </div>
    );
};

export default Contents;
