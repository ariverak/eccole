import React from 'react'
import {createAppContainer,createSwitchNavigator,createStackNavigator} from 'react-navigation'
import AuthScreen from '../screens/AuthScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import DrawerNavigator from './DrawerNavigator';

export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerNavigator,
      Auth: createStackNavigator({
          screen : AuthScreen
      }),
    },
    {
      initialRouteName: 'AuthLoading'
    }
));