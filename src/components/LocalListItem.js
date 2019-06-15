import { Body, Left, ListItem, Text, Thumbnail } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    body: {
        position: 'relative'
    }
})

export default class LocalListItem extends Component {
    render() {
        const {local, toLocalDetail,onDelete} = this.props;
        const {id,nombre, descripcion, direccion,tipo,inicio,termino,admin} = local;
        return (
            <TouchableOpacity onLongPress={()=>onDelete(id)} onPress={() => toLocalDetail(local)}>
                <ListItem   activeOpacity={0.6} thumbnail>
                    <Left>
                        <Thumbnail
                            style={{
                            borderRadius: 10
                        }}
                            large
                            square
                            source={{
                            uri: 'https://media-cdn.tripadvisor.com/media/photo-s/10/e2/be/d8/angel-s-steak-pub-interior.jpg'
                        }}/>
                    </Left>
                    <Body>
                        <Text numberOfLines={1}>{nombre}</Text>
                        <Text note numberOfLines={1}>{`${inicio} - ${termino}`}</Text>
                        <Text note numberOfLines={1}>{descripcion}</Text>
                    </Body>
                </ListItem>
            </TouchableOpacity>
        );
    }
}