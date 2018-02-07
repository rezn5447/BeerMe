import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';


const TextInputContainer = styled.View`
  flexDirection: row;
  padding: 10px;
  marginTop: 10px;
  marginBottom: 10px;
  width: 90%;
  borderRadius: 15px;
  alignItems: center;
  justifyContent: space-between;
  backgroundColor: white;
`

const Input = styled.TextInput`
  width: 150px;
  marginLeft: 5px;
  borderColor: lightgray;
  borderWidth: 1px;
  padding: 3px;
  borderRadius: 3px;
`;


export default function SignUpInput(props) {
  return(
    <TextInputContainer>
      <Text>{props.text}</Text>
      <Input
        blurOnSubmit
        secureTextEntry={props.secureTextEntry}
        underlineColorAndroid={'transparent'}
        returnKeyType={'done'}
      />
    </TextInputContainer>
  );
}
