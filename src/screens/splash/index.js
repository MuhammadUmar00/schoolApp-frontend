import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './splashStyles'

export default function Splash({ navigation }) {
       
       const [user, setUser] = useState("")

       function getUser(){
              const userString = AsyncStorage.getItem("user")
              console.log(userString)
              setUser(userString)
              if(user && user.type === "admin"){
                     navigation.navigate("AdminDrawer")
              }
              else{
                     navigation.navigate("HomeDrawer")
              }
          }

    useEffect(() => {
       getUser()
    }, [])

    return (
     <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/edu-logo.png')} />
     </View>
    );
  }