import React, { useState, useEffect } from "react";
import { View, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Feather,
  AntDesign,
  Entypo,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { styles } from "./adminDrawerStyles";
import { http } from "@services";

export function AdminDrawerComp(props) {

  const [categories, setCategories] = useState('');

  const [user, setUser] = useState(null);

  const [bottomList, setBottomList] = useState([
    { name: "School", icon: "book", key: "1" },
    { name: "JHS", icon: "open-book", key: "2" },
    { name: "Exams", icon: "clipboard", key: "3" },
    { name: "Extras", icon: "lab-flask", key: "4" },
    { name: "Books", icon: "open-book", key: "5" },
  ]);

  async function getCategories() {
    
    const url = `users/get/category`;

    const response = await http(url);

    if (response?.category) setCategories(response.category);
  }

  async function getUser() {
    let savedUser = await AsyncStorage.getItem("user");
    savedUser = JSON.parse(savedUser);
    console.log(savedUser, "YEH USER")
    setUser(savedUser);
  }

  useEffect(() => {
    getCategories();
    getUser();
  }, []);

  function logOut() {
    AsyncStorage.clear();
    setUser(null);
    props.navigation.navigate("Login")
  }
  

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
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
                icon={() => <AntDesign name="home" color="#128da5" size={25} />}
                label="Home"
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              />
                <DrawerItem
                icon={() => (
                  <Ionicons name="notifications-circle-sharp" color="#128da5" size={23} />
                )}
                label="Sent Notifications"
                onPress={() => {
                  props.navigation.navigate("Notifications");
                }}
              />

              {categories !== "" &&
                categories.map((item, index) => {
                  item.icon = bottomList[index].icon;
                  item.key = `${item._id}`;
                  return (
                    <DrawerItem
                      icon={() => (
                        <Entypo name={item.icon} color="#128da5" size={25} />
                      )}
                      label={item.name}
                      onPress={() => item.name === "Extras" ? props.navigation.navigate("Extras") : props.navigation.navigate("List", item)}
                    />
                  );
                })}
            </View>

            <View style={styles.homeView}>
              {/* <DrawerItem
                icon={() => (
                  <MaterialCommunityIcons
                    name="forum-outline"
                    color="#128da5"
                    size={24}
                  />
                )}
                label="Forum"
                onPress={() => {
                  props.navigation.navigate("List", { name: "Forum" });
                }}
              /> */}
              <DrawerItem
                icon={() => (
                  <Ionicons name="add-circle-sharp" color="#128da5" size={24} />
                )}
                label="Add New Course"
                onPress={() => {
                  props.navigation.navigate("AddCourse");
                }}
              />
              <DrawerItem
                icon={() => (
                  <Ionicons name="add-circle-sharp" color="#128da5" size={24} />
                )}
                label="Add New Extra"
                onPress={() => {
                  props.navigation.navigate("AddExtras");
                }}
              />
            </View>

            <View style={styles.homeView}>
              <DrawerItem
                icon={() => (
                  <Ionicons name="notifications-circle-sharp" color="#128da5" size={24} />
                )}
                label="Send Notification"
                onPress={() => {
                  props.navigation.navigate("AddNotification");
                }}
              />
            </View>

            <View style={styles.homeView}>
            {user === null ?
            <DrawerItem
              icon={() => (
                <FontAwesome name="sign-out" color="#128da5" size={20} />
              )}
              label="Log in"
              onPress={() => props.navigation.navigate("Login")}
            /> :
            <DrawerItem
              icon={() => (
                <FontAwesome name="sign-out" color="#128da5" size={20} />
              )}
              label="Log Out"
              onPress={logOut}
            /> }
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
