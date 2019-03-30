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

export default class StoreListItem extends Component {
  render() {
    const {store,toStoreDetail} = this.props;
    const {name,businessHours,direction} = store;
    return (
        <ListItem thumbnail>
          <Left>
            <Thumbnail style={{borderRadius : 10}} large square source={{ uri: 'https://www.leciel.cl/wp-content/uploads/2017/03/clinica-providencia.png' }} />
          </Left>
          <Body>
            <Text numberOfLines={1}>{name}</Text>
            <Text note numberOfLines={1}>{businessHours}</Text>
            <Text note numberOfLines={1}>{direction}</Text>
            <View style={styles.infoButtonContainer}>
                <TouchableOpacity onPress={()=>toStoreDetail(store)}>
                    <Icon name="info" type="MaterialIcons" style={{color : 'gray'}} />
                </TouchableOpacity>
            </View>
          </Body>
        </ListItem>
    );
  }
}