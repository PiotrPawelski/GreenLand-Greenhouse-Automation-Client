import React from 'react';
import PropTypes from 'prop-types';
import Card from './components/Card';
import SliderCard from './components/SliderCard';

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

export default function Sensor(props) {
  if (props.value === null) { return null; }

  const {
    id = 0, temperature = 0, humidity = 0, light = 0,
  } = props.value;

  return (
    <div style={sensorStyle}>
      <Card type="Sensor ID" value={id} unit="" />
      <Card type="Temperature" value={temperature} unit="°C" />
      <Card type="Humidity" value={humidity} unit="%" />
      <Card type="Light" value={light} unit="" />
      {/*
      <SliderCard type="Temperature" name="Pożądana temperatura" min="15" max="40" value={temperature} id={id} />
      <SliderCard type="Humidity" name="Pożądana wilgotność" min="0" max="100" value={humidity} id={id} />
      <SliderCard type="Light" name="Pożądana jasność" min="0" max="100" value={light} id={id} />
      */}
    </div>
  );
}


Sensor.propTypes = {
  id: PropTypes.number,
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  light: PropTypes.number,
};

Sensor.defaultProps = {
  id: 0,
  temperature: 0,
  humidity: 0,
  light: 0,
};
