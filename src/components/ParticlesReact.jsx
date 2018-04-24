import React, { Component } from 'react';
import Particles from 'react-particles-js';
 
export default class ParticlesReact extends Component{
  
    render(){
        return (
            <Particles 
                  params={{
                        particles: {
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#000",
                                    blur: 1
                                }
                            },
                            move: {
                              enable: true,
                              speed: 2,
                              direction: "none",
                              random: false,
                              straight: false,
                              out_mode: "out",
                              bounce: false,
                              attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                              }
                            },
                        }
                    }}
                  style={{
                    width: '100%',
                    position: 'absolute'
                  }}
                />
        );
    };
 
}