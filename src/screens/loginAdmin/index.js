import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik'
import * as yup from 'yup'
import { ButtonComp } from '../../components'
import { loginStyles } from './loginStyles'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const loginSchema = yup.object({
    email: yup.string()
        .required()
        .test("Email", "Email must fullfill the requirement example abc@gmail.com", (val) => {
            return (
                new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/igm).test(val)
            )
        }),
    password: yup.string()
        .required()
        .min(6),
})



export default function AdminLogin({ navigation }) {

    function adminLogin(values) {
        try {
            fetch(`http://192.168.2.107:7000/education.com/backend/api/v1/adminLogin/${values.email}/${values.password}`)
                .then(async (response) => {
                    const resJSON = await response.json()
                    if (resJSON.success === true) {
                        alert("Login Succesful")
                        AsyncStorage.setItem('user', JSON.stringify(resJSON))
                        navigation.navigate("Admin")
                    }
                    else {
                        alert("Username or Password is incorrect")
                    }

                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={loginStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView>
                    <ScrollView style={{width: WIDTH}} contentContainerStyle={{alignItems: 'center',justifyContent:'center'}}>
                <StatusBar style="dark" />
                <Formik
                    validationSchema={loginSchema}
                    initialValues={{ email: '', password: '', }}
                    onSubmit={(values, actions) => {
                        adminLogin(values)
                        actions.resetForm()
                    }
                    }>
                    {
                        (props) => {
                            return (
                                <>
                                    <Text style={loginStyles.heading}>
                                        Admin LogIn
                                    </Text>
                                    <TextInput
                                        style={loginStyles.input}
                                        placeholder="Email"
                                        placeholderTextColor='#128da5'
                                        selectionColor="#fff"
                                        onChangeText={props.handleChange("email")}
                                        value={props.values.email}
                                        onBlur={props.handleBlur("email")}
                                    />
                                    <Text style={loginStyles.errtext}>{props.touched.email && props.errors.email}</Text>
                                    <TextInput
                                        style={loginStyles.input}
                                        placeholder="Password"
                                        placeholderTextColor='#128da5'
                                        onChangeText={props.handleChange("password")}
                                        value={props.values.password}
                                        secureTextEntry={true}
                                        onBlur={props.handleBlur("password")}
                                    />
                                    <Text style={loginStyles.errtext}>{props.touched.password && props.errors.password}</Text>
                                    <TouchableOpacity onPress={props.handleSubmit}>
                                        <ButtonComp
                                            title="Log In"
                                            width={WIDTH * 0.5}
                                            height={HEIGHT * 0.05}
                                            color='#fff'
                                            backgroundColor='#128da5'
                                            borderRadius={8}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={loginStyles.loginAsAdmin}>
                                        <ButtonComp
                                            title="Login as User"
                                            width={WIDTH * 0.4}
                                            height={HEIGHT * 0.06}
                                            color='#fff'
                                            backgroundColor='#128da5'
                                            borderRadius={5}
                                        />
                                    </TouchableOpacity>
                                </>

                            )
                        }
                    }
                </Formik>
                </ScrollView>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    )
}


