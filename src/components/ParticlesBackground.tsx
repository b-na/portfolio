import type { FC } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // loads all features
import { useEffect, useState } from "react";
import type { RecursivePartial } from "@tsparticles/engine";

const particlesOptions: RecursivePartial<any> = {
    background: {
        color: { value: "#000000" },
    },
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                sides: 5,
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            animation: {
                enable: false,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: false,
                speed: 40,
                minimumValue: 0.1,
                sync: false,
            },
        },
        links: {
            enable: true,
            distance: 250,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
            attract: {
                enable: false,
                rotate: {
                    x: 600,
                    y: 1200,
                },
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
        },
    },
    detectRetina: true,
};


const ParticlesBackground: FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
    />
  );
};

export default ParticlesBackground;
