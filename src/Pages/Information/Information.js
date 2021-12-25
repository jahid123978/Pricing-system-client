import React from 'react';

const Information = ({info}) => {
    return (
        <div style={{padding: '2px 50px', border: '1px solid black', marginBottom: '10px', marginLeft: '80px'}}>
            <h2>{info.name}</h2>
            <p>{info.description}</p>
        </div>
    );
};

export default Information;