import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import BackImg from '../assets/bg2.png';
import styled from 'styled-components/native';


const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackgroundImage = styled.Image`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  resizeMode: stretch;
`;

export default function Background(props) {
  return(
    <Container>
      <BackgroundImage source={props.img}/>
        {props.children}
    </Container>
  );
}
