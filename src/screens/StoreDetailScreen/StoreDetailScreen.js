import React, { Component } from 'react';
import { View,StyleSheet,Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MiniCarousel from '../../components/MiniCarousel'
import { Container,Card, Tab, Tabs, TabHeading, Icon,Text, Segment, Button, Content } from 'native-base';
import ServicesTab from './components/ServicesTab';
import { colors } from '../../constants';

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;


export default class StoreDetailScreen extends Component {
    static navigationOptions = ({navigation})=>({
        title : navigation.state.params.store.name
    })
    render() {
        return (
            <Container>
                <Tabs locked tabBarTextStyle={{color : 'red'}} tabBarUnderlineStyle={{backgroundColor : 'white'}}>
                    <Tab heading={<TabHeading style={styles.tab}><Icon name="assignment" type="MaterialIcons" /><Text>Servicios</Text></TabHeading>}>
                       <ServicesTab />
                    </Tab>
                    <Tab heading={<TabHeading style={styles.tab}><Icon name="info" type="MaterialIcons" /><Text>Información</Text></TabHeading>}>
                        <Content>
                            <View style={styles.mapContainer}>
                                <Card style={styles.mapCard}>
                                    <MapView
                                        style={styles.map}
                                        initialRegion={{
                                            latitude: -40.580106,
                                            longitude: -73.122688,
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                        }}
                                        minZoomLevel={18}
                                        maxZoomLevel={18}
                                    >
                                        <Marker 
                                            coordinate={{
                                                latitude: -40.580106,
                                                longitude: -73.122688
                                            }}
                                        />
                                    </MapView>
                                </Card>
                            </View>
                            <MiniCarousel />
                            <View style={styles.description}>
                                <Text style={{textAlign : 'center',paddingHorizontal : 15,marginTop : 10,color  : 'gray'}}>
                                    Clínica Cela, pioneros en traer al mercado Chileno en el año 2005, la tecnología de depilación láser Alexandrita desde Alemania, actualmente Clínica Cela se ha convertido en una clínica de tratamientos láser, junto a sus servicios en tratamientos Reductivos Corporales y tratamientos faciales, para entregar el mejor servicio a más de cien mil pacientes atendidos en sus cinco sucursales. Contamos con tecnología más eficaz y segura para todos los tratamientos láser.
                                </Text>
                            </View>
                        </Content>
                    </Tab>
                </Tabs>
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