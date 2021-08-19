import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import * as yup from 'yup'
import { ButtonComp } from '../../components'
import { signupStyles } from './signupStyles'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const signupSchema = yup.object({
    name: yup.string()
      .required()
      .min(3)
      .max(20)
    ,
    email: yup.string()
      .required()
      .test("Email", "Email must fullfill the requirement example abc@gmail.com", (val) => {
        return (
          new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/igm).test(val)
        )
      }),
    phone: yup.string()
      .required()
      .test("Phone Number", "Phone Number must fullfill the requirement example +92-345-2323322", (val) => {
        return (
          new RegExp(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}/igm).test(val)
        )
      }),
    password: yup.string()
      .required()
      .min(6),
  })

export default function Signup({ navigation }) {
    return (
        <View style={signupStyles.container}>
            <Formik
                validationSchema={signupSchema}
                initialValues={{ name: '', email: '', phone: '', password: '', }}
                onSubmit={(values,actions) => {
                  console.log(values)
                  actions.resetForm()
                }
                }>
                {
                    (props) => {
                        return (
                            <>

                                <StatusBar style="dark" />
                                <Text style={signupStyles.heading}>
                                    Sign Up
                                </Text>
                                <TextInput
                                    style={signupStyles.input}
                                    placeholder="Name"
                                    placeholderTextColor='#128da5'
                                    selectionColor="#fff"
                                    onChangeText={props.handleChange("name")}
                                    value={props.values.name}
                                    onBlur={props.handleBlur("name")}
                                />
                                <Text style={signupStyles.errtext}>{props.touched.name && props.errors.name}</Text>
                                <TextInput
                                    style={signupStyles.input}
                                    placeholder="Email"
                                    placeholderTextColor='#128da5'
                                    selectionColor="#fff"
                                    onChangeText={props.handleChange("email")}
                                    value={props.values.email}
                                    onBlur={props.handleBlur("email")} 
                                />
                                   <Text style={signupStyles.errtext}>{props.touched.email && props.errors.email}</Text>
                                <TextInput
                                    style={signupStyles.input}
                                    placeholder="Phone"
                                    placeholderTextColor='#128da5'
                                    selectionColor="#fff"
                                    onChangeText={props.handleChange("phone")}
                                    value={props.values.phone}
                                    onBlur={props.handleBlur("phone")}
                                />
                                   <Text style={signupStyles.errtext}>{props.touched.phone && props.errors.phone}</Text>
                                <TextInput
                                    style={signupStyles.input}
                                    placeholder="Password"
                                    placeholderTextColor='#128da5'
                                    onChangeText={props.handleChange("password")}
                                    value={props.values.password}
                                    secureTextEntry={true}
                                    onBlur={props.handleBlur("password")} 
                                />
                                   <Text style={signupStyles.errtext}>{props.touched.password && props.errors.password}</Text>
                                <TouchableOpacity onPress={props.handleSubmit}>
                                    <ButtonComp
                                        title="Sign Up"
                                        width={WIDTH * 0.5}
                                        height={HEIGHT * 0.05}
                                        color='#fff'
                                        backgroundColor='#128da5'
                                        borderRadius={8}
                                    />
                                </TouchableOpacity>
                                <View style={signupStyles.text}>
                                    <Text style={signupStyles.donthave}>
                                        Already have an accout?...
                                    </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                        <Text style={signupStyles.signup}>
                                            Log In
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </>

                        )
                    }
                }
            </Formik>

        </View>
    )
}


