import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler,
  Alert
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as yup from "yup";
import { ButtonComp } from "../../components";
import { loginStyles } from "./loginStyles";
import { http } from "@services";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

export default function Login({ navigation }) {
  const loginSchema = yup.object({
    email: yup
      .string()
      .required()
      .test(
        "Email",
        "Email must fullfill the requirement example abc@gmail.com",
        (val) => {
          return new RegExp(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gim
          ).test(val);
        }
      ),
    password: yup.string().required().min(6),
  });

  const [currentUser, setCurrentUser] = useState(null);

  async function login(values, actions) {
    const url = `login/${values.email}/${values.password}`;

    const response = await http(url);

    if (response?.success) {
      // console.log(response);

      await AsyncStorage.setItem("user", JSON.stringify(response.info));

      setCurrentUser(response.info._id);

      actions.resetForm();

      navigation.navigate("Home");
    } else {
      alert(response);
    }
  }

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Exit App', 'Are you sure you want to exit?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       { text: 'YES', onPress: () => BackHandler.exitApp() },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  //   return () => backHandler.remove();
  // }, []);

  return (
    <View style={loginStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView>
          <ScrollView
            style={{ width: WIDTH }}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StatusBar style="dark" />
            <Formik
              validationSchema={loginSchema}
              initialValues={{ email: "", password: "" }}
              onSubmit={login}
            >
              {(props) => {
                return (
                  <>
                    <Text style={loginStyles.heading}>Log In</Text>
                    <TextInput
                      style={loginStyles.input}
                      placeholder="Email"
                      placeholderTextColor="#128da5"
                      selectionColor="#fff"
                      onChangeText={props.handleChange("email")}
                      value={props.values.email}
                      onBlur={props.handleBlur("email")}
                    />
                    <Text style={loginStyles.errtext}>
                      {props.touched.email && props.errors.email}
                    </Text>
                    <TextInput
                      style={loginStyles.input}
                      placeholder="Password"
                      placeholderTextColor="#128da5"
                      onChangeText={props.handleChange("password")}
                      value={props.values.password}
                      secureTextEntry={true}
                      onBlur={props.handleBlur("password")}
                    />
                    <Text style={loginStyles.errtext}>
                      {props.touched.password && props.errors.password}
                    </Text>
                    <TouchableOpacity onPress={props.handleSubmit}>
                      <ButtonComp
                        title="Log In"
                        width={WIDTH * 0.5}
                        height={HEIGHT * 0.05}
                        color="#fff"
                        backgroundColor="#128da5"
                        borderRadius={8}
                      />
                    </TouchableOpacity>
                    <View style={loginStyles.text}>
                      <Text style={loginStyles.donthave}>
                        Don't have an accout?...
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Signup")}
                      >
                        <Text style={loginStyles.signup}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("AdminLogin")}
                      style={loginStyles.loginAsAdmin}
                    >
                      <ButtonComp
                        title="Login as Admin"
                        width={WIDTH * 0.4}
                        height={HEIGHT * 0.06}
                        color="#fff"
                        backgroundColor="#128da5"
                        borderRadius={5}
                      />
                    </TouchableOpacity>
                  </>
                );
              }}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
