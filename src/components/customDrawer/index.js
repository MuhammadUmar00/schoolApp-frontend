import React, { useState, useEffect } from 'react';
import { View, FlatList, ImageBackground } from 'react-native';
import { Drawer } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { styles } from './customDrawerStyles'




export function UserDrawerComp(props) {

    const [subCategorie, setSubCategorie] = useState('')
    const [user, setUser] = useState(null)

    const termList = [
        { icon: 'filter-1', key: '1' },
        { icon: 'filter-2', key: '2' },
        { icon: 'filter-3', key: '3' },
        { icon: 'filter-1', key: '4' },
        { icon: 'filter-2', key: '5' },
        { icon: 'clipboard', key: '7' },
        { icon: 'lab-flask', key: '8' },
        { icon: 'book', key: '9' },
    ]

    function getUser(){
        setUser(AsyncStorage.getItem("user"))
        console.log(user, "checkuser")
    }
    
    function logOut() {
        AsyncStorage.clear()
        setUser(null)
        props.navigation.navigate("Home")
    }


    async function getSubCategories() {
        try {
            const response = await fetch('http://192.168.0.121:7000/education.com/backend/api/v1/users/get/all-sub-categorie');
            const json = await response.json();
            setSubCategorie(json.subCategories);
           // console.log(subCategorie)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getSubCategories()
        getUser()
    }, [])


    return (
        <View style={{ flex: 1, }}>
            <DrawerContentScrollView {...props}>
                <ImageBackground
                    style={styles.topImage}
                    source={{ uri: 'https://thumbs.dreamstime.com/b/book-study-educated-library-dictionary-background-studying-students-universities-colleges-schoolchildren-school-home-178907649.jpg' }}
                >
                    <View style={styles.layer}>

                    </View>
                </ImageBackground>
                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <View style={styles.homeView}>
                            <DrawerItem
                                icon={() => (
                                    <Icon
                                        name="home-outline"
                                        color='#128da5'
                                        size={25}
                                    />
                                )}
                                label="Home"
                                onPress={() => { props.navigation.navigate('Home') }}
                            />
                        </View>
                        <View style={styles.homeView}>
                            {  subCategorie !== '' &&  
                                subCategorie?.map((item,index) => {
                                    item.icon = termList[index].icon
                                    return (
                                        <DrawerItem
                                            icon={() => (
                                                <>
                                                { index < 5 ?
                                                <MaterialIcons
                                                    name={item.icon}
                                                    color='#128da5'
                                                    size={20}
                                                /> :
                                                <Entypo
                                                    name={item.icon}
                                                    color='#128da5'
                                                    size={20}
                                                />
                                                }
                                                </>
                                            )}
                                            label={item.name}
                                            onPress={() => { props.navigation.navigate('Boxes', item) }}
                                        />
                                    )
                                })
                            }
                        </View>
                        {user == null ?
                        <DrawerItem
                            icon={() => (
                                <AntDesign
                                    name="login"
                                    color='#128da5'
                                    size={23}
                                />
                            )}
                            label="Log In"
                            onPress={() => { props.navigation.navigate('Login') }}
                        /> :
                        <DrawerItem
                            icon={() => (
                                <AntDesign
                                    name="login"
                                    color='#128da5'
                                    size={23}
                                />
                            )}
                            label="Log Out"
                            onPress={logOut}
                        />
                            }
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}
