import React, {Component} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import StadiumsWidget from './StadiumsWidget';


const Container = styled.View`
  flex: 1;
  justifyContent: 'space-around';
  padding: 20px;
`

const _renderItem = ({item}) => (
    <TouchableOpacity onPress={() => alert(item.name.name)}>
     <Text>{item.name.name}</Text>
    </TouchableOpacity>
  );

export default function StadiumsContainer(props){




  return(
    <Container>
      <StadiumsWidget
       data={props.data}
       keyExtractor={(item,index) => index}
       renderItem={this._renderItem}
     />
     <Text>{this.selected} Currently Selected</Text>
    </Container>
  );
}
