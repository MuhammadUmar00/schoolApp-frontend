import { StyleSheet, Dimensions } from "react-native";

const HEIGHT = Dimensions.get("screen").height
const WIDTH = Dimensions.get("screen").width

const screenSize = {
    HEIGHT: HEIGHT, 
    WIDTH: WIDTH
}

export default contactusStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    top: {
        backgroundColor: "#128da5",
        width: '100%',
        height: screenSize.HEIGHT * 0.07,
        marginBottom: screenSize.HEIGHT * 0.01,
        marginTop: screenSize.HEIGHT * 0.039,
    },
    heading: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff",
        marginTop: '3.5%',
    },
    convo: {
        flex: 1,
        width: '100%',
    },
    userChat: {
        backgroundColor: "#128da5",
        maxWidth: screenSize.WIDTH * 0.6,
        minWidth: screenSize.WIDTH * 0.2,
        minHeight: screenSize.HEIGHT * 0.05,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        margin: screenSize.HEIGHT * 0.03,
        marginVertical: screenSize.HEIGHT * 0.01,
        paddingVertical: "3%",
        paddingHorizontal: "5%",
        borderRadius: 20,
    },
    userText: {
        color: "#fff",
        fontSize: 15,
    },
    adminChat: {
        backgroundColor: '#fff',
        maxWidth: screenSize.WIDTH * 0.6,
        minWidth: screenSize.WIDTH * 0.2,
        minHeight: screenSize.HEIGHT * 0.05,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        margin: screenSize.HEIGHT * 0.03,
        marginVertical: screenSize.HEIGHT * 0.01,
        paddingVertical: "3%",
        paddingHorizontal: "5%",
        borderRadius: 20,
        borderWidth: 0.3,
        borderColor: "#128da5"
    },
    adminText: {
        color: "#128da5",
        fontSize: 15,
    },
    chatBox: {
        width: "100%",
        backgroundColor: "white",
        height: screenSize.HEIGHT * 0.08,
        flexDirection: 'row',
        padding: '5%',
        borderTopColor:  "#128da5",
        borderWidth: 0.5
    },
    input: {
        fontSize: 18,
        width: "80%",
        marginRight: '7%'
    }
});