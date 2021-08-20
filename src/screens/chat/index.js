import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import contactusStyles from './chatStyles'

export default function Chat() {
    return (
        <View style={contactusStyles.container}>
            <StatusBar style="dark" />
            <View style={contactusStyles.top}>
                <Text style={contactusStyles.heading}>Chat With Us</Text>
            </View>
                <View style={contactusStyles.convo}>
                    <View style={contactusStyles.userChat}>
                        <Text style={contactusStyles.userText}>
                            Hey
                        </Text>
                    </View>
                    <View style={contactusStyles.adminChat}>
                        <Text style={contactusStyles.adminText}>
                            Hello
                        </Text>
                    </View>
                </View>
                <View style={contactusStyles.chatBox}>
                    <TextInput 
                    style={contactusStyles.input}
                    placeholder="type your message" />
                    <Ionicons name="send-sharp" size={30} color="#128da5" />
                </View>
        </View>
    );
}