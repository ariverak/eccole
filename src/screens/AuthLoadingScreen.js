import React from 'react'
import {View,ActivityIndicator,StatusBar,AsyncStorage,StyleSheet} from 'react-native'


class AuthLoadingScreen extends React.Component {
    componentDidMount(){
      this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
      // const user = await AsyncStorage.getItem('user');
      const user = true;
      this.props.navigation.navigate(user ? 'App' : 'Auth');
    };
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
const styles = StyleSheet.create({
  container : {

  }
})
export default AuthLoadingScreen;