import React from 'react';
import { View, FlatList, ImageBackground } from 'react-native';
import { Drawer } from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { styles } from './customDrawerStyles'




export function UserDrawerComp(props) {

    const basicTerm = [{ name: "Basic Term 1", key: '1' }, { name: "Basic Term 2", key: '2' }, { name: "Basic Term 3", key: '3' }]
    const jhsSemester = ["JHS Semester 1", "JHS Semester 2"]


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
                            <DrawerItem
                                icon={() => (
                                    <MaterialIcons
                                        name="filter-1"
                                        color='#128da5'
                                        size={20}
                                    />
                                )}
                                label="Basir Term 1"
                                onPress={() => { props.navigation.navigate('Boxes', { name: 'Basic Term 1' }) }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <MaterialIcons
                                        name="filter-2"
                                        color='#128da5'
                                        size={20}
                                    />
                                )}
                                label="Basir Term 2"
                                onPress={() => { props.navigation.navigate('Boxes', { name: 'Basic Term 2' }) }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <MaterialIcons
                                        name="filter-3"
                                        color='#128da5'
                                        size={20}
                                    />
                                )}
                                label="Basir Term 3"
                                onPress={() => { props.navigation.navigate('Boxes', { name: 'Basic Term 3' }) }}
                            />
                        </View>
                        <View style={styles.homeView}>
                            <DrawerItem
                                icon={() => (
                                    <MaterialIcons
                                        name="filter-1"
                                        color='#128da5'
                                        size={20}
                                    />
                                )}
                                label="JHS Semester 1"
                                onPress={() => { props.navigation.navigate('Boxes', { name: 'JHS Semester 1' }) }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <MaterialIcons
                                        name="filter-2"
                                        color='#128da5'
                                        size={20}
                                    />
                                )}
                                label="JHS Semester 2"
                                onPress={() => { props.navigation.navigate('Boxes', { name: 'JHS Semester 1' }) }}
                            />
                        </View>
                        <View style={styles.homeView}>
                            <DrawerItem
                                icon={() => (
                                    <Feather
                                        name="clipboard"
                                        color='#128da5'
                                        size={20}
                                    />
                                )}
                                label="Exams"
                                onPress={() => { props.navigation.navigate('Boxes', { name: 'Exam' }) }}
                            /><DrawerItem
                                icon={() => (
                                    <Entypo
                                        name="lab-flask"
                                        color='#128da5'
                                        size={20}
                                    />
                                )}
                                label="Extras"
                                onPress={() => { props.navigation.navigate('Boxes', { name: 'Extras' }) }}
                            /><DrawerItem
                                icon={() => (
                                    <Entypo
                                        name="book"
                                        color='#128da5'
                                        size={20}
                                    />
                                )}
                                label="Text Book"
                                onPress={() => { props.navigation.navigate('Boxes', { name: 'Text Books' }) }}
                            />
                        </View>
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
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}
