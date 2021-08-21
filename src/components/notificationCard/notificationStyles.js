import { StyleSheet, Dimensions } from "react-native";

const HEIGHT = Dimensions.get("screen").height
const WIDTH = Dimensions.get("screen").width

const screenSize = {
    HEIGHT: HEIGHT, 
    WIDTH: WIDTH
}

export const patientCardStyles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginHorizontal: screenSize.WIDTH * 0.01,
        backgroundColor: "#fff",
        borderBottomColor: "#000",
        borderBottomWidth: 0.5  ,
        padding: '1%'
    },
    image: {
        height: '85%',
        width: '23%',
        marginTop: '0.3%',
        marginLeft: '2.5%',
        alignSelf: 'center',
        borderRadius: 15,
        // borderWidth: 1,
        // borderColor: baseColors.Blue,
    },
    appName: {
        color: "#128da5",
        fontWeight: 'bold',
        letterSpacing: 0.5,
        textAlign: 'left',
        fontSize: 15

    },
    appDate: {
        color: "#000",
        letterSpacing: 0.5,
        textAlign: 'left',
        fontSize: 12
    },
    textView: {
        width: '75%',
        marginLeft: '4%',
        marginTop: '5%',
        alignSelf: 'flex-start',
        justifyContent: 'space-evenly'
    },
    iconBox:{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'hsla(190, 80%, 36%, 0.85)',
        borderRadius: 100
    }
})