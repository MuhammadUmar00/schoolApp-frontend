import * as React from "react";
import { View } from "react-native";
import PDFReader from "rn-pdf-reader-js";
import { BASE_URL } from "@constants";

export default function ViewPDF({ route }) {
  const item = route.params;
  //console.log(`${BASE_URL}/${item.file}`);

  return (
    <View style={{ height: "100%", width: "100%", marginTop: "10%" }}>
      <PDFReader
        customStyle={{
          readerContainerZoomContainer: {
            borderRadius: 30,
            backgroundColor: "white",
          },
        }}
        withScroll
        source={{ uri: `${item.file}` }}
      />
    </View>
  );
}
