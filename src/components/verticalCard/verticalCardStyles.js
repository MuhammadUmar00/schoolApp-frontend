import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
    card:{
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        marginVertical: '2%',
        marginHorizontal: '2%',

      },
     pname:{
         fontSize: 16,
         fontFamily: 'monospace',
         fontWeight: 'bold',
         marginVertical: '3%',
         color: '#128da5'
     },
     Image:{
         height: '80%',
         width: '100%',
         borderTopRightRadius: 20,
         borderTopLeftRadius: 20,
     },
     badge:{
       position: 'absolute',
       top: '0%',
       left: 0,
       textAlign: 'center',
       backgroundColor: 'hsla(137, 100%, 35%, 0.9)',
       paddingHorizontal: '5%',
       paddingVertical: '10%',
       color: '#fff',
       width: '70%',
       fontWeight: 'bold',
       zIndex: 99999,
       borderRadius: 5,
       borderTopLeftRadius: 20,
     }
});