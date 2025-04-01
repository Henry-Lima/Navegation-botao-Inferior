import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Alerta() {
  return (
    <View style={estilo.container}>
      <View>
        <Image style={estilo.perfil} source={require('../assets/perfil.png')}></Image>
      </View>

      <View style={estilo.seguidores}>
        <Text style={estilo.numero}>0</Text>
        <Text style={estilo.numero}>Seguidores</Text>
      </View>
      <View style={estilo.seguindo}>
        <Text style={estilo.numero}>0</Text>
        <Text style={estilo.numero}>Seguindo</Text>
      </View>

      <View style={estilo.feed} >
        <Image style={estilo.icones} source={require('../assets/icones.png')}></Image>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8B1111',
    padding: 10,
  },

  perfil: {
    display: 'flex',
    marginLeft: 80,
    marginTop: -150,
    marginBottom: 30,    
    width: 200,
    height: 200,
    borderRadius: 100
  },

  seguidores: {
    marginLeft: 50,
    marginTop: 20
  },

  seguindo: {
    marginLeft: 200,
    marginTop: -53,
  },

  numero: {
    fontWeight: 'bold',
    fontSize: 20
  },

  feed: {
    marginTop: 100
  },

  icones: {
    marginLeft: 80,
    width: 200,
    height: 40
  }


});
