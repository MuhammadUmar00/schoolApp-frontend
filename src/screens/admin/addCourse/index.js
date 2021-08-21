import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import { FormControl, Select } from 'native-base';
import { Formik } from 'formik'
import * as yup from 'yup'
import { LayoutComp, ButtonComp } from '../../../components/index.js';
import { addCousreStyles } from './addCourseStyles.js';
import { AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export default function AddCourse({ navigation }) {
    const [categorie, setCategorie] = useState('')
    const [subCategorie, setSubCategorie] = useState('')
    const [courseFile, setCourseFile] = useState(null)

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: "application/pdf",
            copyToCacheDirectory: false
            // type: "application/pdf" // .pdf
        });

        console.log(typeof result)

        const uri = FileSystem.documentDirectory + result.name;

        await FileSystem.copyAsync({
            from: result.uri,
            to: uri
        })

        // let { uri } = result;
        let fileName = uri.split('/')[uri.split('/').length - 1];
        let fileType = fileName.split('.')[fileName.split('.').length - 1];
        let fileUri = uri

        let fileToUpload = {
            name: fileName,
            uri: fileUri,
            type: "application/" + fileType,
            // size: size,
        };

        console.log(fileToUpload, '...............file')

        setCourseFile(fileToUpload)
        // console.log(courseFile);
    }

    const addCourseSchema = yup.object({
        name: yup.string().required()
    })

    async function upload(data, file, url) {
        try {
            // console.log(data, file, url);
            const form = new FormData();
            form.append('courseFile', file)
            Object.entries(data).forEach((entry) => {
                form.append(entry[0], entry[1])
            })

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': "multipart/form-data",
                },
                body: form
            });
            const json = await response.json();
            alert(JSON.stringify(json))
        } catch (error) {
            console.error(error);
        }
    }

    async function getCategories() {
        try {
            const response = await fetch('http://192.168.2.107:7000/education.com/backend/api/v1/users/get/category');             
            const json = await response.json();
            setCategorie(json.category);
            console.log(categorie)
        } catch (error) {
            console.error(error);
        }
    }
    async function getSubCategories() {
        try {
            const response = await fetch('http://192.168.2.107:7000/education.com/backend/api/v1/users/get/all-sub-categorie');
            const json = await response.json();
            setSubCategorie(json.subCategories);
            console.log(subCategorie)
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        async function init() {
            await getCategories()
            await getSubCategories()
        }
        init()
    }, [])

    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <LayoutComp navigation={navigation} title="Add New Course">
                    <View style={addCousreStyles.form}>
                        <Formik
                            validationSchema={addCourseSchema}
                            initialValues={{ name: '', categorie: '', subcategorie: '' }}
                            onSubmit={async (values, actions) => {
                                upload(values, courseFile,
                                    `http://192.168.2.107:7000/education.com/backend/api/v1/addCourse/${values.categorie}/${values.subcategorie}`)
                                // actions.resetForm()
                            }
                            }>
                            {
                                (props) => {
                                    return (
                                        <>
                                            <TextInput
                                                style={addCousreStyles.input}
                                                placeholder="Course Name"
                                                placeholderTextColor='#128da5'
                                                value={props.values.name}
                                                onChangeText={props.handleChange("name")}
                                            />
                                            {
                                                categorie !== "" &&
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
                                                    placeholder="Categorie"
                                                    placeholderTextColor="#128da5"
                                                >
                                                    {
                                                        categorie?.map((item, index) => <Select.Item key={`${index}`} key={item.key} label={item.name} value={item._id} />)
                                                        //<Select.Item key='kuch bhi' label='kuch bhi' value='kuch bhi' />
                                                    }

                                                </Select>
                                            }
                                            {
                                                subCategorie !== "" &&
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
                                                    placeholder="Sub Categorie"
                                                    placeholderTextColor="#128da5"
                                                >
                                                    {
                                                        subCategorie?.map((item, index) => <Select.Item key={`${index}`} label={item.name} value={item._id} />)
                                                        //  <Select.Item key='kuch bhi' label='kuch bhi' value='kuch bhi' />
                                                    }

                                                </Select>
                                            }
                                            <View style={addCousreStyles.courseFile}>
                                                <Text style={addCousreStyles.courseFileText}>
                                                    Course File
                                                </Text>
                                                <TouchableOpacity style={addCousreStyles.courseFileView} onPress={pickDocument}>
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
                    </View>
                </LayoutComp>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}