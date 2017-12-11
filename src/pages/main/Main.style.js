import styled from "styled-components";
import {appear, rotate360, appearFadeIn} from './../../common/styles/_keyFrames';

export const Div = styled.div`
   height: 100%;
`;

export const FirstPage = styled.div`
  //background-color: #222;
  height: 100%;
  //padding: 20px;
  color: white;
`;

export const FrontPage = styled.div`
  background-color: #222;
  z-index: 100;
  height: 100%;
  padding: 20px;
  color: white;
`;

export const Img = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

export const BlurBackgroundTitle = styled.h1`
  background: rgba(0,0,0,0.3);
  opacity: 0;
  animation: ${appearFadeIn} forwards 0.7s ${props => props.delay} ease-out;
  font-size: 1.5em;
`;

export const Title = styled.h1`
  animation: ${appear} forwards 0.7s ${props => props.delay} ease-out;
  font-size: 1.5em; 
 `;

export const LeftDiv = styled.div`
  width: 30%;
  display: inline-block;
  transform: rotate(-15deg);
 `;

export const RightDiv = styled.div`
  //width: 70%;
  display: inline-block;
  transform: rotate(-15deg);
 `;

export const Video = styled.video`
  min-width: 100%;
  min-height: 100%;
  z-index: -100;
  position: fixed;
  background-color: transparent;
`;

Title.defaultProps = {
  delay: "0s"
};