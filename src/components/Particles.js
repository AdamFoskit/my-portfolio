import React from 'react'
import * as TSParticles from "react-tsparticles";
export default function Particles() {
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
                enable: true,
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
                distance: 275,
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
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 4,
              straight: false,
            },
            number: {
              value: 300,
            },
            opacity: {
              value: 0.5,
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