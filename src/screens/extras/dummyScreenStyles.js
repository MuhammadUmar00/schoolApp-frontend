import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export const dummyStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listCont:{
        height: HEIGHT 
    },
    modalcard:{
      backgroundColor: 'white',
      width: '60%',
      height: 37,
      marginVertical: "1%",
      marginHorizontal: '5%',
      borderRadius: 10,
      textAlign: 'center',
      padding: 7,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    
    },
    modalcontainer: {
      flex: 1,
      backgroundColor: '#000000aa',
      justifyContent: 'flex-end'
    },
    modalbody:{
      backgroundColor: 'white',
      height: '25%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    
    },
  });
  