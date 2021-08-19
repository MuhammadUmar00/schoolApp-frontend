import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { cardStyles } from './horizontalCardStyles'
import { MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

export default function Cards({ item, width , height, index}){
    const [color, setColor] = useState('')
    return(
     <View style={{...cardStyles.card,...{width, height,}}}>
         <Text style={cardStyles.pname }>{item.name}</Text>
         {  
         item.name == 'Books' || item.name == 'Forums'? 
         <MaterialCommunityIcons name={item.icon} size={40} color="white" /> :
         item.name == "Extras" ?
         <Entypo name={item.icon} size={40} color="white" /> :
         <FontAwesome5 name={item.icon} size={40} color="white" />
     }
     </View>
    )
   }
