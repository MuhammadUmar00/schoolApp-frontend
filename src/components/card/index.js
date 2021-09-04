import React from 'react';
import { Text, View, Image } from 'react-native';
import { cardStyles } from './cardStyles'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Card({ item, width, height, index }) {
    return (
        <View style={{ ...cardStyles.card, ...{ width, height } }}>
            {item.name !== "Repair" && item.name !== "Mail" && item.name !== "WhatsApp"  ?
                <Feather name={item.icon} size={40} color="white" /> :
                <MaterialCommunityIcons name={item.icon} size={40} color="white" />
            }
            <Text style={cardStyles.pname}>{item.name}</Text>
        </View>
    )
}
