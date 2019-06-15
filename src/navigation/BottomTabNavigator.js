import React from 'react'
import {TouchableOpacity,View} from 'react-native'
import {Icon,Header,Item, Input, Button,Text} from 'native-base'
import {createBottomTabNavigator} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen';
import AddLocalScreen from '../screens/AddLocalScreen';
import { colors } from '../constants';

export default { 
    screen: createBottomTabNavigator(
      {
        Home: {
          screen : HomeScreen
        },
        AddLocal: {
          screen : AddLocalScreen
        }
      },{
        defaultNavigationOptions : ({ navigation }) => ({
          title : titleTraductor(navigation.state.routeName),
          tabBarOptions: {
            style: {
              backgroundColor: colors.primary,
            },
            activeTintColor: 'white',
            inactiveTintColor: '#bdadd6',
          },
          tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let iconName = 'phone';
            let iconType = 'MaterialIcons';
            switch(routeName) {
              case 'Home' : 
                iconName = `store`;
                iconType = 'MaterialIcons'
              break;
              case 'AddLocal' : 
                iconName = `add`;
                iconType = 'MaterialIcons'
              break;
            }
            return <Icon type={iconType} name={iconName} size={25} style={{color : focused ? 'white' : '#bdadd6'}} />;
          },
        })
      }
    ),
    navigationOptions: ({navigation}) => ({
      title : getTitle(navigation),
      headerTintColor: 'white',
      headerStyle : {
        backgroundColor : colors.primary
      },
      ...getHeaderComponents(navigation)
  })
}

function getTitle(navigation){
  const { index : tabIndex,routes } = navigation.state;
  const routeName = routes[tabIndex].routeName;
  if(routeName === 'Home') return '';
  return titleTraductor(routes[tabIndex].routeName)
}
function getHeaderComponents(navigation){
  const { index : tabIndex,routes } = navigation.state;
  const routeName = routes[tabIndex].routeName;
  return {
     headerRight : routeName === 'Home' ? (
        <Header noShadow style={{width : 300,backgroundColor : colors.primary}} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Ej. Comida China" />
            <Icon type="MaterialIcons" name="store" style={{color : 'gray'}} />
          </Item>
        </Header>
      ) : null,
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={{paddingHorizontal : 15}}>
                <Icon name="md-menu" style={{color : 'white'}} size={24}></Icon>
            </View>
        </TouchableOpacity>
      )
  }
}

const titleTraductor = (title)=>{
  const obj = {
    Home : 'Locales',
    AddLocal : 'Agregar Local'
  }
  return obj[title];
}

