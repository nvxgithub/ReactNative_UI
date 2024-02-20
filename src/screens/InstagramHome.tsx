import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';

import InstagramHeader from '../component/InstagramHeader';
import InstagramStory from '../component/InstagramStory';
import InstagramFeed from '../component/InstagramFeed';

const InstagramHome=()=>{
    return(
        <View>
             <InstagramHeader/>
            <InstagramStory/>
            <InstagramFeed/>
        </View>
    )
}

export default InstagramHome;