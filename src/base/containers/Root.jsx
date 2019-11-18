import React from 'react';
import Header from '../../common/layout/Header';
import Footer from '../../common/layout/Footer';
import Background from '../../common/layout/Background';
import Sensor from '../../modules/Sensor';

import '../../common/styles/Root.css';

export default function Root() {
  const IPTABLE = ['http://192.168.1.80:5000/', 'http://192.168.1.80:5000/', 'http://192.168.1.80:5000/', 'http://192.168.1.80:5000/'];

  return (
    <div
      className="Root"
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh',
      }}
    >
      <Header />

      {
        IPTABLE.map((ip) => <Sensor value={ip} />)
      }

      <div style={{ flex: 1 }} />
      <Footer />

      <Background />
    </div>
  );
}
