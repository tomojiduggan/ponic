import React from 'react';
import Page from './components/page'
import './App.css';
import Selector from './components/selector'
import Navbar from './components/navbar'
import Particles from 'react-particles-js';


class App extends React.Component{


  render(){
    return (
      <div className="App">
        <Navbar/>
        <Particles className="particles" params={
                    {
                      "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            },
                        },
                        "size": {
                          "value": 5,
                          "random": false
                        },
                        "color": {
                          "value": "rgb(184, 223, 219)"
                        },
                        "lineLinked": {
                          "enable": false
                        },
                        "move": {
                          "random": true,
                          "speed": 2,
                          "direction": "top",
                          "out_mode": "out"
                        },
                        "opacity": {
                          "anim": {
                              "enable": true,
                              "speed": 0.25,
                              "opacity_min": 0.05
                          }
                      }
                      }
                    }} ></Particles>
        <Page name="intro"/>
        <Page name="explanation" />
        <Page name="uses" />
  
        <Page name="conclusion" />
  
        <Selector/>
      </div>
    );
  }
}

export default App;
