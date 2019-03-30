import React from 'react'
import {createStackNavigator} from 'react-navigation'
import BottomTabNavigator from './BottomTabNavigator';
import StoreDetailScreen from '../screens/StoreDetailScreen';
import { fromBottom } from 'react-navigation-transitions';

export default createStackNavigator({
  BottomTabNavigator : BottomTabNavigator,
  StoreDetail : {
    screen : StoreDetailScreen
  }
},{
  defaultNavigationOptions : {
    headerStyle : {
      backgroundColor : '#7a5aad'
    },
    headerTintColor : 'white',
    headerTitleStyle : {
      color : 'white'
    }
  },
  headerMode : "screen",
  transitionConfig : ()=>fromBottom(),
})
