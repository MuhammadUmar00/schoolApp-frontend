import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './splashStyles'

export default function Splash({ navigation }) {

       const [user, setUser] = useState("")

       function getUser() {
              AsyncStorage.getItem("user").then((res) => {
                     const response = JSON.parse(res)
                     setUser(response.info)
                     if (user !== null && user.type === "admin") {
                            navigation.navigate("AdminDrawer")
                     }
                     else {
                            navigation.navigate("HomeDrawer")
                     }
              })
       }

       useEffect(() => {
              setTimeout(getUser, 3000)
       }, [])

       return (
              <View style={styles.container}>
                     <Image style={styles.image} source={require('../../../assets/edu-logo.png')} />
              </View>
       );
}