import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik'
import * as yup from 'yup'
import { ButtonComp } from '../../../components'
import { styles } from './notificationStyles'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

export default function AddNotification({ navigation }) {

    const loginSchema = yup.object({
        name: yup.string()
            .required()
            .min(3),
        discription: yup.string()
            .required()
            .min(6),
    })

    const [currentUser, setCurrentUser] = useState(null)

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView>
                    <ScrollView style={{ width: WIDTH }} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                        <StatusBar style="dark" />
                        <Formik
                            validationSchema={loginSchema}
                            initialValues={{ name: '', password: '', }}
                            onSubmit={(values, actions) => {
                                actions.resetForm()
                            }
                            }>
                            {
                                (props) => {
                                    return (
                                        <>
                                            <Text style={styles.heading}>
                                                Add Notification
                                            </Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Title"
                                                placeholderTextColor='#128da5'
                                                selectionColor="#fff"
                                                onChangeText={props.handleChange("name")}
                                                value={props.values.name}
                                                onBlur={props.handleBlur("name")}
                                            />
                                            <Text style={styles.errtext}>{props.touched.name && props.errors.name}</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Discription"
                                                multiline={true}
                                                numberOfLines={5}
                                                placeholderTextColor='#128da5'
                                                onChangeText={props.handleChange("discription")}
                                                value={props.values.discription}
                                                onBlur={props.handleBlur("discription")}
                                            />
                                            <Text style={styles.errtext}>{props.touched.discription && props.errors.discription}</Text>
                                            <TouchableOpacity onPress={props.handleSubmit}>
                                                <ButtonComp
                                                    title="Submit"
                                                    width={WIDTH * 0.5}
                                                    height={HEIGHT * 0.05}
                                                    color='#fff'
                                                    backgroundColor='#128da5'
                                                    borderRadius={8}
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


