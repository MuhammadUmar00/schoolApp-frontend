import React from 'react';
import { Text, View, Image } from 'react-native';
import { cardStyles } from './cardStyles'
import { MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

export default function IconCard({ item, width, height, index }) {
    return (
        <View style={{ ...cardStyles.card, ...{ width, height } }}>
            {
                item.name == 'Books' || item.name == 'Forums' ?
                    <MaterialCommunityIcons name={item.icon} size={40} color="white" /> :
                    item.name == "Extras" ?
                        <Entypo name={item.icon} size={40} color="white" /> :
                        <FontAwesome5 name={item.icon} size={40} color="white" />
            }
            <Text style={cardStyles.pname}>{item.name}</Text>
        </View>
    )
}
