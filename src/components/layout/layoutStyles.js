import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#128da5',
    alignItems: 'center',
  },
  cardcontainer:{
    alignItems: 'center',
    backgroundColor: '#fff',
    width: WIDTH,
    height: HEIGHT,
    borderRadius: 30,
    marginTop: HEIGHT * 0.05,
    paddingTop: HEIGHT * 0.03
    },
    heading:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
      marginTop: HEIGHT * 0.05,
  },
  drawerIcon:{
    marginTop: HEIGHT * 0.05,
    marginLeft: WIDTH * 0.07,
    alignSelf: 'flex-start',
  }
})



