import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid
} from "react-native";
import { FormControl, Select } from "native-base";
import { Formik } from "formik";
import * as yup from "yup";
import { LayoutComp, ButtonComp } from "../../../components/index.js";
import { addCousreStyles } from "./addCourseStyles.js";
import { AntDesign } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { http } from "@services";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function AddExtras({ navigation }) {
  const [categorie, setCategorie] = useState('');
  const [subCategorie, setSubCategorie] = useState('');
  const [courseFile, setCourseFile] = useState(null);

  const addCourseSchema = yup.object({
    name: yup.string().required(),
  });

  async function pickDocument() {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: false,
    });

    //console.log(result, "DOCUMENT PICKER RESULT");

    const uri = FileSystem.documentDirectory + result.name;

    await FileSystem.copyAsync({
      from: result.uri,
      to: uri,
    });

    let fileName = uri.split("/")[uri.split("/").length - 1];
    let fileType = fileName.split(".")[fileName.split(".").length - 1];
    let fileUri = uri;

    let fileToUpload = {
      name: fileName,
      uri: fileUri,
      type: "application/" + fileType
      // size: size,
    };

    //console.log(fileToUpload, "...............file");

    setCourseFile(fileToUpload);
  }

  async function upload( values, actions) {
    
    // //console.log(values);

    const form = new FormData();

    form.append("extrasFile", courseFile);
    form.append("name", values.name);

    // Object.entries(values).forEach((entry) => {
    //   form.append(entry[0], entry[1]);
    // });

    const url = `addExtras`;

    const options = {
      method: "POST",
      // headers: { "Content-Type": "multipart/form-data" },
      // headers: { "Content-Type": "multipart/form-data" },
      body: form,
      // body: JSON.stringify({ name:'umar', email:'umar@gmail.com' }),
    };

    const response = await http(url, options);

    // //console.log(response, "response");

    if (response) {
      ToastAndroid.show('extra added successfully', ToastAndroid.SHORT);
      actions.resetForm();
    }
  }

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <LayoutComp navigation={navigation} title="Add Extras">
          <View style={addCousreStyles.form}>
            <Formik
              validationSchema={addCourseSchema}
              initialValues={{ name: "" }}
              onSubmit={upload}
            >
              {(props) => {
                return (
                  <>
                    <TextInput
                      style={addCousreStyles.input}
                      placeholder="Name"
                      placeholderTextColor="#128da5"
                      value={props.values.name}
                      onChangeText={props.handleChange("name")}
                    />
                    <View style={addCousreStyles.courseFile}>
                      <Text style={addCousreStyles.courseFileText}>
                        Course File
                      </Text>
                      <TouchableOpacity
                        style={addCousreStyles.courseFileView}
                        onPress={pickDocument}
                      >
                        <AntDesign name="addfile" size={24} color="#fff" />
                        <Text style={addCousreStyles.courseFileCaption}>
                          Choose a File
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={props.handleSubmit}>
                      <ButtonComp
                        title="Add Course"
                        width={WIDTH * 0.45}
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
          </View>
        </LayoutComp>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
