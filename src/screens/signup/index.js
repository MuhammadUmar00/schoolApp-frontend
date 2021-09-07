import React from "react";
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
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as yup from "yup";
import { ButtonComp } from "../../components";
import { signupStyles } from "./signupStyles";
import { http } from "@services";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const signupSchema = yup.object({
  name: yup.string().required().min(3).max(20),
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
  phone: yup
    .string()
    .required()
    .test(
      "Phone Number",
      "Phone Number must fullfill the requirement example 233xxxxxxxx",
      (val) => {
        return new RegExp(
          /^(([2][3][3])|[0])?\d{9}$/gim
        ).test(val);
      }
    ),
  password: yup.string().required().min(6),
});

export default function Signup({ navigation }) {
 async function signup(values, actions) {

    const url = `register`;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    const response = await http(url, options);

    if (response?.success) {
      
      await  AsyncStorage.setItem("user", JSON.stringify(response.info));
      
      alert("Account has been Created");
     
      navigation.navigate("Login");
      
      actions.resetForm();
      
    
    } else alert("This email is already in use of an Other Account");


  }

  return (
    <View style={signupStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView>
          <ScrollView
            style={{ width: WIDTH }}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Formik
              validationSchema={signupSchema}
              initialValues={{
                name: "",
                email: "",
                phone: "",
                password: "",
                type: "user",
              }}
              onSubmit={(values, actions) => {
                signup(values);
                //alert(JSON.stringify(values))
                //actions.resetForm()
              }}
            >
              {(props) => {
                return (
                  <>
                    <StatusBar style="dark" />
                    <Text style={signupStyles.heading}>Sign Up</Text>
                    <TextInput
                      style={signupStyles.input}
                      placeholder="Name"
                      placeholderTextColor="#128da5"
                      selectionColor="#fff"
                      onChangeText={props.handleChange("name")}
                      value={props.values.name}
                      onBlur={props.handleBlur("name")}
                    />
                    <Text style={signupStyles.errtext}>
                      {props.touched.name && props.errors.name}
                    </Text>
                    <TextInput
                      style={signupStyles.input}
                      placeholder="Email"
                      placeholderTextColor="#128da5"
                      selectionColor="#fff"
                      onChangeText={props.handleChange("email")}
                      value={props.values.email}
                      onBlur={props.handleBlur("email")}
                    />
                    <Text style={signupStyles.errtext}>
                      {props.touched.email && props.errors.email}
                    </Text>
                    <TextInput
                      style={signupStyles.input}
                      placeholder="Phone"
                      placeholderTextColor="#128da5"
                      selectionColor="#fff"
                      onChangeText={props.handleChange("phone")}
                      value={props.values.phone}
                      onBlur={props.handleBlur("phone")}
                    />
                    <Text style={signupStyles.errtext}>
                      {props.touched.phone && props.errors.phone}
                    </Text>
                    <TextInput
                      style={signupStyles.input}
                      placeholder="Password"
                      placeholderTextColor="#128da5"
                      onChangeText={props.handleChange("password")}
                      value={props.values.password}
                      secureTextEntry={true}
                      onBlur={props.handleBlur("password")}
                    />
                    <Text style={signupStyles.errtext}>
                      {props.touched.password && props.errors.password}
                    </Text>
                    <TouchableOpacity onPress={props.handleSubmit}>
                      <ButtonComp
                        title="Sign Up"
                        width={WIDTH * 0.5}
                        height={HEIGHT * 0.05}
                        color="#fff"
                        backgroundColor="#128da5"
                        borderRadius={8}
                      />
                    </TouchableOpacity>
                    <View style={signupStyles.text}>
                      <Text style={signupStyles.donthave}>
                        Already have an account?...
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                      >
                        <Text style={signupStyles.signup}>Log In</Text>
                      </TouchableOpacity>
                    </View>
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
