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
     setTimeout(() => {alert(JSON.stringify(user))}, 5000)
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
                        return (
                            <TouchableOpacity onLongPress={() => setModal(true)} onPress={() => navigation.navigate("Read", item)} activeOpacity={0.9}>
                                <VerticalCard height={HEIGHT * 0.25} width={WIDTH * 0.4} item={item} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <Modal
                animationType="slide"
                visible={modal}
                transparent={true} >
                <View style={dummyStyles.modalcontainer}>
                    <View style={dummyStyles.modalbody}>
                        <View style={{ width: '100%', alignSelf: 'center', marginTop: '10%', marginLeft: '30%' }}>
                            <ButtonComp
                            title="Delete" />
                        </View>
                        <TouchableOpacity onPress={() => setModal(false)} style={{ marginTop: '3%' }}>
                            <ButtonComp title='Cancel' />
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </LayoutComp>
    );
}