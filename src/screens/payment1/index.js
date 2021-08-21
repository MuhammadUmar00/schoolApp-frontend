import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome5 } from '@expo/vector-icons';
import { ButtonComp } from '../../components'
import { styles } from './paymentStyles'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

export default function AskForPayment({ navigation, route }) {

const item = route.params

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.heading}>
                Please Enter your Payment details
            </Text>
            <View style={styles.circle}>
                <FontAwesome5 name="money-check-alt" size={150} color="white" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Payment2",item)}>
                <ButtonComp
                    title="Enter Payment Details"
                    width={WIDTH * 0.9}
                    height={HEIGHT * 0.07}
                    color='#fff'
                    backgroundColor='#128da5'
                    borderRadius={50}
                />
            </TouchableOpacity>
        </View>
    )
}


