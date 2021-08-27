import React, { useState } from "react";
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
import { Formik } from "formik";
import * as yup from "yup";
import { ButtonComp } from "../../../components";
import { styles } from "./notificationStyles";
import { http } from "@services";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

export default function AddNotification({ navigation }) {
  const loginSchema = yup.object({
    title: yup.string().required().min(5),
    subject: yup.string().required().min(5),
    body: yup.string().required().min(5),
  });

  async function createNotification({ title, subject, body }, actions) {
    if (!title || !subject || !body)
      alert("Please make sure title, subject, body are there!");
    else {
      const url = `admin/send/notification`;
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, subject, body }),
      };
      const response = await http(url, options);

      if (response) alert("notification created successfully");
    }

    actions.resetForm();
  }

  return (
    <View style={styles.container}>
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
              initialValues={{ title: "", subject: "", body: "" }}
              onSubmit={createNotification}
            >
              {(props) => {
                return (
                  <>
                    <Text style={styles.heading}>Add Notification</Text>

                    <TextInput
                      style={styles.input}
                      placeholder="Title"
                      placeholderTextColor="#128da5"
                      selectionColor="#fff"
                      onChangeText={props.handleChange("title")}
                      value={props.values.title}
                      onBlur={props.handleBlur("title")}
                    />
                    <Text style={styles.errtext}>
                      {props.touched.title && props.errors.title}
                    </Text>

                    <TextInput
                      style={styles.input}
                      placeholder="Subject"
                      placeholderTextColor="#128da5"
                      selectionColor="#fff"
                      onChangeText={props.handleChange("subject")}
                      value={props.values.subject}
                      onBlur={props.handleBlur("subject")}
                    />
                    <Text style={styles.errtext}>
                      {props.touched.subject && props.errors.subject}
                    </Text>

                    <TextInput
                      style={styles.input}
                      placeholder="Body"
                      multiline={true}
                      numberOfLines={5}
                      placeholderTextColor="#128da5"
                      onChangeText={props.handleChange("body")}
                      value={props.values.body}
                      onBlur={props.handleBlur("body")}
                    />
                    <Text style={styles.errtext}>
                      {props.touched.body && props.errors.body}
                    </Text>

                    <TouchableOpacity onPress={props.handleSubmit}>
                      <ButtonComp
                        title="Submit"
                        width={WIDTH * 0.5}
                        height={HEIGHT * 0.05}
                        color="#fff"
                        backgroundColor="#128da5"
                        borderRadius={8}
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
