import { StyleSheet, Dimensions } from "react-native";


const HEIGHT = Dimensions.get("screen").height
const WIDTH = Dimensions.get("screen").width

const ScreenSize = {
    HEIGHT: HEIGHT, 
    WIDTH: WIDTH
}

export const notificationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    top: {
        backgroundColor: "#128da5",
        height: ScreenSize.HEIGHT * 0.07,
        marginBottom: ScreenSize.HEIGHT * 0.01,
        marginTop: ScreenSize.HEIGHT * 0.04,
    },
    icon: {
        height: ScreenSize.HEIGHT * 0.025,
        width: ScreenSize.HEIGHT * 0.025,
        position: 'absolute',
        top: '30%',
        left: '4%'
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        color: "#fff",
        marginTop: '3%',

    },
    mainContainer: {
        height: ScreenSize.HEIGHT * 0.26,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "#fff",
    },
    bottomContainer: {
        flex: 1,
        paddingTop: ScreenSize.HEIGHT * 0.01,
        marginTop: ScreenSize.HEIGHT * 0.001,
        backgroundColor: "#fff",
    },
    mainHeading: {
        fontSize: 18,
        textAlign: 'left',
        marginLeft: ScreenSize.WIDTH * 0.05,
        color: "#128da5",
        marginVertical: ScreenSize.HEIGHT * 0.01,
        fontWeight: 'bold',
    },
    serviceIcon: {
        height: '60%',
        width: '60%'
    },
    serviceSection: {
        alignSelf: 'center',
    },
    patientList: {
        alignSelf: 'center',
        backgroundColor: "#fff",
        flex: 1,
        marginBottom: ScreenSize.HEIGHT * 0.001,

    },
})