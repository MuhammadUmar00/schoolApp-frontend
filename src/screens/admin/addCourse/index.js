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

export default function AddCourse({ navigation }) {
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

    setCourseFile(fileToUpload);
  }

  async function upload(values, actions) {

    // //console.log(values);

    const form = new FormData();

    if(values.subcategorie === '611addf8b324f12774e4f703') form.append("price",  4);
    if(values.subcategorie === '611addf8b324f12774e4f704') form.append("price",  6);
    if(values.subcategorie === '611addf8b324f12774e4f705') form.append("price",  8);

    form.append("courseFile", courseFile);
    form.append("name", values.name);

    // Object.entries(values).forEach((entry) => {
    //   form.append(entry[0], entry[1]);
    // });

    const url = `addCourse/${values.categorie}/${values.subcategorie}`;

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
      ToastAndroid.show('course added successfully', ToastAndroid.SHORT);
      actions.resetForm();
    }
  }

  async function getCategories() {
    const url = `users/get/category`;

    const response = await http(url);

    // //console.log(response, 'Categories');

    if (response?.category) setCategorie(response.category);
  }

  async function getSubCategories() {
    const url = `users/get/all-sub-categorie`;

    const response = await http(url);

    // //console.log(response, 'Sub-Categories');

    if (response?.subCategories) setSubCategorie(response.subCategories);
  }

  useEffect(() => {
    getCategories();
    getSubCategories();
  }, []);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <LayoutComp navigation={navigation} title="Add New Course">
          <View style={addCousreStyles.form}>
            <Formik
              validationSchema={addCourseSchema}
              initialValues={{ name: "", categorie: "", subcategorie: "" }}
              onSubmit={upload}
            >
              {(props) => {
                return (
                  <>
                    <TextInput
                      style={addCousreStyles.input}
                      placeholder="Course Name"
                      placeholderTextColor="#128da5"
                      value={props.values.name}
                      onChangeText={props.handleChange("name")}
                    />
                    {categorie !== "" && (
                      <Select
                        selectedValue={categorie}
                        minWidth="80%"
                        height={HEIGHT * 0.065}
                        color="#128da5"
                        backgroundColor="hsla(190, 80%, 36%, 0.08)"
                        paddingLeft="5%"
                        paddingRight="5%"
                        borderColor="#128da5"
                        marginTop={HEIGHT * 0.015}
                        marginBottom={HEIGHT * 0.015}
                        borderWidth={1.5}
                        value={props.values.categorie}
                        onValueChange={props.handleChange("categorie")}
                        placeholder="Category"
                        placeholderTextColor="#128da5"
                      >
                        {
                          categorie?.map((item, index) => (
                            <Select.Item
                              key={String(item._id)}
                              label={item.name}
                              value={item._id}
                            />
                          ))
                          //<Select.Item key='kuch bhi' label='kuch bhi' value='kuch bhi' />
                        }
                      </Select>
                    )}
                    {subCategorie !== "" && (
                      <Select
                        selectedValue={subCategorie}
                        minWidth="80%"
                        height={HEIGHT * 0.065}
                        color="#128da5"
                        backgroundColor="hsla(190, 80%, 36%, 0.08)"
                        paddingLeft="5%"
                        paddingRight="5%"
                        borderColor="#128da5"
                        marginTop={HEIGHT * 0.015}
                        marginBottom={HEIGHT * 0.015}
                        borderWidth={1.5}
                        value={props.values.subcategorie}
                        onValueChange={props.handleChange("subcategorie")}
                        placeholder="Sub Category"
                        placeholderTextColor="#128da5"
                      >
                        {
                          subCategorie?.map((item, index) => (
                            <Select.Item
                              key={String(item._id)}
                              label={item.name}
                              value={item._id}
                            />
                          ))
                          //  <Select.Item key='kuch bhi' label='kuch bhi' value='kuch bhi' />
                        }
                      </Select>
                    )}
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
