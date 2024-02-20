import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import Button from './src/component/Button';

const ViewBoxesWithColorAndText = () => {
  return (
    <View style={styles.centered}>
      <Text style={styles.heading}>Login</Text>
       <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="username"
      />
       <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="password"
      />
      <Text style={styles.baseText}>forget password?</Text>

      <Button/>
    
    {/* <Pressable style={styles.button}>
    <Text style={styles.baseText}>login</Text>
    </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    // width:200,g
    borderRadius:10,
  },

  heading:{
    fontFamily: 'Cochin',
    fontSize:30,
    padding:30,
  },

  baseText: {
    fontFamily: 'Cochin',
    justifyContent: 'center',

  },

  button:{
    // width:100,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
    padding:20,
    elevation: 3,
    backgroundColor: 'blue',
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  centered: { 
    // flex: 1, 
    // justifyContent: "center", 
    // alignItems: "center", 
  }, 
});


export default ViewBoxesWithColorAndText;