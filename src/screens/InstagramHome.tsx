import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';

import InstagramHeader from '../component/InstagramHeader';
import InstagramStory from '../component/InstagramStory';

const InstagramHome=()=>{
    return(
        <View>
             <InstagramHeader/>
       <InstagramStory/>
        </View>
    )
}

export default InstagramHome;