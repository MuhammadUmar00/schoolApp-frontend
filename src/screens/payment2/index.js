import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native'
import { CreditCardInput } from "react-native-credit-card-input";
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import { ButtonComp } from '../../components'
import { styles } from './paymentStyles'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width


export default function CardDetails({ navigation, route }) {
    const item = route.params


    const [cardDetails, setCardDetails] = useState()

    const [user, setUser] = useState(false)

    function getUser() {
        const tempUser = AsyncStorage.getItem("user").then((res) => {
            const response = JSON.parse(res)
            setUser(response.info)
        })
    }

    function onChange(form) {
        setCardDetails(form);
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView>
                    <ScrollView style={{ width: WIDTH }} contentContainerStyle={{ alignItems: 'center' }}>

                        <StatusBar style="auto" />
                        <Text style={styles.heading}>
                            Please Enter your Payment details for buying {item.name}
                        </Text>
                        <Text style={styles.lilheading}>
                            Card Details:
                        </Text>
                        <View style={styles.cardetails}>
                            <CreditCardInput
                                onChange={onChange}
                                inputStyle={styles.input}
                            />
                        </View>
                        <Text style={styles.lilheading}>
                            My details Details:
                        </Text>
                        <Text
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor='#128da5'
                            selectionColor="#fff"
                        >
                            {user.name}
                        </Text>
                        <Text
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor='#128da5'
                            selectionColor="#fff"
                        >
                            {user.email}
                        </Text>
                        <TouchableOpacity>
                            <ButtonComp
                                title="Enter Payment Details"
                                width={WIDTH * 0.7}
                                height={HEIGHT * 0.06}
                                color='#fff'
                                backgroundColor='#128da5'
                                borderRadius={10}
                            />
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    )
}


