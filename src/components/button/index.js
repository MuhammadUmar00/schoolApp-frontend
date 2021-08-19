import React from 'react'
import { View, Text } from 'react-native'
import { buttonStyles } from './buttonStyles'

export default function ButtonComp({title,height,width,borderRadius,color,backgroundColor}) {
    
    const dynamicStyles = {height,width,borderRadius,backgroundColor}

    return (
        <View style={{...buttonStyles.button,...dynamicStyles}}>
            <Text style={{...buttonStyles.title,color}}>{title}</Text>
        </View>
    )
}


