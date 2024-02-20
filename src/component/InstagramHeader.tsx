import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable, Image} from 'react-native';

const InstagramHeader=()=>{
    return(
        <View style={styles.container}>
              <Image
        style={styles.tinyLogo}
        source={require('../assets/images/instagram.png')}
      />

      <Text style={styles.headerText}>Instagram</Text>

    <Image
        style={styles.tinyLogo}
        source={require('../assets/images/send.png')}
      />


    </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 30,
        height: 30,
        margin:10,
      },

      container:{
        flexDirection:"row",
        justifyContent:'space-between',

      },

      headerText:{
        fontSize:30,
        margin:10,
      }
})

export  default InstagramHeader;