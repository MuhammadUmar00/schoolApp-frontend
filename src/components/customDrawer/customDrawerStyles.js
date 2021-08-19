import { StyleSheet, Dimensions } from "react-native";


export const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    topImage:{
      height: Dimensions.get('screen').height * 0.2,
      width: '100%',
      marginTop: '-13%'
    },
    layer:{
      height: '100%',
      width: '100%',
      backgroundColor: 'hsla(0, 0%, 0%, 0.27)',
    },
    homeView:{
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,

    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: Dimensions.get('screen').height * 0.01,
      borderBottomColor: '#fff'
    },
    bottomDrawerSection: {
        marginBottom: 65,
        borderTopColor: '#fff',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });