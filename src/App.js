import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from "react-particles-js";
import Avatar from "react-avatar";
import Typing from "react-typing-animation";

class App extends Component {
  render() {
    return <div className="App" >
      <div id="outPopUp">
      <Typing>
        <div>
          <h1 style={{ color: '#FFFFFF'}}>Sneh Koul</h1>
          <Typing.Delay ms={1000} />
            <h2 style={{ color: '#FFFFFF' }}>Software Developer</h2>
            <Typing.Delay ms={1000} />
            <h3 style={{ color: '#FFFFFF', fontSize: '100%', fontFamily: 'cursive' }}>Perseverance,Persistence => Achievement </h3>

        </div>
        
      </Typing>
      </div>
      <Particles
        params={{
          particles: {
            number:{
              value:50,
              density:{
                enable:true

              }
              
             },
            opacity: {
              random:true,
              anim:{
                speed:500
              }
            },
             color:{
               value:'#000000'
             },
             move:{
               bounce:true
             },

            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
              }
            }
          }
        }}
        style={{
          width: '100%',
          backgroundImage: `url(sneh.jpg)`
        }}
      />
    </div>;
  }
}

export default App;
