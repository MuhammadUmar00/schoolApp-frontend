import React, { useState, useEffect } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import { Drawer } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons, Feather, AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { styles } from "./customDrawerStyles";
import { http } from "@services";

export function UserDrawerComp({navigation}) {
  const [subCategorie, setSubCategorie] = useState('');
  const [user, setUser] = useState(null);

  const termList = [
    { icon: "filter-1", key: "1" },
    { icon: "filter-2", key: "2" },
    { icon: "filter-3", key: "3" },
    { icon: "filter-1", key: "4" },
    { icon: "filter-2", key: "5" },
    { icon: "clipboard", key: "7" },
    { icon: "lab-flask", key: "8" },
    { icon: "book", key: "9" },
    { icon: "book", key: "9" }, 
  ];

  async function getUser() {
    let tempUser = await AsyncStorage.getItem("user")
    tempUser = JSON.parse(tempUser);
    // //console.log(tempUser, "checkuser");
    setUser(tempUser);
  }

  function logOut() {
    AsyncStorage.clear();
    setUser(null);
    navigation.navigate('Login');
  }

  async function getSubCategories() {
    
    const url = `users/get/all-sub-categorie`;

    const response = await http(url);

    if (response?.subCategories) setSubCategorie(response.subCategories);
  }

  useEffect(() => {
    getUser();
    getSubCategories();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <ImageBackground
          style={styles.topImage}
          source={{
            uri: "https://thumbs.dreamstime.com/b/book-study-educated-library-dictionary-background-studying-students-universities-colleges-schoolchildren-school-home-178907649.jpg",
          }}
        >
          <View style={styles.layer}></View>
        </ImageBackground>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <View style={styles.homeView}>
              <DrawerItem
                icon={() => (
                  <Icon name="home-outline" color="#128da5" size={25} />
                )}
                label="Home"
                onPress={() => {
                  navigation.navigate("Home");
                }}
              />
              <DrawerItem
                icon={() => (
                  <Ionicons name="notifications-circle-sharp" color="#128da5" size={23} />
                )}
                label="Notifications"
                onPress={() => {
                  navigation.navigate("Notifications");
                }}
              />
            </View>
            <View style={styles.homeView}>
              {subCategorie !== "" &&
                subCategorie?.map((item, index) => {
                  item.icon = termList[index].icon;
                  return (
                    <DrawerItem
                      key={index}
                      icon={() => (
                        <>
                          {index < 5 ? (
                            <MaterialIcons
                              name={item.icon}
                              color="#128da5"
                              size={20}
                            />
                          ) : (
                            <Entypo
                              name={item.icon}
                              color="#128da5"
                              size={20}
                            />
                          )}
                        </>
                      )}
                      label={item.name}
                      onPress={() => {
                        navigation.navigate("Boxes", item);
                      }}
                    />
                  );
                })}
            </View>
            {/* {user == null ? (
              <DrawerItem
                icon={() => (
                  <AntDesign name="login" color="#128da5" size={23} />
                )}
                label="Log In"
                onPress={() => {
                  navigation.navigate("Login");
                }}
              />
            ) : (
              <DrawerItem
                icon={() => (
                  <AntDesign name="login" color="#128da5" size={23} />
                )}
                label="Log Out"
                onPress={logOut}
              />
            )} */}
             <DrawerItem
                icon={() => (
                  <AntDesign name="login" color="#128da5" size={23} />
                )}
                label="Log Out"
                onPress={logOut}
              />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
