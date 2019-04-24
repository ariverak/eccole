import { Body, Button, Card, CardItem, Icon, Left, Right, Text, Thumbnail, View } from 'native-base';
import React, { Component } from 'react';
import { Image,StyleSheet} from 'react-native';
import CustomAccordion from './CustomAccordion'
import { colors } from '../../constants';

class ServiceCard extends Component {
    render() {
        const name = "Depilación"
        return (
            <Card>
                <CardItem cardBody>
                    <Image
                        source={{
                        uri: 'https://laopinionla.files.wordpress.com/2019/01/shutterstock_619562813-e1547978745632.jpg?quality=80&strip=all&w=940'
                    }}
                    style={{
                        height: 200,
                        opacity : .8,
                        width: null,
                        flex: 1
                    }}/>
                    <View style={styles.serviceNameLayer}>
                        <Text style={styles.serviceName}>{name}</Text>
                    </View>
                </CardItem>
                <CustomAccordion />
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    cardBody : {
        position : 'relative'
    },
    serviceNameLayer : {
        position : 'absolute',
        top : 0,
        left : 0,
        right : 0,
        bottom : 0,
        justifyContent : 'center',
        alignItems : 'center'
    },
    serviceName : {
        fontSize : 30,
        fontWeight : 'bold',
        color : colors.primaryDark
    }
})

export default ServiceCard;