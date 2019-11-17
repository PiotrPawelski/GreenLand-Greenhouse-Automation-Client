import React from 'react';

export default class Card extends React.Component {
    render(){
        return(
            <div style={cardStyle}>
                <div style={h3Style}>{this.props.type}</div>
                <div style={infoStyle}>{this.props.value}{this.props.unit}</div>
            </div>
        )
    }
}

const cardStyle = {
   background: '#FAFAFA',
   opacity: '90%',
   border: '3px solid #349e3a',
   borderRadius: '20px',
   boxShadow: '3px 3px 5px #c1ebc4',
   margin: '20px',
   padding: '10px'
}

const h3Style = {
   
 }

const infoStyle = {
   
 }