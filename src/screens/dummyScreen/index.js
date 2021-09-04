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

export default function DummyScreen({ route, navigation }) {
  const screenDetails = route.params;

  const [item, setItem] = useState('');

  const [courses, setCourses] = useState('');

  const [modal, setModal] = useState(false);

  const [user, setUser] = useState("");

  const dummyData = [
    { name: "Dummy Data 1", key: "1" },
    { name: "Dummy Data 2", key: "2" },
    { name: "Dummy Data 3", key: "3" },
    { name: "Dummy Data 4", key: "4" },
  ];

  async function getUser() {
    let savedUser = await AsyncStorage.getItem("user");
    savedUser = JSON.parse(savedUser);
    setUser(savedUser);
    await getCourses(savedUser._id)
  }

  async function getCourses(userId) {
    let url;

    if (user === null || screenDetails.catId !== '611ad8557ecf4a0d3cdc76db') {
      url = `users/get/getCourse/${screenDetails._id}`
    }
    else {
      url = `users/get/getUnPaidCourse/${userId}/${screenDetails._id}`
    }

    const response = await http(url);

    console.log(response, "response")

    if (response?.courses) setCourses(response.courses);
  }

  async function deleteCourses() {
    const url = `courses/delete/course/${item._id}`;

    const options = { method: "DELETE" };

    // console.log(response);

    const response = await http(url, options);

    if (response?.success) {
      setModal(false);
      ToastAndroid.show(response.message, ToastAndroid.SHORT);
      await getCourses();
    }

    else {
      setModal(false);
      ToastAndroid.show(response.message, ToastAndroid.SHORT);
    }

  }

  useEffect(() => {
    getUser();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getUser()
    }, [screenDetails._id])
  );

  function openModal(item) {
    if (user !== null && user.type === "admin") {
      setModal(true);
      setItem(item);
    }
  }

  return (
    <LayoutComp navigation={navigation} title={`${screenDetails.name}`}>
      <StatusBar style="dark" />
      <View style={dummyStyles.listCont}>
        <FlatList
          style={dummyStyles.list}
          data={courses}
          numColumns={2}
          keyExtractor={(item) => String(item._id)}
          renderItem={({ item }) => {
            if (user?.type !== "admin" && item.categorieId == '611ad8557ecf4a0d3cdc76db') {
              return (
                <TouchableOpacity
                  onPress={() => item.isPaid === true ? navigation.navigate("Read", item) : navigation.navigate("Payment1", item)}
                  activeOpacity={0.9}
                >
                  <VerticalCard
                    height={HEIGHT * 0.25}
                    width={WIDTH * 0.4}
                    item={item}
                  />
                </TouchableOpacity>
              );
            }
             else {
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
              );
            }
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
