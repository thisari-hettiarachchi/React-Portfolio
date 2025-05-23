// TypingEffect.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: ["Full Stack Developer", "UI/UX Designer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
      loop: true,
    });

    return () => {
      // Destroy Typed instance on unmounting to prevent memory leaks
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <span ref={typedElement} className="typing-text" />
  );
};

export default TypingEffect;
