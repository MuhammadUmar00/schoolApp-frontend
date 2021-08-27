import * as React from "react";
import { View } from "react-native";
import PDFReader from "rn-pdf-reader-js";
import { DEV_BASE_URL, PROD_BASE_URL } from "@constants";

export default function ViewPDF({ route }) {
  const item = route.params;

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
        source={{ uri: `${DEV_BASE_URL}/${item.file}` }}
      />
    </View>
  );
}
