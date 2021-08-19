import React from 'react';
import { View, Image } from 'react-native'
import { styles } from './splashStyles'

export default function Splash() {
    return (
     <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/edu-logo.png')} />
     </View>
    );
  }