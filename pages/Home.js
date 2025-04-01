import { Assets } from '@react-navigation/stack';
import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
        <Text style={estilo.titulo}>
          EsportFy
        </Text>

        <Text style={estilo.busca}>
        </Text>
      
      <View>
        <Image style={estilo.danzo1} source={require('../assets/danzo1.png')}></Image>
        <Text style={estilo.descricao}>Artista do Mês: Danzo</Text>
        <Text style={estilo.descricao}>Álbum: Trap de Quebrada</Text>
        <Text style={estilo.descricao}>Ano: 2021</Text>
      </View>

      <View style={estilo.carrossel}>
        <Image style={estilo.resumo} source={require('../assets/resumo.png')}></Image>
      </View> 
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8B0000',
    padding: 10,
  },

  titulo: {
    marginTop: -50,
    fontSize: 20,
    color: 'white',
    textAlign: 'start',
    fontWeight:'bold',
    marginRight: 270,
    marginLeft: 10,
    textAlign: 'center',  
    borderRadius: 7
  },

  busca: {
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25, 
    shadowRadius: 3.5, 
    elevation: 5,
    height: 30,
    marginLeft: 140,
    marginTop: -28,
    backgroundColor: 'white',
    borderRadius: 7
  },

  danzo1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
    width: 350,
    marginLeft: 10,
    height: 300
  },

  descricao: {
    marginLeft: 10,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'white'
  },

  carrossel: {
    marginTop: 40,
    height: 80
  },

  resumo: {
    display: 'flex',
    marginTop: -10,
    marginLeft: 35  
  }
});
