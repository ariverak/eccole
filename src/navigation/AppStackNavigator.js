import React from 'react'
import {TouchableOpacity,View} from 'react-native'
import {Icon} from 'native-base'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import BottomTabNavigator from './BottomTabNavigator';

export default createStackNavigator({
  BottomTabNavigator : BottomTabNavigator,
  Services : ServicesScreen
},{
  navigationOptions : {
    
  }
})
