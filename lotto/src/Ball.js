import React from 'react';
import './App.css';

const Ball = ({number}) => {
    let backgroundC;

    if (number <= 10) {
        backgroundC = '#f8bbd0'; 
    } else if (number <= 20) {
        backgroundC = '#8aacc8';
    } else if (number <= 30) {
        backgroundC = '#eeffff';
    } else if (number <= 40) {
        backgroundC = '#ffccbc';
    } else if (number <= 45) {
        backgroundC = '#dcedc8';
    } else {
        return (null);
    }
    return (
        <div className='ball' style={{background : backgroundC}}>{number}</div>
    )
}

export default Ball;