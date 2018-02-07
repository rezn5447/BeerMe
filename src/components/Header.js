import React, {Component} from 'react'
import {
  Text,
} from 'react-native';
import styled from 'styled-components/native';


const HeaderText = styled.Text`
  font-size: 24px;
  color: green;
`

export default function Header(props) {
  return(
    <HeaderText>{props.text}</HeaderText>
  );
}
