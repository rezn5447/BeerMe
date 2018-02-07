import React, {Component} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';


export default function StadiumsWidget(props){
  return(
      <FlatList
       data={props.data}
       keyExtractor={(item,index) => index}
       renderItem={props._renderItem}
     />
  );
}
