import React from 'react';

export default class Header extends React.Component {
    render(){
        return(
            <header style={headerStyle}>
                <h1>
                    Greenland Dashboard
                </h1>
            </header>
        )
    }
}

const headerStyle = {
    background: '#43c14b',
    border: '5px solid #349e3a',
    borderRadius: '5px',
    opacity: '90%',
    boxSizing: 'border-box',
    width: '60%',
    color: '#FAFAFA'
}