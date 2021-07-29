import React from 'react';

export class Screen extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return(
        <div className='screen-box'>
            <span>{this.value}</span>
        </div>)
    };
};