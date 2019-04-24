import { Accordion, Icon, Text, View, Content } from "native-base";
import React, { Component } from "react";
import { depilationDescription } from "../../constants";


export default class AccordionCustomHeaderContent extends Component {
    _renderHeader = (item, expanded) => {
        return (
            <View
                style={{
                height: 50,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Text style={{paddingLeft : 15,fontWeight : 'bold'}}>
                    {`Valor Servicio: ${item.price}`}
                </Text>
                {expanded
                    ? <Icon
                            style={{
                            fontSize: 30,
                            width: 50
                        }}
                            name="remove-circle"/>
                    : <Icon
                        style={{
                        fontSize: 30,
                        width: 50
                    }}
                        name="add"/>}
            </View>
        );
    }
    _renderContent(item) {
        return (
            <Content padder>
                <Text
                    style={{
                    color: "gray",
                    fontStyle: "italic"
                }}>
                    {item.description}
                </Text>
            </Content>
        );
    }
    render() {
        return (
            <View>
                <Accordion
                    dataArray={[{price : '$15,000',description : depilationDescription}]}
                    animation={true}
                    expanded={true}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}/>
            </View>
        );
    }
}