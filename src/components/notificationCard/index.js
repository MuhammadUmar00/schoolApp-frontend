import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { patientCardStyles } from './notificationStyles'
import { Ionicons } from '@expo/vector-icons';

export default function NotificationCard({ item, height, width, borderRadius }) {
    console.log(item, "NOTI")
    return (
        <View style={{...patientCardStyles.card, height,width}}>
            <View style={{...patientCardStyles.iconBox}}>
               <Ionicons name="notifications" size={30} color="#fff" /> 
               </View>
                <View style={patientCardStyles.textView}>
                <Text style={patientCardStyles.appName}>{item.title}</Text>
                 <Text style={patientCardStyles.appDate}>{item.subject}</Text>
                </View>
        </View>
    )
}