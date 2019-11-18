import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from './components/Card';

const sensorStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  background: '#FAFAFA',
  opacity: '90%',
  border: '3px solid #349e3a',
  borderRadius: '20px',
  marginTop: '10px',
};

export default class Sensor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      temperature: '',
      humidity: '',
      light: '',
    };
  }

  componentDidMount() {
    const { value } = this.props;

    axios.get(value)
      .then((res) => {
        const { data } = res;
        this.setState({
          id: data.id,
          temperature: data.temperature,
          humidity: data.humidity,
          light: data.light,
        });
      });
  }

  render() {
    const {
      id, temperature, humidity, light,
    } = this.state;

    return (
      <div style={sensorStyle}>
        <Card type="Sensor ID" value={id} unit="" />
        <Card type="Temperature" value={temperature} unit="°C" />
        <Card type="Humidity" value={humidity} unit="%" />
        <Card type="Light" value={light} unit="%" />
      </div>
    );
  }
}

Sensor.propTypes = {
  value: PropTypes.string.isRequired,
};
