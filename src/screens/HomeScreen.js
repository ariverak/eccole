import { Container, Content, List, Text, Header } from 'native-base';
import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import StoreListItem from '../components/StoreListItem';
import DropdownCategory from '../components/DropdownCategory';



export default class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <DropdownCategory />
                </Header>
                <Content>
                    <List>
                        <StoreListItem />
                        <StoreListItem />
                        <StoreListItem />
                        <StoreListItem />
                        <StoreListItem />
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
