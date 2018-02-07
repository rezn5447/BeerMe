import React, {Component} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import SeatInput from './SeatInput';


const Container = styled.View`
  flex: 1;
  width: 100%;
  justifyContent: 'center';
  margin: 10px;
`

const _renderItem = ({item}) => (
    <TouchableOpacity onPress={() => alert(item.name.name)}>
     <Text>{item.name.name}</Text>
    </TouchableOpacity>
  );

export default function StadiumsContainer(props){




  return(
    <Container>
      <SeatInput text={'Seat'} />
      <SeatInput text={'Section'} />
      <SeatInput text={'Row'} />
    </Container>
  );
}
