import React from 'react';
import { Text, View, Image } from 'react-native';
import { cardStyles } from './cardStyles'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Card({ item, width, height, index }) {
    return (
        <View style={{ ...cardStyles.card, ...{ width, height } }}>
            {item.icon === "phone" ? 
                <Entypo name={item.icon} size={40} color="white" /> :
                <MaterialCommunityIcons name={item.icon} size={40} color="white" />
            }
            <Text style={cardStyles.pname}>{item.name}</Text>
        </View>
    )
}
