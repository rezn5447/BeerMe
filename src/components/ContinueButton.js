import React, {Component} from 'react';

import { Button } from 'react-native-elements';

import styled from 'styled-components/native';


const Container = styled.View`
  padding: 10px;
  marginTop: 10px;
  marginBottom: 10px;
  width: 90%;
  borderRadius: 15px;
  alignItems: center;
`

export default function ContinueButton(props) {
  return(
    <Container>
      <Button
        raised
        icon={{name: 'arrow-circle-right', type: 'font-awesome'}}
        title='Continue'
        onPress={props.onPress}
      />
    </Container>
  );
}
