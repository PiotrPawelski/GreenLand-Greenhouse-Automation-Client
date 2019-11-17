import React from 'react';
import axios from 'axios';
import Card from './Card'

export default class Sensor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            temperature: "",
            humidity: "",
            light: ""
          }
    }
    

    componentDidMount(){
        axios.get(this.props.value)
        .then(res => {
          const data = res.data;
          this.setState({ 
              id: data.id,
              temperature: data.temperature,
              humidity: data.humidity,
              light: data.light
         });
        })
    }
    render(){
        return(
            <div style={sensorStyle}>
                <Card type='Sensor ID' value={this.state.id} unit=''/>
                <Card type='Temperature' value={this.state.temperature} unit='°C'/>
                <Card type='Humidity' value={this.state.humidity} unit='%'/>
                <Card type='Light' value={this.state.light} unit='%'/>
            </div>
        )
    }
}

const sensorStyle = {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   background: '#FAFAFA',
   opacity: '90%',
   border: '3px solid #349e3a',
   borderRadius: '20px',
   marginTop: '10px'
   
}