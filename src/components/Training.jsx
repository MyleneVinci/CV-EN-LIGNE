import React from 'react';
import Contents from './Contents';
import dataTraining from '../assets/dataTraining';

    const Training = () => {
    return (
        <div className='Training'>
            {dataTraining.map((data,index) => (
                <Contents 
                    key={index}
                    title={data.title}
                    location={data.location}
                    date={data.date}
                    description={data.description}
                />
            ))
            }
        </div>
    );
};

export default Training;
