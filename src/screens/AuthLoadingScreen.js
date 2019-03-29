import React from 'react'
import {View,ActivityIndicator,StatusBar,AsyncStorage,StyleSheet} from 'react-native'
import {Text} from 'native-base'


class AuthLoadingScreen extends React.Component {
    componentDidMount(){
      this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
      const user = !(await AsyncStorage.getItem('user'));
      this.props.navigation.navigate(user ? 'App' : 'Auth');
    };
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
          <Text style={{color : 'black'}}>Cargando...</Text>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})
export default AuthLoadingScreen;