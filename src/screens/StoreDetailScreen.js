import { Container, Content, Icon, Text } from 'native-base';
import React, { Component } from 'react';
import MapView from 'react-native-maps';

export default class StoreDetailScreen extends Component {
    static navigationOptions = ({navigation})=>({
        title : navigation.state.params.store.name
    })
    render() {
        return (
            <Container>
                <MapView
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
            </Container>
        );
    }
}
