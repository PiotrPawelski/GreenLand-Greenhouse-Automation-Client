import React from 'react';
import axios from 'axios';
import Header from '../../common/layout/Header';
import Footer from '../../common/layout/Footer';
import Background from '../../common/layout/Background';
import Sensor from '../../modules/Sensor';

import '../../common/styles/Root.css';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios('http://localhost:5000/get')
      .then((res) => {
        this.setState({ data: res.data });
      });
    if (this.state.data === undefined) {
      this.setState({
        data: [],
      });
    }
  }

  render() {
    return (
      <div
        className="Root"
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh',
        }}
      >
        <Header />


        {
          this.state.data.map((json) => <Sensor value={json} />)
        }

        <div style={{ flex: 1 }} />
        <Footer />

        <Background />
      </div>
    );
  }
}
