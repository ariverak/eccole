import React, { Component } from 'react';
import { TimePickerAndroid } from 'react-native';
import { Container, Content, Item, Input, Label,Text,Row,Col, Button, Grid } from 'native-base';
import moment from 'moment'
import {insertLocal} from '../services/sqlite'

export default class ButtonThemeExample extends Component {
  state = {
    valueNombre : '',
    valueDescripcion : '',
    valueDireccion : '',
    valueTipo : 'pub',
    valueInicio : '',
    valueTermino : '',
  }
  onTimeChange = async (idx)=>{
    const {action, hour, minute} = await TimePickerAndroid.open({
      hour: 9,
      minute: 0,
      is24Hour: true, 
    });
    let time = moment(`00:00`,"HH:mm").add(hour,"hour").add(minute,"minutes").format("HH:mm")
    if(idx === 0){
      this.setState({valueInicio : time})
    }else{
      this.setState({valueTermino : time})
    }
  }
  clean = ()=>{
    this.setState({
      valueNombre : '',
      valueDescripcion : '',
      valueDireccion : '',
      valueTipo : 'pub',
      valueInicio : '',
      valueTermino : ''
    })
  }
  onSave = async ()=>{
    const {valueNombre,valueDescripcion,valueDireccion,valueInicio,valueTermino,valueTipo} = this.state;
    await insertLocal({
      nombre : valueNombre,
      descripcion : valueDescripcion,
      direccion : valueDireccion,
      tipo : valueTipo,
      inicio : valueInicio,
      termino : valueTermino,
      admin : 1
    })
    this.clean()
  }
  render() {
    const {valueInicio,valueTermino} = this.state;
    return (
      <Container>
      <Content padder>
          <Item stackedLabel>
            <Label>Nombre</Label>
            <Input onChangeText={valueNombre => this.setState({valueNombre})} />
          </Item>
          <Item stackedLabel last>
            <Label>Descripcion</Label>
            <Input onChangeText={valueDescripcion => this.setState({valueDescripcion})} />
          </Item>
          <Item stackedLabel last>
            <Label>Direccion</Label>
            <Input onChangeText={valueDireccion => this.setState({valueDireccion})} />
          </Item>
          <Grid style={{marginTop : 25}}>
            <Row>
              <Col style={{alignItems : 'center'}}>
                    <Button style={{width : 150}} onPress={()=>this.onTimeChange(0)} light>
                      <Text style={{textAlign : 'center'}}>{valueInicio ? valueInicio : "Hora Inicio"}</Text>
                    </Button>
              </Col>
              <Col style={{alignItems : 'center'}}>
                    <Button style={{width : 150}} onPress={()=>this.onTimeChange(1)} light>
                      <Text style={{textAlign : 'center'}}>{valueTermino ? valueTermino : "Hora Termino"}</Text>
                    </Button>
              </Col>
            </Row>
          </Grid>
          <Button onPress={this.onSave} style={{marginTop : 25}} full>
            <Text style={{textAlign : 'center'}}>Guardar</Text>
          </Button>
      </Content>
    </Container>
    );
  }
}
