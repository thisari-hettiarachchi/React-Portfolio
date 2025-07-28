import { useCallback, useMemo } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { useTheme } from '../../context/ThemeContext'; // Adjust path as needed

const ParticleBackground = () => {
  const { theme } = useTheme();
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  // Get particle color based on current theme
  const particleColor = useMemo(() => {
    return theme === 'dark' ? '#ffffff' : '#000000';
  }, [theme]);

  // Memoize options to recreate particles when theme changes
  const particleOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent", // Use transparent to not override your page background
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          links: { opacity: 1 },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 1,
        },
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
      },
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
        value: particleColor,
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: particleColor,
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
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: particleColor,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    detectRetina: true,
  }), [particleColor]);

  return (
    <Particles
      id="tsparticles"
      key={theme} // Force re-render when theme changes
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
};

export default ParticleBackground;