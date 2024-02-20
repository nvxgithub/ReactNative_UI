import React, { useState } from 'react';
import {View,TouchableOpacity, Text, StyleSheet} from 'react-native';




const ButtonComponent=()=>{

    const [count,setCount]=useState(0);

    const OnPress=()=>{
        setCount(prevcount=>prevcount+1);
        console.log("Count:",count);
    }

    return(
<View>
    <TouchableOpacity style={styles.button} onPress={OnPress}>
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
      backgroundColor: '#00C8FF',
    },
  });

  export default ButtonComponent;