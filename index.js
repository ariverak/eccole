import React from 'react'
import {AppRegistry} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import SwitchNavigatior from './src/navigation/SwitchNavigatior';
import {name as appName} from './app.json';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']); 


function App(){
    return (
        <MenuProvider>
            <SwitchNavigatior />
        </MenuProvider>
    )
}
// const MainNavigator = <SwitchNavigatior />
AppRegistry.registerComponent(appName, () => App);
