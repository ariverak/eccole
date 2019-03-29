import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native'
import { ListItem, Thumbnail, Text, Left, Body, Right, Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    body : {
        position : 'relative'
    },
    infoButtonContainer : {
        position : 'absolute',
        top : 0,
        bottom : 0,
        right : 15,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default class ListThumbnailExample extends Component {
  render() {
    return (
        <ListItem thumbnail>
          <Left>
            <Thumbnail large square source={{ uri: 'https://www.leciel.cl/wp-content/uploads/2017/03/clinica-providencia.png' }} />
          </Left>
          <Body>
            <Text numberOfLines={1}>Clinica Estetica Le Ciel</Text>
            <Text note numberOfLines={1}>09:30 - 21:00</Text>
            <Text note numberOfLines={1}>Amador Barrientos #1050</Text>
            <View style={styles.infoButtonContainer}>
                <TouchableOpacity>
                    <Icon name="info" type="MaterialIcons" style={{color : 'gray'}} />
                </TouchableOpacity>
            </View>
          </Body>
        </ListItem>
    );
  }
}