import React from 'react';
import Particles from 'react-particles-js';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sensor from './Components/Sensor'
import './App.css';

const IPTABLE = ["http://192.168.1.80:5000/", "http://192.168.1.80:5000/", "http://192.168.1.80:5000/", "http://192.168.1.80:5000/"];

function App() {
  return (
    <div className="App">
      <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', minHeight: '100vh'}}>
        <Header/>

        {
        IPTABLE.map((ip) =>
        <Sensor value={ip} />)
        }

        <div style={{flex:1}}/>
        <Footer/>
      </main>
       <Particles 
              params={{
            		"particles": {
                  "number": {
                    "value": 180,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#43c18a"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#43c18a"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#43c18a",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 140,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              
            	}}
              style={{
                zIndex: '-999',
                backgroundColor: '#FAFAFA',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              width={'100vw'}
              height={'100vh'}
            /> 
    </div>
  );
}

export default App;
