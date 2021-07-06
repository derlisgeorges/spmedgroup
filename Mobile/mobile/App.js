import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';


import api from './src/services/api'


export default class App extends Component{
  constructor(props) {
    super (props);
    this.state ={
      listaConsulta:[]
    };
  }



  buscarConsulta = async () => {
    const resposta = await api.get ('/consulta');
    const dadosDaApi = resposta.data;
    this.setState ({ listaConsulta:dadosDaApi});
  };


  componentDidMount(){
    //realiza a chamada da Api trazendo todos os eventos
    this.buscarConsulta();
  }

  render () {
    return (
      <View style={styles.main}>

        {/* Cabeçalho - Header */}
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            <Text style={styles.mainHeaderText}>Consultas</Text>
          </View>
        <View style={styles.mainHeaderLine}/>
        </View >
      {/* Corpo - Body - Section */}
      <View style={styles.mainBody}>
        <FlatList contentContainerStyle={styles.mainBodyContent} data={this.state.listaConsulta} keyExtractor= {item=> item.}/>
        
      </View>

      </View>
    );
  }

  

  renderizaItem = ({ item }) => (
    <View style={styles.flatItemLinha}>
      <View>
        <Text>{item.dataConsulta}</Text>
        <Text>{item.horaConsulta}</Text>
        <Text>{item.descricao}</Text>
      </View>
    </View>
  );


}

const styles = StyleSheet.create({
    main: {
    flex: 1,
    backgroundColor: '#9E80E8',
  },

  //cabeçalho
  mainHeader:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
  
  mainHeaderRow:{
    flexDirection: 'row'
  },

  mainHeaderText:{
    fontSize:16,
    letterSpacing:2,
    color:'white',
    fontFamily: 'Open Sans'
  },


    mainHeaderLine:{
      width: 220,
      paddingTop:10,
      borderBottomColor:'white',
      borderBottomWidth:1
    }


});
