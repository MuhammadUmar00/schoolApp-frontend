import { StyleSheet } from 'react-native'


export const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topcontainer:{
        width:'100%',
        alignItems: 'center',
        position: 'absolute',
        top: '7%'
    },
    imagewrappers:{
        height:'35%',
        width:'100%',
        backgroundColor: "#128da5",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    topimage:{
        height: '100%', 
        width: '100%', 
        opacity: 0.5,
    },
    search:{
        width: '85%',
        marginTop: '10%',
        backgroundColor: "white",
        borderRadius: 12,
        borderColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    }
  });