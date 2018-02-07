import React, {Component} from 'react'
import {
  View,
  Text,
  Switch
} from 'react-native';
import styled from 'styled-components/native';


const Container = styled.View`
  width: 200;
  height: 50;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: yellow;
`;



export default function TopSwitch(props) {
  return(
    <Container>
      <Text>Customer</Text>
        <Switch value={props.value} onValueChange={props.onValueChange}/>
      <Text>Vendor</Text>
    </Container>
  );
}
