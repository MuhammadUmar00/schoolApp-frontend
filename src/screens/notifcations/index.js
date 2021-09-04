import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Modal,
  ToastAndroid
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NotificationCard, ButtonComp } from "../../components";
import { notificationStyles } from "./notificationStyles";
import { http } from "@services";

const services = [
  {
    name: "Notification",
    date: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    key: "5",
  },
  {
    name: "Notification",
    date: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    key: "1",
  },
  {
    name: "Notification",
    date: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    key: "2",
  },
  {
    name: "Notification",
    date: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    key: "4",
  },
  {
    name: "Notification",
    date: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    key: "3",
  },
];

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const ScreenSize = {
  HEIGHT: HEIGHT,
  WIDTH: WIDTH,
};

export default function Notifications({navigation}) {
  
  const [notifications, setNotifications] = useState([]);

  const [item, setItem] = useState('');
  
  const [user, setUser] = useState(null);
  
  const [modal, setModal] = useState(false);

  async function deleteCourses() {
    
    const url = `delete/notification/${item._id}`;
  
    const options = { method: "DELETE" };
  
    // console.log(response);
  
    const response = await http(url, options);
  
    if (response?.success) {
      setModal(false);
      ToastAndroid.show(response.message, ToastAndroid.SHORT);
      await getNotifications();
    }
  
    else {
      setModal(false);
      ToastAndroid.show(response.message, ToastAndroid.SHORT);
    }
  
  }

  function openModal(item) {
    if (user !== null && user.type === "admin") {
      setModal(true);
      setItem(item.item);
    }
  }

  async function getUser() {
    let savedUser = await AsyncStorage.getItem("user");
    savedUser = JSON.parse(savedUser);
    setUser(savedUser);
  }

  async function getNotifications() {
    const url = `user/get/notifications`;

    const response = await http(url);

    if (response) setNotifications(response.notifications);
  }

  useFocusEffect(
    React.useCallback(() => {
      getUser()
    }, [navigation])
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getNotifications();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={notificationStyles.container}>
      <View style={notificationStyles.top}>
        <Text style={notificationStyles.heading}>Notifications</Text>
      </View>
      <View style={notificationStyles.bottomContainer}>
        <FlatList
          style={notificationStyles.patientList}
          data={notifications}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => {
            return (
              <TouchableOpacity onPress={() => openModal(item)} activeOpacity={0.9}>
                <NotificationCard
                  item={item.item}
                  height={ScreenSize.HEIGHT * 0.1}
                  borderRadius={100}
                  width={ScreenSize.WIDTH * 0.9}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Modal animationType="slide" visible={modal} transparent={true}>
        <View style={notificationStyles.modalcontainer}>
          <View style={notificationStyles.modalbody}>
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
    </View>
  );
}
