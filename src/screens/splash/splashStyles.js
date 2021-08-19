import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
        width: Dimensions.get("screen").width * 0.7,
        height: Dimensions.get("screen").height * 0.3
    }
  });
  