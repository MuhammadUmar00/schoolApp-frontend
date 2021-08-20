import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { VerticalCard, LayoutComp } from '../../components'
import { dummyStyles } from './dummyScreenStyles'
import { StatusBar } from 'expo-status-bar'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export default function DummyScreen({ route, navigation }) {
    const screenDetails = route.params

    const [courses, setCourses] = useState("")

    const dummyData = [
        { name: 'Dummy Data 1', key: '1' },
        { name: 'Dummy Data 2', key: '2' },
        { name: 'Dummy Data 3', key: '3' },
        { name: 'Dummy Data 4', key: '4' },
    ]

    async function getCourses() {
        try {
            const response = await fetch(`http://192.168.0.121:7000/education.com/backend/api/v1/users/get/getCourse/${screenDetails._id}`);
            const json = await response.json();
            setCourses(json.courses);
            console.log(courses)
        } catch (error) {
            console.error(error);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getCourses()
        }, [screenDetails._id])
      );

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
                            <TouchableOpacity onPress={() => navigation.navigate("Read",item)} activeOpacity={0.9}>
                                <VerticalCard height={HEIGHT * 0.25} width={WIDTH * 0.4} item={item} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </LayoutComp>
    );
}