import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Modal,
  ToastAndroid,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VerticalCard, LayoutComp, ButtonComp } from "../../components";
import { dummyStyles } from "./dummyScreenStyles";
import { StatusBar } from "expo-status-bar";
import { http } from "@services";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function Extras({ route, navigation }) {

  const [item, setItem] = useState('');

  const [courses, setCourses] = useState('');

  const [modal, setModal] = useState(false);

  const [user, setUser] = useState(null);

  const dummyData = [
    { name: "Dummy Data 1", key: "1" },
    { name: "Dummy Data 2", key: "2" },
    { name: "Dummy Data 3", key: "3" },
    { name: "Dummy Data 4", key: "4" },
  ];

  async function getUser() {
    let savedUser = await AsyncStorage.getItem("user");
    savedUser = JSON.parse(savedUser);
    console.log(savedUser, "YEH USER")
    setUser(savedUser);
  }

  async function getExtras() {

    let url;

    url = `users/get/extras`

    const response = await http(url);

    // console.log(response, "response")

    if (response?.courses) setCourses(response.courses);
  }

  async function deleteCourses() {
    const url = `delete/extra/${item._id}`;

    const options = { method: "DELETE" };

    // console.log(response);

    const response = await http(url, options);

    if (response?.success) {
      setModal(false);
      ToastAndroid.show(response.message, ToastAndroid.SHORT);
      await getExtras();
    }

    else {
      setModal(false);
      ToastAndroid.show(response.message, ToastAndroid.SHORT);
    }

  }

  useEffect(() => {
    getUser();
    getExtras();
  }, []);


  function openModal(item) {
    if (user !== null && user.type === "admin") {
      setModal(true);
      setItem(item);
    }
  }

  return (
    <LayoutComp navigation={navigation} title="Extras">
      <StatusBar style="dark" />
      <View style={dummyStyles.listCont}>
        <FlatList
          style={dummyStyles.list}
          data={courses}
          keyExtractor={(item) => String(item._id)}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onLongPress={() => openModal(item)}
                onPress={() => navigation.navigate("Read", item)}
                activeOpacity={0.9}
              >
                <VerticalCard
                  height={HEIGHT * 0.25}
                  width={WIDTH * 0.4}
                  item={item}
                />
              </TouchableOpacity>
            )
          }}
        />
      </View>

      <Modal animationType="slide" visible={modal} transparent={true}>
        <View style={dummyStyles.modalcontainer}>
          <View style={dummyStyles.modalbody}>
            <TouchableOpacity
              onPress={deleteCourses}
              style={{ alignSelf: "center" }}
            >
              <ButtonComp
                backgroundColor="crimson"
                color="white"
                borderRadius={10}
                width={WIDTH * 0.5}
                height={HEIGHT * 0.05}
                title="Delete"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModal(false)}>
              <ButtonComp
                backgroundColor="#128da5"
                color="white"
                borderRadius={25}
                width={WIDTH * 0.35}
                height={HEIGHT * 0.05}
                title="Cancel"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LayoutComp>
  );
}
