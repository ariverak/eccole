import {AppRegistry} from 'react-native';
import SwitchNavigatior from './src/navigation/SwitchNavigatior';
import {name as appName} from './app.json';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']); 

// const MainNavigator = <SwitchNavigatior />
AppRegistry.registerComponent(appName, () => SwitchNavigatior);
