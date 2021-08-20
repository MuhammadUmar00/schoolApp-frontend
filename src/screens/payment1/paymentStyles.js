import { StyleSheet, Dimensions } from "react-native";

 const WIDTH = Dimensions.get('screen').width
 const HEIGHT = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:"space-between"
    },
    heading:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: HEIGHT * 0.1,
    },
    circle:{
        height: HEIGHT * 0.4,
        width: WIDTH * 0.9,
        backgroundColor: "hsla(190, 80%, 36%, 0.85)",
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
    }
})