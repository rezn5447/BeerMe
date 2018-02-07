import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';


const TextInputContainer = styled.View`
  padding: 10px;
  marginTop: 10px;
  marginBottom: 10px;
  width: 90%;
  borderRadius: 15px;
  alignItems: center;
  backgroundColor: white;
`
const Header = styled.Text`
  font-size: 14px;
`

const Input = styled.TextInput`
  width: 150px;
  marginLeft: 5px;
  borderColor: lightgray;
  borderWidth: 1px;
  padding: 3px;
  borderRadius: 3px;
`;


export default function SeatInput(props) {
  return(
    <TextInputContainer>
      <Header>{props.text}</Header>
      <Input
        blurOnSubmit
        value={props.seat[props.text]}
        onChangeText={(text) => props._updateText(text)}
        underlineColorAndroid={'transparent'}
        returnKeyType={'done'}
      />
    </TextInputContainer>
  );
}
