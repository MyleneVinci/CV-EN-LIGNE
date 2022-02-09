import React from 'react';
import Contents from './Contents';
import dataExperiencies from '../assets/dataExperiencies';

    const Experiencies = () => {
    return (
        <div className='Experiencies'>
            {dataExperiencies.map((data,index) => (
                <Contents
                    key={index}
                    title={data.title}
                    location={data.location}
                    date={data.date}
                    task1={data.task1}
                    task2={data.task2}
                    task3={data.task3}
                    githubLink={data.githubLink}
                    deployedLink={data.deployedLink}
                    technologies={data.technologies}
                />
            ))
            }
        </div>
    );
};

export default Experiencies;
