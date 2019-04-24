import React from 'react'
import {createStackNavigator} from 'react-navigation'
import BottomTabNavigator from './BottomTabNavigator';
import StoreDetailScreen from '../screens/StoreDetailScreen';
import { fromBottom } from 'react-navigation-transitions';
import { colors } from '../constants';

export default createStackNavigator({
  BottomTabNavigator : BottomTabNavigator,
  StoreDetail : {
    screen : StoreDetailScreen
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
