import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { NotificationCard } from "../../components";
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

  async function getNotifications() {
    const url = `user/get/notifications`;

    const response = await http(url);

    if (response) setNotifications(response.notifications);
  }

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
              <TouchableOpacity activeOpacity={0.9}>
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
    </View>
  );
}
