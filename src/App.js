import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Logo from './Logo';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const particlesOptions={
  
                particles: {
                  number:{
                    value:80,
                    density:{
                    enable:true,
                    value_area:800
                    
                  }
                }
              }
            }

class App extends Component {
  render() {
    return (
      <div>
      <Particles className='particles' params={particlesOptions} />
        <Logo />
        <About />
        <Work />
        <Skills />
        <Contact />
        <Footer /> 
      </div>
      );
  }
}

export default App;
