import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { ButtonComp } from "../../components";
import { readStyles } from "./readStyles";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { download } from "@services"

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function ReadScreen({ route, navigation }) {
  const screenDetails = route.params;
  // console.log(screenDetails.file)

  return (
    <View style={readStyles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHlpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        }}
        style={readStyles.topContainer}
      >
        <View style={readStyles.layer}>
          <Text style={readStyles.imageText}>{screenDetails.name}</Text>
        </View>
      </ImageBackground>
      <View style={readStyles.card}>
        <View style={readStyles.textDiv}>
          <Entypo name="calendar" size={24} color="#128da5" />
          <Text style={readStyles.cardText}>Basic 7 Science</Text>
        </View>
      </View>
      <View style={readStyles.card2}>
        <View style={readStyles.textDiv}>
          <Feather name="clipboard" size={20} color="#128da5" />
          <Text style={readStyles.cardText2}>All Term</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewPDF", screenDetails)}
          style={{ alignSelf: "center" }}
        >
          <ButtonComp
            width={WIDTH * 0.7}
            height={HEIGHT * 0.05}
            title="Read"
            borderRadius={50}
            color="#fff"
            backgroundColor="#128da5"
          />
        </TouchableOpacity>
      </View>
      <View style={readStyles.card3}>
        <TouchableOpacity
          onPress={() => download(screenDetails.file)}
          style={{ alignSelf: "center" }}
        >
          <ButtonComp
            width={WIDTH * 0.7}
            height={HEIGHT * 0.05}
            title="Download"
            borderRadius={50}
            color="#fff"
            backgroundColor="#128da5"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
