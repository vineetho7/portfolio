import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "FrontEnd Developer",
          "BackEnd Developer",
          "Full Stack Developer",
          "MERN Stack Developer",
          "AWS Certified ML Specialist",
          "AWS Certified Developer Associate",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
