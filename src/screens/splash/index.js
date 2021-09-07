import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./splashStyles";

export default function Splash({ navigation }) {
  const [user, setUser] = useState('');

  async function getUser() {
    let currentUser = await AsyncStorage.getItem("user");

    currentUser = JSON.parse(currentUser);

    // //console.log(currentUser.info.type)

    if(currentUser && currentUser?.type === "admin") navigation.navigate("AdminDrawer"); 
    else navigation.navigate("HomeDrawer"); 
       
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setTimeout(getUser, 500);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/edu-logo.png")}
      />
    </View>
  );
}
