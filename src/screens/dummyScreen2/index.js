import React from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import { VerticalCard, LayoutComp } from "../../components";
import { dummyStyles } from "./dummyScreenStyles";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function DummyScreen2({ navigation }) {
  const dummyData = [
    { name: "Dummy Data 1", key: "1" },
    { name: "Dummy Data 2", key: "2" },
    { name: "Dummy Data 3", key: "3" },
    { name: "Dummy Data 4", key: "4" },
  ];
  return (
    <LayoutComp navigation={navigation} title={"Basic Term"}>
      <View style={dummyStyles.listCont}>
        <FlatList
          style={dummyStyles.list}
          data={dummyData}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <VerticalCard
                height={HEIGHT * 0.25}
                width={WIDTH * 0.4}
                item={item}
              />
            );
          }}
        />
      </View>
    </LayoutComp>
  );
}
