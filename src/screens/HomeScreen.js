import { Container, Content, List, Text, Header } from 'native-base';
import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import LocalListItem from '../components/LocalListItem';
import DropdownCategory from '../components/DropdownCategory';
import {deleteLocal} from '../services/sqlite'
import {getAllLocals} from '../services/sqlite'

class HomeScreen extends Component {
    state = {
        locals : []
    }
    async componentDidMount(){
        await this.fetchLocales()
        this.props.navigation.addListener(
            'willFocus',
            async payload => {
                await this.fetchLocales()
            }
        );
    }
    fetchLocales = async ()=>{
        const locals = await getAllLocals()
        this.setState({
            locals
        })
    }
    toLocalDetail = (local)=>{
        this.props.navigation.navigate("LocalDetail",{local})
    }
    onDelete = async (id)=>{
        await deleteLocal(id)
        await this.fetchLocales()
    }
    render() {
        const {locals} = this.state;
        return (
            <Container>
                <Content>
                    <List>
                        {locals.map(local=>(
                            <React.Fragment key={local.id}>
                                <LocalListItem local={local} toLocalDetail={this.toLocalDetail} onDelete={this.onDelete} />
                            </React.Fragment>
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default withNavigationFocus(HomeScreen)

const styles = StyleSheet.create({
    header : {
        position : 'relative',
        height : 45,
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'flex-start'
    }
})
