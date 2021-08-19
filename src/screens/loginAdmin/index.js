import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ButtonComp } from '../../components'
import { loginStyles } from './loginStyles'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

export default function AdminLogin({ navigation }) {
    return (
        <View style={loginStyles.container}>
            <StatusBar style="dark" />
            <Text style={loginStyles.heading}>
                Admin Login
            </Text>
            <TextInput
                style={loginStyles.input}
                placeholder="Email"
                placeholderTextColor='#128da5'
                selectionColor="#fff"
            />
            <TextInput
                style={loginStyles.input}
                placeholder="Password"
                placeholderTextColor='#128da5'
            />
            <TouchableOpacity>
                <ButtonComp
                    title="Log In"
                    width={WIDTH * 0.5}
                    height={HEIGHT * 0.05}
                    color='#fff'
                    backgroundColor='#128da5'
                    borderRadius={8}
                />
            </TouchableOpacity>
        </View>
    )
}


