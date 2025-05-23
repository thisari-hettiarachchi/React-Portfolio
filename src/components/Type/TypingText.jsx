import React from "react";
import Typed from "react-typed";

const TypingText = () => {
  return (
    <Typed
      strings={["Full Stack Developer", "UI/UX Designer"]}
      typeSpeed={50}
      backSpeed={25}
      backDelay={500}
      loop
    />
  );
};

export default TypingText;
