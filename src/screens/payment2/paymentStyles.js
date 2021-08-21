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
        fontSize: 20,
        textAlign: 'center',
        marginTop: HEIGHT * 0.08,
    },
    circle:{
        height: HEIGHT * 0.4,
        width: WIDTH * 0.9,
        backgroundColor: "hsla(190, 80%, 36%, 0.85)",
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        width: '80%',
        fontSize: 17,
        borderColor: '#128da5',
        borderWidth: 1.5,
        marginVertical: HEIGHT * 0.01,
        borderRadius: 8,
        padding: '3%',
        backgroundColor: 'hsla(190, 80%, 36%, 0.08)',
        paddingHorizontal: '5%',
        color: '#128da5'
    },
    cardetails:{
        height: HEIGHT * 0.38,
        borderBottomColor: '#128da5',
        borderBottomWidth: 1,
        marginBottom: '2%'
    },
    lilheading:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: '5%',
        marginHorizontal: '11%',
        alignSelf: 'flex-start',
        color: 'black'
    }
})