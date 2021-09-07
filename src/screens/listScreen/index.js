import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { HorizontalCard, LayoutComp } from "../../components";
import { listStyles } from "./listScreenStyles";
import { http } from "@services";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function ListScreen({ route, navigation }) {
  const screenDetails = route.params;

  const [subCategories, setSubCategories] = useState([]);

  async function getSubCategories() {
    const url = `users/get/sub-categorie/${screenDetails._id}`;

    const response = await http(url);

    // //console.log(response, "response");

    if (response?.subCategories) setSubCategories(response.subCategories);
  }

  useFocusEffect(
    React.useCallback(() => {
      getSubCategories();
    }, [screenDetails._id])
  );

  const bottomList = [
    { name: "School", icon: "book", key: "1" },
    { name: "JHS", icon: "book", key: "2" },
    { name: "Exams", icon: "book", key: "3" },
  ];

  return (
    <LayoutComp navigation={navigation} title={`${screenDetails.name}`}>
      <View style={listStyles.listCont}>
        <FlatList
          style={listStyles.list}
          data={subCategories}
          keyExtractor={(item) => String(item._id)}
          renderItem={({ item, index }) => {
            item.icon = bottomList[index].icon;
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Boxes", item)}
              >
                <HorizontalCard
                  height={HEIGHT * 0.175}
                  width={WIDTH * 0.9}
                  item={item}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </LayoutComp>
  );
}
