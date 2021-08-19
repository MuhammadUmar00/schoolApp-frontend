import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export const listStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listCont:{
        height: HEIGHT 
    }
  });
  