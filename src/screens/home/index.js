import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Linking,
  BackHandler,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HorizontalCard, Card } from "../../components";
import { AntDesign } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage"
import { homeStyles } from "./homeStyles";
import { http } from "@services";

export default function Home({ navigation }) {
  const HEIGHT = Dimensions.get("screen").height;
  const WIDTH = Dimensions.get("screen").width;

  const [categories, setCategories] = useState("");

  const [topList, setTopList] = useState([
    { name: "E-Learn", icon: "laptop", key: "1" },
    { name: "News", icon: "bell", key: "2" },
    { name: "Enquiry", icon: "phone", key: "3" },
    { name: "Mail", icon: "email", key: "4" },
    { name: "WhatsApp", icon: "whatsapp", key: "5" },
  ]);

  const [bottomList, setBottomList] = useState([
    { name: "School", icon: "book", key: "1" },
    { name: "JHS", icon: "open-book", key: "2" },
    { name: "Exams", icon: "clipboard", key: "3" },
    { name: "Extras", icon: "lab-flask", key: "4" },
    { name: "Books", icon: "open-book", key: "5" },
  ]);

  const forum = {
    name: "Forum",
    icon: "chat",
  };

  async function getCategories() {
    const url = `users/get/category`;

    const response = await http(url);

    if (response?.category) setCategories(response.category);
  }

  // function enquiryAlert() {
  //   alert(
  //     "E-mail: pbmotivate@gmail.com \n\nCall/Whatsapp: 0206429275 / 0557093036 \n\nFacebook/Instagram/Twitter: @pbpagez"
  //   );
  // }

  function actionPressHandler(actionType) {
    switch (actionType) {
      case "E-Learn":
        Linking.openURL("http://learn.pbpagez.com/");
        break;
      case "News":
        Linking.openURL("https://www.pbpagez.com/");
        break;
      case "Enquiry":
        Linking.openURL("tel:0557093036");
        break;
      case "Mail":
        Linking.openURL("mailto:pbmotivate@gmail.com");
        break;
      case "WhatsApp":
        Linking.openURL(
          `http://api.whatsapp.com/send?phone=${"+233" + "0206429275"}`
        );
        break;

      default:
        break;
    }
  }

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Exit App', 'Are you sure you want to exit?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       { text: 'YES', onPress: () => BackHandler.exitApp() },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  //   return () => backHandler.remove();
  // }, []);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={homeStyles.container}>
      <StatusBar style="light" />
      <AntDesign
        style={{ position: "absolute", top: "5%", left: "5%", zIndex: 1 }}
        name="bars"
        size={24}
        color="white"
        onPress={() => navigation.openDrawer()}
      />
      <View style={homeStyles.imagewrappers}></View>
      <View style={homeStyles.topcontainer}>
        <Text
          style={{
            marginTop: "17%",
            textAlign: "center",
            fontSize: 20,
            width: "90%",
            fontWeight: "900",
            color: "white",
            fontFamily: "monospace",
            fontWeight: "bold",
          }}
        >
          Education.com
        </Text>
        <Text
          style={{
            marginTop: "3%",
            textAlign: "center",
            fontSize: 15,
            width: "90%",
            fontWeight: "900",
            color: "white",
            fontFamily: "monospace",
          }}
        >
          Welcome to Ghana's number One Educational Application.
        </Text>
      </View>
      <View style={{ width: "100%", alignItems: "center", flex: 1 }}>
        <FlatList
          data={categories}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item._id)}
          renderItem={({ item, index }) => {
            item.icon = bottomList[index].icon;
            return (
              <>
                <TouchableOpacity
                  onPress={() =>
                    item.name === "Extras"
                      ? navigation.navigate("Extras")
                      : navigation.navigate("List", item)
                  }
                  activeOpacity={0.9}
                >
                  <HorizontalCard
                    item={item}
                    index={index}
                    height={HEIGHT * 0.15}
                    width={WIDTH * 0.9}
                  />
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
    </View>
  );
}
