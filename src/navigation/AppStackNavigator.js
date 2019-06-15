import React from 'react'
import {createStackNavigator} from 'react-navigation'
import BottomTabNavigator from './BottomTabNavigator';
import LocalDetailScreen from '../screens/LocalDetailScreen';
import { fromBottom } from 'react-navigation-transitions';
import { colors } from '../constants';

export default createStackNavigator({
  BottomTabNavigator : BottomTabNavigator,
  LocalDetail : {
    screen : LocalDetailScreen
  }
},{
  defaultNavigationOptions : {
    headerStyle : {
      backgroundColor : colors.primary
    },
    headerTintColor : 'white',
    headerTitleStyle : {
      color : 'white'
    }
  },
  headerMode : "screen",
  transitionConfig : ()=>fromBottom(),
})
