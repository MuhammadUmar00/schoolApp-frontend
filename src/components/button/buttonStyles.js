import { StyleSheet, Dimensions } from 'react-native'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

export const buttonStyles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: HEIGHT * 0.03
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        
    }
})