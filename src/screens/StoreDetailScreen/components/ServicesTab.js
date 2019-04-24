import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ServiceCard from '../../../components/ServiceCard'
import { Container, Content } from 'native-base';



class ServicesTab extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                  <ServiceCard />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});

export default ServicesTab;