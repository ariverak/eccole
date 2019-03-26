import React from 'react'
import {createDrawerNavigator,createStackNavigator} from 'react-navigation'
import { Container, Header, Body, Image, Content } from 'native-base';
import AppStackNavigator from './AppStackNavigator';


const ComponentDrawer = (props) => (
  <Container>
      <Header style={{height:200, backgroundColor:'white'}}>
          <Body>
              {/* <Image style={styles.imageDrawer} source={require('./assets/icon.png')}></Image> */}
          </Body>
      </Header>
      <Content>
          {/* <DrawerItems {...props}/> */}
      </Content>
  </Container>
)

export default createDrawerNavigator(
    {
      Drawer: AppStackNavigator
    },
    {
      initialRouteName: 'Drawer',
      drawerPosition: 'left',
      contentComponent: ComponentDrawer
    }
);