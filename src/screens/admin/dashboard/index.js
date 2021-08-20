import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TextInput,
    FlatList,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HorizontalCard, IconCard } from '../../../components'
import { AntDesign } from '@expo/vector-icons';
// import AsyncStorage from "@react-native-async-storage/async-storage"
import { dashboardStyles } from './dashboardStyles'




export default function Dashboard({ navigation }) {

    const HEIGHT = Dimensions.get('screen').height
    const WIDTH = Dimensions.get('screen').width

        const [bottomList, setBottomList] = useState([
            { name: 'School', icon: "book", key: '1' },
            { name: 'JHS', icon: "open-book", key: '2' },
            { name: 'Exams', icon: "clipboard", key: '3' },
            { name: 'Extras', icon: "lab-flask", key: '4' },
            { name: 'Books', icon: "open-book", key: '5' },
        ])
        const forum = {
            name: 'Forum',
            icon: 'chat'
        }

    const [categories, setCategories] = useState('')


    
    async function getCategories() {
        try {
            const response = await fetch('http://192.168.0.121:7000/education.com/backend/api/v1/users/get/category');
            const json = await response.json();
            setCategories(json.category);
            console.log(categories)
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        getCategories()
    }, [])



    return (
        <View style={dashboardStyles.container}>
            <StatusBar style="light" />
            <AntDesign style={{ position: 'absolute', top: '5%', left: '5%', zIndex: 1 }} name="bars" size={24} color="white" onPress={() => navigation.openDrawer()} />
            <View style={dashboardStyles.imagewrappers}>
            </View>
            <View style={dashboardStyles.topcontainer}>
                <Text style={{ marginTop: '20%', textAlign: 'center', fontSize: 20, width: "90%", fontWeight: 'bold', color: 'white', fontFamily: "monospace", fontWeight: "bold" }}>Dashboard</Text>
            </View>
                <FlatList
                    style={{ width: '100%',alignSelf: 'center',}}
                    contentContainerStyle={{alignItems:'center'}}
                    data={categories}
                    renderItem={({ item, index }) => {
                        item.icon = bottomList[index].icon
                        item.key = bottomList[index].key
                        return (
                            <>
                                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('List',item)} >
                                    <HorizontalCard item={item} height={HEIGHT * 0.2} width={WIDTH * 0.9} />
                                </TouchableOpacity>
                                { index === categories.length - 1 &&
                                    <TouchableOpacity onPress={() => navigation.navigate("Chat")} activeOpacity={0.9}>
                                    <HorizontalCard item={forum} height={HEIGHT * 0.15} width={WIDTH * 0.9} />
                                </TouchableOpacity>
                                }
                            </>
                        )
                    }}
                />
            </View>
    )
}


