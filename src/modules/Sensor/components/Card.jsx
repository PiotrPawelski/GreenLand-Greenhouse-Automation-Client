import React from 'react';
import PropTypes from 'prop-types';

const cardStyle = {
  background: '#FAFAFA',
  opacity: '90%',
  border: '3px solid #349e3a',
  borderRadius: '20px',
  boxShadow: '3px 3px 5px #c1ebc4',
  margin: '20px',
  padding: '10px',
};

const infoStyle = {
  fontSize: '24px',
};

export default function Card(props) {
  const { type, value, unit } = props;
  return (
    <div style={cardStyle}>
      <div>{type}</div>
      <div style={infoStyle}>
        {value}
        {unit}
      </div>
    </div>
  );
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number,
  unit: PropTypes.string,
};

Card.defaultProps = {
  value: 0,
  unit: '',
};
