import React from 'react';
import {View,TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonComponent=()=>{
    return(
<View>
    <TouchableOpacity style={styles.button}>
        <Text>Login</Text>
    </TouchableOpacity>
</View>
    )
}

const styles = StyleSheet.create({
  
    button:{
    //   width:100,
      height:50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:5,
      elevation: 3,
      padding:10,
      backgroundColor: 'blue',
    },
  });

  export default ButtonComponent;