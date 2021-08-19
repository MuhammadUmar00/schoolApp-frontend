import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
    card:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#128da5',
        borderRadius: 30,
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        marginVertical: '2%'

      },
     pname:{
         fontSize: 16,
         fontFamily: 'monospace',
         fontWeight: 'bold',
         marginVertical: '3%',
         color: 'white'
     } ,
});