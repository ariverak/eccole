import { Container, Content, List, Text, Header } from 'native-base';
import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import StoreListItem from '../components/StoreListItem';
import DropdownCategory from '../components/DropdownCategory';

const stores = [
    {   
        id : 0,
        name : 'Clinica Estetica Le Ciel',
        businessHours : '09:30 - 21:00',
        direction : 'Amador Barrientos #1050'
    },
    {
        id : 1,
        name : 'Clinica Estetica Le Ciel',
        businessHours : '09:30 - 21:00',
        direction : 'Amador Barrientos #1050'
    },
    {
        id : 2,
        name : 'Clinica Estetica Le Ciel',
        businessHours : '09:30 - 21:00',
        direction : 'Amador Barrientos #1050'
    },
    {
        id : 3,
        name : 'Clinica Estetica Le Ciel',
        businessHours : '09:30 - 21:00',
        direction : 'Amador Barrientos #1050'
    },
    {
        id : 4,
        name : 'Clinica Estetica Le Ciel',
        businessHours : '09:30 - 21:00',
        direction : 'Amador Barrientos #1050'
    }
]

export default class HomeScreen extends Component {
    toStoreDetail = (store)=>{
        this.props.navigation.navigate("StoreDetail",{store})
    }
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <DropdownCategory />
                </Header>
                <Content>
                    <List>
                        {stores.map(store=>(
                            <React.Fragment key={store.id}>
                                <StoreListItem store={store} toStoreDetail={this.toStoreDetail} />
                            </React.Fragment>
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header : {
        position : 'relative',
        height : 45,
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'flex-start'
    }
})
