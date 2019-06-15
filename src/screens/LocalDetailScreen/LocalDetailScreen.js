import React, { Component } from 'react';
import { View,StyleSheet,Dimensions } from 'react-native';
import MiniCarousel from '../../components/MiniCarousel'
import { Container,Text, Content } from 'native-base';
import { colors } from '../../constants';

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;


export default class LocalDetailScreen extends Component {
    static navigationOptions = ({navigation})=>({
        title : navigation.state.params.local.name
    })
    render() {
        const {local} = this.props.navigation.state.params;
        return (
            <Container>
                <Content>
                    <MiniCarousel />
                    <View style={styles.description}>
                        <Text style={{textAlign : 'center',paddingHorizontal : 15,marginTop : 10,color  : 'gray'}}>
                            {local.nombre}
                        </Text>
                        <Text style={{textAlign : 'center',paddingHorizontal : 15,marginTop : 10,color  : 'gray'}}>
                            {local.descripcion}
                        </Text>
                        <Text style={{textAlign : 'center',paddingHorizontal : 15,marginTop : 10,color  : 'gray'}}>
                            {local.inicio + " - " + local.termino}
                        </Text>
                        <Text style={{textAlign : 'center',paddingHorizontal : 15,marginTop : 10,color  : 'gray'}}>
                            {local.direccion}
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    tab : {
        backgroundColor : colors.primary
    },
    mapContainer: {
      alignItems: 'center',
    },
    mapCard : {
        width : widthScreen * 0.95,
        height : heightScreen * 0.30,
        position : 'relative'
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    description : {
        paddingBottom : 15
    }
});