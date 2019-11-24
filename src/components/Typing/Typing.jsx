import React from "react";
import Typed from "react-typed";
import { Box } from "@material-ui/core";

import "./Typing.css";

const Typing = () => {
  return (
    <Box className="typing-container">
      <Typed
        smartBackspace
        strings={[
          "<h1>Hi, I'm <span>Joshua</span></h1>\n<p>I am a Gamer</p>",
          "<h1>Hi, I'm <span>Joshua</span></h1>\n<p>I am a Anime lover</p>",
          "<h1>Hi, I'm <span>Joshua</span></h1>\n<p>I am a Frontend Developer</p>"
        ]}
        typeSpeed={90}
        backSpeed={90}
        backDelay={3}
        showCursor={false}
      />
    </Box>
  );
};

export default Typing;
