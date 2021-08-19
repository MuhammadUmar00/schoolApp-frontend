import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '2.5%',
        marginVertical: '10%',
        backgroundColor: '#128da5',
        borderRadius: 10,
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        margin: '2%'

      },
     pname:{
         fontSize: 12,
         fontFamily: 'monospace',
         fontWeight: 'bold',
         marginVertical: '3%',
         color: 'white'
     } ,
});