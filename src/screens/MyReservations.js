import React, { Component } from 'react';
import { Container, Header, Content, Button, Text,Icon} from 'native-base';
export default class ButtonThemeExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button onPress={()=>this.props.navigation.navigate("Services")}>
            <Text> Reservations </Text>
          </Button>
          <Icon name="phone" type="MaterialIcons" />
        </Content>
      </Container>
    );
  }
}
