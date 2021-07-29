import React from 'react';

export class UpButton extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
        <button onClick={() => this.value++ }>Up</button>)
    };
}


