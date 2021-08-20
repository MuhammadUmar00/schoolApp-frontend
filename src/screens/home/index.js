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
import { HorizontalCard, Card } from '../../components'
import { AntDesign } from '@expo/vector-icons';
// import AsyncStorage from "@react-native-async-storage/async-storage"
import { homeStyles } from './homeStyles'




export default function Home({ navigation }) {

    const HEIGHT = Dimensions.get('screen').height
    const WIDTH = Dimensions.get('screen').width

    const [categories, setCategories] = useState('')

    const [topList, setTopList] = useState([
        { name: 'Repair', icon: "hammer-screwdriver", key: '1' },
        { name: 'Alert', icon: "bell", key: '2' },
        { name: 'Enquiry', icon: "phone-call", key: '3' },
    ])
    
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

    async function getCategories() {
        try {
            const response = await fetch('http://192.168.0.121:7000/education.com/backend/api/v1/users/get/category');
            const json = await response.json();
            setCategories(json.category);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        getCategories()
    }, [])


    return (
        <View style={homeStyles.container}>
            <StatusBar style="light" />
            <AntDesign style={{ position: 'absolute', top: '5%', left: '5%', zIndex: 1 }} name="bars" size={24} color="white" onPress={() => navigation.openDrawer()} />
            <View style={homeStyles.imagewrappers}>
            </View>
            <View style={homeStyles.topcontainer}>
                <Text style={{ marginTop: '20%', textAlign: 'center', fontSize: 15, width: "90%", fontWeight: '900', color: 'white', fontFamily: "monospace", fontWeight: "bold" }}>Welcome to Ghana's number One Educational Application.</Text>
            </View>
            <View style={{ height: "20%", padding: "5%", width: '100%', }}>
                <FlatList
                    style={{ width: '100%' }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={topList}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.9} >
                                <Card item={item} height={HEIGHT * 0.105} width={HEIGHT * 0.105} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <View style={{ width: '100%', alignItems: 'center', flex: 1 }}>
                <FlatList
                    data={categories}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item._id}
                    renderItem={({ item, index }) => {
                        item.icon = bottomList[index].icon;
                        return (
                            <>
                                <TouchableOpacity onPress={() => navigation.navigate("List", item)} activeOpacity={0.9}>
                                    <HorizontalCard item={item} index={index} height={HEIGHT * 0.15} width={WIDTH * 0.9} />
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
        </View>
    )
}


