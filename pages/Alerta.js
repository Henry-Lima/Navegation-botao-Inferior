import * as React from 'react';
import { Assets } from '@react-navigation/stack';
import { Text, View, StyleSheet, Image} from 'react-native';;

export default function Alerta() {
  return (
    <View style={estilo.container}>
      <View>
          <Text style={estilo.busca}>
                  </Text>
      </View>
      <View style={estilo.guns}>
       <Image style={estilo.imagem} source={require('../assets/guns.png')}></Image>
       <Text style={estilo.text}> Welcome to The Jungle - Guns N'Roses</Text> 
      </View >
      <View style={estilo.pearl}>
       <Image style={estilo.imagem}source={require('../assets/pearl.png')}></Image>
       <Text style={estilo.text}>Go - Pearl Jam </Text> 
       </View>
        <View style={estilo.depeche}>
        <Image style={estilo.imagem} source={require('../assets/depeche.png')}></Image>
        <Text style={estilo.text}>Enjoy The Silence - Depeche Mode</Text> 
        </View>
        <View style={estilo.metalica}>
        <Image style={estilo.imagem} source={require('../assets/metalica.png')}></Image>
        <Text style={estilo.text}>Master of Puppets - Metallica</Text>
        </View>
        <View style={estilo.nirvana}> 
        <Image style={estilo.imagem} source={require('../assets/nirvana.png')}></Image>
        <Text style={estilo.text}>In Bloom - Nirvana</Text>
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
  busca: {
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25, 
    shadowRadius: 3.5, 
    elevation: 5,
    height: 30,
    width: 360,
    marginLeft: 8,
    marginTop: -90,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
  },
  guns: {
    marginLeft: 10,
    flexDirection: 'row',
    marginTop: 10,


  },
  pearl: {
    marginLeft: 10,
    flexDirection: 'row',
    marginTop: 30,
  },
  depeche: {
    marginLeft: 10,
    flexDirection: 'row',
    marginTop: 30,
  },
  metalica: {
    marginLeft: 10,
    flexDirection: 'row',
    marginTop: 30,
  },
  nirvana: {
    marginLeft: 10,
    flexDirection: 'row',
    marginTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 25,
    marginTop: 20,
    marginLeft: 5,


  },
  imagem: {
    width: 70,
    height: 70,
  },
  
 


});
