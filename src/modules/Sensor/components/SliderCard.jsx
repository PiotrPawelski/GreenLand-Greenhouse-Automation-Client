import React from 'react';
import axios from 'axios';
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

export default class SliderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      name: props.name,
      min: props.min,
      max: props.max,
      value: props.value,
      id: props.id,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    axios.post('http://localhost:5000/post', { 
      id: this.state.id,
      type: this.state.type,
      value: this.state.value,
    });
  }

  render() {
    return (
      <div style={cardStyle}>
        <div>{this.state.name}</div>
        <div style={infoStyle}>

          <input type="range" min={this.state.min} max={this.state.max} value={this.state.value} step="1" onChange={this.handleChange} />
          {this.state.value}
        </div>
      </div>
    );
  }
}

SliderCard.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
