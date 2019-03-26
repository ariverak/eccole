import React from 'react'
import {TouchableOpacity,View} from 'react-native'
import {Icon,Header,Item, Input, Button,Text} from 'native-base'
import {createBottomTabNavigator} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import MyReservationsScreen from '../screens/MyReservations';
import AccountScreen from '../screens/Account';

export default { 
    screen: createBottomTabNavigator(
      {
        Home: {
          screen : HomeScreen
        },
        Services: {
          screen : ServicesScreen
        },
        MyReservations: {
          screen : MyReservationsScreen
        },
        Account: {
          screen : AccountScreen
        }
      },{
        defaultNavigationOptions : ({ navigation }) => ({
          title : titleTraductor(navigation.state.routeName),
          tabBarOptions: {
            style: {
              backgroundColor: '#7a5aad',
            },
            activeTintColor: 'white',
            inactiveTintColor: '#bdadd6',
          },
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName = 'phone';
            let iconType = 'MaterialIcons';
            switch(routeName) {
              case 'Home' : 
                iconName = `home`;
                iconType = 'MaterialIcons'
              break;
              case 'Services' : 
                iconName = `whatshot`;
                iconType = 'MaterialIcons'
              break;
              case 'MyReservations' : 
                iconName = `date-range`;
                iconType = 'MaterialIcons'
              break;
              case 'Account' : 
                iconName = `account-circle`;
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
        backgroundColor : '#7a5aad'
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
        <Header noShadow style={{width : 300,backgroundColor : '#7a5aad'}} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Ej. Clínica Estetica" />
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
    Home : 'Home',
    Services : 'Servicios',
    MyReservations : 'Mis Reservas',
    Account : 'Mi Cuenta'
  }
  return obj[title];
}

