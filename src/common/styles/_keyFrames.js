import {keyframes} from "styled-components";

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const appear = keyframes`
  0%,100% { transform: translateX(0em); }
  30% { transform: translateX(5em); }
`;

const appearFadeIn = keyframes`
  0%{ 
    transform: translateX(-2em);
    opacity: 0; 
  }
  50% { 
    transform: translateX(7em);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0em);
    opacity: 1;
  }
`;


export {rotate360, appear, appearFadeIn};