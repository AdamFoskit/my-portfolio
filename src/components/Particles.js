import React from 'react'
import * as TSParticles from "react-tsparticles";
import './Particles.css'

export default function Particles() {
  let particles = 200;
  let distance = 275
  let canHover = true;
  // alert(window.innerWidth)
  if(window.innerWidth < 600){
    particles = 80
    distance = 50
    canHover = false
  }
    return <TSParticles
    id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: canHover,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 3,
              },
              repulse: {
                distance,
                duration: 0.15,
              },
            },
          },
          particles: {
            color: {
              value: "#f2f2f2",
            },
            links: {
              color: "#15cdfc",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              value: particles,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
}