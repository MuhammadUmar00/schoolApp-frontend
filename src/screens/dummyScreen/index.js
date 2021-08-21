import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, FlatList, Dimensions, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VerticalCard, LayoutComp, ButtonComp } from '../../components'
import { dummyStyles } from './dummyScreenStyles'
import { StatusBar } from 'expo-status-bar'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export default function DummyScreen({ route, navigation }) {
    const screenDetails = route.params

    const [courses, setCourses] = useState("")

    const [modal, setModal] = useState(false)

    const [user, setUser] = useState(false)

    const [item, setItem] = useState('')

    const dummyData = [
        { name: 'Dummy Data 1', key: '1' },
        { name: 'Dummy Data 2', key: '2' },
        { name: 'Dummy Data 3', key: '3' },
        { name: 'Dummy Data 4', key: '4' },
    ]

    async function getCourses() {
        try {
            const response = await fetch(`http://192.168.2.107:7000/education.com/backend/api/v1/users/get/getCourse/${screenDetails._id}`);
            const json = await response.json();
            setCourses(json.courses);
            console.log(courses)
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteCourses() {
        try {
            const response = await fetch(`http://192.168.2.107:7000/education.com/backend/api/v1/deleteCourse/${item._id}`,
            {
                method: 'DELETE'
            }
            );
            const json = await response.json();
            alert(json.message);
            getCourses()
        } catch (error) {
            console.error(error);
        }
    }

    function getUser() {
        const tempUser = AsyncStorage.getItem("user").then((res) => {
            const response = JSON.parse(res)
            setUser(response.info)
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            getCourses()
        }, [screenDetails._id])
    );

    function openModal(item) {
        if (user !== null && user.type === "admin") {
            setModal(true)
            setItem(item)
        }
    }

    return (
        <LayoutComp navigation={navigation} title={`${screenDetails.name}`}>
            <StatusBar style="dark" />
            <View style={dummyStyles.listCont}>
                <FlatList
                    style={dummyStyles.list}
                    data={courses}
                    numColumns={2}
                    renderItem={({ item }) => {
                        item.key = `${item._id}`
                        if (item.categorieId === "611ad8557ecf4a0d3cdc76db") {
                            return (
                                <TouchableOpacity onLongPress={() => openModal(item)} onPress={() => navigation.navigate("Payment1", item)} activeOpacity={0.9}>
                                    <VerticalCard height={HEIGHT * 0.25} width={WIDTH * 0.4} item={item} />
                                </TouchableOpacity>
                            )
                        }
                        else {
                            return(
                            <TouchableOpacity onLongPress={() => openModal(item)} onPress={() => navigation.navigate("Read", item)} activeOpacity={0.9}>
                                <VerticalCard height={HEIGHT * 0.25} width={WIDTH * 0.4} item={item} />
                            </TouchableOpacity>
                            )
                        }
                    }}
                />
            </View>

            <Modal
                animationType="slide"
                visible={modal}
                transparent={true} >
                <View style={dummyStyles.modalcontainer}>
                    <View style={dummyStyles.modalbody}>
                        <TouchableOpacity
                            onPress={deleteCourses}
                            style={{ alignSelf: 'center', }}
                        >
                            <ButtonComp
                                backgroundColor="crimson"
                                color="white"
                                borderRadius={10}
                                width={WIDTH * 0.5}
                                height={HEIGHT * 0.05}
                                title="Delete"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModal(false)}>
                            <ButtonComp
                                backgroundColor="#128da5"
                                color="white"
                                borderRadius={25}
                                width={WIDTH * 0.35}
                                height={HEIGHT * 0.05}
                                title='Cancel'
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </LayoutComp>
    );
}