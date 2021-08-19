import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { layoutStyles } from './layoutStyles';

export default function LayOut({ children, title, navigation }) {
    return (
        <View style={layoutStyles.container}>
            <StatusBar style='light' />
            <AntDesign style={layoutStyles.drawerIcon} name="bars" size={24} color="white" onPress={() => navigation.openDrawer()} />
            <Text style={layoutStyles.heading}>{title}</Text>
            <View style={layoutStyles.cardcontainer}>
                {children}
            </View>
        </View>
    );
}