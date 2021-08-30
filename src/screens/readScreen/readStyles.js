import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export const readStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    topContainer: {
        height: HEIGHT * 0.4,
        width: WIDTH,
        marginTop: HEIGHT * 0.035
    },
    layer: {
        width: "100%",
        height: "100%",
        backgroundColor: "hsla(0, 0%, 0%, 0.2)",
        justifyContent: "flex-end"
    },
    imageText: {
        textAlign: "left",
        color: "#fff",
        fontSize: 23,
        fontWeight: 'bold',
        margin: '7%'
    },
    cardText: {
        textAlign: "left",
        color: "#000",
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft:'3%'
    },
    card: {
        padding: "7%",
        width: '90%',
        borderRadius: 10,
        justifyContent: 'center',
        height: HEIGHT * 0.1,
        marginVertical: HEIGHT * 0.01,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cardText2: {
        textAlign: "left",
        color: "#000",
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft:'3%'
    },
    card2: {
        padding: "7%",
        width: '90%',
        borderRadius: 10,
        justifyContent: 'center',
        height: HEIGHT * 0.2,
        marginVertical: HEIGHT * 0.01,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    card3: {
        width: '90%',
        borderRadius: 10,
        justifyContent: 'center',
        height: HEIGHT * 0.1,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textDiv:{
        flexDirection: 'row',
        alignItems: 'baseline',
    }
});
