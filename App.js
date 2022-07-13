import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'

import ImagePicker from 'react-native-image-picker'

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>

        <Image style={styles.avatar} source={{uri: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fopte-pelo-avatar-placeholder-da-foto-%25C3%25ADcone-do-perfil-124557887.jpg&sp=1657721990Tb5ec383f01074e6d64ecd328115a8401bb96cae596f00cf8bcb7b76f92058dbd'}} />

        <TouchableOpacity style={styles.button} onPress={ () => ImagePicker. } >
          <Text style={styles.buttonText}>Escolher imagem</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#7159c1',
    marginTop: 20
  },

  buttonText:{
    color: '#ffffff',
  },

  avatar:{
    width: 100,
    height: 100,
    borderRadius: 50
  }
})