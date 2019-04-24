import { Body, Left, ListItem, Text, Thumbnail } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        position: 'relative'
    }
})

export default class StoreListItem extends Component {
    render() {
        const {store, toStoreDetail} = this.props;
        const {name, businessHours, direction} = store;
        return (
            <ListItem onPress={() => toStoreDetail(store)} activeOpacity={0.6} thumbnail>
                <Left>
                    <Thumbnail
                        style={{
                        borderRadius: 10
                    }}
                        large
                        square
                        source={{
                        uri: 'https://www.leciel.cl/wp-content/uploads/2017/03/clinica-providencia.png'
                    }}/>
                </Left>
                <Body>
                    <Text numberOfLines={1}>{name}</Text>
                    <Text note numberOfLines={1}>{businessHours}</Text>
                    <Text note numberOfLines={1}>{direction}</Text>
                </Body>
            </ListItem>
        );
    }
}