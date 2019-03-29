import React from 'react'
import {StyleSheet,View} from 'react-native'
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import { Text,Icon } from 'native-base';

const styles = StyleSheet.create({
    menuContainer : {
        position : 'absolute',
        left : 0,
        width : 230,
        height : 45,
        borderRightWidth : 1,
        borderRightColor : 'lightgray'
    }
})
const triggerStyles = {
    height : 45,
    underlayColor: 'darkblue',
    activeOpacity: 70,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
};
const optionsStyles = {
    optionsContainer: {
        flex : 1,
        width : 230
    },
    optionsWrapper: {
        flex : 1
    },
    optionWrapper: {
    },
    optionTouchable: {
    },
    optionText: {
    },
};


function DropdownCategory(props){
    return (
        <Menu style={styles.menuContainer}> 
            <MenuTrigger>
                <View style={triggerStyles}>
                    <Text note style={{marginLeft : 10,color : 'gray'}}>Selecciona una categoria</Text>
                    <Icon name="arrow-drop-up" type="MaterialIcons" style={{color : 'gray',marginRight : 5}} />
                </View>
            </MenuTrigger>
            <MenuOptions customStyles={optionsStyles}>
                <MenuOption customStyles={optionsStyles} onSelect={() => alert(`Save`)} text='Save' />
                <MenuOption onSelect={() => alert(`Delete`)} >
                    <Text style={{color: 'red'}}>Delete</Text>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
            </MenuOptions>
        </Menu>
    )
}

export default DropdownCategory;